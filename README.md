# Topo per provincie 🎵

Losse PWA om de topografie van **West-Nederland** en **Noord-Nederland** per
provincie te oefenen (je kiest eerst welk deel):
kaart links, namenlijst rechts (tonen/verbergen), bladeren per provincie, en
jullie eigen **liedje opnemen** + afspelen (met herhaal). De namenvolgorde kun
je aanpassen en wordt onthouden.

- **Spelen/installeren:** https://aart-janboor.github.io/topo-provincie/
  Op de tablet openen → menu → "App installeren" / "Zet op beginscherm".
- Werkt offline na de eerste keer. Alles lokaal op het apparaat.

**Een nieuw deel van Nederland toevoegen:** kaart in `assets/`, een data-bestand
naar het voorbeeld van `js/data-noord.js` (items + coords), een `<script>` in
`index.html`, een regel in `REGIOS` bovenin `js/app.js`, en de kaart + het
data-bestand in `sw.js`.

Eigen site/scope zodat 'ie los naast de dieren-app
(https://aart-janboor.github.io/topo-huisdier/) installeerbaar is. De leer-data
(`js/data.js`) komt uit het topo-huisdier repo; de coords voor wateren (I–X) en
gebieden (A–G) staan alleen hier.
