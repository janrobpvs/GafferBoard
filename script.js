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
    navFeatures: 'Funksjoner', navHow: 'Slik fungerer det', navFaq: 'Spørsmål', navDownload: 'Last ned', navSupport: 'Støtt',
    menu: 'Meny',
    h1: 'Se stallen din.<br>Planlegg fremtiden.',
    lead: 'Få en tydelig visuell oversikt over Football Manager-stallen din, fra A-lag til akademi, og planlegg sesongene fremover før de skjer.',
    heroAlt: 'GafferBoard: ungdomslag, A-lag og shortlist knyttet sammen av overganger',

    featuresH2: 'Laget for alle Football Manager-saver',
    c1h: 'Forstå stallen din', c1p: 'Se dybde, reserver og posisjonsdekning på én bane.',
    c2h: 'Planlegg smartere overganger', c2p: 'Behold, lån ut, selg, erstatt og kjøp, med budsjett for hvert vindu.',
    c3h: 'Bygg for fremtiden', c3p: 'Følg ungdomstalenter og planlegg stallutviklingen flere sesonger frem.',
    dlFree: 'Last ned gratis',
    proof1: 'Ingen registrering. Ingen reklame. 100 % gratis.',

    howH2: 'Slik fungerer GafferBoard',
    howIntro: 'Fra savet ditt til en plan du kan følge, i seks steg.',
    r1h: 'Importer klubben din',
    r1p1: 'Start med ditt eget spill. Last inn FM27-savet og shortlistene dine, eller åpne en plan du har lagret tidligere.',
    r1p2: 'GafferBoard leser bare savet ditt. Det endrer det aldri.',
    r1alt: 'Innstillingsvinduet «Hent data», der du velger FM27-save, shortlister eller en lagret plan',
    zoom1: 'Forstørr: Importer klubben din',
    r2h: 'Forstå stallen din',
    r2p: 'Ikke kast bort tid på å klikke mellom flere skjermbilder i Football Manager. GafferBoard lager et visuelt dybdekart over hele stallen og hjelper deg å svare på spørsmål som:',
    r2l1: 'Har jeg nok dekning på venstresiden?',
    r2l2: 'Hvem er reservespissen min?',
    r2l3: 'Hvilken ungdomsspiller er nærmest A-laget?',
    r2l4: 'Hva skjer hvis en viktig spiller forlater klubben?',
    r2alt: 'En formasjon på banen med første-, andre- og tredjevalg for hver posisjon',
    zoom2: 'Forstørr: Forstå stallen din',
    r3h: 'Analyser klubben din',
    r3p1: 'Se hvor stallen er sterk, og hvor problemer kan være på vei.',
    r3p2: 'Gå gjennom stallkvalitet, potensial, aldersprofil, kontraktsituasjon, homegrown-status og posisjonsstyrke før du tar viktige beslutninger.',
    r3alt: 'Stallanalyse med aldersfordeling, styrke per enhet og kontraktsutløp',
    zoom3: 'Forstørr: Analyser klubben din',
    r4h: 'Planlegg overganger',
    r4p1: 'Lag overgangsstrategien før vinduet åpner. Sorter spillere i:',
    tKeep: 'Behold', tLoan: 'Lån ut', tSell: 'Selg', tBuy: 'Kjøp', tReplace: 'Erstatt',
    r4p2: 'Lag deretter en langsiktig plan for hvordan stallen skal utvikle seg.',
    r4alt: 'Overgangsplanlegging med salg, kjøp og balanse for hvert overgangsvindu',
    zoom4: 'Forstørr: Planlegg overganger',
    r5h: 'Bygg fremtidens stall',
    r5p1: 'Tenk lenger enn neste sesong.',
    r5p2: 'Planlegg stallutviklingen flere år frem og lag en tydelig vei fra akademispiller til fast A-lagsspiller.',
    r5alt: 'GafferBoard-visning for planlegging av sesongene fremover',
    zoom5: 'Forstørr: Bygg fremtidens stall',
    r6h: 'Planlegg etterfølgere',
    r6p1: 'Se med et blikk hvem som blir, hvem som vurderes og hvem som forlater klubben, med kontraktsår ved siden av hvert navn.',
    r6p2: 'Vit hvem som rykker opp før en kontrakt går ut eller en spiller selges.',
    r6alt: 'Spillerliste med markeringer for behold, vurder og selg, samt kontraktsår',
    zoom6: 'Forstørr: Planlegg etterfølgere',

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
    prP3: 'Valget ditt lagres i nettleseren din. Du kan endre det når som helst med «Innstillinger for informasjonskapsler» nederst på siden. Google er databehandler for analysen.',
    prP4: 'Ko-fi og PayPal er egne tjenester med egne personvernerklæringer.',

    copy: '© 2026 GafferBoard · Laget av JRMP',
    disclaimer: 'Uoffisielt fanverktøy. Ikke tilknyttet, støttet av eller knyttet til Sports Interactive eller SEGA.',
    footPrivacy: 'Personvern og informasjonskapsler',
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
