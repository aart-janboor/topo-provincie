/* Leerdata Noord-Nederland (kaart: assets/NoordNederland1.jpg).
 *
 * Tekens op de kaart:
 *   - cijfer 1..17  -> steden/dorpen (1, 2, 3 staan als ster: de hoofdsteden)
 *   - Romeins I..IV -> wateren, en "?" = de verbinding tussen Noord-Holland en Friesland
 *   - letter a..h   -> gebieden (eilanden, Noordelijke Friese Wouden, Hondsrug)
 *
 * De koppeling naam -> teken is gecontroleerd tegen de kaart zelf. Let op de
 * plek waar het ingevulde werkblad afweek van de kaart:
 *   - Terschelling (het eiland) is b; 5 is het dorp West-Terschelling.
 *   - Rottumerplaat is e en Rottumeroog is f (bevestigd door de ouder).
 * Twijfel? Pas hieronder het 'label' aan; de app past zich vanzelf aan.
 *
 * coords = positie van het teken op de kaart (0..1, links/boven), afgelezen
 * van assets/NoordNederland1.jpg. */
window.TOPO_NOORD = {

  regios: {
    "friesland": "Friesland",
    "groningen": "Groningen",
    "drenthe": "Drenthe",
    "water": "Wateren",
    "gebied": "Gebieden"
  },

  items: [
    // ---- Friesland ----
    { id: "n-leeuwarden",       naam: "Leeuwarden",       categorie: "stad", regio: "friesland", label: "1" },
    { id: "n-oost-vlieland",    naam: "Oost-Vlieland",    categorie: "stad", regio: "friesland", label: "4" },
    { id: "n-west-terschelling",naam: "West-Terschelling",categorie: "stad", regio: "friesland", label: "5" },
    { id: "n-ballum",           naam: "Ballum",           categorie: "stad", regio: "friesland", label: "6" },
    { id: "n-schiermonnikoog-plaats", naam: "Schiermonnikoog (plaats)", categorie: "stad", regio: "friesland", label: "7" },
    { id: "n-harlingen",        naam: "Harlingen",        categorie: "stad", regio: "friesland", label: "8" },
    { id: "n-sneek",            naam: "Sneek",            categorie: "stad", regio: "friesland", label: "9" },
    { id: "n-heerenveen",       naam: "Heerenveen",       categorie: "stad", regio: "friesland", label: "10" },
    { id: "n-drachten",         naam: "Drachten",         categorie: "stad", regio: "friesland", label: "11" },

    // ---- Groningen ----
    { id: "n-groningen",        naam: "Groningen",        categorie: "stad", regio: "groningen", label: "2" },
    { id: "n-lauwersoog",       naam: "Lauwersoog",       categorie: "stad", regio: "groningen", label: "12" },
    { id: "n-pieterburen",      naam: "Pieterburen",      categorie: "stad", regio: "groningen", label: "13" },
    { id: "n-delfzijl",         naam: "Delfzijl",         categorie: "stad", regio: "groningen", label: "14" },

    // ---- Drenthe ----
    { id: "n-assen",            naam: "Assen",            categorie: "stad", regio: "drenthe",   label: "3" },
    { id: "n-meppel",           naam: "Meppel",           categorie: "stad", regio: "drenthe",   label: "15" },
    { id: "n-hoogeveen",        naam: "Hoogeveen",        categorie: "stad", regio: "drenthe",   label: "16" },
    { id: "n-emmen",            naam: "Emmen",            categorie: "stad", regio: "drenthe",   label: "17" },

    // ---- Wateren (Romeinse cijfers) ----
    { id: "n-waddenzee",        naam: "Waddenzee",        categorie: "water", regio: "water",    label: "I" },
    { id: "n-ijsselmeer",       naam: "IJsselmeer",       categorie: "water", regio: "water",    label: "II" },
    { id: "n-eems",             naam: "Eems",             categorie: "water", regio: "water",    label: "III" },
    { id: "n-dollard",          naam: "Dollard",          categorie: "water", regio: "water",    label: "IV" },
    { id: "n-afsluitdijk",      naam: "Afsluitdijk",      categorie: "water", regio: "water",    label: "?" },

    // ---- Gebieden (letters) ----
    { id: "n-vlieland",         naam: "Vlieland",         categorie: "gebied", regio: "gebied",  label: "a" },
    { id: "n-terschelling",     naam: "Terschelling",     categorie: "gebied", regio: "gebied",  label: "b" },
    { id: "n-ameland",          naam: "Ameland",          categorie: "gebied", regio: "gebied",  label: "c" },
    { id: "n-schiermonnikoog",  naam: "Schiermonnikoog (eiland)", categorie: "gebied", regio: "gebied", label: "d" },
    { id: "n-rottumeroog",      naam: "Rottumeroog",      categorie: "gebied", regio: "gebied",  label: "f" },
    { id: "n-rottumerplaat",    naam: "Rottumerplaat",    categorie: "gebied", regio: "gebied",  label: "e" },
    { id: "n-noordelijke-friese-wouden", naam: "Noordelijke Friese Wouden", categorie: "gebied", regio: "gebied", label: "g" },
    { id: "n-hondsrug",         naam: "Hondsrug",         categorie: "gebied", regio: "gebied",  label: "h" }
  ],

  coords: {
    // steden/dorpen (de stippen en sterren)
    "n-leeuwarden": [0.422, 0.434], "n-groningen": [0.720, 0.405], "n-assen": [0.719, 0.618],
    "n-oost-vlieland": [0.115, 0.341], "n-west-terschelling": [0.189, 0.270],
    "n-ballum": [0.371, 0.199], "n-schiermonnikoog-plaats": [0.548, 0.174],
    "n-harlingen": [0.265, 0.451], "n-sneek": [0.349, 0.593], "n-heerenveen": [0.460, 0.673],
    "n-drachten": [0.508, 0.515], "n-lauwersoog": [0.580, 0.248], "n-pieterburen": [0.663, 0.233],
    "n-delfzijl": [0.866, 0.308], "n-meppel": [0.571, 0.897], "n-hoogeveen": [0.692, 0.877],
    "n-emmen": [0.873, 0.833],

    // wateren
    "n-waddenzee": [0.143, 0.477], "n-ijsselmeer": [0.245, 0.829], "n-eems": [0.873, 0.215],
    "n-dollard": [0.958, 0.335], "n-afsluitdijk": [0.162, 0.610],

    // gebieden
    "n-vlieland": [0.050, 0.346], "n-terschelling": [0.234, 0.186], "n-ameland": [0.419, 0.149],
    "n-schiermonnikoog": [0.590, 0.111], "n-rottumeroog": [0.723, 0.062],
    "n-rottumerplaat": [0.676, 0.074], "n-noordelijke-friese-wouden": [0.419, 0.496],
    "n-hondsrug": [0.819, 0.654]
  }
};
