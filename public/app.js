const RIMS = [
  { id: "arc-hd", name: "Race Face ARC Offset 30 Heavy Duty · 29", erd: 596, offset: 4.5, confidence: "published", note: "BIKE24-published ERD and offset." },
  { id: "arc-30", name: "Race Face ARC Offset 30 · 29", erd: 600, offset: 4.5, confidence: "published", note: "BIKE24-published ERD and offset." },
  { id: "aeffect-emtb", name: "Race Face Aeffect R eMTB 30 rear · 29", erd: 600, offset: 4.5, confidence: "approximate", note: "Working ERD; measure the actual rim before ordering." },
  { id: "dt-fr560", name: "DT Swiss FR 560 · 29", erd: 601, offset: 0, confidence: "published", note: "DT Swiss 29-inch ERD; welded, eyeleted 30 mm freeride rim." },
  { id: "dt-ex511", name: "DT Swiss EX 511 · 29", erd: 601, offset: 0, confidence: "published", note: "DT Swiss ERD; use the supplied PHR washers." },
  { id: "dt-xm481", name: "DT Swiss XM 481 · 29", erd: 601, offset: 0, confidence: "published", note: "DT Swiss ERD; use the supplied PHR washers." },
  { id: "dt-e532", name: "DT Swiss E 532 · 29", erd: 602, offset: 0, confidence: "published", note: "DT Swiss ERD; sleeved and eyeleted rim." },
  { id: "dt-m462", name: "DT Swiss M 462 · 29", erd: 603, offset: 0, confidence: "published", note: "DT Swiss ERD; 25 mm internal width." },
  { id: "dt-m502", name: "DT Swiss M 502 · 29", erd: 602, offset: 0, confidence: "published", note: "DT Swiss ERD; 30 mm internal width." },
  { id: "dt-u663", name: "DT Swiss U 663 · 29", erd: 599, offset: 0, confidence: "published", note: "DT Swiss ERD; eyeleted 30 mm utility and e-bike rim." },
  { id: "ryde-edge-m30", name: "Ryde Edge M 30 · 29", erd: 594, offset: 0, confidence: "published", note: "Manufacturer-supplied ERD via BIKE24; standard centered version, not M 30 OS." },
  { id: "custom-rim", name: "Custom 29-inch rim", erd: null, offset: 0, confidence: "custom", note: "Enter the measured ERD and offset." }
];

const ALL_DRILLINGS = [28, 32, 36];

const HUBS = [
  {
    id: "trace-j624", name: "Race Face Trace J624 · rear", position: "rear", holes: ALL_DRILLINGS,
    leftPcd: 58, rightPcd: 58, leftCtf: 39, rightCtf: 22, spokeHole: 2.5, confidence: "working",
    fit: "12×148 Boost · 6-bolt · J-bend",
    bearings: ["Hub shell: 2 × 6902 (15×28×7)", "Freehub: 15267 and 6802 appear in Race Face parts; verify body variant"],
    note: "Geometry matches the Trace J624 working measurements."
  },
  {
    id: "th490-rear", name: "Tanke TH490 · rear", position: "rear", holes: ALL_DRILLINGS,
    leftPcd: 58, rightPcd: 58, leftCtf: 37.6, rightCtf: 22, spokeHole: 2.5, confidence: "measured",
    fit: "12×148 Boost · 6-bolt · J-bend",
    bearings: ["4 sealed cartridge bearings", "Codes unconfirmed — read all four markings before ordering"],
    note: "Owner measurement plus product drawing; this geometry produced a successful build."
  },
  {
    id: "dt350-hybrid", name: "DT Swiss 350 Hybrid · rear · HG", position: "rear", holes: ALL_DRILLINGS,
    leftPcd: 60, rightPcd: 50.5, leftCtf: 36.6, rightCtf: 23.4, spokeHole: 2.8, confidence: "published",
    fit: "12×148 Boost · 6-bolt · HG · Ratchet 24 · J-bend",
    bearings: ["Hub shell: 2 × 6902 (15×28×7)", "Freehub bearings: DT Swiss replaces the freehub assembly"],
    note: "Requires 2.34 mm spoke heads and a long elbow, such as DT Alpine III."
  },
  {
    id: "dt350-classic", name: "DT Swiss 350 Classic · rear · HG", position: "rear", holes: ALL_DRILLINGS,
    leftPcd: 60, rightPcd: 50.5, leftCtf: 36.6, rightCtf: 23.4, spokeHole: 2.6, confidence: "published",
    fit: "12×148 Boost · 6-bolt · HG · Ratchet 36 SL · J-bend",
    bearings: ["Hub shell: 2 × 6902 (15×28×7)", "Freehub bearings: DT Swiss replaces the freehub assembly"],
    note: "Exact HG material number H350TDDBR32SA0482S."
  },
  {
    id: "dt350-deg", name: "DT Swiss 350 DEG 72 · rear", position: "rear", holes: ALL_DRILLINGS,
    leftPcd: 60, rightPcd: 60, leftCtf: 36.9, rightCtf: 22.6, spokeHole: 2.6, confidence: "published",
    fit: "12×148 Boost · 6-bolt · Ratchet DEG 72 · J-bend",
    bearings: ["4 cartridge bearings", "Confirm codes from the exact material number or markings"],
    note: "Available with several cassette bodies; choose the exact body separately."
  },
  {
    id: "novatec-d462", name: "Novatec D462SB-A5A-B12 · rear · HG", position: "rear", holes: ALL_DRILLINGS,
    leftPcd: 62, rightPcd: 58, leftCtf: 38.8, rightCtf: 23.7, spokeHole: 2.6, confidence: "derived",
    fit: "12×148 Boost · 6-bolt · HG · pawls · J-bend",
    bearings: ["4 sealed cartridge bearings", "Codes vary by D462 suffix — inspect the exact hub"],
    note: "Center-to-flange values are derived from published OLD and end-to-flange dimensions."
  },
  {
    id: "shimano-tc500", name: "Shimano FH-TC500-HM-B · rear · HG", position: "rear", holes: ALL_DRILLINGS,
    leftPcd: null, rightPcd: null, leftCtf: null, rightCtf: null, spokeHole: 2.6, confidence: "needs-measurement",
    fit: "12×148 Boost · Center Lock · HG · cup-and-cone · J-bend",
    bearings: ["Cup-and-cone with loose balls", "No cartridge bearing code"],
    note: "Enter measured PCD and center-to-flange values."
  },
  {
    id: "shimano-tc600", name: "Shimano FH-TC600-HM-B · rear · HG", position: "rear", holes: ALL_DRILLINGS,
    leftPcd: 60, rightPcd: 61, leftCtf: 37.74, rightCtf: 23.36, spokeHole: 2.6, confidence: "approximate",
    fit: "12×148 Boost · Center Lock · HG · cup-and-cone · J-bend",
    bearings: ["Cup-and-cone with loose balls", "No cartridge bearing code"],
    note: "Approximate working geometry; confirm on the physical hub."
  },
  {
    id: "shimano-xt-m8010", name: "Shimano XT FH-M8010-B · rear · HG", position: "rear", holes: ALL_DRILLINGS,
    leftPcd: null, rightPcd: null, leftCtf: null, rightCtf: null, spokeHole: 2.6, confidence: "needs-measurement",
    fit: "12×148 Boost · Center Lock · HG · cup-and-cone · J-bend",
    bearings: ["Cup-and-cone with loose balls", "No cartridge bearing code"],
    note: "Enter measurements from the exact hub."
  },
  {
    id: "th490-front", name: "Tanke TH490 · front · Boost", position: "front", holes: ALL_DRILLINGS,
    leftPcd: 58, rightPcd: 58, leftCtf: 25.5, rightCtf: 41.5, spokeHole: 2.5, confidence: "derived",
    fit: "15×110 Boost · 6-bolt · J-bend",
    bearings: ["2 sealed cartridge bearings", "Codes unconfirmed — read both markings before ordering"],
    note: "Working geometry derived from the supplied 58 mm PCD / 67 mm flange-spacing drawing; verify 25.5/41.5 mm center-to-flange on the hub."
  },
  {
    id: "dt240-oem-front", name: "DT Swiss 240 OEM · front · Boost", position: "front", holes: ALL_DRILLINGS,
    leftPcd: 57.8, rightPcd: 49.4, leftCtf: 27.3, rightCtf: 41, spokeHole: 2.55, confidence: "derived",
    fit: "15×110 Boost · 6-bolt · J-bend",
    bearings: ["Hub shell: 2 × 1728 (17×28×7)"],
    originalBuild: { rimId: "dt-fr560", holes: 32, left: 291, right: 294, nipple: 15 },
    note: "OEM material H240BDIXR32SO4934W in wheel WFR0560BFIXSO20304. Geometry matches the retail 240 Classic; DT's exact wheel record confirms the original spoke lengths."
  },
  {
    id: "dt350-classic-front", name: "DT Swiss 350 Classic · front · Boost", position: "front", holes: ALL_DRILLINGS,
    leftPcd: 60, rightPcd: 44, leftCtf: 27.4, rightCtf: 40, spokeHole: 2.6, confidence: "published",
    fit: "15×110 Boost · 6-bolt · J-bend",
    bearings: ["Hub shell: 2 × 6902 (15×28×7)"],
    note: "Regular Boost front hub, material number H350BDIXR32SA9073S."
  }
];

const byId = (items, id) => items.find(item => item.id === id);
const numberOrBlank = value => value == null ? "" : value;
const fmt = value => Number.isFinite(value) ? value.toFixed(2) : "—";
const signed = value => `${value >= 0 ? "+" : ""}${value.toFixed(2)} mm`;
const confidenceLabels = {
  published: "Published", working: "Working data", measured: "Built & verified", derived: "Derived", approximate: "Approximate", "needs-measurement": "Needs measurement", custom: "Custom"
};

const menu = document.querySelector("[data-site-menu]");
const menuToggle = document.querySelector("[data-menu-toggle]");
function setMenu(open) {
  if (!menu || !menuToggle) return;
  menu.classList.toggle("is-open", open);
  menu.setAttribute("aria-hidden", String(!open));
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
}
menuToggle?.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
menu?.addEventListener("click", event => { if (event.target === menu || event.target.closest("a[href^='#']")) setMenu(false); });
document.addEventListener("keydown", event => { if (event.key === "Escape") setMenu(false); });

document.querySelectorAll(".markdown-body a[href]").forEach(link => {
  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin) { link.target = "_blank"; link.rel = "noreferrer noopener"; }
});

document.querySelectorAll("[data-section-body]").forEach(body => {
  const headings = [...body.children].filter(node => node.tagName === "H3");
  if (headings.length < 2) return;
  const groups = headings.map((heading, index) => {
    const nodes = [heading];
    let node = heading.nextElementSibling;
    while (node && node !== headings[index + 1]) { nodes.push(node); node = node.nextElementSibling; }
    return nodes;
  });
  if (groups.some(nodes => nodes.some(node => node.tagName === "TABLE"))) return;
  const grid = document.createElement("div");
  grid.className = "content-card-grid";
  headings[0].before(grid);
  groups.forEach(nodes => {
    const card = document.createElement("article");
    card.className = "content-card";
    nodes.forEach(node => card.append(node));
    grid.append(card);
  });
});

document.querySelectorAll("[data-print]").forEach(button => button.addEventListener("click", () => window.print()));
document.querySelectorAll("[data-share]").forEach(button => button.addEventListener("click", async event => {
  try {
    if (navigator.share) await navigator.share({ title: document.title, url: window.location.href });
    else { await navigator.clipboard.writeText(window.location.href); event.currentTarget.textContent = "Copied"; setTimeout(() => { event.currentTarget.textContent = "Share"; }, 1500); }
  } catch (error) { if (error.name !== "AbortError") event.currentTarget.textContent = "Copy failed"; }
}));

const root = document.querySelector("#calculator-root");
if (root && window.WheelMath) initializeCalculator(root);

function initializeCalculator(element) {
  element.innerHTML = `
    <div class="calculator-grid">
      <form class="calculator-panel" id="wheel-form">
        <div class="part-pickers">
          <label class="field field-wide"><span>Rim model</span><select id="rim-model"></select><small id="rim-note"></small></label>
          <label class="field field-wide"><span>Hub model</span><select id="hub-model"></select><small id="hub-fit"></small></label>
        </div>
        <fieldset class="spoke-count">
          <legend>Spoke count</legend>
          <div class="spoke-switch" aria-label="Spoke count">
            <label><input type="radio" name="holes" value="28"><span>28</span></label>
            <label><input type="radio" name="holes" value="32" checked><span>32</span></label>
            <label><input type="radio" name="holes" value="36"><span>36</span></label>
          </div>
          <small>Assumes both selected parts are available with this drilling.</small>
        </fieldset>
        <div class="status-row"><span class="confidence" id="rim-confidence"></span><span class="confidence" id="hub-confidence"></span></div>
        <details class="measurement-editor">
          <summary><span>Edit measurements</span><small>millimetres unless shown</small></summary>
          <div class="measurement-grid">
            <label class="field"><span>ERD</span><input id="erd" type="number" min="400" max="700" step="0.1" inputmode="decimal"></label>
            <label class="field"><span>Rim offset</span><input id="offset" type="number" min="0" max="15" step="0.1" inputmode="decimal"></label>
            <label class="field"><span>Offset direction</span><select id="orientation"><option value="auto">Auto balance</option><option value="left">Toward left</option><option value="right">Toward right</option><option value="center">Centered</option></select></label>
            <label class="field"><span>Left flange PCD</span><input id="left-pcd" type="number" min="20" max="150" step="0.1" inputmode="decimal"></label>
            <label class="field"><span>Right flange PCD</span><input id="right-pcd" type="number" min="20" max="150" step="0.1" inputmode="decimal"></label>
            <label class="field"><span>Left center–flange</span><input id="left-ctf" type="number" min="0" max="80" step="0.01" inputmode="decimal"></label>
            <label class="field"><span>Right center–flange</span><input id="right-ctf" type="number" min="0" max="80" step="0.01" inputmode="decimal"></label>
            <label class="field"><span>Left crossings</span><select id="left-crosses"><option>2</option><option selected>3</option><option>4</option></select></label>
            <label class="field"><span>Right crossings</span><select id="right-crosses"><option>2</option><option selected>3</option><option>4</option></select></label>
            <label class="field"><span>Hub spoke-hole Ø</span><input id="spoke-hole" type="number" min="0" max="6" step="0.1" inputmode="decimal"></label>
          </div>
        </details>
      </form>
      <aside class="result-panel" aria-live="polite">
        <div id="result-content"></div>
        <div class="bearing-card" id="bearing-content"></div>
      </aside>
    </div>`;

  const form = element.querySelector("#wheel-form");
  const rimSelect = element.querySelector("#rim-model");
  const hubSelect = element.querySelector("#hub-model");
  RIMS.forEach(rim => rimSelect.add(new Option(rim.name, rim.id)));
  const rearGroup = document.createElement("optgroup"); rearGroup.label = "Rear hubs";
  const frontGroup = document.createElement("optgroup"); frontGroup.label = "Front hubs";
  HUBS.forEach(hub => (hub.position === "front" ? frontGroup : rearGroup).append(new Option(hub.name, hub.id)));
  hubSelect.append(rearGroup, frontGroup);
  rimSelect.value = "arc-hd";
  hubSelect.value = "th490-rear";

  const setField = (id, value) => { element.querySelector(`#${id}`).value = numberOrBlank(value); };
  function loadRim() {
    const rim = byId(RIMS, rimSelect.value);
    setField("erd", rim.erd); setField("offset", rim.offset);
    element.querySelector("#rim-note").textContent = rim.note;
    element.querySelector("#rim-confidence").textContent = `Rim · ${confidenceLabels[rim.confidence]}`;
    calculate();
  }
  function loadHub() {
    const hub = byId(HUBS, hubSelect.value);
    setField("left-pcd", hub.leftPcd); setField("right-pcd", hub.rightPcd);
    setField("left-ctf", hub.leftCtf); setField("right-ctf", hub.rightCtf); setField("spoke-hole", hub.spokeHole);
    element.querySelector("#hub-fit").textContent = hub.fit;
    element.querySelector("#hub-confidence").textContent = `Hub · ${confidenceLabels[hub.confidence]}`;
    calculate();
  }
  rimSelect.addEventListener("change", loadRim);
  hubSelect.addEventListener("change", loadHub);
  form.addEventListener("input", calculate);
  loadRim(); loadHub();

  function value(id) { return Number(element.querySelector(`#${id}`).value); }
  function calculate() {
    const rim = byId(RIMS, rimSelect.value);
    const hub = byId(HUBS, hubSelect.value);
    const holes = Number(element.querySelector('input[name="holes"]:checked').value);
    const input = {
      erd: value("erd"), offset: value("offset"), holes,
      orientation: element.querySelector("#orientation").value,
      leftPcd: value("left-pcd"), rightPcd: value("right-pcd"),
      leftCtf: value("left-ctf"), rightCtf: value("right-ctf"),
      leftCrosses: value("left-crosses"), rightCrosses: value("right-crosses"), spokeHole: value("spoke-hole")
    };
    const missing = ["erd", "leftPcd", "rightPcd", "leftCtf", "rightCtf", "spokeHole"].filter(key => !Number.isFinite(input[key]) || input[key] <= 0);
    const result = window.WheelMath.calculateWheel(input);
    const output = element.querySelector("#result-content");
    const bearing = element.querySelector("#bearing-content");
    bearing.innerHTML = `<p class="result-kicker">Bearings</p><h3>${hub.name.replace(/ · (rear|front).*/, "")}</h3><ul>${hub.bearings.map(item => `<li>${item}</li>`).join("")}</ul><p class="bearing-note">${hub.note}</p>`;

    if (missing.length || !Number.isFinite(result.left) || !Number.isFinite(result.right)) {
      output.innerHTML = `<div class="result-empty"><span>Waiting for measurements</span><h3>Complete the geometry</h3><p>Enter ERD, both flange PCDs, both center-to-flange distances, and the spoke-hole diameter.</p></div>`;
      return;
    }
    const stock = window.WheelMath.stockRecommendation(result.left, result.right, 2);
    const sideLeft = hub.position === "rear" ? "Left / NDS" : "Left / brake";
    const sideRight = hub.position === "rear" ? "Right / drive" : "Right / non-brake";
    const orientationText = result.orientation === "center" ? "centered nipple bed" : `nipple bed toward ${result.orientation}`;
    const sameLine = stock.sameSuitable
      ? `<div class="same-size"><strong>One-size option: ${stock.same} mm × ${holes}</strong><span>rounded upward ${signed(stock.sameErrors[0])} left / ${signed(stock.sameErrors[1])} right</span></div>`
      : `<div class="same-size muted"><strong>Use two sizes</strong><span>One common even size would exceed +1 mm on a side.</span></div>`;
    const stockWarning = stock.needsHeadroomCheck
      ? `<div class="even-option caution"><strong>Check nipple headroom</strong><small>The next even size is ${signed(stock.leftError)} left / ${signed(stock.rightError)} right of the calculated length.</small></div>`
      : "";
    const originalBuild = hub.originalBuild?.rimId === rim.id && hub.originalBuild.holes === holes
      ? `<div class="even-option"><strong>DT factory build: ${hub.originalBuild.left} / ${hub.originalBuild.right} mm</strong><small>${hub.originalBuild.left} mm brake · ${hub.originalBuild.right} mm non-brake · ${hub.originalBuild.nipple} mm Pro Head nipples</small></div>`
      : "";
    output.innerHTML = `
      <p class="result-kicker">Calculated J-bend lengths</p>
      <div class="length-visual" aria-hidden="true"><i></i><span class="hub-dot"></span><b class="rim-ring"></b></div>
      <div class="length-results">
        <article><span>${sideLeft}</span><strong>${fmt(result.left)}<small> mm</small></strong><p>Order ${stock.left} mm × ${holes / 2} <em>${signed(stock.leftError)}</em></p></article>
        <article><span>${sideRight}</span><strong>${fmt(result.right)}<small> mm</small></strong><p>Order ${stock.right} mm × ${holes / 2} <em>${signed(stock.rightError)}</em></p></article>
      </div>
      ${sameLine}
      ${originalBuild}
      ${stockWarning}
      <dl class="result-meta"><div><dt>Lacing</dt><dd>${input.leftCrosses}× left / ${input.rightCrosses}× right</dd></div><div><dt>Offset</dt><dd>${input.offset} mm, ${orientationText}</dd></div><div><dt>Stock</dt><dd>2 mm increments · round upward</dd></div><div><dt>Nipples</dt><dd>DT Swiss 14 mm</dd></div><div><dt>Formula</dt><dd>Rinard 3D + J-bend correction</dd></div></dl>
      <p class="result-caveat">Confirm nipple headroom, drilling, ERD, and flange dimensions before ordering.</p>`;
  }
}

const progress = document.querySelector(".reading-progress span");
function updateProgress() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.transform = `scaleX(${available > 0 ? window.scrollY / available : 0})`;
}
document.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const sectionLinks = [...document.querySelectorAll(".primary-nav a")];
const sections = [...document.querySelectorAll("[data-page-section]")];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    sectionLinks.forEach(link => link.classList.toggle("is-active", link.hash === `#${visible.target.id}`));
  }, { rootMargin: "-25% 0px -60%", threshold: [0, .2, .5] });
  sections.forEach(section => observer.observe(section));
}
