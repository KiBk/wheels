const assert = require("node:assert/strict");
const { calculateWheel, spokeLength, stockRecommendation } = require("../public/calculator-core.js");

const th490Hd32 = calculateWheel({
  erd: 596, offset: 4.5, holes: 32, orientation: "auto",
  leftPcd: 58, rightPcd: 58, leftCtf: 37.6, rightCtf: 22,
  leftCrosses: 3, rightCrosses: 3, spokeHole: 2.5
});
assert.equal(th490Hd32.orientation, "left");
assert.ok(Math.abs(th490Hd32.left - 288.79536) < 0.00001);
assert.ok(Math.abs(th490Hd32.right - 288.11646) < 0.00001);
assert.deepEqual(stockRecommendation(th490Hd32.left, th490Hd32.right, 1), {
  left: 289, right: 289, leftError: 289 - th490Hd32.left, rightError: 289 - th490Hd32.right,
  same: 289, sameErrors: [289 - th490Hd32.left, 289 - th490Hd32.right], sameSuitable: true,
  needsHeadroomCheck: false
});

assert.deepEqual(stockRecommendation(290, 291, 1), {
  left: 290, right: 291, leftError: 0, rightError: 0,
  same: 291, sameErrors: [1, 0], sameSuitable: true,
  needsHeadroomCheck: false
});
assert.equal(stockRecommendation(290.1, 291.1, 2).needsHeadroomCheck, true);

const th490Arc28 = calculateWheel({
  erd: 600, offset: 4.5, holes: 28, orientation: "auto",
  leftPcd: 58, rightPcd: 58, leftCtf: 37.6, rightCtf: 22,
  leftCrosses: 3, rightCrosses: 3, spokeHole: 2.5
});
assert.ok(Math.abs(th490Arc28.left - 295.50705) < 0.00001);
assert.ok(Math.abs(th490Arc28.right - 294.84354) < 0.00001);

const ex511Dt350Rear = calculateWheel({
  erd: 601, offset: 0, holes: 32, orientation: "auto",
  leftPcd: 60, rightPcd: 50.5, leftCtf: 36.6, rightCtf: 23.4,
  leftCrosses: 3, rightCrosses: 3, spokeHole: 2.6
});
assert.ok(Math.abs(ex511Dt350Rear.left - 291.34317) < 0.00001);
assert.ok(Math.abs(ex511Dt350Rear.right - 291.40814) < 0.00001);

const e532Dt350Front = calculateWheel({
  erd: 602, offset: 0, holes: 32, orientation: "auto",
  leftPcd: 60, rightPcd: 44, leftCtf: 27.4, rightCtf: 40,
  leftCrosses: 3, rightCrosses: 3, spokeHole: 2.6
});
assert.ok(Math.abs(e532Dt350Front.left - 290.83096) < 0.00001);
assert.ok(Math.abs(e532Dt350Front.right - 294.70125) < 0.00001);

const ex511Dt350Rear28 = calculateWheel({
  erd: 601, offset: 0, holes: 28, orientation: "auto",
  leftPcd: 60, rightPcd: 50.5, leftCtf: 36.6, rightCtf: 23.4,
  leftCrosses: 3, rightCrosses: 3, spokeHole: 2.6
});
assert.ok(Math.abs(ex511Dt350Rear28.left - 296.23614) < 0.00001);
assert.ok(Math.abs(ex511Dt350Rear28.right - 295.53086) < 0.00001);

const ex511Dt350Front28 = calculateWheel({
  erd: 601, offset: 0, holes: 28, orientation: "auto",
  leftPcd: 60, rightPcd: 44, leftCtf: 27.4, rightCtf: 40,
  leftCrosses: 3, rightCrosses: 3, spokeHole: 2.6
});
assert.ok(Math.abs(ex511Dt350Front28.left - 295.24503) < 0.00001);
assert.ok(Math.abs(ex511Dt350Front28.right - 297.76868) < 0.00001);

const fr560Dt240Front32 = calculateWheel({
  erd: 601, offset: 0, holes: 32, orientation: "auto",
  leftPcd: 57.8, rightPcd: 49.4, leftCtf: 27.3, rightCtf: 41,
  leftCrosses: 3, rightCrosses: 3, spokeHole: 2.55
});
assert.ok(Math.abs(fr560Dt240Front32.left - 290.67356) < 0.00001);
assert.ok(Math.abs(fr560Dt240Front32.right - 293.53090) < 0.00001);
assert.deepEqual(
  [stockRecommendation(fr560Dt240Front32.left, fr560Dt240Front32.right, 2).left,
    stockRecommendation(fr560Dt240Front32.left, fr560Dt240Front32.right, 2).right],
  [292, 294]
);

const u663Th490Front = calculateWheel({
  erd: 599, offset: 0, holes: 32, orientation: "auto",
  leftPcd: 58, rightPcd: 58, leftCtf: 25.5, rightCtf: 41.5,
  leftCrosses: 3, rightCrosses: 3, spokeHole: 2.5
});
assert.ok(Math.abs(u663Th490Front.left - 289.51435) < 0.00001);
assert.ok(Math.abs(u663Th490Front.right - 291.35196) < 0.00001);

const rydeM30Th490Front = calculateWheel({
  erd: 594, offset: 0, holes: 32, orientation: "auto",
  leftPcd: 58, rightPcd: 58, leftCtf: 25.5, rightCtf: 41.5,
  leftCrosses: 3, rightCrosses: 3, spokeHole: 2.5
});
assert.ok(Math.abs(rydeM30Th490Front.left - 287.03483) < 0.00001);
assert.ok(Math.abs(rydeM30Th490Front.right - 288.88815) < 0.00001);

const u663Th490Front36 = calculateWheel({
  erd: 599, offset: 0, holes: 36, orientation: "auto",
  leftPcd: 58, rightPcd: 58, leftCtf: 25.5, rightCtf: 41.5,
  leftCrosses: 3, rightCrosses: 3, spokeHole: 2.5
});
assert.ok(Math.abs(u663Th490Front36.left - 285.98858) < 0.00001);
assert.ok(Math.abs(u663Th490Front36.right - 287.84860) < 0.00001);

assert.ok(Number.isNaN(spokeLength({ erd: 0, pcd: 58, ctf: 22, holes: 32, crosses: 3 })));
console.log("ok: calculator formula, offset orientation, J-bend correction, and stock rounding");
