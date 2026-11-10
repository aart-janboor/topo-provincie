/* Leerdata "Bekende plekken" (kaart: assets/BekendePlekken.jpg, 1716x1954).
 *
 * Op de kaart staan 23 bekende plekken met een Romeins cijfer (I..XXIII). De
 * namen komen van het antwoordenblad (assets/BekendePlekken2.jpg). Er zijn geen
 * nieuwe gebieden bij: de set is alleen in twee delen gesplitst om het behapbaar
 * te houden. Het cijfer loopt grofweg van noord naar zuid:
 *   - Deel 1: I t/m XII  (Waddengebied, het noorden, Flevoland en Schiphol)
 *   - Deel 2: XIII t/m XXIII (Randstad, Zeeland, Brabant en Limburg)
 *
 * coords = positie (0..1, links/boven) tussen het cijfer en het plaatje. */
window.TOPO_BEKEND = {

  regios: {
    "deel-1": "Deel 1",
    "deel-2": "Deel 2"
  },

  items: [
    // ---- Deel 1 ----
    { id: "b-wadden",         naam: "Wadden",                        categorie: "plek", regio: "deel-1", label: "I" },
    { id: "b-pieterburen",    naam: "Zeehondencentrum Pieterburen",  categorie: "plek", regio: "deel-1", label: "II" },
    { id: "b-afsluitdijk",    naam: "Afsluitdijk",                   categorie: "plek", regio: "deel-1", label: "III" },
    { id: "b-elfstedentocht", naam: "Elfstedentocht",                categorie: "plek", regio: "deel-1", label: "IV" },
    { id: "b-martinitoren",   naam: "Martinitoren",                  categorie: "plek", regio: "deel-1", label: "V" },
    { id: "b-hunebedden",     naam: "Hunebedden",                    categorie: "plek", regio: "deel-1", label: "VI" },
    { id: "b-volendam",       naam: "Volendam",                      categorie: "plek", regio: "deel-1", label: "VII" },
    { id: "b-markerwaarddijk",naam: "Markerwaarddijk",               categorie: "plek", regio: "deel-1", label: "VIII" },
    { id: "b-giethoorn",      naam: "Giethoorn",                     categorie: "plek", regio: "deel-1", label: "IX" },
    { id: "b-walibi",         naam: "Walibi Holland",                categorie: "plek", regio: "deel-1", label: "X" },
    { id: "b-schiphol",       naam: "Schiphol",                      categorie: "plek", regio: "deel-1", label: "XI" },
    { id: "b-dolfinarium",    naam: "Dolfinarium",                   categorie: "plek", regio: "deel-1", label: "XII" },

    // ---- Deel 2 ----
    { id: "b-randstad",       naam: "Randstad",                      categorie: "plek", regio: "deel-2", label: "XIII" },
    { id: "b-domtoren",       naam: "Domtoren",                      categorie: "plek", regio: "deel-2", label: "XIV" },
    { id: "b-haven-rotterdam",naam: "Haven van Rotterdam",           categorie: "plek", regio: "deel-2", label: "XV" },
    { id: "b-rotterdam-airport", naam: "Rotterdam Den Haag Airport", categorie: "plek", regio: "deel-2", label: "XVI" },
    { id: "b-erasmusbrug",    naam: "Erasmusbrug",                   categorie: "plek", regio: "deel-2", label: "XVII" },
    { id: "b-burgers-zoo",    naam: "Burgers' Zoo",                  categorie: "plek", regio: "deel-2", label: "XVIII" },
    { id: "b-neeltje-jans",   naam: "Deltawerken Neeltje Jans",      categorie: "plek", regio: "deel-2", label: "XIX" },
    { id: "b-efteling",       naam: "Efteling",                      categorie: "plek", regio: "deel-2", label: "XX" },
    { id: "b-eindhoven-airport", naam: "Eindhoven Airport",          categorie: "plek", regio: "deel-2", label: "XXI" },
    { id: "b-maastricht-airport", naam: "Maastricht Aken Airport",   categorie: "plek", regio: "deel-2", label: "XXII" },
    { id: "b-drielandenpunt", naam: "Drielandenpunt",                categorie: "plek", regio: "deel-2", label: "XXIII" }
  ],

  coords: {
    "b-wadden": [0.502, 0.133], "b-pieterburen": [0.788, 0.071], "b-afsluitdijk": [0.492, 0.219],
    "b-elfstedentocht": [0.588, 0.173], "b-martinitoren": [0.830, 0.118], "b-hunebedden": [0.880, 0.253],
    "b-volendam": [0.450, 0.378], "b-markerwaarddijk": [0.544, 0.334], "b-giethoorn": [0.698, 0.315],
    "b-walibi": [0.616, 0.380], "b-schiphol": [0.388, 0.438], "b-dolfinarium": [0.592, 0.430],

    "b-randstad": [0.318, 0.479], "b-domtoren": [0.475, 0.508], "b-haven-rotterdam": [0.204, 0.563],
    "b-rotterdam-airport": [0.326, 0.556], "b-erasmusbrug": [0.367, 0.586], "b-burgers-zoo": [0.700, 0.557],
    "b-neeltje-jans": [0.100, 0.668], "b-efteling": [0.474, 0.671], "b-eindhoven-airport": [0.576, 0.732],
    "b-maastricht-airport": [0.635, 0.919], "b-drielandenpunt": [0.693, 0.957]
  }
};
