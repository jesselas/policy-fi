"""Generate an interactive HTML/SVG version of the SOUTHMOD world map.

Each country is a <path> element. SOUTHMOD countries (and other EUROMOD-based
countries) carry data attributes used by a tiny vanilla-JS layer to show a
tooltip on hover. SOUTHMOD countries are also wrapped in <a> elements that
deep-link to their UNU-WIDER country pages.
"""
import json
import html
from pathlib import Path

import geopandas as gpd
from shapely.geometry import shape
from pyproj import Transformer

# ---------------------------------------------------------------------------
# Data
# ---------------------------------------------------------------------------
SHP = "/tmp/sisu_map/ne_50m_admin_0_countries.shp"

# country NE-name -> info dict
# Each entry has model, country, url, link_text (and optional blurb).
def _wider_link(model):
    return f"Navigate to the {model} model page (SOUTHMOD project, UNU-WIDER)"

SOUTHMOD = {
    "Bolivia": {
        "model": "BOLMOD", "country": "Bolivia",
        "url":  "https://www.wider.unu.edu/about/bolmod-simulating-tax-and-benefit-policies-development-bolivia",
        "link_text": _wider_link("BOLMOD"),
    },
    "Colombia": {
        "model": "COLMOD", "country": "Colombia",
        "url":  "https://www.wider.unu.edu/about/colmod-simulating-tax-and-benefit-policies-development-colombia",
        "link_text": _wider_link("COLMOD"),
    },
    "Ecuador": {
        "model": "ECUAMOD", "country": "Ecuador",
        "url":  "https://www.wider.unu.edu/about/ecuamod-simulating-tax-and-benefit-policies-development-ecuador",
        "link_text": _wider_link("ECUAMOD"),
    },
    "Peru": {
        "model": "PERUMOD", "country": "Peru",
        "url":  "https://www.wider.unu.edu/about/perumod-simulating-tax-and-benefit-policies-development-peru",
        "link_text": _wider_link("PERUMOD"),
    },
    "Ethiopia": {
        "model": "ETMOD", "country": "Ethiopia",
        "url":  "https://www.wider.unu.edu/about/etmod-simulating-tax-and-benefit-policies-development-ethiopia",
        "link_text": _wider_link("ETMOD"),
    },
    "Ghana": {
        "model": "GHAMOD", "country": "Ghana",
        "url":  "https://www.wider.unu.edu/about/ghamod-simulating-tax-and-benefit-policies-development-ghana",
        "link_text": _wider_link("GHAMOD"),
    },
    "Mozambique": {
        "model": "MOZMOD", "country": "Mozambique",
        "url":  "https://www.wider.unu.edu/about/mozmod-simulating-tax-and-benefit-policies-development-mozambique",
        "link_text": _wider_link("MOZMOD"),
    },
    "Rwanda": {
        "model": "RWAMOD", "country": "Rwanda",
        "url":  "https://www.wider.unu.edu/about/rwamod-simulating-tax-and-benefit-policies-development-rwanda",
        "link_text": _wider_link("RWAMOD"),
    },
    "United Republic of Tanzania": {
        "model": "TAZMOD", "country": "Tanzania (mainland)",
        "url":  "https://www.wider.unu.edu/about/tazmod-simulating-tax-and-benefit-policies-development-tanzania",
        "link_text": _wider_link("TAZMOD"),
    },
    "Uganda": {
        "model": "UGAMOD", "country": "Uganda",
        "url":  "https://www.wider.unu.edu/about/ugamod-simulating-tax-and-benefit-policies-development-uganda",
        "link_text": _wider_link("UGAMOD"),
    },
    "Zambia": {
        "model": "MicroZAMOD", "country": "Zambia",
        "url":  "https://www.wider.unu.edu/about/microzamod-simulating-tax-and-benefit-policies-development-zambia",
        "link_text": _wider_link("MicroZAMOD"),
    },
    "Vietnam": {
        "model": "VNMOD", "country": "Vietnam",
        "url":  "https://www.wider.unu.edu/about/vnmod-simulating-tax-and-benefit-policies-development-viet-nam",
        "link_text": _wider_link("VNMOD"),
    },
    "Egypt": {
        "model": "EGYMOD", "country": "Egypt",
        "url":  "https://www.wider.unu.edu/project/southmod-simulating-tax-and-benefit-policies-development-phase-3",
        "link_text": "Navigate to the SOUTHMOD project page (UNU-WIDER) — EGYMOD page coming soon",
    },
}

# Standalone Zanzibar entry (rendered as a marker, not from NE polygons)
ZANZIBAR = {
    "model": "ZANMOD",
    "country": "Zanzibar (Tanzania)",
    "url":   "https://www.wider.unu.edu/about/tazmod-simulating-tax-and-benefit-policies-development-tanzania",
    "link_text": _wider_link("ZANMOD"),
    "lonlat": (39.4, -6.165),
}

EUROMOD_EU27_NAMES = {
    "Bulgaria","Cyprus","Czechia","Denmark","Estonia","Finland","France",
    "Germany","Greece","Hungary","Ireland","Latvia","Lithuania","Luxembourg",
    "Malta","Netherlands","Poland","Portugal","Romania","Slovakia","Slovenia",
    "Spain","Sweden","Belgium","Italy","Croatia","Austria",
}
OTHER_EUROMOD_NAMES = {
    "Indonesia","Chile","Argentina","Venezuela","Uruguay","Malawi","Mexico",
    "Namibia","North Macedonia","Russia","South Africa","United Kingdom",
    "Costa Rica","Guatemala","Panama","Dominican Rep.","El Salvador",
    "Brazil","Paraguay","Republic of Serbia",
}

# Per-country national-model overrides for EU-27 (in addition to EUROMOD)
EU27_EXTRA_MODELS = {
    "Belgium": "EUROMOD and BELMOD",
    "Italy":   "EUROMOD, LigurMOD and TREMOD",
    "Croatia": "EUROMOD and miCROmod",
    "Austria": "EUROMOD and SORESI",
}
_EU27_GROUP    = "EUROMOD (EU-27)"
_EU27_URL      = "https://euromod-web.jrc.ec.europa.eu/"
_EU27_LINKTEXT = "Navigate to the EUROMOD model page (JRC)"

EUROMOD_INFO = {
    # EU-27
    **{n: {"model": EU27_EXTRA_MODELS.get(n, "EUROMOD"),
           "group": _EU27_GROUP,
           "url":   _EU27_URL,
           "link_text": _EU27_LINKTEXT}
       for n in EUROMOD_EU27_NAMES},
    # Other EUROMOD-based
    "Indonesia":  {"model": "INDOMOD", "group": "Other EUROMOD-based models",
                   "url": "https://www.saspri.org/SASPRI/SASPRI/research/micro-simulation/indomod/index.html",
                   "link_text": "Navigate to the INDOMOD model page (SASPRI)"},
    "Chile":      {"model": "CHILMOD", "group": "Other EUROMOD-based models",
                   "url": "https://coes.cl/2021/11/08/acerca-de-chilmod-un-modelo-de-microsimulacion-de-impuestos-y-transferencias-para-chile/",
                   "link_text": "Navigate to the CHILMOD model page (COES)"},
    "Argentina":  {"model": "LATINMOD-Argentina", "group": "Other EUROMOD-based models",
                   "url": "https://www.microsimulation.ac.uk/euromod/models/latinmod-argentinaart/",
                   "link_text": "Navigate to the LATINMOD-Argentina page (CeMPA)"},
    "Venezuela":  {"model": "LATINMOD-Venezuela", "group": "Other EUROMOD-based models",
                   "url": "https://www.microsimulation.ac.uk/euromod/models/latinmod-venezuela/",
                   "link_text": "Navigate to the LATINMOD-Venezuela page (CeMPA)"},
    "Uruguay":    {"model": "LATINMOD-Uruguay", "group": "Other EUROMOD-based models",
                   "url": "https://www.microsimulation.ac.uk/euromod/models/latinmod-uruguay/",
                   "link_text": "Navigate to the LATINMOD-Uruguay page (CeMPA)"},
    "Malawi":     {"model": "MAMOD", "group": "Other EUROMOD-based models",
                   "url": "https://www.microsimulation.ac.uk/euromod/models/mamod-southmod/",
                   "link_text": "Navigate to the MAMOD page (CeMPA)"},
    "Mexico":     {"model": "MEXMOD", "group": "Other EUROMOD-based models",
                   "url": "https://www.microsimulation.ac.uk/euromod/models/latinmod-mexico/",
                   "link_text": "Navigate to the MEXMOD page (CeMPA)"},
    "Namibia":    {"model": "NAMOD", "group": "Other EUROMOD-based models",
                   "url": "https://www.saspri.org/SASPRI/SASPRI/research/micro-simulation/namod/index.html",
                   "link_text": "Navigate to the NAMOD model page (SASPRI)"},
    "North Macedonia": {"model": "MK-MOD", "group": "Other EUROMOD-based models",
                        "url": "https://www.microsimulation.ac.uk/euromod/models/mk-mod/",
                        "link_text": "Navigate to the MK-MOD page (CeMPA)"},
    "Russia":     {"model": "RUSMOD", "group": "Other EUROMOD-based models",
                   "url": "https://www.microsimulation.ac.uk/euromod/models/rusmod/",
                   "link_text": "Navigate to the RUSMOD page (CeMPA)"},
    "South Africa": {"model": "SAMOD and PITMOD", "group": "Other EUROMOD-based models",
                     "url": "https://www.saspri.org/SASPRI/SASPRI/research/micro-simulation/samod/index.html",
                     "link_text": "Navigate to the SAMOD model page (SASPRI)"},
    "United Kingdom": {"model": "UKMOD", "group": "UKMOD",
                       "url": "https://www.microsimulation.ac.uk/ukmod/",
                       "link_text": "Navigate to the UKMOD model page (CeMPA)"},
    "Costa Rica": {"model": "CRIMod", "group": "Other EUROMOD-based models",
                   "url": "https://crimod.ucr.ac.cr/index.php?lang=en",
                   "link_text": "Navigate to the CRIMod model page (University of Costa Rica)",
                   "blurb": ("CRIMod: EUROMOD-based tax-benefit microsimulation model for Costa Rica. "
                             "Developed by UCR School of Economics. Uses ENAHO 2019/2022 data. "
                             "Simulates taxes on wages/pensions, tax on profits, social insurance "
                             "contributions, non-contributory pensions, and Avancemos (conditional cash "
                             "transfers). Active as of Oct 2024. Also used in IDB/WIDER WP 2024/21 "
                             "(Deza, Gélvez, Gutiérrez, Jara & Rodríguez, 2024) on fiscal policy and "
                             "gender income gaps in Central America. Listed on WAPLAC.")},
    "Guatemala":  {"model": "Under development", "group": "Other EUROMOD-based models",
                   "url": "", "link_text": ""},
    "Panama":     {"model": "Under development", "group": "Other EUROMOD-based models",
                   "url": "", "link_text": ""},
    "Dominican Rep.": {"model": "Under development", "group": "Other EUROMOD-based models",
                       "url": "", "link_text": ""},
    "El Salvador":{"model": "Under development", "group": "Other EUROMOD-based models",
                   "url": "", "link_text": ""},
    "Brazil":     {"model": "BRASMOD", "group": "Other EUROMOD-based models",
                   "url": "https://joaofranciscocp.github.io/BRASMOD/",
                   "link_text": "Navigate to the BRASMOD model page (MADE/FEA-USP)",
                   "blurb": ("BRASMOD v1.0 (2024): open-access, covers 2008-2023 federal tax-benefit "
                             "structure incl. COVID benefits. By MADE + LabPub (Univ. of São Paulo). "
                             "Code on GitHub.")},
    "Paraguay":   {"model": "LATINMOD-Paraguay", "group": "Other EUROMOD-based models",
                   "url": "https://www.celag.org/project/latinmod/",
                   "link_text": "Navigate to the LATINMOD-Paraguay page (CELAG/CeMPA)"},
    "Republic of Serbia": {"model": "SRMOD", "group": "Other EUROMOD-based models",
                           "url": "https://fren.org.rs/en/past-projects/srmod-microsimulation-tax-and-social-contributions-model/",
                           "link_text": "Navigate to the SRMOD project page (FREN)"},
}

# Static labels (positioned via fractional offsets relative to map width/height).
# Same offsets as the static light map (horizontal leaders, ~30% shorter than
# the original; TAZMOD has a small vertical offset so ZANMOD fits).
LABEL_OFFSETS = {
    "Bolivia":   (-0.052,  0.000),
    "Colombia":  (-0.063,  0.000),
    "Ecuador":   (-0.067,  0.000),
    "Peru":      (-0.063,  0.000),
    "Ghana":     (-0.045,  0.000),
    "Egypt":     ( 0.038,  0.000),
    "Ethiopia":  ( 0.052,  0.000),
    "Uganda":    ( 0.049,  0.000),
    "Rwanda":    (-0.049,  0.000),
    "United Republic of Tanzania": ( 0.052, -0.030),
    "Mozambique":( 0.046,  0.000),
    "Zambia":    (-0.049,  0.000),
    "Vietnam":   ( 0.038,  0.000),
}

# ---------------------------------------------------------------------------
# Projection + viewport
# ---------------------------------------------------------------------------
world = gpd.read_file(SHP)
world = world[world["NAME"] != "Antarctica"].copy()
world = world.to_crs("ESRI:54030")

# Cropped extent (matches the static light map)
XMIN, XMAX = -12_500_000, 14_700_000
YMIN, YMAX =  -6_300_000,  8_700_000
XRNG = XMAX - XMIN
YRNG = YMAX - YMIN

# SVG viewBox: width is 1600 logical units; height preserves aspect ratio.
SVG_W = 1600
MAP_H = round(SVG_W * YRNG / XRNG)
LEGEND_GAP = 38      # empty space between map bottom and legend
LEGEND_BAND = 140    # legend area height (roomy enough for 2-row stacked layout on mobile)
SVG_H = MAP_H + LEGEND_GAP + LEGEND_BAND

def proj_to_svg(x, y):
    """Map projected coords (Robinson m) to SVG coords (y is flipped).

    Uses MAP_H for the vertical projection so the map occupies the top
    MAP_H units of the SVG; the area below MAP_H is reserved for the legend.
    """
    sx = (x - XMIN) / XRNG * SVG_W
    sy = (YMAX - y) / YRNG * MAP_H   # flip Y for SVG
    return sx, sy

def ring_to_svg_path(coords):
    parts = []
    for i, (x, y) in enumerate(coords):
        sx, sy = proj_to_svg(x, y)
        parts.append(f"{'M' if i == 0 else 'L'}{sx:.2f},{sy:.2f}")
    parts.append("Z")
    return "".join(parts)

def geom_to_svg_path(geom):
    """Build a single SVG path 'd' attr from a (multi)polygon."""
    polys = [geom] if geom.geom_type == "Polygon" else list(geom.geoms)
    pieces = []
    for poly in polys:
        pieces.append(ring_to_svg_path(list(poly.exterior.coords)))
        for ring in poly.interiors:
            pieces.append(ring_to_svg_path(list(ring.coords)))
    return " ".join(pieces)

def category(row):
    name = row["NAME"]
    admin = row["ADMIN"]
    sov = row["SOVEREIGNT"]
    for n in (name, admin, sov):
        if n in SOUTHMOD:
            return "southmod"
    for n in (name, admin, sov):
        if n in EUROMOD_INFO:
            return "euromod"
    return "other"

world["category"] = world.apply(category, axis=1)

# ---------------------------------------------------------------------------
# Build SVG fragments
# ---------------------------------------------------------------------------
def safe_id(s):
    return "c-" + "".join(ch.lower() if ch.isalnum() else "-" for ch in s).strip("-")

other_paths   = []
euromod_paths = []
southmod_paths = []

# Centroids for label placement
centroids = {}

for _, row in world.iterrows():
    geom = row.geometry
    name = row["NAME"]
    admin = row["ADMIN"]
    sov = row["SOVEREIGNT"]
    d = geom_to_svg_path(geom)

    if row["category"] == "southmod":
        # Find the canonical SOUTHMOD key
        key = next((k for k in (name, admin, sov) if k in SOUTHMOD), None)
        info = SOUTHMOD[key]
        centroids[key] = geom.representative_point().coords[0]
        path_attrs = (
            f'class="country southmod" '
            f'id="{safe_id(info["model"])}" '
            f'data-model="{html.escape(info["model"])}" '
            f'data-country="{html.escape(info["country"])}" '
            f'data-program="SOUTHMOD" '
            f'data-url="{html.escape(info["url"])}" '
            f'data-link-text="{html.escape(info.get("link_text", ""))}"'
        )
        southmod_paths.append(f'<path d="{d}" {path_attrs}/>')

    elif row["category"] == "euromod":
        key = next((k for k in (name, admin, sov) if k in EUROMOD_INFO), None)
        info = EUROMOD_INFO[key]
        blurb = info.get("blurb", "")
        path_attrs = (
            f'class="country euromod" '
            f'data-model="{html.escape(info["model"])}" '
            f'data-country="{html.escape(key)}" '
            f'data-program="{html.escape(info["group"])}" '
            f'data-url="{html.escape(info["url"])}" '
            f'data-link-text="{html.escape(info.get("link_text", ""))}"'
            + (f' data-blurb="{html.escape(blurb)}"' if blurb else "")
        )
        euromod_paths.append(f'<path d="{d}" {path_attrs}/>')

    else:
        other_paths.append(f'<path d="{d}" class="country other"/>')

# Zanzibar marker (small filled circle)
transformer = Transformer.from_crs("EPSG:4326", "ESRI:54030", always_xy=True)
zan_x_proj, zan_y_proj = transformer.transform(*ZANZIBAR["lonlat"])
zan_sx, zan_sy = proj_to_svg(zan_x_proj, zan_y_proj)

# Legend sits inside the SVG, below the map area.
LEGEND_Y = MAP_H + LEGEND_GAP  # top of the legend band in SVG units

# ---------------------------------------------------------------------------
# Static labels (drawn into the SVG with leader lines)
# ---------------------------------------------------------------------------
label_groups = []
for key, info in SOUTHMOD.items():
    if key not in centroids or key not in LABEL_OFFSETS:
        continue
    cx, cy = centroids[key]
    dx, dy = LABEL_OFFSETS[key]
    tx = cx + dx * XRNG
    ty = cy + dy * YRNG
    csx, csy = proj_to_svg(cx, cy)
    tsx, tsy = proj_to_svg(tx, ty)
    anchor = "start" if dx >= 0 else "end"
    label_groups.append(f'''
    <g class="label-group" data-target="{safe_id(info["model"])}">
      <line x1="{csx:.2f}" y1="{csy:.2f}" x2="{tsx:.2f}" y2="{tsy:.2f}" class="leader"/>
      <circle cx="{csx:.2f}" cy="{csy:.2f}" r="3.5" class="anchor-dot"/>
      <text x="{tsx:.2f}" y="{tsy:.2f}" text-anchor="{anchor}" class="label">{info["model"]}</text>
    </g>''')

# ZANMOD label
zan_dx, zan_dy = 0.052, 0.000
zan_tx = zan_x_proj + zan_dx * XRNG
zan_ty = zan_y_proj + zan_dy * YRNG
zan_tsx, zan_tsy = proj_to_svg(zan_tx, zan_ty)
label_groups.append(f'''
    <g class="label-group" data-target="zanmod">
      <line x1="{zan_sx:.2f}" y1="{zan_sy:.2f}" x2="{zan_tsx:.2f}" y2="{zan_tsy:.2f}" class="leader"/>
      <circle cx="{zan_sx:.2f}" cy="{zan_sy:.2f}" r="4" class="zanmod-marker"
              data-model="ZANMOD"
              data-country="Zanzibar (Tanzania)"
              data-program="SOUTHMOD"
              data-url="{html.escape(ZANZIBAR['url'])}"
              data-link-text="{html.escape(ZANZIBAR['link_text'])}"/>
      <text x="{zan_tsx:.2f}" y="{zan_tsy:.2f}" text-anchor="start" class="label">ZANMOD</text>
    </g>''')

# Edge fade widths in SVG units (5% each side)
fade_w = SVG_W * 0.05

# ---------------------------------------------------------------------------
# Assemble full HTML
# ---------------------------------------------------------------------------
SVG_PARTS = "\n".join(other_paths + euromod_paths + southmod_paths)
LABELS = "\n".join(label_groups)

HTML = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>SOUTHMOD &amp; EUROMOD-based Microsimulation Models</title>
<style>
  :root {{
    --bg: #fafaf8;
    --land: #e6e9ee;
    --land-edge: #c2c8d2;
    --euromod-a: #bccadf;
    --euromod-b: #7e98bd;
    --euromod-edge: #6783a8;
    --southmod-a: #f5a847;
    --southmod-b: #d4451a;
    --southmod-edge: #a8350f;
    --southmod-glow: #ff7e2b;
    --text: #1c2937;
    --text-muted: #5a6878;
  }}
  html, body {{
    margin: 0; padding: 0;
    background: var(--bg);
    color: var(--text);
    font-family: "Avenir Next", Avenir, "Helvetica Neue", system-ui, sans-serif;
  }}
  .map-wrap {{
    position: relative;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }}
  svg.map {{
    width: 100%;
    height: auto;
    display: block;
  }}
  /* Country styling */
  .country {{ stroke-linejoin: round; transition: filter 0.18s ease, opacity 0.18s ease; }}
  .country.other    {{ fill: var(--land);          stroke: var(--land-edge);    stroke-width: 0.4; }}
  .country.euromod  {{ fill: url(#euromodGradient); stroke: var(--euromod-edge); stroke-width: 0.45; cursor: pointer; }}
  .country.southmod {{ fill: url(#southmodGradient); stroke: var(--southmod-edge); stroke-width: 0.85; cursor: pointer; filter: url(#southmodGlow); }}
  /* Hover states (individual country hover + group highlight via legend) */
  .country.euromod:hover,
  .country.euromod.hl   {{ filter: brightness(1.08) drop-shadow(0 0 6px rgba(80, 110, 160, 0.5)); }}
  .country.southmod:hover,
  .country.southmod.hl  {{ filter: url(#southmodGlow) brightness(1.06) drop-shadow(0 0 12px rgba(255, 126, 43, 0.55)); }}
  .zanmod-marker.hl     {{ filter: drop-shadow(0 0 6px rgba(255, 126, 43, 0.7)); }}
  /* Leader lines & labels */
  .leader      {{ stroke: var(--southmod-edge); stroke-width: 0.9; opacity: 0.85; }}
  .anchor-dot  {{ fill: #fff; stroke: var(--southmod-edge); stroke-width: 1; }}
  .zanmod-marker {{ fill: var(--southmod-b); stroke: #fff; stroke-width: 1.2; cursor: pointer; }}
  .zanmod-marker:hover {{ filter: drop-shadow(0 0 6px rgba(255, 126, 43, 0.7)); }}
  .label {{
    font-size: 22px; font-weight: 700; fill: var(--text);
    paint-order: stroke; stroke: var(--bg); stroke-width: 4.5;
    pointer-events: none;
  }}
  /* Edge fade rectangles */
  .fade-left, .fade-right {{ pointer-events: none; }}

  /* Legend (rendered inside the SVG via <foreignObject>) */
  .legend {{
    display: flex; flex-direction: row; justify-content: center; align-items: center;
    gap: 48px;
    width: 100%; height: 100%;
    box-sizing: border-box;
    font-family: inherit;
    font-size: 28px; font-weight: 600; color: var(--text);
    white-space: nowrap;
  }}
  .legend-row {{ display: flex; align-items: center; gap: 16px; cursor: pointer; }}
  .legend-swatch {{
    width: 56px; height: 36px;
    border: 1px solid;
    flex: 0 0 auto;
  }}
  .legend-swatch.southmod {{ background: linear-gradient(135deg, var(--southmod-a), var(--southmod-b)); border-color: var(--southmod-edge); }}
  .legend-swatch.euromod  {{ background: linear-gradient(135deg, var(--euromod-a),  var(--euromod-b));  border-color: var(--euromod-edge); }}
  @media (max-width: 600px) {{
    .legend {{ flex-direction: column; gap: 14px; font-size: 34px; }}
    .legend-swatch {{ width: 60px; height: 38px; }}
  }}

  /* Tooltip */
  #tooltip {{
    position: fixed;
    pointer-events: none;
    background: #ffffff;
    color: var(--text);
    border: 1px solid #d8dde4;
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 13px;
    line-height: 1.45;
    box-shadow: 0 6px 20px rgba(20, 30, 50, 0.12);
    width: 280px;
    box-sizing: border-box;
    opacity: 0;
    transition: opacity 0.12s ease;
    z-index: 1000;
    left: 0; top: 0;
  }}
  #tooltip.wide {{ width: 340px; }}
  #tooltip.visible {{ opacity: 1; }}
  #tooltip .tt-model {{
    font-weight: 700;
    font-size: 14px;
    color: var(--southmod-edge);
    letter-spacing: 0.3px;
  }}
  #tooltip.is-euromod .tt-model {{ color: var(--euromod-edge); }}
  #tooltip .tt-country {{ font-weight: 600; margin-top: 2px; }}
  #tooltip .tt-program {{ color: var(--text-muted); font-size: 12px; margin-top: 2px; }}
  #tooltip .tt-blurb   {{ color: var(--text); font-size: 12px; margin-top: 8px; line-height: 1.45; }}
  #tooltip .tt-link    {{ color: var(--southmod-edge); margin-top: 8px; font-size: 12px; font-weight: 600; }}
  #tooltip.is-euromod .tt-link {{ color: var(--euromod-edge); }}
  #tooltip .tt-nolink  {{ color: var(--text-muted); margin-top: 8px; font-size: 12px; font-style: italic; }}
</style>
</head>
<body>
<div class="map-wrap">
<svg class="map" viewBox="0 0 {SVG_W} {SVG_H}" xmlns="http://www.w3.org/2000/svg" role="img"
     aria-label="World map highlighting SOUTHMOD and other EUROMOD-based microsimulation model countries">
  <defs>
    <!-- SOUTHMOD diagonal gradient -->
    <linearGradient id="southmodGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="var(--southmod-a)"/>
      <stop offset="100%" stop-color="var(--southmod-b)"/>
    </linearGradient>
    <!-- EUROMOD diagonal gradient -->
    <linearGradient id="euromodGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="var(--euromod-a)"/>
      <stop offset="100%" stop-color="var(--euromod-b)"/>
    </linearGradient>
    <!-- Soft warm halo behind SOUTHMOD shapes -->
    <filter id="southmodGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3.5" result="blur1"/>
      <feFlood flood-color="#ff7e2b" flood-opacity="0.55"/>
      <feComposite in2="blur1" operator="in" result="glow1"/>
      <feMerge>
        <feMergeNode in="glow1"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <!-- Edge fade-to-bg gradients -->
    <linearGradient id="fadeLeft" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="{ '#fafaf8' }" stop-opacity="1"/>
      <stop offset="100%" stop-color="#fafaf8" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="fadeRight" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#fafaf8" stop-opacity="0"/>
      <stop offset="100%" stop-color="#fafaf8" stop-opacity="1"/>
    </linearGradient>
  </defs>

  <!-- Map background -->
  <rect x="0" y="0" width="{SVG_W}" height="{SVG_H}" fill="var(--bg)"/>

  <!-- Country layers -->
  <g id="other-layer">
    __OTHER_PATHS__
  </g>
  <g id="euromod-layer">
    __EUROMOD_PATHS__
  </g>
  <g id="southmod-layer">
    __SOUTHMOD_PATHS__
  </g>

  <!-- Edge fades (restricted to the map area, not the legend band) -->
  <rect class="fade-left"  x="0" y="0" width="{fade_w:.0f}" height="{MAP_H}" fill="url(#fadeLeft)"/>
  <rect class="fade-right" x="{SVG_W - fade_w:.0f}" y="0" width="{fade_w:.0f}" height="{MAP_H}" fill="url(#fadeRight)"/>

  <!-- Static labels -->
  <g id="labels">
    {LABELS}
  </g>

  <!-- Legend (below the map area) -->
  <foreignObject x="0" y="{LEGEND_Y}" width="{SVG_W}" height="{LEGEND_BAND}">
    <div xmlns="http://www.w3.org/1999/xhtml" class="legend" aria-hidden="true">
      <div class="legend-row" data-hl="southmod"><span class="legend-swatch southmod"></span>SOUTHMOD countries</div>
      <div class="legend-row" data-hl="euromod"><span class="legend-swatch euromod"></span>Other EUROMOD-based models</div>
    </div>
  </foreignObject>
</svg>

<div id="tooltip" role="tooltip" aria-hidden="true"></div>
</div>

<script>
(function() {{
  const tooltip = document.getElementById("tooltip");
  const mapWrap = document.querySelector(".map-wrap");
  const PAD = 10;   // keep tooltip this far from map edges
  const GAP = 16;   // distance from cursor
  let _currentEl = null;

  function show(evt, el) {{
    _currentEl = el;
    const model    = el.getAttribute("data-model")     || "";
    const country  = el.getAttribute("data-country")   || "";
    const program  = el.getAttribute("data-program")   || "";
    const url      = el.getAttribute("data-url")       || "";
    const linkText = el.getAttribute("data-link-text") || "";
    const blurb    = el.getAttribute("data-blurb")     || "";
    const isEuromod = el.classList.contains("euromod");
    tooltip.classList.toggle("is-euromod", isEuromod);
    tooltip.classList.toggle("wide", !!blurb);

    let html = `<div class="tt-model">${{model}}</div>`
             + `<div class="tt-country">${{country}}</div>`
             + `<div class="tt-program">${{program}}</div>`;
    if (blurb) {{
      html += `<div class="tt-blurb">${{blurb}}</div>`;
    }}
    if (url && linkText) {{
      html += `<div class="tt-link">${{linkText}} →</div>`;
    }} else if (url) {{
      html += `<div class="tt-link">Click to open project page →</div>`;
    }} else {{
      html += `<div class="tt-nolink">Project page not available yet.</div>`;
    }}
    tooltip.innerHTML = html;
    tooltip.classList.add("visible");
    position(evt);
  }}

  function position(evt) {{
    // Measure after content update so size is current.
    const tt   = tooltip.getBoundingClientRect();
    const map  = mapWrap.getBoundingClientRect();
    // Use the larger of viewport and map bounds so tooltip never escapes
    // the visible region either.
    const minX = Math.max(map.left,   PAD) + PAD;
    const maxX = Math.min(map.right,  window.innerWidth  - PAD) - PAD - tt.width;
    const minY = Math.max(map.top,    PAD) + PAD;
    const maxY = Math.min(map.bottom, window.innerHeight - PAD) - PAD - tt.height;

    // Preferred: centered above cursor
    let x = evt.clientX - tt.width / 2;
    let y = evt.clientY - tt.height - GAP;

    // Vertical flip if no room above
    if (y < minY) {{
      y = evt.clientY + GAP;
    }}
    // Clamp inside allowed rect
    x = Math.max(minX, Math.min(maxX, x));
    y = Math.max(minY, Math.min(maxY, y));

    tooltip.style.left = x + "px";
    tooltip.style.top  = y + "px";
  }}

  function hide() {{
    tooltip.classList.remove("visible");
    _currentEl = null;
  }}

  function attach(el) {{
    el.addEventListener("mouseenter", e => show(e, el));
    el.addEventListener("mousemove",  position);
    el.addEventListener("mouseleave", hide);
    el.addEventListener("click",      () => {{
      const url = el.getAttribute("data-url");
      if (url) window.open(url, "_blank", "noopener");
    }});
  }}

  document.querySelectorAll(".country.southmod, .country.euromod, .zanmod-marker")
    .forEach(attach);

  // Group highlight: hovering a legend row highlights all countries in that category.
  const hlGroups = {{
    southmod: document.querySelectorAll(".country.southmod, .zanmod-marker"),
    euromod:  document.querySelectorAll(".country.euromod"),
  }};
  document.querySelectorAll(".legend-row[data-hl]").forEach(row => {{
    const group = row.getAttribute("data-hl");
    const nodes = hlGroups[group] || [];
    row.addEventListener("mouseenter", () => nodes.forEach(n => n.classList.add("hl")));
    row.addEventListener("mouseleave", () => nodes.forEach(n => n.classList.remove("hl")));
  }});

  window.addEventListener("scroll", () => {{ if (_currentEl) hide(); }}, {{passive: true}});
}})();
</script>
</body>
</html>
"""

# Inject the path blocks (kept out of the f-string for readability)
HTML = HTML.replace("__OTHER_PATHS__",    "\n    ".join(other_paths))
HTML = HTML.replace("__EUROMOD_PATHS__",  "\n    ".join(euromod_paths))
HTML = HTML.replace("__SOUTHMOD_PATHS__", "\n    ".join(southmod_paths))

OUT_DIR = Path("/Users/jesse/development/Agent_instructions/personal-web-page/draft_folder_for_images/interactive")
OUT_DIR.mkdir(parents=True, exist_ok=True)
out_path = OUT_DIR / "southmod_interactive.html"
out_path.write_text(HTML, encoding="utf-8")
print(f"WROTE {out_path}")
print(f"size: {out_path.stat().st_size / 1024:.1f} KB")
