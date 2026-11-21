// GafferBoard website V2 (English + Norwegian)
(function () {
  'use strict';

  // ============================================================
  // 1. DOWNLOAD LINK. Paste your real link between the quotes.
  //    Example: 'https://github.com/janrobpvs/GafferBoard/releases/latest'
  // ============================================================
  var DOWNLOAD_URL = 'PASTE_YOUR_DOWNLOAD_LINK_HERE';

  // ============================================================
  // 2. GOOGLE ANALYTICS. Loads only after the visitor accepts cookies.
  // ============================================================
  var GA_MEASUREMENT_ID = 'G-00KLSR494S';

  // ============================================================
  // 3. NORWEGIAN TEXT. English text lives in index.html.
  //    The keys match the data-i18n attributes in index.html.
  // ============================================================
  var NO = {
    brandSub: 'Strategisk stall- og overgangsplanlegger for Football Manager',
    navFeatures: 'Funksjoner', navHow: 'Slik fungerer det', navDownload: 'Last ned', navFaq: 'Spørsmål', navSupport: 'Støtt',
    menu: 'Meny',
    h1: 'Se stallen din.<br>Planlegg fremtiden.',
    tagline: 'Den eneste FM-stallplanleggeren du trenger!',
    lead: 'Få en tydelig visuell oversikt over Football Manager-stallen din, fra A-lag til akademi, og planlegg sesongene fremover før de skjer.',
    heroAlt: 'GafferBoard: ungdomslag, A-lag og shortlist knyttet sammen av overganger',

    featuresH2: 'Laget for alle Football Manager 27-saver',
    c1h: 'Forstå stallen din', c1p: 'Se dybde, reserver og posisjonsdekning på én bane.',
    c2h: 'Planlegg smartere overganger', c2p: 'Behold, lån ut, selg og kjøp eller erstatt, med budsjett for hvert vindu.',
    c3h: 'Bygg for fremtiden', c3p: 'Følg ungdomstalenter og planlegg stallutviklingen flere sesonger frem.',
    dlFree: 'Last ned gratis',
    proof1: 'Ingen registrering. Ingen reklame. 100 % gratis.',

    aboutH: 'Om GafferBoard',
    aboutP: 'GafferBoard gir deg full kontroll over A-laget og ungdomslagene. Sett opp første- og andrevalg for hver posisjon, flytt talenter oppover etter hvert som de utvikler seg, og planlegg flere år frem med salg, erstattere fra shortlist eller akademi, og overgangsbudsjett.',
    aboutL1: 'Leser FM27-saver og .fmf-shortlister, kun lesing',
    aboutL2: 'Planlegger for tre sesonger på tvers av A-lag, U21, U18 og utlån',
    aboutL3: 'Overgangsbudsjett, kontraktsvarsler og HGN/HGC-registreringsregler',
    aboutAlt: 'Om-vinduet i GafferBoard, med de viktigste funksjonene oppført',
    zoomA: 'Forstørr: Om GafferBoard',

    howH2: 'Slik fungerer GafferBoard',
    howIntro: 'Fra savet ditt til en plan du kan følge, i fem steg.',
    r1h: 'Importer klubben din',
    r1p1: 'Start med ditt eget spill. Last inn FM27-savet og shortlistene dine, eller åpne en plan du har lagret tidligere.',
    r1p2: 'GafferBoard leser bare savet ditt. Det endrer det aldri.',
    r1alt: 'Vinduet «Hent data», der du velger FM27-save, shortlister eller en lagret plan',
    zoom1: 'Forstørr: Importer klubben din',

    u0h: 'Forstå stallen din',
    u0: 'Ikke kast bort tid på å klikke mellom flere skjermbilder i Football Manager. GafferBoard samler hele stallen og planene dine på ett sted.',
    uAh: 'Se hver posisjon med ett blikk',
    uA1: 'Lagoppstillingen viser formasjonen på en bane, med opptil tre spillere per posisjon. Vis alder, stjerner, verdi eller kontrakt ved siden av navnet, og klikk på den fargede kula for å markere en spiller som behold, vurder eller selg.',
    uA2: 'Den hjelper deg å svare på spørsmål som:',
    r2l1: 'Har jeg nok dekning på venstresiden?',
    r2l2: 'Hvem er reservespissen min?',
    r2l3: 'Hvilken ungdomsspiller er nærmest A-laget?',
    r2l4: 'Hva skjer hvis en viktig spiller forlater klubben?',
    r2l5: 'Hvordan bør jeg styre lagoppstillingen på tvers av taktikker, første- til tredjevalg og de neste tre sesongene?',
    uAalt: 'Lagoppstillingen med formasjonen din og spillerdata på banen',
    zoomU1: 'Forstørr: Lagoppstilling med spillerdata',

    uBh: 'Planlegg overganger og etterfølgere',
    uB1: 'Bytt til stallbyggingen og se hver posisjon som en rad: hvem som er i stallen nå, hvem som er utlånt og hvem du planlegger å selge, og i hvilket overgangsvindu. Sorter spillere i:',
    uB2: 'Velg hvem som erstatter en spiller som forlater klubben, fra shortlisten eller akademiet, og se kontraktsår ved siden av hvert navn, så du vet hvem som rykker opp før en kontrakt går ut. Lag deretter en langsiktig plan for hvordan stallen skal utvikle seg, fra akademispiller til fast A-lagsspiller.',
    uBalt: 'Stallbyggingen med spillere per posisjon og planlagte overganger',
    zoomU2: 'Forstørr: Stall og overganger',
    tKeep: 'Behold', tLoan: 'Lån ut', tSell: 'Selg', tBuyRep: 'Kjøp / Erstatt',

    sd0h: 'AI og sportsdirektør',
    sd0: 'Få en objektiv vurdering av stallen før du binder deg til et overgangsvindu. Den innebygde sportsdirektøren fanger automatisk opp risikoer og mangler, med valgfri dybdeanalyse fra AI når du vil ha en full skriftlig rapport.',
    sdAh: 'Løpende stallråd og prioriteringer for stallbygging',
    sdA1: 'Sportsdirektøren vurderer hver lagdel og løfter frem det som haster mest — fra utløpende kontrakter og spillere på vei ut uten erstatter, til stallens sterkeste områder og aldersprofil.',
    sdA2: 'Vil du gå enda dypere? Kjør en valgfri AI-rapport med din egen Google Gemini-nøkkel eller en lokal Ollama-modell rett på din egen PC.',
    sdAalt: 'AI-sportsdirektørens løpende analyse med vurdering per lagdel, kontraktsvarsler, manglende erstattere og forslag fra shortlist',
    zoomSD1: 'Forstørr: Sportsdirektør – stallråd',
    sdBh: 'Smarte råd for kjøp og erstattere',
    sdB1: 'Når en spiller er merket for salg eller nærmer seg kontraktsutløp, rangerer sportsdirektøren de beste erstatterne fra shortlisten din med en tydelig treffscore — klare til å velges med ett klikk.',
    sdB2: 'Bruk automatisk vurdering eller vekt dine egne prioriteringer — som nåværende nivå, potensial og aldersspenn, pris og lønn, utløpende kontrakt, homegrown-status, form, skaderisiko og foretrukket fot.',
    sdBalt: 'Sportsdirektørens rangerte forslag til erstattere basert på egne rekrutteringsprioriteringer',
    zoomSD2: 'Forstørr: Sportsdirektør – kjøp og erstattere',

    r6h: 'Overgangsoversikt',
    r6p1: 'Se en oversikt over overgangene som har vært og de som er planlagt, vindu for vindu.',
    r6p2: 'Budsjettet er integrert fra ditt eget savegame, så hver plan sjekkes mot de faktiske pengene dine.',
    r6alt: 'Oversikt over gjennomførte og planlagte overganger med budsjett fra savet ditt',
    zoom6: 'Forstørr: Overgangsoversikt',

    r3h: 'Analyser klubben din',
    r3p1: 'Se hvor stallen er sterk, og hvor problemer kan være på vei.',
    r3p2: 'Gå gjennom stallkvalitet, potensial, aldersprofil, kontraktsituasjon, homegrown-status og posisjonsstyrke før du tar viktige beslutninger.',
    r3alt: 'Stallanalyse med aldersfordeling, styrke per enhet og kontraktsutløp',
    zoom3: 'Forstørr: Analyser klubben din',

    dlH2: 'Klar til å bygge fremtidens stall?',
    dlP: 'Last ned GafferBoard i dag.',
    proof2: 'Ingen registrering. Ingen reklame. Ingen abonnement.',
    dlLatest: 'Last ned siste versjon',

    faqH2: 'Spørsmål',
    q1: 'Er GafferBoard gratis?',
    a1: 'Ja. Det er helt gratis, uten registrering, reklame eller abonnement.',
    q2: 'Endrer det savet mitt?',
    a2: 'Nei. GafferBoard leser bare savet ditt. Egne notater og planer lagres separat på din egen datamaskin.',
    q3: 'Kan jeg bruke det bare til å planlegge stalldybde?',
    a3: 'Ja. Lagoppstillingssiden fungerer alene. Overgangs- og analysesidene er der når du vil bruke dem.',
    q4: 'Må jeg bruke AI-funksjonene?',
    a4: 'Nei. AI-rapporten er valgfri. Du kan bruke Google Gemini med din egen nøkkel, eller en lokal Ollama-modell som blir på din PC.',
    q5: 'Hvilke data samler programmet inn?',
    a5: 'Bare anonyme bruksdata, for eksempel at appen startes, at du bytter side eller laster inn et save. Det sender aldri spillerdata, filstier eller personopplysninger.',
    q6: 'Er det offisielt?',
    a6: 'Nei. GafferBoard er et uoffisielt fanverktøy og har ingen tilknytning til Sports Interactive eller SEGA.',

    supH2: 'Støtt GafferBoard',
    supP1: 'GafferBoard er laget av en Football Manager-spiller på fritiden, og er helt gratis å bruke.',
    supP2: 'Hvis det hjelper deg med savene dine, kan du vurdere å støtte videre utvikling. Det forventes aldri, men settes alltid pris på.',
    supKofi: 'Støtt på Ko-fi',
    supPaypal: 'Doner med PayPal',

    prH2: 'Personvern og informasjonskapsler',
    prP1: 'Dette nettstedet bruker Google Analytics til å telle besøk og se hvilke sider som leses. Det kjører bare hvis du godtar. Hvis du avslår, settes ingen analyse-cookies og ingen data sendes til Google.',
    prP2: 'Hvis du godtar, setter Google Analytics informasjonskapsler og samler anonym statistikk, som viste sider, enhetstype, nettleser, land og hvordan du fant nettstedet. IP-adresser anonymiseres. Jeg bruker ikke dataene til reklame, og jeg selger dem ikke.',
    prP3: 'Valget ditt lagres i nettleseren din. Du kan endre det når som helst med «Innstillinger for informasjonskapsler» under. Google er databehandler for analysen. Ko-fi og PayPal er egne tjenester med egne personvernerklæringer.',

    copy: '© 2026 GafferBoard · Laget av JRMP',
    disclaimer: 'Uoffisielt fanverktøy. Ikke tilknyttet, støttet av eller knyttet til Sports Interactive eller SEGA.',
    footCookies: 'Innstillinger for informasjonskapsler',

    cbText: 'Vi bruker informasjonskapsler til anonym besøksstatistikk (Google Analytics). Godtar du det?',
    cbMore: 'Les mer',
    cbAccept: 'Godta',
    cbDecline: 'Avslå',
    close: 'Lukk',
    toastNoLink: 'Nedlastingslenken er ikke lagt inn ennå.'
  };
  var EN_TOAST = 'The download link has not been added yet.';
  var NO_TITLE = 'GafferBoard – Strategisk stall- og overgangsplanlegger for Football Manager';
  var NO_DESC = 'Få oversikt over Football Manager-stallen din og planlegg fremtiden. GafferBoard er en gratis, uoffisiell stall- og overgangsplanlegger. Ingen registrering, ingen reklame.';

  // ---------- Storage helpers (safe if storage is blocked) ----------
  function getItem(key) { try { return window.localStorage.getItem(key); } catch (e) { return null; } }
  function setItem(key, value) { try { window.localStorage.setItem(key, value); } catch (e) { /* ignore */ } }

  // ---------- Language ----------
  var metaDesc = document.querySelector('meta[name="description"]');
  var EN_TITLE = document.title;
  var EN_DESC = metaDesc ? metaDesc.getAttribute('content') : '';
  var currentLang = 'en';

  // Remember the English text from the page so we can switch back to it.
  document.querySelectorAll('[data-i18n]').forEach(function (el) { el.dataset.en = el.innerHTML; });
  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) { el.dataset.enAlt = el.getAttribute('alt'); });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.dataset.enAria = el.getAttribute('aria-label'); });

  function detectLang() {
    var saved = getItem('gb-lang');
    if (saved === 'en' || saved === 'no') return saved;
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i]).toLowerCase();
      if (code === 'no' || code.indexOf('no-') === 0 || code.indexOf('nb') === 0 || code.indexOf('nn') === 0) return 'no';
      if (code.indexOf('en') === 0) return 'en';
    }
    return 'en';
  }

  function setLang(lang, remember) {
    currentLang = lang;
    var isNo = lang === 'no';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.innerHTML = isNo && NO[key] ? NO[key] : el.dataset.en;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      el.setAttribute('alt', isNo && NO[key] ? NO[key] : el.dataset.enAlt);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', isNo && NO[key] ? NO[key] : el.dataset.enAria);
    });
    document.documentElement.lang = isNo ? 'nb' : 'en';
    document.title = isNo ? NO_TITLE : EN_TITLE;
    if (metaDesc) metaDesc.setAttribute('content', isNo ? NO_DESC : EN_DESC);
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    if (remember) setItem('gb-lang', lang);
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang'), true); });
  });
  setLang(detectLang(), false);

  // ---------- Download buttons ----------
  var hasRealUrl = /^https?:\/\//i.test(DOWNLOAD_URL);

  function toast(message) {
    var old = document.querySelector('.toast');
    if (old) old.remove();
    var el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 4000);
  }

  document.querySelectorAll('[data-download]').forEach(function (link) {
    if (hasRealUrl) {
      link.href = DOWNLOAD_URL;
      link.rel = 'noopener';
    } else {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        toast(currentLang === 'no' ? NO.toastNoLink : EN_TOAST);
      });
    }
  });

  // ---------- Mobile menu ----------
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.getElementById('mainNav');

  function setMenu(open) {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  menuBtn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (event) { if (event.target.tagName === 'A') setMenu(false); });
  window.addEventListener('keydown', function (event) { if (event.key === 'Escape') setMenu(false); });


  // ---------- Menu highlight follows the scroll position ----------
  // Top of the page = Features. Bottom of the page = Support.
  var spyIds = ['features', 'how', 'download', 'faq'];
  var navLinks = nav.querySelectorAll('a[href^="#"]');
  var forcedId = null;

  function setActive(id) {
    navLinks.forEach(function (a) {
      var on = a.getAttribute('href') === '#' + id;
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }

  function updateSpy() {
    if (forcedId) { setActive(forcedId); return; }
    var current = 'features';
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) {
      current = 'support';
    } else {
      var line = window.innerHeight * 0.35;
      spyIds.forEach(function (id) {
        var el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      });
    }
    setActive(current);
  }

  // A click on a menu link keeps that link highlighted until the visitor scrolls by hand.
  navLinks.forEach(function (a) {
    a.addEventListener('click', function () { forcedId = a.getAttribute('href').slice(1); setActive(forcedId); });
  });
  ['wheel', 'touchmove', 'keydown'].forEach(function (type) {
    window.addEventListener(type, function () { forcedId = null; }, { passive: true });
  });
  window.addEventListener('scroll', updateSpy, { passive: true });
  window.addEventListener('resize', updateSpy);
  updateSpy();

  // ---------- Screenshot lightbox ----------
  var box = document.getElementById('lightbox');
  var boxImg = document.getElementById('lightboxImg');
  var boxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.zoom').forEach(function (button) {
    button.addEventListener('click', function () {
      var img = button.querySelector('img');
      boxImg.src = img.currentSrc || img.src;
      boxImg.alt = img.alt;
      if (typeof box.showModal === 'function') box.showModal();
    });
  });
  boxClose.addEventListener('click', function () { box.close(); });
  box.addEventListener('click', function (event) {
    if (event.target === box || event.target === boxImg) box.close();
  });

  // ---------- Cookie consent and Google Analytics ----------
  var banner = document.getElementById('consent');
  var gaLoaded = false;

  function loadAnalytics() {
    if (gaLoaded || !/^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID)) return;
    gaLoaded = true;
    window['ga-disable-' + GA_MEASUREMENT_ID] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(s);
  }

  function removeAnalyticsCookies() {
    window['ga-disable-' + GA_MEASUREMENT_ID] = true;
    var host = location.hostname;
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (name.indexOf('_ga') === 0) {
        document.cookie = name + '=; Max-Age=0; path=/';
        document.cookie = name + '=; Max-Age=0; path=/; domain=' + host;
        document.cookie = name + '=; Max-Age=0; path=/; domain=.' + host;
      }
    });
  }

  function showBanner(show) { banner.hidden = !show; }

  document.getElementById('consentAccept').addEventListener('click', function () {
    setItem('gb-consent', 'granted');
    showBanner(false);
    loadAnalytics();
  });
  document.getElementById('consentDecline').addEventListener('click', function () {
    setItem('gb-consent', 'denied');
    showBanner(false);
    removeAnalyticsCookies();
  });
  document.getElementById('cookieSettings').addEventListener('click', function () { showBanner(true); });

  var choice = getItem('gb-consent');
  if (choice === 'granted') {
    loadAnalytics();
  } else if (choice === 'denied') {
    window['ga-disable-' + GA_MEASUREMENT_ID] = true;
  } else {
    showBanner(true);
  }
})();
