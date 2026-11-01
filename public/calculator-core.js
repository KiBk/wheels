(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.WheelMath = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  function spokeLength({ erd, offset = 0, offsetSide = "center", pcd, ctf, holes, crosses, spokeHole = 0 }) {
    const values = [erd, offset, pcd, ctf, holes, crosses, spokeHole].map(Number);
    if (values.some(value => !Number.isFinite(value))) return NaN;
    const [diameter, rimOffset, flangeDiameter, centerToFlange, spokeCount, crossCount, holeDiameter] = values;
    if (diameter <= 0 || flangeDiameter <= 0 || centerToFlange < 0 || spokeCount <= 0 || crossCount < 0 || holeDiameter < 0) return NaN;
    let effectiveCtf = centerToFlange;
    if (offsetSide === "same") effectiveCtf -= rimOffset;
    if (offsetSide === "opposite") effectiveCtf += rimOffset;
    if (effectiveCtf < 0) return NaN;
    const rimRadius = diameter / 2;
    const flangeRadius = flangeDiameter / 2;
    const crossingAngle = (4 * Math.PI * crossCount) / spokeCount;
    const centerline = Math.sqrt(
      rimRadius ** 2 + flangeRadius ** 2 + effectiveCtf ** 2
      - 2 * rimRadius * flangeRadius * Math.cos(crossingAngle)
    );
    return centerline - holeDiameter / 2;
  }

  function offsetRelation(side, orientation) {
    if (orientation === "center") return "center";
    return side === orientation ? "same" : "opposite";
  }

  function resolveOrientation(requested, leftCtf, rightCtf, offset) {
    if (!offset || requested === "center") return "center";
    if (requested === "left" || requested === "right") return requested;
    return Number(leftCtf) >= Number(rightCtf) ? "left" : "right";
  }

  function calculateWheel(input) {
    const orientation = resolveOrientation(input.orientation, input.leftCtf, input.rightCtf, input.offset);
    const common = { erd: input.erd, offset: input.offset, holes: input.holes, spokeHole: input.spokeHole };
    const left = spokeLength({ ...common, pcd: input.leftPcd, ctf: input.leftCtf, crosses: input.leftCrosses, offsetSide: offsetRelation("left", orientation) });
    const right = spokeLength({ ...common, pcd: input.rightPcd, ctf: input.rightCtf, crosses: input.rightCrosses, offsetSide: offsetRelation("right", orientation) });
    return { left, right, orientation };
  }

  function roundUp(value, step = 1) {
    return Math.ceil((value - 1e-9) / step) * step;
  }

  function stockRecommendation(left, right, step = 1) {
    if (![left, right].every(Number.isFinite)) return null;
    const leftStock = roundUp(left, step);
    const rightStock = roundUp(right, step);
    const sameStock = roundUp(Math.max(left, right), step);
    const sameErrors = [sameStock - left, sameStock - right];
    return {
      left: leftStock,
      right: rightStock,
      leftError: leftStock - left,
      rightError: rightStock - right,
      same: sameStock,
      sameErrors,
      sameSuitable: Math.max(...sameErrors.map(Math.abs)) <= 1,
      needsHeadroomCheck: Math.max(leftStock - left, rightStock - right) > 1
    };
  }

  return { spokeLength, calculateWheel, resolveOrientation, stockRecommendation };
});
