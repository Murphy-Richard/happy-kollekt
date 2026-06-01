// ===== CONFIGURATION =====
const CONFIG = {
  API_ENDPOINT: 'https://script.google.com/macros/s/AKfycbwAnymRCItipYfY66c96mrSRdJE_r2x84J7caU3LmdxRcUgUgmQTOOAe7jdbxm1UgJB/exec',
  CONSENT_FORM_URL: 'https://murphy-richard.github.io/happy-consent-form/',
  CONSENT_API_ENDPOINT: 'https://script.google.com/macros/s/AKfycbwOJGkeb5cUERtNF0UVAoljCzZE6wnTSrk4lpzQtDzYXgpyhiZWhdUXph7OdrbAbf9l/exec',
  QUEUE_KEY: 'happy_kollect_pending',
  LOCAL_DB_KEY: 'happy_kollect_db',
  DEVICE_ID_KEY: 'happyKollectDeviceId',
  PARTNER_PREFIXES: { 'Jobberman':'JOB', 'Agrico':'AGR', 'YouthEmpower':'YOU', 'SkillsGH':'SKI', 'Other':'OTH' },
  REGIONS: {
    "Greater Accra": ["Accra Metropolitan","Tema","Adenta","Ashaiman","Ga East","Ga West","Ga South","Ga Central","La Dade-Kotopon","Ledzokuku","Krowor","Ayawaso West","Ayawaso East","Ayawaso North","Okaikwei North","Ablekuma North","Ablekuma Central","Ablekuma West","Korle Klottey","Adabraka","Osu Klottey","Ningo-Prampram","Shai-Osudoku","Ada East","Ada West","Weija-Gbawe","Kpone-Katamanso"],
    "Ashanti": ["Kumasi Metropolitan","Obuasi Municipal","Ejisu","Bekwai","Mampong","Agona","Asokore Mampong","Suame","Bantama","Subin","Oforikrom","Old Tafo","Kwadaso","Nhyiaeso","Atwima Kwanwoma","Atwima Nwabiagya","Afigya Kwabre North","Afigya Kwabre South","Asante Akim Central","Asante Akim North","Asante Akim South","Bosome Freho","Bosomtwe","Ejura Sekyedumase","Juaben","Kwabre East","Offinso Municipal","Offinso North","Sekyere Central","Sekyere East","Sekyere South","Sekyere Afram Plains","Adansi North","Adansi South","Amansie Central","Amansie West","Ahafo Ano North","Ahafo Ano South"],
    "Eastern": ["Koforidua","Akropong","Nkawkaw","Mpraeso","Aburi","Kibi","Akim Oda","Asamankese","Somanya","Kade","Begoro","Donkorkrom","Akim Swedru","Asuogyaman","Atiwa East","Atiwa West","Ayensuano","Birim Central","Birim North","Birim South","Denkyembour","Fanteakwa North","Fanteakwa South","Kwaebibirem","Kwahu Afram Plains North","Kwahu Afram Plains South","Kwahu East","Kwahu South","Kwahu West","Lower Manya Krobo","New Juaben North","New Juaben South","Nsawam Adoagyiri","Okere","Suhum","Upper Manya Krobo","Upper West Akim","Yilo Krobo"],
    "Volta": ["Ho","Keta","Hohoe","Kpando","Aflao","Sogakope","Dzodze","Adaklu","Afadzato South","Agotime-Ziope","Akatsi North","Akatsi South","Anloga","Central Tongu","Ho West","Ketu North","Ketu South","North Dayi","North Tongu","South Dayi","South Tongu"],
    "Northern": ["Tamale","Yendi","Savelugu","Tolon","Kumbungu","Nanton","Gushegu","Karaga","Saboba","Zabzugu","Tatale-Sanguli","Mion","Nanumba North","Nanumba South","Kpandai"],
    "North East": ["Nalerigu","Walewale","Gambaga","Bunkpurugu","Yunyoo","Chereponi"],
    "Upper West": ["Wa","Lawra","Nadowli","Jirapa","Lambussie","Nandom","Sissala East","Sissala West","Wa East","Wa West","Daffiama-Bussie-Issa"],
    "Upper East": ["Bolgatanga","Bawku","Navrongo","Zebilla","Paga","Binduri","Bongo","Builsa North","Builsa South","Garu","Kassena-Nankana East","Kassena-Nankana West","Nabdam","Pusiga","Talensi","Tempane"],
    "Oti": ["Dambai","Jasikan","Kadjebi","Krachi","Nkwanta","Biakoye","Guan","Krachi East","Krachi Nchumuru","Krachi West","Nkwanta North","Nkwanta South"],
    "Bono": ["Sunyani","Berekum","Dormaa","Wenchi","Techiman","Nkoranza","Kintampo","Atebubu","Sene","Pru","Tain","Banda","Jaman North","Jaman South","Berekum East","Berekum West","Dormaa Central","Dormaa East","Dormaa West"],
    "Bono East": ["Techiman Municipal","Techiman North","Nkoranza North","Nkoranza South","Kintampo North","Kintampo South","Atebubu-Amantin","Pru East","Pru West","Sene East","Sene West"],
    "Ahafo": ["Goaso","Bechem","Duayaw Nkwanta","Hwidiem","Kenyasi","Mim","Asunafo North","Asunafo South","Asutifi North","Asutifi South","Tano North","Tano South"],
    "Savannah": ["Damongo","Bole","Sawla","Salaga","Buipe","Daboya","Larabanga","Mole","Central Gonja","East Gonja","North East Gonja","North Gonja","West Gonja","Sawla-Tuna-Kalba"],
    "Western": ["Sekondi-Takoradi","Tarkwa","Prestea","Bogoso","Axim","Elubo","Half Assini","Ahanta West","Effia-Kwesimintsim","Ellembelle","Jomoro","Mpohor","Nzema East","Prestea-Huni Valley","Shama","Tarkwa-Nsuaem","Wassa Amenfi Central","Wassa Amenfi East","Wassa Amenfi West","Wassa East"],
    "Western North": ["Sefwi Wiawso","Bibiani","Juaboso","Bodi","Aowin","Bia East","Bia West","Bibiani-Anhwiaso-Bekwai","Sefwi Akontombra","Suaman"],
    "Central": ["Cape Coast","Winneba","Kasoa","Swedru","Dunkwa","Elmina","Moree","Abura-Asebu-Kwamankese","Agona East","Agona West","Ajumako-Enyan-Essiam","Asikuma-Odoben-Brakwa","Assin Central","Assin North","Assin South","Awutu Senya","Awutu Senya East","Effutu","Ekumfi","Gomoa Central","Gomoa East","Gomoa West","Komenda-Edina-Eguafo-Abrem","Mfantsiman","Twifo-Atti Morkwa","Twifo Hemang Lower Denkyira","Upper Denkyira East","Upper Denkyira West"]
  },
  SECTOR_DATA: {
    "Agriculture": {
      "Crop Farming": ["Farm Manager","Agronomist","Soil Scientist","Irrigation Specialist","Plant Breeder","Crop Scout","Seed Technologist","Precision Ag Specialist","Agricultural Engineer","Horticulturalist","Entomologist","Farm Laborer","Tractor Operator","Combine Operator","Irrigation Technician","Storekeeper","Driver","Security Guard","Gardener","Accountant","Bookkeeper","Farm Administrator","Purchasing Agent","Sales Rep","Inventory Clerk","HR Officer","Compliance Officer"],
      "Livestock": ["Ranch Manager","Veterinary Surgeon","Animal Nutritionist","AI Technician","Livestock Geneticist","Animal Health Inspector","Herdsman","Poultry Attendant","Milker","Stable Hand","Feed Mill Operator","Livestock Hauler","Security Guard","Sanitation Crew","Accountant","Procurement Officer","HR Coordinator","Logistics Coordinator","Sales Manager"],
      "Aquaculture": ["Fish Farm Manager","Marine Biologist","Aquaculturist","Water Quality Technician","Fish Pathologist","RAS Specialist","Fisheries Ecologist","Algae Technician","Pond Attendant","Cage Technician","Net Repairer","Fish Feeder","Trawler Deckhand","Aquaculture Plumber","Security Guard","Office Cleaner","Accountant","Exports Officer","HR Generalist","Supply Chain Officer"],
      "Forestry": ["Forest Manager","Forester","Forest Ranger","Silviculturist","Timber Cruiser","Log Grader","Arborist","Fire Management Officer","Chainsaw Operator","Skidder Operator","Tree Climber","Choker Setter","Logging Truck Driver","Security Guard","Accountant","Permitting Specialist","HR Officer","Land Rights Coordinator","HSE Manager"]
    },
    "Non-Agriculture": {
      "Mining & Extractive": ["Mine Manager","Petroleum Engineer","Reservoir Engineer","Drilling Engineer","Geologist","Geophysicist","Metallurgist","Mine Surveyor","Ventilation Officer","Blasting Engineer","Environmental Coordinator","Roustabout","Roughneck","Derrickhand","Heavy Equipment Operator","Drill Rig Operator","Crusher Operator","Maintenance Mechanic","Security Guard","Accountant","Procurement Manager","HR Business Partner","Logistics Coordinator","Regulatory Officer"],
      "Manufacturing": ["Factory Manager","Production Manager","QA Manager","Food Technologist","Product Developer","Lab Technician","QC Inspector","Brewmaster","Industrial Baker","Machine Engineer","Machine Operator","Packaging Hand","Warehouse Loader","Delivery Driver","Sanitation Worker","Accountant","Purchasing Officer","Supply Chain Coordinator","HR Officer","Compliance Officer"],
      "Construction": ["Project Manager","Site Manager","Civil Engineer","Structural Engineer","Quantity Surveyor","Architect","BIM Coordinator","Land Surveyor","Safety Officer","CAD Technician","Bricklayer","Carpenter","Electrician","Plumber","Crane Operator","Scaffolder","Painter","Tipper Driver","Site Security","Post-Construction Cleaner","Construction Accountant","Contract Administrator","Document Controller","HR Manager","Procurement Officer"],
      "ICT & Digital": ["CTO","IT Project Manager","Product Manager","Software Engineer","Full-stack Developer","Mobile Developer","UI/UX Designer","Data Scientist","Cybersecurity Specialist","Cloud Architect","Systems Admin","AI/ML Engineer","Network Engineer","IT Helpdesk","Hardware Repairer","Data Entry","CCTV Installer","Office Cleaner","IT Accountant","Digital Marketing Manager","Content Strategist","IT Recruiter","Technical Writer"],
      "Financial Services": ["Branch Manager","Operations Manager","Credit Manager","Loan Officer","Credit Analyst","Relationship Manager","Risk Officer","Mobile Money Coordinator","Bank Teller","Cashier","Bullion Driver","Armed Security","Office Cleaner","Accountant","Data Entry Clerk","HR Officer","Customer Service Executive"],
      "Healthcare": ["Hospital Administrator","Medical Director","Nursing Superintendent","Medical Doctor","Registered Nurse","Pharmacist","Lab Scientist","Radiographer","Physiotherapist","Biomedical Engineer","Ward Assistant","Pharmacy Technician","Ambulance Driver","Hospital Security","Sanitation Officer","Gardener","Medical Accountant","Records Officer","HR Manager","Insurance Coordinator","Medical Secretary"],
      "Education": ["Principal","Registrar","Dean","Director of Studies","Teacher","Lecturer","Curriculum Developer","Educational Psychologist","Librarian","Lab Technician","Teaching Assistant","School Nurse","Bus Driver","Security Guard","Janitor","Gardener","School Accountant","Admissions Officer","HR Manager","Exams Officer","School Secretary"],
      "Hospitality & Tourism": ["Hotel GM","Front Office Manager","Executive Housekeeper","F&B Manager","Event Planner","Revenue Manager","Maintenance Engineer","IT Specialist","Front Desk","Bellhop","Room Attendant","Laundry Worker","Security","Gardener","Shuttle Driver","Hotel Accountant","Reservations Agent","HR Manager","Night Auditor"],
      "Retail & Trade": ["Store Manager","Floor Manager","Merchandise Manager","Branch Manager","Regional Director","Visual Merchandiser","Buyer","Pricing Analyst","Loss Prevention","E-commerce Specialist","Sales Associate","Cashier","Shelf Stocker","Warehouse Picker","Delivery Driver","Security Guard","Store Cleaner","Retail Accountant","Inventory Manager","Procurement Officer","HR Coordinator","Customer Service Manager"],
      "Logistics & Transport": ["Fleet Manager","Logistics Director","Warehouse Manager","Supply Chain Manager","Port Manager","Logistics Analyst","Route Optimizer","Transport Safety Officer","WMS Admin","Customs Broker","Freight Forwarder","HGV Driver","Forklift Operator","Courier","Loader","Fleet Mechanic","Warehouse Security","Facility Cleaner","Logistics Accountant","Documentation Specialist","Dispatcher","HR Specialist","Cargo Coordinator"]
    }
  }
};

// ===== STATE =====
let formState = {
  collectorName: '',
  deviceId: '',
  isSubmitting: false,
  isSyncing: false,
  isAdmin: false,
  adminPassword: '',
  masterSheetData: [],
  reportFilteredData: null,
  currentView: 'form',
  isSheetLoading: false,
  pendingAdminView: null,
  accessMode: null, // 'token' | 'capacity-existing' | 'capacity-new' | 'admin'
  consentName: ''   // stored when participant is loaded, used for name mismatch check
};

let db = JSON.parse(localStorage.getItem(CONFIG.LOCAL_DB_KEY)) || [];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  updatePartnerDisplays();
  syncPendingSubmissions();
  initializeFromUrlParams();
});

function initializeForm() {
  document.getElementById('onboardingDate').valueAsDate = new Date();
  formState.deviceId = generateDeviceId();
  document.getElementById('deviceId').value = formState.deviceId;
  populateRegions();
  const saved = localStorage.getItem('happyKollectCollector');
  if (saved) {
    document.getElementById('collectorName').value = saved;
    formState.collectorName = saved;
  }
  updateIds();
  handleIdTypeChange();
  toggleBaselineEmploymentFields();
  toggleCapacityFields(false);
  togglePlacementFields(false);
  updateOnlineStatus();
}

// ===== LOCK / UNLOCK =====
function initializeFromUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');
  const mode = params.get('mode');

  if (token) {
    unlockWithToken(token);
  } else if (mode === 'capacity') {
    showCapacityEntryScreen();
  } else {
    showLockedScreen();
  }
}

function showLockedScreen() {
  document.getElementById('lockedScreen').classList.remove('hidden');
  document.getElementById('view-form').classList.add('hidden');
  document.getElementById('capacityEntryScreen').classList.add('hidden');
}

function showCapacityEntryScreen() {
  document.getElementById('capacityConsentScreen').classList.remove('hidden');
  document.getElementById('capacityEntryScreen').classList.add('hidden');
  document.getElementById('lockedScreen').classList.add('hidden');
  document.getElementById('view-form').classList.add('hidden');
  initCcSignature();
}
let ccSigCanvas, ccSigCtx, ccSigDrawing = false;

function initCcSignature() {
  const old = document.getElementById('ccSigCanvas');
  if (!old) return;
  const fresh = old.cloneNode(false);
  old.parentNode.replaceChild(fresh, old);
  ccSigCanvas = fresh;
  ccSigCanvas.width  = ccSigCanvas.offsetWidth  || 400;
  ccSigCanvas.height = ccSigCanvas.offsetHeight || 120;
  ccSigCtx = ccSigCanvas.getContext('2d');
  ccSigCtx.strokeStyle = '#1e293b';
  ccSigCtx.lineWidth   = 2;
  ccSigCtx.lineCap     = 'round';
  ccSigDrawing = false;

  function pos(e) {
    const r = ccSigCanvas.getBoundingClientRect();
    const s = e.touches ? e.touches[0] : e;
    return { x: (s.clientX - r.left) * (ccSigCanvas.width / r.width), y: (s.clientY - r.top) * (ccSigCanvas.height / r.height) };
  }
  ccSigCanvas.addEventListener('mousedown',  e => { ccSigDrawing = true; ccSigCtx.beginPath(); const p = pos(e); ccSigCtx.moveTo(p.x, p.y); });
  ccSigCanvas.addEventListener('mousemove',  e => { if (!ccSigDrawing) return; const p = pos(e); ccSigCtx.lineTo(p.x, p.y); ccSigCtx.stroke(); });
  ccSigCanvas.addEventListener('mouseup',    () => ccSigDrawing = false);
  ccSigCanvas.addEventListener('touchstart', e => { e.preventDefault(); ccSigDrawing = true; ccSigCtx.beginPath(); const p = pos(e); ccSigCtx.moveTo(p.x, p.y); }, { passive: false });
  ccSigCanvas.addEventListener('touchmove',  e => { e.preventDefault(); if (!ccSigDrawing) return; const p = pos(e); ccSigCtx.lineTo(p.x, p.y); ccSigCtx.stroke(); }, { passive: false });
  ccSigCanvas.addEventListener('touchend',   () => ccSigDrawing = false);
}

function clearCcSignature() {
  if (ccSigCtx) ccSigCtx.clearRect(0, 0, ccSigCanvas.width, ccSigCanvas.height);
}

function isCcSigEmpty() {
  if (!ccSigCanvas) return true;
  const d = ccSigCtx.getImageData(0, 0, ccSigCanvas.width, ccSigCanvas.height).data;
  for (let i = 3; i < d.length; i += 4) { if (d[i] > 0) return false; }
  return true;
}

async function submitCapacityConsent() {
  const errEl  = document.getElementById('capacityConsentError');
  const venue  = document.getElementById('ccVenue').value.trim();
  const name   = document.getElementById('ccName').value.trim();
  const phone  = document.getElementById('ccPhone').value.trim();
  const email  = document.getElementById('ccEmail').value.trim();
  const agreed = document.getElementById('capacityConsentAgree').checked;

  if (!venue || !name || !phone) { errEl.textContent = 'Please fill in Venue, Name and Phone.'; errEl.classList.remove('hidden'); return; }
  if (!agreed)                   { errEl.textContent = 'Please agree to the consent terms to continue.'; errEl.classList.remove('hidden'); return; }
  if (isCcSigEmpty())            { errEl.textContent = 'Please provide the participant signature.'; errEl.classList.remove('hidden'); return; }
  errEl.classList.add('hidden');

  const btn = document.getElementById('capacityConsentBtn');
  btn.disabled = true;
  btn.textContent = 'Submitting consent...';

  try {
    const signatureDataUrl = ccSigCanvas.toDataURL('image/png');
    const response = await fetch(CONFIG.CONSENT_API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'initConsent', name, phone, email, venue, signature: signatureDataUrl, language: 'en', timestamp: new Date().toISOString() })
    });
    const result = await response.json();
    if (result.status !== 'OK') throw new Error(result.message || 'Consent submission failed.');

    // Consent recorded — now unlock capacity building with the returned token
    const token = result.token;
    formState.token = token;
    formState.accessMode = 'capacity-new';
    // Preserve whatever name was already on file; only pre-fill if fields are blank
    formState.consentName = result.existingConsentName || name;
    document.getElementById('capacityConsentScreen').classList.add('hidden');
    initializeForm();
    const parts = (result.existingConsentName || name).trim().split(/\s+/);
    if (!document.getElementById('surname').value)    document.getElementById('surname').value   = parts[0] || '';
    if (!document.getElementById('firstName').value) document.getElementById('firstName').value = parts.slice(1).join(' ') || '';
    document.getElementById('telephone').value = phone;
    showSections({ A: true, B: true, C: true, D: false });
    document.getElementById('view-form').classList.remove('hidden');
    showToast(result.emailSent ? 'Consent recorded. Email sent to participant.' : 'Consent recorded.', 'success');
  } catch (err) {
    errEl.textContent = 'Error: ' + err.message;
    errEl.classList.remove('hidden');
    btn.disabled = false;
    btn.textContent = 'Agree and Continue';
  }
}

function selectCapacityMode(mode) {
  document.getElementById('btnHasId').style.borderColor = mode === 'existing' ? '#5B45E8' : '#e2e8f0';
  document.getElementById('btnNoId').style.borderColor = mode === 'new' ? '#5B45E8' : '#e2e8f0';
  if (mode === 'existing') {
    document.getElementById('participantIdLookup').classList.remove('hidden');
  } else {
    document.getElementById('capacityEntryScreen').classList.add('hidden');
    formState.accessMode = 'capacity-new';
    initializeForm();
    showSections({ A: true, B: true, C: true, D: false });
    document.getElementById('view-form').classList.remove('hidden');
  }
}

async function lookupAndContinue() {
  const pid = document.getElementById('lookupParticipantId').value.trim();
  const errEl = document.getElementById('lookupError');
  errEl.classList.add('hidden');
  if (!pid) { errEl.textContent = 'Please enter your Participant ID.'; errEl.classList.remove('hidden'); return; }

  try {
    const result = await apiAction('getParticipantById', { participantId: pid });
    if (!result || !result.participant?.participantId) throw new Error('Participant not found.');
    document.getElementById('capacityEntryScreen').classList.add('hidden');
    formState.accessMode = 'capacity-existing';
    formState.consentName = result.participant.consentName || '';
    initializeForm();
    prefillParticipantInfo(result.participant);
    lockSectionB();
    showSections({ A: true, B: true, C: true, D: false });
    document.getElementById('view-form').classList.remove('hidden');
  } catch (err) {
    errEl.textContent = err.message || 'Could not find that Participant ID. Please check and try again.';
    errEl.classList.remove('hidden');
  }
}

async function unlockWithToken(token) {
  try {
    const result = await apiAction('getParticipantByToken', { token });
    if (!result || !result.participant?.participantId) throw new Error('Invalid or expired link.');
    formState.accessMode = 'token';
    formState.token = token;
    formState.consentName = result.participant.consentName || '';
    initializeForm();
    prefillParticipantInfo(result.participant);
    showSections({ A: true, B: true, C: false, D: false });
    document.getElementById('view-form').classList.remove('hidden');
  } catch (err) {
    document.getElementById('lockedScreen').classList.remove('hidden');
    document.getElementById('lockedScreen').querySelector('p').textContent =
      'Your link is invalid or has expired. Please contact your HAPPY Program field officer.';
  }
}

function showSections({ A, B, C, D }) {
  document.getElementById('sectionA').classList.toggle('hidden', !A);
  document.getElementById('sectionB').classList.toggle('hidden', !B);
  document.getElementById('sectionC').classList.toggle('hidden', !C);
  document.getElementById('sectionD').classList.toggle('hidden', !D);
}

function lockSectionB() {
  const section = document.getElementById('sectionB');
  section.querySelectorAll('input, select, textarea').forEach(el => {
    el.disabled = true;
  });
  const notice = document.createElement('p');
  notice.textContent = 'Participant information loaded from existing record.';
  notice.style.cssText = 'font-size:0.75rem;color:#7c3aed;margin-bottom:0.5rem;font-weight:600;';
  section.querySelector('h2').insertAdjacentElement('afterend', notice);
}

function prefillParticipantInfo(data) {
  const fields = [
    'participantId','hamisId','onboardingDate','implementingPartner','region','district',
    'community','locationStatus','surname','firstName','otherNames','sex','dob',
    'telephone','idType','ghanaCardId','voterId','refugeeStatus','nationality',
    'displacementStatus','displacementReason','originalCommunity','hostCommunity',
    'disabilityStatus','disabilitySpecify','educationLevel','employmentStatus',
    'currentOccupation','monthlyIncome','incomeFrequency','sector','industry',
    'jobType','jobRole','workRegion','workDistrict'
  ];
  fields.forEach(f => {
    const el = document.getElementById(f);
    if (el && data[f] !== undefined) el.value = data[f];
  });
  if (data.age) document.getElementById('age').value = data.age;
  if (data.participantTypeAge) document.getElementById('participantTypeAge').value = data.participantTypeAge;
}

function setupEventListeners() {
  document.getElementById('collectorName').addEventListener('change', e => {
    formState.collectorName = e.target.value;
    localStorage.setItem('happyKollectCollector', e.target.value);
  });
  document.getElementById('telephone').addEventListener('blur', e => validatePhone(e.target));
  document.getElementById('ghanaCardId').addEventListener('blur', e => validateGhanaCard(e.target));
  window.addEventListener('online', () => { updateOnlineStatus(); syncPendingSubmissions(); });
  window.addEventListener('offline', updateOnlineStatus);
  document.getElementById('mainForm').addEventListener('keypress', e => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') e.preventDefault();
  });
  document.getElementById('mainForm').addEventListener('invalid', e => {
    showToast(`Please complete: ${getFieldLabel(e.target)}`, 'error');
  }, true);
}

// ===== ADMIN STAGE SELECTION (Entry tab) =====
function showAdminStageScreen() {
  ['lockedScreen','capacityConsentScreen','capacityEntryScreen',
   'placementLookupScreen','registrationLookupScreen','view-form'].forEach(id => {
    document.getElementById(id)?.classList.add('hidden');
  });
  document.getElementById('adminStageScreen')?.classList.remove('hidden');
}

function adminSelectStage(stage) {
  document.getElementById('adminStageScreen')?.classList.add('hidden');

  if (stage === 'registration') {
    // Fresh form — admin registers a brand-new participant
    formState.accessMode = 'admin';
    formState.consentName = '';
    initializeForm();
    showSections({ A: true, B: true, C: true, D: true });
    document.getElementById('view-form').classList.remove('hidden');
    showToast('New participant entry — fill in all sections.', 'info');

  } else if (stage === 'capacity') {
    showCapacityEntryScreen();

  } else if (stage === 'placement') {
    document.getElementById('placementLookupScreen')?.classList.remove('hidden');
    document.getElementById('placementLookupError')?.classList.add('hidden');
    const inp = document.getElementById('placementLookupId');
    if (inp) { inp.value = ''; inp.focus(); }

  } else if (stage === 'update-registration') {
    document.getElementById('registrationLookupScreen')?.classList.remove('hidden');
    document.getElementById('regLookupError')?.classList.add('hidden');
    const inp = document.getElementById('regLookupInput');
    if (inp) { inp.value = ''; inp.focus(); }
  }
}

// Look up a participant by ID or phone to continue/correct their registration
async function loadParticipantForRegistration() {
  const raw   = (document.getElementById('regLookupInput')?.value || '').trim();
  const errEl = document.getElementById('regLookupError');
  const btn   = document.getElementById('regLookupBtn');
  errEl.classList.add('hidden');
  if (!raw) {
    errEl.textContent = 'Enter a Participant ID or phone number.';
    errEl.classList.remove('hidden');
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Loading…';

  try {
    // Single flexible action — backend tries ID, phone, Ghana Card, then name
    const result = await apiAction('getParticipantByLookup', { query: raw });

    // Multiple name matches — show a pick list instead of loading directly
    if (result.status === 'MULTIPLE') {
      renderNameMatchList(result.participants);
      btn.disabled = false;
      btn.textContent = 'Load Participant';
      return;
    }

    if (!result?.participant?.participantId) throw new Error('No participant found.');

    const p = result.participant;

    // Show a status summary before opening the form
    const stage = p.currentStage || 'unknown';
    const statusMsg = {
      'registration':          'Consent taken — registration not yet started.',
      'registration_complete': 'Registration submitted — you can update it.',
      'capacity_complete':     'Training complete — registration can still be corrected.',
      'placement_complete':    'Participant is fully placed — be careful editing registration data.'
    }[stage] || `Stage: ${stage}`;
    showToast(statusMsg, stage === 'placement_complete' ? 'error' : 'info');

    // Open the registration form pre-filled with existing data
    document.getElementById('registrationLookupScreen').classList.add('hidden');
    formState.accessMode  = 'admin';
    formState.consentName = p.consentName || '';

    initializeForm();
    prefillParticipantInfo(p);

    // Registration update — show A + B only; C and D are separate stages
    showSections({ A: true, B: true, C: false, D: false });
    document.getElementById('view-form').classList.remove('hidden');

    // Show a prominent notice about which participant is being edited
    showRegistrationUpdateBanner(p);

  } catch (err) {
    errEl.textContent = err.message;
    errEl.classList.remove('hidden');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Load Participant';
  }
}

function renderNameMatchList(participants) {
  const listEl = document.getElementById('regNameMatchList');
  const errEl  = document.getElementById('regLookupError');
  if (!listEl) return;
  errEl.classList.add('hidden');
  listEl.innerHTML = `
    <div style="padding:0.6rem 0.75rem;background:#fffbeb;border-bottom:1px solid #fde68a;">
      <strong style="font-size:0.78rem;color:#92400e;">${participants.length} participants found</strong>
      <span style="font-size:0.72rem;color:#92400e;"> — select one to continue</span>
    </div>
    ${participants.map(p => `
      <button type="button" onclick="selectNameMatch('${escapeHtml(p.participantId)}')"
        style="display:flex;align-items:center;gap:0.75rem;width:100%;padding:0.6rem 0.75rem;border:none;border-bottom:1px solid #fef3c7;background:#fff;cursor:pointer;text-align:left;"
        onmouseover="this.style.background='#fffbeb'" onmouseout="this.style.background='#fff'">
        <div style="flex:1;min-width:0;">
          <div style="font-weight:700;font-size:0.8rem;color:#1e293b;">${escapeHtml((p.surname || '') + ', ' + (p.firstName || ''))}</div>
          <div style="font-size:0.67rem;color:#64748b;font-family:monospace;">${escapeHtml(p.participantId)}</div>
        </div>
        <div style="text-align:right;flex-shrink:0;">
          <div style="font-size:0.67rem;color:#64748b;">${escapeHtml(p.region || '')}</div>
          <div style="font-size:0.65rem;color:#94a3b8;">${escapeHtml(p.currentStage || '')}</div>
        </div>
      </button>`).join('')}`;
  listEl.classList.remove('hidden');
}

async function selectNameMatch(participantId) {
  // Hide the pick list and populate the input with the chosen ID, then re-trigger lookup
  document.getElementById('regNameMatchList')?.classList.add('hidden');
  const inp = document.getElementById('regLookupInput');
  if (inp) inp.value = participantId;
  await loadParticipantForRegistration();
}

function showRegistrationUpdateBanner(p) {
  // Remove any existing banner first
  document.getElementById('regUpdateBanner')?.remove();
  const banner = document.createElement('div');
  banner.id = 'regUpdateBanner';
  banner.style.cssText = 'background:#fffbeb;border:1.5px solid #f59e0b;border-radius:0.5rem;padding:0.65rem 1rem;margin-bottom:1rem;font-size:0.78rem;color:#92400e;line-height:1.5;display:flex;justify-content:space-between;align-items:center;';
  banner.innerHTML = `
    <span>
      <strong>Updating registration:</strong> ${escapeHtml(p.participantId)}
      &bull; Consent name: <em>"${escapeHtml(p.consentName || 'not recorded')}"</em>
      &bull; Stage: <strong>${escapeHtml(p.currentStage || 'unknown')}</strong>
    </span>
    <button type="button" onclick="document.getElementById('regUpdateBanner')?.remove()"
      style="font-size:0.7rem;color:#92400e;background:none;border:none;cursor:pointer;margin-left:0.75rem;padding:0;">&times;</button>`;
  const form = document.getElementById('mainForm');
  if (form) form.insertAdjacentElement('beforebegin', banner);
}

async function loadParticipantForPlacement() {
  const pid   = document.getElementById('placementLookupId').value.trim().toUpperCase();
  const errEl = document.getElementById('placementLookupError');
  errEl.classList.add('hidden');
  if (!pid) {
    errEl.textContent = 'Please enter a Participant ID.';
    errEl.classList.remove('hidden');
    return;
  }
  const btn = document.querySelector('#placementLookupScreen button[onclick="loadParticipantForPlacement()"]');
  if (btn) { btn.disabled = true; btn.textContent = 'Loading…'; }
  try {
    const result = await apiAction('getParticipantById', { participantId: pid });
    if (!result?.participant?.participantId) throw new Error('Participant not found.');
    const p = result.participant;
    if (p.capacityBuildingStatus !== 'submitted') {
      throw new Error('This participant has not yet completed capacity building. Placement requires training to be recorded first.');
    }
    if (p.jobPlacementStatus === 'submitted') {
      throw new Error('This participant has already been placed (jobPlacementStatus = submitted).');
    }
    document.getElementById('placementLookupScreen').classList.add('hidden');
    formState.accessMode = 'admin';
    formState.consentName = p.consentName || '';
    initializeForm();
    prefillParticipantInfo(p);
    lockSectionB();
    // Show only participant info (read-only) + placement section
    showSections({ A: true, B: true, C: false, D: true });
    document.getElementById('view-form').classList.remove('hidden');
    // Pre-tick "placed by partner" to open placement fields
    document.querySelectorAll('input[name="pl_check"]').forEach(r => { r.checked = r.value === 'Yes'; });
    togglePlacementFields(true);
    showToast('Record loaded. Complete Section D and submit.', 'success');
  } catch (err) {
    errEl.textContent = err.message;
    errEl.classList.remove('hidden');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Load Participant'; }
  }
}

// ===== VIEW SWITCHING =====
function setView(view) {
  formState.currentView = view;
  ['form', 'sheet', 'dashboard', 'report', 'batch'].forEach(v => {
    document.getElementById('view-' + v).classList.toggle('hidden', view !== v);
    const tab = document.getElementById('tab-' + v);
    if (tab) tab.classList.toggle('active', view === v);
  });
}

// ===== ADMIN LOGIN =====
function showAdminLogin() {
  openAdminView('sheet');
}

function openAdminView(targetView) {
  if (formState.isAdmin) {
    setView(targetView);
    if (targetView === 'dashboard') loadDashboard();
    else if (targetView === 'report') loadReport();
    else if (targetView === 'sheet') loadSheetData();
    else if (targetView === 'batch') loadBatchPlacement();
    return;
  }
  formState.pendingAdminView = targetView;
  document.getElementById('adminModal').classList.remove('hidden');
  document.getElementById('adminPassword').value = '';
  document.getElementById('adminPassword').focus();
}
function closeAdminLogin() {
  document.getElementById('adminModal').classList.add('hidden');
}
async function verifyAdmin() {
  const pwd = document.getElementById('adminPassword').value;
  if (!pwd) { showToast('Enter the admin password', 'error'); return; }
  try {
    const data = await fetchProtectedSheetData(pwd);
    formState.isAdmin = true;
    formState.accessMode = 'admin';
    formState.adminPassword = pwd;
    formState.masterSheetData = data;
    closeAdminLogin();
    showToast('Admin access granted', 'success');
    // Coming from locked screen → show stage selection instead of jumping into the form
    if (!document.getElementById('lockedScreen').classList.contains('hidden')) {
      document.getElementById('lockedScreen').classList.add('hidden');
      showAdminStageScreen();
      return; // stage selection will handle the rest
    }
    const targetView = formState.pendingAdminView || 'sheet';
    formState.pendingAdminView = null;
    if (targetView === 'dashboard') { setView('dashboard'); populateDashboardFilters(data); applyDashboardFilters(); }
    else if (targetView === 'report') { setView('report'); renderReport(data); }
    else if (targetView === 'batch') { setView('batch'); loadBatchPlacement(); }
    else { renderSheet(data); setView('sheet'); }
  } catch (err) {
    showToast(`Access denied: ${err.message}`, 'error');
  }
}

// ===== REGION & DISTRICT LOGIC =====
function populateRegions() {
  ['region', 'workRegion', 'placementRegion'].forEach(selId => {
    const sel = document.getElementById(selId);
    if (!sel) return;
    Object.keys(CONFIG.REGIONS).sort().forEach(region => {
      const opt = document.createElement('option');
      opt.value = region; opt.textContent = region;
      sel.appendChild(opt);
    });
  });
}
function populateDistricts(regId, distId) {
  const region = document.getElementById(regId).value;
  const dist = document.getElementById(distId);
  dist.innerHTML = '<option value="">Select District</option>';
  if (region && CONFIG.REGIONS[region]) {
    CONFIG.REGIONS[region].sort().forEach(d => {
      const opt = document.createElement('option');
      opt.value = d; opt.textContent = d;
      dist.appendChild(opt);
    });
    dist.disabled = false;
  } else {
    dist.disabled = true;
  }
}

// ===== CASCADE: Sector → Industry → Job Type → Job Role =====
function populateJobTypeOptions(select) {
  select.innerHTML = '<option value="">Select</option>';
  ['Management','Technical','Administrative','Support'].forEach(type => {
    const opt = document.createElement('option');
    opt.value = type; opt.textContent = type;
    select.appendChild(opt);
  });
  select.disabled = false;
}
function populateIndustries() {
  const sector = document.getElementById('sector').value;
  const indSel = document.getElementById('industry');
  const typeSel = document.getElementById('jobType');
  const roleSel = document.getElementById('jobRole');
  [indSel, typeSel, roleSel].forEach(s => { s.innerHTML = '<option value="">Select</option>'; s.disabled = true; });
  if (sector && CONFIG.SECTOR_DATA[sector]) {
    Object.keys(CONFIG.SECTOR_DATA[sector]).sort().forEach(ind => {
      const opt = document.createElement('option');
      opt.value = ind; opt.textContent = ind;
      indSel.appendChild(opt);
    });
    indSel.disabled = false;
  }
}
function populateJobTypes() {
  const industry = document.getElementById('industry').value;
  const typeSel = document.getElementById('jobType');
  document.getElementById('jobRole').innerHTML = '<option value="">Select</option>';
  document.getElementById('jobRole').disabled = true;
  if (industry) populateJobTypeOptions(typeSel);
}
function populateJobRoles() {
  const sector = document.getElementById('sector').value;
  const industry = document.getElementById('industry').value;
  const jobType = document.getElementById('jobType').value;
  const roleSel = document.getElementById('jobRole');
  roleSel.innerHTML = '<option value="">Select</option>';
  if (sector && industry && jobType && CONFIG.SECTOR_DATA[sector]?.[industry]) {
    CONFIG.SECTOR_DATA[sector][industry]
      .filter(role => classifyJobRole(role) === jobType)
      .forEach(role => {
        const opt = document.createElement('option');
        opt.value = role; opt.textContent = role;
        roleSel.appendChild(opt);
      });
    roleSel.disabled = false;
  }
}
function populatePlacementIndustries() {
  const sector = document.getElementById('plSector').value;
  const indSel = document.getElementById('plIndustry');
  const typeSel = document.getElementById('plJobType');
  const roleSel = document.getElementById('plJobRole');
  [indSel, typeSel, roleSel].forEach(s => { s.innerHTML = '<option value="">Select</option>'; s.disabled = true; });
  if (sector && CONFIG.SECTOR_DATA[sector]) {
    Object.keys(CONFIG.SECTOR_DATA[sector]).sort().forEach(ind => {
      const opt = document.createElement('option');
      opt.value = ind; opt.textContent = ind;
      indSel.appendChild(opt);
    });
    indSel.disabled = false;
  }
}
function populatePlacementJobTypes() {
  const industry = document.getElementById('plIndustry').value;
  const typeSel = document.getElementById('plJobType');
  document.getElementById('plJobRole').innerHTML = '<option value="">Select</option>';
  document.getElementById('plJobRole').disabled = true;
  if (industry) populateJobTypeOptions(typeSel);
}
function populatePlacementJobRoles() {
  const sector = document.getElementById('plSector').value;
  const industry = document.getElementById('plIndustry').value;
  const jobType = document.getElementById('plJobType').value;
  const roleSel = document.getElementById('plJobRole');
  roleSel.innerHTML = '<option value="">Select</option>';
  if (sector && industry && jobType && CONFIG.SECTOR_DATA[sector]?.[industry]) {
    CONFIG.SECTOR_DATA[sector][industry]
      .filter(role => classifyJobRole(role) === jobType)
      .forEach(role => {
        const opt = document.createElement('option');
        opt.value = role; opt.textContent = role;
        roleSel.appendChild(opt);
      });
    roleSel.disabled = false;
  }
}
function classifyJobRole(role) {
  const text = role.toLowerCase();
  if (/\b(manager|director|principal|dean|registrar|administrator|superintendent|cto|lead|head)\b/.test(text)) return 'Management';
  if (/\b(accountant|bookkeeper|officer|coordinator|specialist|analyst|secretary|clerk|cashier|teller|buyer|recruiter|writer|controller|auditor|agent|rep|representative|relationship|records|admissions|documentation|dispatcher)\b/.test(text)) return 'Administrative';
  if (/\b(cleaner|security|guard|driver|loader|laborer|worker|operator|attendant|hand|janitor|gardener|courier|picker|stocker|sanitation|bellhop|housekeeper|room|laundry|shelf|storekeeper|warehouse|front desk|cashier|helper|assistant)\b/.test(text)) return 'Support';
  return 'Technical';
}

// ===== CONDITIONAL FIELD TOGGLES =====
function toggleRefugeeField() {
  const show = document.getElementById('refugeeStatus').value === 'Yes';
  document.getElementById('nationalityField').classList.toggle('hidden', !show);
}
function toggleDisplacementFields() {
  const show = document.getElementById('displacementStatus').value === 'Yes';
  ['displacementReasonField','originalCommunityField','hostCommunityField'].forEach(id => {
    document.getElementById(id).classList.toggle('hidden', !show);
  });
}
function toggleDisabilityField() {
  const show = document.getElementById('disabilityStatus').value === 'Yes';
  document.getElementById('disabilitySpecField').classList.toggle('hidden', !show);
  if (!show) document.getElementById('disabilitySpecify').value = '';
}
function toggleBaselineEmploymentFields() {
  const status = document.getElementById('employmentStatus').value;
  const show = status === 'Employed' || status === 'Casual Worker';
  document.getElementById('baselineEmploymentFields').classList.toggle('show', show);
  if (!show) {
    ['currentOccupation','monthlyIncome','incomeFrequency','sector','industry','jobType','jobRole','workRegion','workDistrict','workCommunity'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    ['industry','jobType','jobRole','workDistrict'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.disabled = true;
    });
  }
}
function toggleCapacityFields(show) {
  document.getElementById('capacityFields').classList.toggle('show', show);
  setSectionControlsDisabled('capacityFields', !show);
}
function toggleTrainingModeFields() {
  const mode = document.getElementById('trainingMode').value;
  document.getElementById('virtualTrainingFields').classList.toggle('hidden', mode !== 'Virtual' && mode !== 'Hybrid');
  document.getElementById('trainingLocationGroup').classList.toggle('hidden', mode === 'Virtual' || mode === '');
}
function togglePlacementFields(show) {
  document.getElementById('placementFields').classList.toggle('show', show);
  setSectionControlsDisabled('placementFields', !show);
  document.getElementById('currentEmploymentFields').classList.toggle('show', !show);
  if (show && !document.getElementById('placementRegion').value) {
    document.getElementById('placementDistrict').disabled = true;
  }
}
function togglePreviousTrainingDetails() {
  const show = document.getElementById('previousTrainings').value === 'Yes';
  document.getElementById('previousTrainingDetails').classList.toggle('hidden', !show);
}
function toggleCurrentEmploymentDetails() {
  const show = document.getElementById('currentlyEmployed').value === 'Yes';
  document.getElementById('currentEmploymentDetails').classList.toggle('hidden', !show);
}
function setSectionControlsDisabled(sectionId, disabled) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  section.querySelectorAll('input, select, textarea').forEach(control => {
    if (control.required) control.dataset.requiredWhenVisible = 'true';
    if (disabled) {
      control.required = false;
    } else if (control.dataset.requiredWhenVisible === 'true') {
      control.required = true;
    }
    control.disabled = disabled;
    if (disabled && control.type !== 'radio' && control.type !== 'checkbox') control.value = '';
  });
}
function getFieldLabel(field) {
  const group = field.closest('.field-group');
  const label = group ? group.querySelector('.field-label') : null;
  return label ? label.textContent.replace(/\s+/g, ' ').trim() : (field.id || 'required field');
}
function handleIdTypeChange() {
  const idType = document.getElementById('idType').value;
  const ghanaCard = document.getElementById('ghanaCardId');
  const voterId = document.getElementById('voterId');
  ghanaCard.disabled = idType === "Voter's ID";
  voterId.disabled = idType === 'Ghana Card';
  ghanaCard.required = idType === 'Ghana Card';
  voterId.required = idType === "Voter's ID";
  if (ghanaCard.disabled) ghanaCard.value = '';
  if (voterId.disabled) voterId.value = '';
}

// ===== CALCULATIONS =====
function calculateAge() {
  const dobInput = document.getElementById('dob');
  const dob = dobInput.value;
  if (!dob) { document.getElementById('age').value = ''; document.getElementById('participantTypeAge').value = ''; return; }
  const birth = new Date(dob), today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  if (birth > today || age < 0) {
    showToast('Date of birth cannot be in the future.', 'error');
    dobInput.value = '';
    document.getElementById('age').value = '';
    document.getElementById('participantTypeAge').value = '';
    dobInput.focus();
    return;
  }
  if (age < 10) {
    showToast('Check the date of birth — participant appears to be under 10 years old.', 'error');
    dobInput.value = '';
    document.getElementById('age').value = '';
    document.getElementById('participantTypeAge').value = '';
    dobInput.focus();
    return;
  }
  document.getElementById('age').value = age;
  document.getElementById('participantTypeAge').value = (age >= 15 && age <= 35) ? 'Youth' : 'Non-Youth';
}

// ===== ID GENERATION =====
function onPartnerChange() { updatePartnerDisplays(); updateIds(); }
function updatePartnerDisplays() {
  const partner = document.getElementById('implementingPartner').value || 'the implementing partner';
  document.getElementById('partnerNameDisplay').textContent = partner;
  document.getElementById('partnerNameDisplay2').textContent = partner;
}
function updateIds() {
  const partner = document.getElementById('implementingPartner').value || 'UNK';
  const region  = document.getElementById('region').value;
  const pPrefix = CONFIG.PARTNER_PREFIXES[partner] || partner.substring(0,3).toUpperCase();
  const rPrefix = region ? region.substring(0,3).toUpperCase() : null;
  const ts  = new Date().toISOString().replace(/[-:T.]/g,'').substring(0,14);
  const seq = getNextLocalSequence();
  const subId = rPrefix
    ? `${rPrefix}-${String(seq).padStart(6,'0')}-${ts}`
    : '(select region first)';
  document.getElementById('submissionId').value      = subId;
  document.getElementById('subIdDisplay').textContent = subId;
  // HAMIS ID is assigned server-side to ensure global uniqueness — do not generate client-side
  const hamisEl = document.getElementById('hamisId');
  if (hamisEl && !hamisEl.value) hamisEl.placeholder = 'Auto-assigned by server';
  document.getElementById('participantId').placeholder = `${pPrefix}--${String(seq).padStart(7,'0')} (will auto-generate)`;
}
function generateDeviceId() {
  const saved = localStorage.getItem(CONFIG.DEVICE_ID_KEY);
  if (saved) return saved;
  const hash = `${navigator.userAgent}${navigator.platform}${navigator.language}${Date.now()}`
    .split('').reduce((a,b) => { a = ((a<<5)-a)+b.charCodeAt(0); return a&a; }, 0);
  const id = `DEV-${Math.abs(hash).toString(36).toUpperCase().substring(0,8)}`;
  localStorage.setItem(CONFIG.DEVICE_ID_KEY, id);
  return id;
}
function generateParticipantId() {
  return `HAPPY-${new Date().getFullYear()}-${String(getNextLocalSequence()).padStart(6,'0')}`;
}

// ===== VALIDATION =====
function validatePhone(input) {
  const val = input.value.replace(/\D/g,'');
  if (val && !/^0\d{9}$/.test(val)) {
    showToast('Phone must be 10 digits starting with 0 (e.g., 0244111111)', 'error');
    input.focus();
    return false;
  }
  return true;
}
function validateGhanaCard(input) {
  const val = input.value.toUpperCase();
  if (val && !/^GHA-\d{9}-\d$/.test(val)) {
    showToast('Ghana Card must be: GHA-XXXXXXXXX-X', 'error');
    input.focus();
    return false;
  }
  return true;
}
function formatGhanaCard(input) {
  let val = input.value.toUpperCase().replace(/[^A-Z0-9-]/g,'');
  if (!val.startsWith('GHA-')) val = 'GHA-' + val.replace('GHA','');
  if (val.length > 13 && val[13] !== '-') val = val.slice(0,13) + '-' + val.slice(13);
  input.value = val.slice(0,15);
}

// ===== OFFLINE QUEUE =====
function getPendingSubmissions() {
  try { return JSON.parse(localStorage.getItem(CONFIG.QUEUE_KEY)) || []; } catch { return []; }
}
function setPendingSubmissions(queue) {
  localStorage.setItem(CONFIG.QUEUE_KEY, JSON.stringify(queue));
}
function getNextLocalSequence() {
  return db.length + getPendingSubmissions().length + 1;
}
function queueSubmission(formData, reason = '') {
  const queue = getPendingSubmissions();
  if (queue.some(item => item.data.localQueueId === formData.localQueueId)) return;
  queue.push({ id: formData.localQueueId, data: { ...formData, syncStatus: 'queued' }, queuedAt: new Date().toISOString(), attempts: 0, lastError: reason });
  setPendingSubmissions(queue);
}
async function postSubmission(formData) {
  return apiAction('saveParticipantInfo', formData);
}
async function apiAction(action, data = {}) {
  const response = await fetch(CONFIG.API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action, ...data, syncStatus: data.syncStatus || 'synced' })
  });
  const text = await response.text();
  let result;
  try { result = JSON.parse(text); } catch {
    throw new Error(text.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim() || 'Non-JSON response from backend');
  }
  if (!response.ok || (result.status !== 'OK' && result.status !== 'success')) {
    throw new Error(result.message || `Request failed (${response.status})`);
  }
  return result;
}
function saveLocalSubmission(formData, referenceId = '') {
  const record = { ...formData, referenceId, syncStatus: 'synced', syncedAt: new Date().toISOString() };
  if (!db.some(item => item.localQueueId === record.localQueueId)) {
    db.push(record);
    localStorage.setItem(CONFIG.LOCAL_DB_KEY, JSON.stringify(db));
  }
}
async function syncPendingSubmissions() {
  if (formState.isSyncing || !navigator.onLine) return;
  let queue = getPendingSubmissions();
  if (!queue.length) { updateOnlineStatus(); return; }
  formState.isSyncing = true;
  showToast(`Syncing ${queue.length} queued record(s)...`, 'info');
  for (const item of [...queue]) {
    try {
      const result = await postSubmission(item.data);
      saveLocalSubmission(item.data, result.referenceId || item.data.submissionId);
      queue = queue.filter(p => p.id !== item.id);
      localStorage.setItem(CONFIG.QUEUE_KEY, JSON.stringify(queue));
    } catch (err) {
      queue = queue.map(p => p.id !== item.id ? p : { ...p, attempts: p.attempts + 1, lastError: err.message, lastAttemptAt: new Date().toISOString() });
      localStorage.setItem(CONFIG.QUEUE_KEY, JSON.stringify(queue));
      showToast(`Sync paused: ${err.message}`, 'error');
      break;
    }
  }
  formState.isSyncing = false;
  if (!queue.length) showToast('All queued records synced.', 'success');
  updateOnlineStatus();
}

// ===== NAME MISMATCH CHECK =====
function namesMatch(consentName, surname, firstName) {
  const normalize = s => String(s || '').toLowerCase().replace(/[-]/g, ' ').replace(/\s+/g, ' ').trim();
  const registered = normalize(`${surname} ${firstName}`);
  const consented  = normalize(consentName);
  if (!registered.replace(/\s/g, '') || !consented) return true;
  const regWords = registered.split(' ').filter(w => w.length > 2);
  const conWords = consented.split(' ').filter(w => w.length > 2);
  return regWords.some(w => conWords.includes(w));
}

// ===== FORM SUBMISSION =====
async function handleSubmit(e) {
  e.preventDefault();
  if (formState.isSubmitting) return;
  if (!validateVisibleRequiredFields()) return;
  if (!validatePhone(document.getElementById('telephone'))) return;
  if (document.getElementById('idType').value === 'Ghana Card' && !validateGhanaCard(document.getElementById('ghanaCardId'))) return;

  // Name alignment check — warn if registered name doesn't share any words with consent name
  // Admin submissions are included so silent overwrites are caught too
  if (formState.consentName) {
    const surname    = document.getElementById('surname').value.trim();
    const firstName  = document.getElementById('firstName').value.trim();
    if (!namesMatch(formState.consentName, surname, firstName)) {
      const proceed = confirm(
        `⚠ Name mismatch detected\n\n` +
        `Consent name:    "${formState.consentName}"\n` +
        `Registered name: "${firstName} ${surname}"\n\n` +
        `These names do not appear to match. Is this the same person?\n\n` +
        `Press OK to submit anyway, or Cancel to go back and check.`
      );
      if (!proceed) return;
    }
  }

  formState.isSubmitting = true;
  const btn = document.getElementById('submitBtn');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span class="spinner"></span> Submitting...';
  btn.disabled = true;

  try {
    const formData = collectFormData();
    showToast(navigator.onLine ? 'Submitting to Google Sheets...' : 'Offline — saving locally.', 'info');
    if (!navigator.onLine) {
      queueSubmission(formData, 'Device offline');
      showSubmissionComplete(formData.submissionId, 'Saved locally. Will sync when internet returns.', 'queued');
    } else {
      try {
        const result = await postSubmission(formData);
        if (result.participantId) {
          formData.participantId = result.participantId;
          document.getElementById('participantId').value = result.participantId;
        }
        saveLocalSubmission(formData, result.referenceId || result.participantId || formData.submissionId);
        showSubmissionComplete(result.referenceId || result.participantId || formData.submissionId, 'Saved to Google Sheets.', 'submitted');
        showToast('Submitted to Google Sheets.', 'success');
      } catch (syncErr) {
        queueSubmission(formData, syncErr.message);
        showSubmissionComplete(formData.submissionId, 'Saved locally. Will retry automatically.', 'pending');
        showToast('Backend unavailable. Saved locally.', 'success');
      }
    }
  } catch (err) {
    showToast(`Error: ${err.message}`, 'error');
  } finally {
    formState.isSubmitting = false;
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
}

function showSubmissionComplete(referenceId, message, status) {
  document.getElementById('refDisplay').textContent = referenceId || 'N/A';
  document.getElementById('mainForm').classList.add('hidden');
  document.getElementById('successScreen').classList.add('show');
  showStatus(message, status === 'submitted' ? 'online' : 'offline');
}

function validateVisibleRequiredFields() {
  const requiredFields = Array.from(document.getElementById('mainForm').querySelectorAll('[required]'));
  for (const field of requiredFields) {
    if (field.disabled || !isFieldVisible(field)) continue;
    if (field.type === 'radio') {
      if (document.querySelector(`input[name="${field.name}"]:checked`)) continue;
    } else if (String(field.value || '').trim()) {
      continue;
    }
    showToast(`Please complete: ${getFieldLabel(field)}`, 'error');
    field.focus();
    return false;
  }
  return true;
}
function isFieldVisible(field) {
  if (field.closest('.hidden')) return false;
  const conditional = field.closest('.conditional-box');
  if (conditional && !conditional.classList.contains('show')) return false;
  return Boolean(field.offsetParent || field.getClientRects().length);
}

function collectFormData() {
  const modules = Array.from(document.querySelectorAll('input[name="modules"]:checked')).map(cb => cb.value).join(', ');
  const digitalSkills = Array.from(document.querySelectorAll('input[name="digitalSkills"]:checked')).map(cb => cb.value).join(', ');
  const disabilityStatus = document.getElementById('disabilityStatus').value || 'No';
  return {
    action: 'saveParticipantInfo',
    submissionId: document.getElementById('submissionId').value,
    participantId: document.getElementById('participantId').value || generateParticipantId(),
    localQueueId: globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `LOCAL-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    syncStatus: 'pending',
    collectorName: document.getElementById('collectorName').value,
    deviceId: formState.deviceId,
    submissionTimestamp: new Date().toISOString(),
    // hamisId omitted — assigned server-side for global uniqueness
    onboardingDate: document.getElementById('onboardingDate').value,
    implementingPartner: document.getElementById('implementingPartner').value,
    region: document.getElementById('region').value,
    district: document.getElementById('district').value,
    community: document.getElementById('community').value,
    locationStatus: document.getElementById('locationStatus').value,
    surname: document.getElementById('surname').value,
    firstName: document.getElementById('firstName').value,
    otherNames: document.getElementById('otherNames').value,
    sex: document.getElementById('sex').value,
    dob: document.getElementById('dob').value,
    age: document.getElementById('age').value,
    participantTypeAge: document.getElementById('participantTypeAge').value,
    telephone: document.getElementById('telephone').value,
    idType: document.getElementById('idType').value,
    ghanaCardId: document.getElementById('ghanaCardId').value,
    voterId: document.getElementById('voterId').value,
    refugeeStatus: document.getElementById('refugeeStatus').value,
    nationality: document.getElementById('nationality').value,
    displacementStatus: document.getElementById('displacementStatus').value,
    displacementReason: document.getElementById('displacementReason').value,
    originalCommunity: document.getElementById('originalCommunity').value,
    hostCommunity: document.getElementById('hostCommunity').value,
    disabilityStatus,
    disabilitySpecify: disabilityStatus === 'Yes' ? document.getElementById('disabilitySpecify').value : '',
    educationLevel: document.getElementById('educationLevel').value,
    employmentStatus: document.getElementById('employmentStatus').value,
    currentOccupation: document.getElementById('currentOccupation').value,
    monthlyIncome: document.getElementById('monthlyIncome').value,
    incomeFrequency: document.getElementById('incomeFrequency').value,
    sector: document.getElementById('sector').value,
    industry: document.getElementById('industry').value,
    jobType: document.getElementById('jobType').value,
    jobRole: document.getElementById('jobRole').value,
    workRegion: document.getElementById('workRegion').value,
    workDistrict: document.getElementById('workDistrict').value,
    workCommunity: document.getElementById('workCommunity').value,
    trainedByPartner: document.querySelector('input[name="tr_check"]:checked')?.value || '',
    trainingStartDate: document.getElementById('trainingStartDate').value,
    trainingEndDate: document.getElementById('trainingEndDate').value,
    trainingLocation: document.getElementById('trainingLocation').value,
    trainingMode: document.getElementById('trainingMode').value,
    virtualPlatform: document.getElementById('virtualPlatform').value,
    trainerType: document.getElementById('trainerType').value,
    trainingPartner: document.getElementById('trainingPartner').value,
    completionStatus: document.getElementById('completionStatus').value,
    certificateIssued: document.getElementById('certificateIssued').value,
    modules,
    digitalSkills,
    wishTraining: document.getElementById('wishTraining').value,
    previousTrainings: document.getElementById('previousTrainings').value,
    previousTrainingDesc: document.getElementById('previousTrainingDesc').value,
    placedByPartner: document.querySelector('input[name="pl_check"]:checked')?.value || '',
    placementStartDate: document.getElementById('placementStartDate').value,
    placementRegion: document.getElementById('placementRegion').value,
    placementDistrict: document.getElementById('placementDistrict').value,
    placementCommunity: document.getElementById('placementCommunity').value,
    plSector: document.getElementById('plSector').value,
    plIndustry: document.getElementById('plIndustry').value,
    plJobType: document.getElementById('plJobType').value,
    plJobRole: document.getElementById('plJobRole').value,
    employmentType: document.getElementById('employmentType').value,
    employmentCategory: document.getElementById('employmentCategory').value,
    placementIncome: document.getElementById('placementIncome').value,
    placementIncomeFreq: document.getElementById('placementIncomeFreq').value,
    employerName: document.getElementById('employerName').value,
    contractType: document.getElementById('contractType').value,
    workHours: document.getElementById('workHours').value,
    currentlyEmployed: document.getElementById('currentlyEmployed').value,
    currentEmployer: document.getElementById('currentEmployer').value,
    currentJobRoleAlt: document.getElementById('currentJobRoleAlt').value,
    currentIncomeAlt: document.getElementById('currentIncomeAlt').value,
    source: 'kollect',
    accessMode: formState.accessMode || '',
    token: formState.token || '',
    adminPassword: formState.adminPassword || ''
  };
}

function handleSubmitAnother() {
  if (formState.accessMode === 'token') {
    window.location.href = CONFIG.CONSENT_FORM_URL;
  } else if (formState.accessMode === 'capacity-new' || formState.accessMode === 'capacity-existing') {
    document.getElementById('successScreen').classList.remove('show');
    document.getElementById('mainForm').classList.remove('hidden');
    ['ccVenue','ccName','ccPhone','ccEmail'].forEach(id => { document.getElementById(id).value = ''; });
    document.getElementById('capacityConsentAgree').checked = false;
    document.getElementById('capacityConsentError').classList.add('hidden');
    clearCcSignature();
    document.getElementById('capacityConsentBtn').disabled = false;
    document.getElementById('capacityConsentBtn').textContent = 'Agree and Continue';
    formState.token = null;
    formState.accessMode = null;
    showCapacityEntryScreen();
  } else if (formState.accessMode === 'admin' && formState.isAdmin) {
    // Admin goes back to stage selection after each submission
    document.getElementById('successScreen').classList.remove('show');
    document.getElementById('view-form').classList.add('hidden');
    formState.consentName = '';
    showAdminStageScreen();
  } else {
    resetForm();
  }
}

function resetForm() {
  document.getElementById('mainForm').reset();
  document.getElementById('mainForm').classList.remove('hidden');
  document.getElementById('successScreen').classList.remove('show');
  ['baselineEmploymentFields','capacityFields','placementFields','currentEmploymentFields'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('show');
  });
  ['nationalityField','disabilitySpecField','virtualTrainingFields','trainingLocationGroup','previousTrainingDetails',
   'currentEmploymentDetails','displacementReasonField','originalCommunityField','hostCommunityField'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  ['district','industry','jobType','jobRole','placementDistrict','workDistrict','plIndustry','plJobType','plJobRole'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.disabled = true;
  });
  document.querySelectorAll('input[name="tr_check"]').forEach(r => r.checked = r.value === 'No');
  document.querySelectorAll('input[name="pl_check"]').forEach(r => r.checked = r.value === 'No');
  toggleCapacityFields(false);
  togglePlacementFields(false);
  document.getElementById('onboardingDate').valueAsDate = new Date();
  handleIdTypeChange();
  toggleBaselineEmploymentFields();
  updateIds();
  hideStatus();
  formState.isSubmitting = false;
}

// ===== MASTER SHEET FUNCTIONS =====
async function loadSheetData() {
  if (!formState.isAdmin) { showAdminLogin(); return; }
  if (formState.isSheetLoading) return;
  formState.isSheetLoading = true;
  const tbody = document.getElementById('sheetBody');
  if (tbody) tbody.innerHTML = '<tr><td colspan="25" style="text-align:center;padding:1.5rem;color:#64748b">Loading from Google Sheets...</td></tr>';
  try {
    const data = await fetchProtectedSheetData(formState.adminPassword);
    formState.masterSheetData = data;
    renderSheet(data);
  } catch (err) {
    showToast(`Failed to load: ${err.message}`, 'error');
  } finally {
    formState.isSheetLoading = false;
  }
}

async function fetchProtectedSheetData(adminPassword) {
  let result;
  try {
    const response = await fetch(CONFIG.API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'getSheetData', adminPassword })
    });
    result = await response.json();
    if (!response.ok) throw new Error(result.message || `Failed (${response.status})`);
  } catch {
    result = await fetchProtectedSheetDataJsonp(adminPassword);
  }
  if (result.status !== 'OK') throw new Error(result.message || 'Failed to unlock Master Sheet');
  return result.data || [];
}

function fetchProtectedSheetDataJsonp(adminPassword) {
  return new Promise((resolve, reject) => {
    const cbName = `happyKollectData_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const url = new URL(CONFIG.API_ENDPOINT);
    url.searchParams.set('action', 'getSheetData');
    url.searchParams.set('adminPassword', adminPassword);
    url.searchParams.set('callback', cbName);
    const script = document.createElement('script');
    const timeout = setTimeout(() => { cleanup(); reject(new Error('Timed out loading sheet data')); }, 15000);
    function cleanup() { clearTimeout(timeout); delete window[cbName]; script.remove(); }
    window[cbName] = result => { cleanup(); resolve(result); };
    script.onerror = () => { cleanup(); reject(new Error('Could not connect to Google Sheets')); };
    script.src = url.toString();
    document.body.appendChild(script);
  });
}

function renderSheet(data) {
  const head = document.getElementById('sheetHead');
  const body = document.getElementById('sheetBody');
  if (!data?.length) {
    head.innerHTML = '';
    body.innerHTML = '<tr><td colspan="25" style="text-align:center;padding:1.5rem;color:#64748b">No data found in the sheet.</td></tr>';
    return;
  }
  const priorityCols = ['participantId','participantInfoStatus','collectorName','submissionTimestamp','onboardingDate','implementingPartner','region','district','community','surname','firstName','otherNames','sex','dob','age','participantTypeAge','telephone','refugeeStatus','disabilityStatus','employmentStatus','lastUpdatedAt'];
  const allCols = Array.from(data.reduce((set, row) => { Object.keys(row||{}).forEach(k => set.add(k)); return set; }, new Set()));
  const columns = priorityCols.filter(c => allCols.includes(c)).concat(allCols.filter(c => !priorityCols.includes(c)));
  head.innerHTML = '';
  const trH = document.createElement('tr');
  columns.forEach(k => { const th = document.createElement('th'); th.textContent = humanizeHeader(k); trH.appendChild(th); });
  head.appendChild(trH);
  body.innerHTML = '';
  data.forEach(row => {
    const tr = document.createElement('tr');
    columns.forEach(col => { const td = document.createElement('td'); td.textContent = formatCell(row[col]); tr.appendChild(td); });
    body.appendChild(tr);
  });
}

// ===== SHARED FILTER UTILITIES =====
function applyFilters(data, f) {
  return data.filter(r => {
    const d = r.onboardingDate ||
      (r.consentSubmittedAt ? String(r.consentSubmittedAt).slice(0, 10) : '');
    if (f.startDate  && d && d < f.startDate)                                    return false;
    if (f.endDate    && d && d > f.endDate)                                      return false;
    if (f.partner    && r.implementingPartner !== f.partner)                     return false;
    if (f.region     && r.region !== f.region)                                   return false;
    if (f.sex        && r.sex !== f.sex)                                         return false;
    if (f.collector  && r.collectorName !== f.collector)                         return false;
    if (f.status === 'registered'  && r.participantInfoStatus !== 'submitted')   return false;
    if (f.status === 'capacity'    && r.capacityBuildingStatus !== 'submitted')  return false;
    if (f.status === 'placement'   && r.jobPlacementStatus !== 'submitted')      return false;
    return true;
  });
}

// ===== DASHBOARD FILTERS =====
function populateDashboardFilters(data) {
  const partners   = [...new Set(data.map(r => r.implementingPartner).filter(Boolean))].sort();
  const collectors = [...new Set(data.map(r => r.collectorName).filter(Boolean))].sort();
  ['dashFilterPartner', 'dashFilterCollector'].forEach((id, idx) => {
    const sel  = document.getElementById(id);
    if (!sel) return;
    const cur  = sel.value;
    const list = idx === 0 ? partners : collectors;
    const label = idx === 0 ? 'All Partners' : 'All Collectors';
    sel.innerHTML = `<option value="">${label}</option>` +
      list.map(v => `<option value="${escapeHtml(v)}"${v === cur ? ' selected' : ''}>${escapeHtml(v)}</option>`).join('');
  });
  const fEl = document.getElementById('dashboardFilters');
  if (fEl) fEl.style.display = 'flex';
}

function applyDashboardFilters() {
  const data     = formState.masterSheetData || [];
  const filtered = applyFilters(data, {
    startDate:  document.getElementById('dashFilterStart')?.value    || '',
    endDate:    document.getElementById('dashFilterEnd')?.value      || '',
    partner:    document.getElementById('dashFilterPartner')?.value  || '',
    collector:  document.getElementById('dashFilterCollector')?.value || '',
    region: '', sex: '', status: ''
  });
  renderDashboard(filtered);
}

function clearDashboardFilters() {
  ['dashFilterStart','dashFilterEnd','dashFilterPartner','dashFilterCollector']
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  applyDashboardFilters();
}

// ===== ADMIN DATA REFRESH =====
async function refreshAdminData(view) {
  if (!formState.isAdmin) return;
  try {
    showToast('Refreshing data...', 'info');
    const data = await fetchProtectedSheetData(formState.adminPassword);
    formState.masterSheetData = data;
    if (view === 'sheet')     renderSheet(data);
    else if (view === 'dashboard') { populateDashboardFilters(data); applyDashboardFilters(); }
    else if (view === 'report')    renderReport(data);
    showToast('Data refreshed.', 'success');
  } catch (err) {
    showToast('Refresh failed: ' + err.message, 'error');
  }
}

// ===== DASHBOARD =====
function loadDashboard() {
  const data = formState.masterSheetData;
  if (!data || !data.length) {
    document.getElementById('dashboardContent').innerHTML = '<p style="text-align:center;color:#94a3b8;padding:2.5rem 1rem;font-size:0.85rem;">No data loaded — click Refresh to fetch from Google Sheets.</p>';
    return;
  }
  populateDashboardFilters(data);
  applyDashboardFilters();
}

// ===== DASHBOARD (6-section MERL layout) =====================================
function renderDashboard(data) {
  const totalInSheet = (formState.masterSheetData || []).length;
  const filterNote   = data.length < totalInSheet ? ` — ${data.length} of ${totalInSheet} (filtered)` : '';
  document.getElementById('dashboardTimestamp').textContent =
    'Data as of ' + new Date().toLocaleString() + filterNote;

  const total = data.length;
  if (!total) {
    document.getElementById('dashboardContent').innerHTML =
      '<p style="text-align:center;color:#94a3b8;padding:2rem;">No participants found.</p>';
    return;
  }

  const female     = data.filter(r => r.sex === 'Female').length;
  const male       = data.filter(r => r.sex === 'Male').length;
  const youth      = data.filter(r => { const a = Number(r.age); return !isNaN(a) && a >= 15 && a <= 35; }).length;
  const pwd        = data.filter(r => r.disabilityStatus === 'Yes').length;
  const refugee    = data.filter(r => r.refugeeStatus === 'Yes').length;
  const displaced  = data.filter(r => r.displacementStatus === 'Yes').length;
  const registered = data.filter(r => r.participantInfoStatus === 'submitted').length;
  const trained    = data.filter(r => r.capacityBuildingStatus === 'submitted').length;
  const placed     = data.filter(r => r.jobPlacementStatus === 'submitted').length;
  const cvUploaded = data.filter(r => r.cvStatus === 'cv_uploaded').length;
  const noCv       = data.filter(r => r.cvStatus === 'no_cv').length;

  document.getElementById('dashboardContent').innerHTML =
    dashSection1_Snapshot(total, registered, trained, placed, female, male, youth, pwd, refugee, displaced, cvUploaded, noCv) +
    dashSection2_Trend(data) +
    dashSection3_Partners(data) +
    dashSection4_Inclusion(total, female, youth, pwd, refugee, displaced) +
    dashSection5_Charts(data, placed) +
    dashSection6_Quality(data);
}

// ── 1. KPI cards + conversion funnel with dropout rates ──────────────────────
function dashSection1_Snapshot(total, registered, trained, placed, female, male, youth, pwd, refugee, displaced, cvUploaded, noCv) {
  const cards = `
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:0.6rem;margin-bottom:1.25rem;">
      ${statCard(total,    'Total',       '#5B45E8')}
      ${statCard(female,   'Female',      '#ec4899', pct(female, total))}
      ${statCard(male,     'Male',        '#3b82f6', pct(male, total))}
      ${statCard(youth,    'Youth 15–35', '#8b5cf6', pct(youth, total))}
      ${statCard(pwd,      'PWD',         '#f59e0b', pct(pwd, total))}
      ${statCard(refugee,  'Refugee',     '#ef4444', pct(refugee, total))}
      ${statCard(displaced,'Displaced',   '#f97316', pct(displaced, total))}
      ${statCard(trained,  'Trained',     '#10b981', pct(trained, total))}
      ${statCard(placed,   'Placed',      '#06b6d4', pct(placed, total))}
    </div>`;

  const stages = [
    { label: 'Consented',    n: total,      prev: null,       color: '#5B45E8' },
    { label: 'Registered',   n: registered, prev: total,      color: '#3b82f6' },
    { label: 'Trained',      n: trained,    prev: registered, color: '#8b5cf6' },
    { label: 'Placed',       n: placed,     prev: trained,    color: '#10b981' }
  ];

  const funnelRows = stages.map((s, i) => {
    const w       = total ? Math.round(s.n / total * 100) : 0;
    const conv    = s.prev ? Math.round(s.n / s.prev * 100) : 100;
    const dropout = s.prev ? s.prev - s.n : 0;
    const dropPct = s.prev ? Math.round(dropout / s.prev * 100) : 0;
    const badge   = i > 0 && s.prev > 0
      ? `<span style="font-size:0.6rem;padding:0.1rem 0.4rem;border-radius:999px;margin-left:0.4rem;font-weight:700;flex-shrink:0;background:${conv>=70?'#dcfce7':conv>=40?'#fef3c7':'#fee2e2'};color:${conv>=70?'#166534':conv>=40?'#92400e':'#991b1b'};">${conv}% conv.</span>`
      : '';
    const drop    = i > 0 && dropout > 0
      ? `<div style="font-size:0.6rem;color:#ef4444;padding-left:116px;margin-bottom:0.2rem;">&#x25B2; ${dropout} (${dropPct}%) have not progressed</div>`
      : '<div style="margin-bottom:0.25rem;"></div>';
    return `
      <div>
        <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:nowrap;">
          <span style="min-width:108px;font-size:0.68rem;color:#374151;font-weight:600;flex-shrink:0;">${s.label}</span>
          <div style="flex:1;background:#e2e8f0;border-radius:999px;height:8px;min-width:0;">
            <div style="background:${s.color};height:8px;border-radius:999px;width:${w}%;"></div>
          </div>
          <span style="min-width:60px;text-align:right;font-size:0.68rem;color:#374151;font-family:monospace;font-weight:700;flex-shrink:0;">${s.n} (${w}%)</span>
          ${badge}
        </div>
        ${drop}
      </div>`;
  }).join('');

  const cvRows = `
    <div style="padding-top:0.5rem;border-top:1px solid #e2e8f0;margin-top:0.25rem;">
      ${pipelineBar('CV Uploaded',   cvUploaded, total, '#f59e0b')}
      ${pipelineBar('No CV on File', noCv,       total, '#f97316')}
    </div>`;

  return `
    ${cards}
    <div style="background:#f8fafc;border-radius:0.75rem;padding:0.85rem 1rem;margin-bottom:1.5rem;">
      <p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#94a3b8;letter-spacing:0.07em;margin-bottom:0.75rem;">Programme Pipeline &amp; Conversion</p>
      ${funnelRows}${cvRows}
    </div>`;
}

// ── 2. Daily / weekly intake trend chart ─────────────────────────────────────
function dashSection2_Trend(data) {
  const getConsentDate = r => r.consentSubmittedAt ? String(r.consentSubmittedAt).slice(0, 10) : '';
  const getRegDate     = r => r.onboardingDate || '';

  const allDates = [...data.map(getConsentDate), ...data.map(getRegDate)].filter(Boolean).sort();
  if (allDates.length < 2) return '';

  const minDate  = allDates[0];
  const maxDate  = allDates[allDates.length - 1];
  const daysDiff = (new Date(maxDate) - new Date(minDate)) / 86400000;
  const weekly   = daysDiff > 28;

  const periods = [];
  const cur = new Date(minDate + 'T00:00:00');
  const end = new Date(maxDate + 'T00:00:00');
  while (cur <= end) {
    periods.push(cur.toISOString().slice(0, 10));
    cur.setDate(cur.getDate() + (weekly ? 7 : 1));
  }
  if (!periods.length) return '';

  const inPeriod = (d, p) => {
    if (!d) return false;
    if (!weekly) return d === p;
    const e = new Date(p + 'T00:00:00'); e.setDate(e.getDate() + 6);
    return d >= p && d <= e.toISOString().slice(0, 10);
  };

  const consentedPer  = periods.map(p => data.filter(r => inPeriod(getConsentDate(r), p)).length);
  const registeredPer = periods.map(p => data.filter(r => r.participantInfoStatus === 'submitted' && inPeriod(getRegDate(r), p)).length);
  const maxVal = Math.max(...consentedPer, ...registeredPer, 1);

  const fmt = p => { const d = new Date(p + 'T00:00:00'); return d.toLocaleDateString('en-GB', { day:'numeric', month:'short' }); };

  const bars = periods.map((p, i) => `
    <div class="trend-period" title="${fmt(p)} — Consented: ${consentedPer[i]}, Registered: ${registeredPer[i]}">
      <div class="trend-bar-wrap">
        <div class="trend-bar-consent" style="height:${Math.round(consentedPer[i]/maxVal*100)}%"></div>
        <div class="trend-bar-reg"     style="height:${Math.round(registeredPer[i]/maxVal*100)}%"></div>
      </div>
      <div class="trend-label">${fmt(p)}</div>
    </div>`).join('');

  return `
    <div style="background:#f8fafc;border-radius:0.75rem;padding:0.85rem 1rem;margin-bottom:1.5rem;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.6rem;">
        <p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#94a3b8;letter-spacing:0.07em;margin:0;">${weekly ? 'Weekly' : 'Daily'} Intake Trend</p>
        <div style="display:flex;gap:1rem;font-size:0.62rem;color:#64748b;">
          <span><span style="display:inline-block;width:9px;height:9px;background:#5B45E8;border-radius:2px;margin-right:3px;vertical-align:middle;"></span>Consented</span>
          <span><span style="display:inline-block;width:9px;height:9px;background:#3b82f6;border-radius:2px;margin-right:3px;vertical-align:middle;"></span>Registered</span>
        </div>
      </div>
      <div class="trend-chart-wrap"><div class="trend-chart">${bars}</div></div>
      <p style="font-size:0.6rem;color:#94a3b8;margin:0.4rem 0 0;">Grouped by onboarding date. Hover bars for detail.</p>
    </div>`;
}

// ── 3. Partner conversion performance table ───────────────────────────────────
function dashSection3_Partners(data) {
  const partners = [...new Set(data.map(r => r.implementingPartner).filter(Boolean))].sort();
  if (!partners.length) return '';

  const ragBg  = p => p >= 70 ? '#dcfce7' : p >= 40 ? '#fef3c7' : '#fee2e2';
  const ragFg  = p => p >= 70 ? '#166534' : p >= 40 ? '#92400e' : '#991b1b';
  const ragCell = (n, d) => {
    if (!d) return `<td style="padding:0.35rem 0.5rem;text-align:right;font-size:0.68rem;color:#94a3b8;">—</td>`;
    const p = Math.round(n / d * 100);
    return `<td style="padding:0.35rem 0.5rem;text-align:right;">
      <span style="font-size:0.7rem;font-weight:700;padding:0.1rem 0.4rem;border-radius:999px;background:${ragBg(p)};color:${ragFg(p)};">${p}%</span>
      <span style="font-size:0.6rem;color:#94a3b8;"> (${n})</span></td>`;
  };

  const rows = partners.map(p => {
    const g   = data.filter(r => r.implementingPartner === p);
    const reg = g.filter(r => r.participantInfoStatus === 'submitted').length;
    const tr  = g.filter(r => r.capacityBuildingStatus === 'submitted').length;
    const pl  = g.filter(r => r.jobPlacementStatus === 'submitted').length;
    return `<tr style="border-bottom:1px solid #f1f5f9;">
      <td style="padding:0.35rem 0.5rem;font-weight:700;font-size:0.75rem;color:#1e293b;">${escapeHtml(p)}</td>
      <td style="padding:0.35rem 0.5rem;text-align:right;font-size:0.75rem;">${g.length}</td>
      ${ragCell(reg, g.length)}
      ${ragCell(tr, reg)}
      ${ragCell(pl, tr)}
    </tr>`;
  }).join('');

  const th = (txt, right) => `<th style="padding:0.3rem 0.5rem;text-align:${right?'right':'left'};font-size:0.58rem;font-weight:900;text-transform:uppercase;color:#64748b;background:#f8fafc;border-bottom:2px solid #e2e8f0;white-space:nowrap;">${txt}</th>`;

  return `
    <div style="margin-bottom:1.5rem;">
      <p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#94a3b8;letter-spacing:0.07em;margin-bottom:0.5rem;">Partner Conversion Performance</p>
      <div style="overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;">
          <thead><tr>${th('Partner',false)}${th('Total',true)}${th('Registered ↓',true)}${th('Trained ↓',true)}${th('Placed ↓',true)}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <p style="font-size:0.62rem;color:#94a3b8;margin-top:0.35rem;">&#x2193; = conversion rate from the previous stage &nbsp; &#x1F7E2; &#x2265;70% &nbsp; &#x1F7E1; 40–69% &nbsp; &#x1F534; &lt;40%</p>
    </div>`;
}

// ── 4. Inclusion indicators ───────────────────────────────────────────────────
function dashSection4_Inclusion(total, female, youth, pwd, refugee, displaced) {
  return `
    <div style="background:#f8fafc;border-radius:0.75rem;padding:0.85rem 1rem;margin-bottom:1.5rem;">
      <p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#94a3b8;letter-spacing:0.07em;margin-bottom:0.75rem;">Inclusion Indicators</p>
      ${pipelineBar('Female',       female,   total, '#ec4899')}
      ${pipelineBar('Youth (15–35)',youth,    total, '#8b5cf6')}
      ${pipelineBar('PWD',          pwd,      total, '#f59e0b')}
      ${pipelineBar('Refugee',      refugee,  total, '#ef4444')}
      ${pipelineBar('Displaced',    displaced,total, '#f97316')}
    </div>`;
}

// ── 5. Distribution bar charts ────────────────────────────────────────────────
function dashSection5_Charts(data, placed) {
  const clean      = (d, field) => groupCount(d, field).filter(([k]) => k !== '(blank)');
  const byRegion     = clean(data, 'region');
  const byEmployment = clean(data, 'employmentStatus');
  const byEducation  = clean(data, 'educationLevel');
  const placed_data  = data.filter(r => r.jobPlacementStatus === 'submitted');
  const byEmployer   = placed > 0 ? clean(placed_data, 'employerName') : [];

  const mini = (title, entries, color) => entries.length
    ? `<div><p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#94a3b8;letter-spacing:0.07em;margin-bottom:0.5rem;">${title}</p>${barChart(entries, color)}</div>`
    : '';

  return `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-bottom:1.25rem;">
      ${mini('By Region', byRegion, '#3b82f6')}
      ${mini('Employment Status', byEmployment, '#10b981')}
    </div>
    <div style="display:grid;grid-template-columns:${byEmployer.length?'1fr 1fr':'1fr'};gap:1.25rem;margin-bottom:1.5rem;">
      ${mini('Education Level', byEducation, '#f59e0b')}
      ${byEmployer.length ? mini('Top Employers (' + placed + ' placed)', byEmployer, '#06b6d4') : ''}
    </div>`;
}

// ── 6. Data quality alerts — expandable per-participant lists ─────────────────
function dashSection6_Quality(data) {
  const now = Date.now();

  const mismatchPx = data.filter(r => String(r.adminNotes || '').includes('NAME_MISMATCH'));
  const stuckPx    = data.filter(r => {
    if (r.participantInfoStatus === 'submitted') return false;
    const d = r.consentSubmittedAt ? new Date(r.consentSubmittedAt) : null;
    return d && (now - d.getTime()) / 86400000 > 7;
  });
  const badAgePx   = data.filter(r =>
    r.participantInfoStatus === 'submitted' && r.age !== '' && r.age !== undefined && Number(r.age) < 10
  );
  const noNamePx   = data.filter(r =>
    r.participantInfoStatus === 'submitted' && !r.surname && !r.firstName
  );
  const noPartnerPx = data.filter(r =>
    r.participantInfoStatus === 'submitted' && !r.implementingPartner
  );

  if (!mismatchPx.length && !stuckPx.length && !badAgePx.length && !noNamePx.length && !noPartnerPx.length) return `
    <div style="background:#f0fdf4;border-radius:0.75rem;padding:0.75rem 1rem;margin-bottom:1rem;border-left:3px solid #10b981;">
      <p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#10b981;letter-spacing:0.07em;margin:0 0 0.25rem;">Data Quality</p>
      <p style="font-size:0.78rem;color:#065f46;margin:0;">&#10003; No data quality issues detected</p>
    </div>`;

  const fullName = r => ((r.surname || '') + ' ' + (r.firstName || '')).trim() || '—';

  const qTable = (cols, rows) => {
    const th = cols.map(c =>
      `<th style="padding:0.25rem 0.5rem;font-size:0.57rem;font-weight:900;text-transform:uppercase;color:#64748b;background:#fafafa;border-bottom:1px solid #e2e8f0;white-space:nowrap;text-align:left;">${c}</th>`
    ).join('');
    const body = rows.map(cells =>
      '<tr>' + Object.values(cells).map(v =>
        `<td style="padding:0.25rem 0.5rem;font-size:0.67rem;color:#374151;border-bottom:1px solid #f1f5f9;white-space:nowrap;">${escapeHtml(String(v ?? '—'))}</td>`
      ).join('') + '</tr>'
    ).join('');
    return `<div style="overflow-x:auto;margin-top:0.4rem;max-height:200px;overflow-y:auto;border:1px solid #e2e8f0;border-radius:0.35rem;">
      <table style="width:100%;border-collapse:collapse;"><thead><tr>${th}</tr></thead><tbody>${body}</tbody></table></div>`;
  };

  const block = (icon, color, label, table) => `
    <details style="margin-bottom:0.5rem;">
      <summary style="cursor:pointer;display:flex;align-items:center;gap:0.4rem;font-size:0.72rem;font-weight:700;color:${color};padding:0.3rem 0;list-style:none;user-select:none;">
        <span>${icon}</span><span>${label}</span><span style="margin-left:auto;font-size:0.6rem;font-weight:400;color:#94a3b8;">▶ expand</span>
      </summary>
      ${table}
    </details>`;

  const blocks = [];

  if (mismatchPx.length) blocks.push(block('🔴', '#991b1b',
    `${mismatchPx.length} name mismatch${mismatchPx.length > 1 ? 'es' : ''} — consent name vs. registered name`,
    qTable(['HAPPY ID', 'Consent Name', 'Registered Name', 'Region', 'Partner'],
      mismatchPx.map(r => ({
        id:      r.participantId        || '—',
        consent: r.consentName          || '—',
        reg:     fullName(r),
        region:  r.region               || '—',
        partner: r.implementingPartner  || '—'
      }))
    )
  ));

  if (stuckPx.length) blocks.push(block('🟡', '#92400e',
    `${stuckPx.length} participant${stuckPx.length > 1 ? 's' : ''} consented 7+ days ago but not yet registered`,
    qTable(['HAPPY ID', 'Consent Name', 'Consented', 'Days Waiting', 'Partner'],
      stuckPx.map(r => ({
        id:      r.participantId || '—',
        name:    r.consentName   || '—',
        date:    r.consentSubmittedAt ? String(r.consentSubmittedAt).slice(0, 10) : '—',
        days:    r.consentSubmittedAt ? Math.floor((now - new Date(r.consentSubmittedAt).getTime()) / 86400000) : '—',
        partner: r.implementingPartner || '—'
      }))
    )
  ));

  if (badAgePx.length) blocks.push(block('🔴', '#991b1b',
    `${badAgePx.length} participant${badAgePx.length > 1 ? 's' : ''} with invalid date of birth (age < 10)`,
    qTable(['HAPPY ID', 'Name', 'Age', 'DOB', 'Region'],
      badAgePx.map(r => ({
        id:     r.participantId || '—',
        name:   fullName(r),
        age:    r.age           || '—',
        dob:    r.dob           || '—',
        region: r.region        || '—'
      }))
    )
  ));

  if (noNamePx.length) blocks.push(block('🟡', '#92400e',
    `${noNamePx.length} registered participant${noNamePx.length > 1 ? 's' : ''} with no name on file`,
    qTable(['HAPPY ID', 'Region', 'District', 'Partner', 'Onboarding Date'],
      noNamePx.map(r => ({
        id:      r.participantId        || '—',
        region:  r.region               || '—',
        dist:    r.district             || '—',
        partner: r.implementingPartner  || '—',
        date:    r.onboardingDate       || '—'
      }))
    )
  ));

  if (noPartnerPx.length) blocks.push(block('🟠', '#92400e',
    `${noPartnerPx.length} registered participant${noPartnerPx.length > 1 ? 's' : ''} with no implementing partner assigned`,
    qTable(['HAPPY ID', 'Name', 'Region', 'District', 'Onboarding Date', 'Created By'],
      noPartnerPx.map(r => ({
        id:      r.participantId  || '—',
        name:    fullName(r),
        region:  r.region         || '—',
        dist:    r.district       || '—',
        date:    r.onboardingDate || '—',
        by:      r.createdBy      || '—'
      }))
    )
  ));

  const totalAffected = mismatchPx.length + stuckPx.length + badAgePx.length + noNamePx.length + noPartnerPx.length;

  return `
    <div style="background:#fffbeb;border-radius:0.75rem;padding:0.75rem 1rem;margin-bottom:1rem;border-left:3px solid #f59e0b;">
      <p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#92400e;letter-spacing:0.07em;margin:0 0 0.6rem;">Data Quality — ${totalAffected} participant${totalAffected > 1 ? 's' : ''} need attention</p>
      ${blocks.join('')}
      <p style="font-size:0.65rem;color:#b45309;margin:0.5rem 0 0;">Click each issue to expand the participant list. Use <strong>Update Registration</strong> in the Entry tab to resolve.</p>
    </div>`;
}

function pipelineBar(label, value, total, color) {
  const w = total ? Math.round(value / total * 100) : 0;
  return `<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.35rem;">
    <span style="min-width:120px;font-size:0.68rem;color:#374151;font-weight:600;white-space:nowrap;flex-shrink:0;">${label}</span>
    <div style="flex:1;background:#e2e8f0;border-radius:999px;height:7px;min-width:0;">
      <div style="background:${color};height:7px;border-radius:999px;width:${w}%;"></div>
    </div>
    <span style="min-width:60px;text-align:right;font-size:0.67rem;color:#64748b;font-family:monospace;flex-shrink:0;">${value} (${w}%)</span>
  </div>`;
}

function printDashboard() {
  window.print();
}

function statCard(value, label, color, subtitle) {
  return `<div style="background:#fafafa;border-radius:0.75rem;padding:0.75rem 0.5rem;border-left:3px solid ${color};text-align:center;">
    <div style="font-size:1.5rem;font-weight:900;color:${color};line-height:1.1;">${value}</div>
    ${subtitle ? `<div style="font-size:0.58rem;color:${color};font-weight:700;margin-bottom:0.1rem;">${subtitle}</div>` : ''}
    <div style="font-size:0.58rem;color:#94a3b8;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;margin-top:0.15rem;">${label}</div>
  </div>`;
}

function pct(n, d) { return d ? Math.round(n / d * 100) + '%' : '0%'; }

function groupCount(data, field) {
  const counts = {};
  data.forEach(r => { const v = r[field] || '(blank)'; counts[v] = (counts[v] || 0) + 1; });
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

function barChart(entries, color) {
  if (!entries.length) return '<p style="font-size:0.7rem;color:#94a3b8;">No data</p>';
  const max = entries[0][1];
  return entries.slice(0, 8).map(([label, count]) => {
    const w = max ? Math.round(count / max * 100) : 0;
    return `<div style="display:flex;align-items:center;gap:0.4rem;margin-bottom:0.3rem;">
      <span style="min-width:90px;max-width:90px;font-size:0.63rem;color:#374151;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${escapeHtml(label)}">${escapeHtml(label)}</span>
      <div style="flex:1;background:#f1f5f9;border-radius:999px;height:6px;">
        <div style="background:${color};height:6px;border-radius:999px;width:${w}%;"></div>
      </div>
      <span style="font-size:0.6rem;color:#64748b;min-width:22px;text-align:right;">${count}</span>
    </div>`;
  }).join('');
}

// ===== REPORT =====
function loadReport() {
  const data = formState.masterSheetData;
  if (!data || !data.length) {
    document.getElementById('reportContent').innerHTML = '<p style="text-align:center;color:#94a3b8;padding:2.5rem 1rem;font-size:0.85rem;">No data loaded — click Refresh to fetch from Google Sheets.</p>';
    return;
  }
  renderReport(data);
}

function renderReport(data) {
  document.getElementById('reportTimestamp').textContent = 'Data as of ' + new Date().toLocaleString();
  const partners   = [...new Set(data.map(r => r.implementingPartner).filter(Boolean))].sort();
  const regions    = [...new Set(data.map(r => r.region).filter(Boolean))].sort();
  const collectors = [...new Set(data.map(r => r.collectorName).filter(Boolean))].sort();

  const partnerSel   = document.getElementById('filterPartner');
  const regionSel    = document.getElementById('filterRegion');
  const collectorSel = document.getElementById('filterCollector');
  const curPartner   = partnerSel.value;
  const curRegion    = regionSel.value;
  const curCollector = collectorSel?.value || '';

  partnerSel.innerHTML = '<option value="">All Partners</option>' +
    partners.map(p => `<option value="${escapeHtml(p)}"${p === curPartner ? ' selected' : ''}>${escapeHtml(p)}</option>`).join('');
  regionSel.innerHTML  = '<option value="">All Regions</option>' +
    regions.map(r => `<option value="${escapeHtml(r)}"${r === curRegion ? ' selected' : ''}>${escapeHtml(r)}</option>`).join('');
  if (collectorSel) {
    collectorSel.innerHTML = '<option value="">All Collectors</option>' +
      collectors.map(c => `<option value="${escapeHtml(c)}"${c === curCollector ? ' selected' : ''}>${escapeHtml(c)}</option>`).join('');
  }
  document.getElementById('reportFilters').style.display = 'flex';
  applyReportFilters();
}

function applyReportFilters() {
  const data     = formState.masterSheetData || [];
  const filtered = applyFilters(data, {
    startDate:  document.getElementById('filterStartDate')?.value  || '',
    endDate:    document.getElementById('filterEndDate')?.value    || '',
    partner:    document.getElementById('filterPartner')?.value    || '',
    region:     document.getElementById('filterRegion')?.value     || '',
    sex:        document.getElementById('filterSex')?.value        || '',
    status:     document.getElementById('filterStatus')?.value     || '',
    collector:  document.getElementById('filterCollector')?.value  || ''
  });
  formState.reportFilteredData = filtered;
  buildReportTables(filtered);
}

function buildReportTables(data) {
  const total = data.length;
  if (!total) {
    document.getElementById('reportContent').innerHTML = '<p style="text-align:center;color:#94a3b8;padding:2rem;font-size:0.85rem;">No records match the current filters.</p>';
    return;
  }
  const trained    = data.filter(r => r.capacityBuildingStatus === 'submitted');
  const placed     = data.filter(r => r.jobPlacementStatus === 'submitted');
  const cvUploaded = data.filter(r => r.cvStatus === 'cv_uploaded').length;
  const noCv       = data.filter(r => r.cvStatus === 'no_cv').length;

  // Partner summary — includes refugee + displaced + totals row
  const allPartners = [...new Set(data.map(r => r.implementingPartner || '(None)'))].sort();
  const partnerRows = allPartners.map(p => {
    const g  = data.filter(r => (r.implementingPartner || '(None)') === p);
    const tr = g.filter(r => r.capacityBuildingStatus === 'submitted').length;
    const pl = g.filter(r => r.jobPlacementStatus === 'submitted').length;
    return [p, g.length,
      g.filter(r => r.sex === 'Female').length,
      g.filter(r => { const a = Number(r.age); return !isNaN(a) && a >= 15 && a <= 35; }).length,
      g.filter(r => r.disabilityStatus === 'Yes').length,
      g.filter(r => r.refugeeStatus === 'Yes').length,
      g.filter(r => r.displacementStatus === 'Yes').length,
      tr, pct(tr, g.length), pl, pct(pl, g.length)];
  });
  const partnerTotals = ['TOTAL', total,
    data.filter(r => r.sex === 'Female').length,
    data.filter(r => { const a = Number(r.age); return !isNaN(a) && a >= 15 && a <= 35; }).length,
    data.filter(r => r.disabilityStatus === 'Yes').length,
    data.filter(r => r.refugeeStatus === 'Yes').length,
    data.filter(r => r.displacementStatus === 'Yes').length,
    trained.length, pct(trained.length, total), placed.length, pct(placed.length, total)
  ];

  // Regional distribution — exclude rogue/blank regions, add totals
  const allRegions = [...new Set(data.map(r => r.region).filter(Boolean))].sort();
  const regionRows = allRegions.map(reg => {
    const g = data.filter(r => r.region === reg);
    const f = g.filter(r => r.sex === 'Female').length;
    const y = g.filter(r => { const a = Number(r.age); return !isNaN(a) && a >= 15 && a <= 35; }).length;
    const tr = g.filter(r => r.capacityBuildingStatus === 'submitted').length;
    const pl = g.filter(r => r.jobPlacementStatus === 'submitted').length;
    return [reg, g.length, f, pct(f, g.length), y, pct(y, g.length), tr, pl];
  });

  // Age group breakdown
  const AGE_GROUPS = [[15,19,'15–19'],[20,24,'20–24'],[25,29,'25–29'],[30,35,'30–35'],[36,50,'36–50'],[51,99,'51+']];
  const ageRows = AGE_GROUPS.map(([min, max, label]) => {
    const g = data.filter(r => { const a = Number(r.age); return !isNaN(a) && a >= min && a <= max; });
    const f = g.filter(r => r.sex === 'Female').length;
    return [label, g.length, pct(g.length, total), f, pct(f, g.length)];
  });
  const ageUnknown = data.filter(r => !r.age || isNaN(Number(r.age))).length;

  // Training outcomes
  const byMode       = groupCount(trained, 'trainingMode').filter(([k]) => k !== '(blank)');
  const byCompletion = groupCount(trained, 'completionStatus').filter(([k]) => k !== '(blank)');

  // Placement outcomes
  const bySector    = groupCount(placed, 'plSector').filter(([k]) => k !== '(blank)');
  const byEmpType   = groupCount(placed, 'employmentType').filter(([k]) => k !== '(blank)');
  const byEmployer  = groupCount(placed, 'employerName').filter(([k]) => k !== '(blank)');
  const byIncome    = groupCount(placed, 'placementIncome').filter(([k]) => k !== '(blank)');

  document.getElementById('reportContent').innerHTML = `

    <!-- Summary header -->
    <div style="font-size:0.7rem;color:#64748b;margin-bottom:1rem;padding:0.6rem 0.85rem;background:#f8fafc;border-radius:0.5rem;line-height:1.7;">
      <strong>${total}</strong> participant${total !== 1 ? 's' : ''} &bull;
      Registered: <strong>${data.filter(r => r.participantInfoStatus === 'submitted').length}</strong> &bull;
      Trained: <strong>${trained.length}</strong> (${pct(trained.length, total)}) &bull;
      Placed: <strong>${placed.length}</strong> (${pct(placed.length, total)}) &bull;
      CV Uploaded: <strong>${cvUploaded}</strong> &bull; No CV: <strong>${noCv}</strong>
    </div>

    <!-- Partner summary -->
    <p style="font-size:0.63rem;font-weight:900;text-transform:uppercase;color:#064e3b;letter-spacing:0.07em;margin-bottom:0.5rem;">Partner Summary</p>
    ${summaryTable(
      ['Partner','Total','Female','Youth','PWD','Refugee','Displaced','Trained','Trained%','Placed','Placed%'],
      [...partnerRows, partnerTotals]
    )}

    <!-- Regional distribution -->
    <p style="font-size:0.63rem;font-weight:900;text-transform:uppercase;color:#1e3a5f;letter-spacing:0.07em;margin:1.25rem 0 0.5rem;">Regional Distribution</p>
    ${summaryTable(['Region','Total','Female','Female%','Youth','Youth%','Trained','Placed'], regionRows)}

    <!-- Age group breakdown -->
    <p style="font-size:0.63rem;font-weight:900;text-transform:uppercase;color:#7c3aed;letter-spacing:0.07em;margin:1.25rem 0 0.5rem;">Age Group Breakdown</p>
    <div style="display:grid;grid-template-columns:auto 1fr;gap:0 1rem;align-items:center;">
      ${summaryTable(['Age Band','Count','% Total','Female','Female%'], ageRows)}
    </div>
    ${ageUnknown ? `<p style="font-size:0.65rem;color:#94a3b8;margin-top:0.25rem;">${ageUnknown} participant(s) with unknown age not included above.</p>` : ''}

    <!-- Training outcomes -->
    ${trained.length ? `
    <p style="font-size:0.63rem;font-weight:900;text-transform:uppercase;color:#4c1d95;letter-spacing:0.07em;margin:1.25rem 0 0.5rem;">Training Outcomes (${trained.length} trained)</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
      <div>
        <p style="font-size:0.6rem;font-weight:700;color:#94a3b8;text-transform:uppercase;margin-bottom:0.35rem;">By Mode</p>
        ${summaryTable(['Mode','Count','%'], byMode.length ? byMode.map(([k,v]) => [k, v, pct(v, trained.length)]) : [['No data','-','-']])}
      </div>
      <div>
        <p style="font-size:0.6rem;font-weight:700;color:#94a3b8;text-transform:uppercase;margin-bottom:0.35rem;">Completion Status</p>
        ${summaryTable(['Status','Count','%'], byCompletion.length ? byCompletion.map(([k,v]) => [k, v, pct(v, trained.length)]) : [['No data','-','-']])}
      </div>
    </div>` : ''}

    <!-- Placement outcomes -->
    ${placed.length ? `
    <p style="font-size:0.63rem;font-weight:900;text-transform:uppercase;color:#064e3b;letter-spacing:0.07em;margin:1.25rem 0 0.5rem;">Placement Outcomes (${placed.length} placed)</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:0.75rem;">
      <div>
        <p style="font-size:0.6rem;font-weight:700;color:#94a3b8;text-transform:uppercase;margin-bottom:0.35rem;">By Sector</p>
        ${summaryTable(['Sector','Count','%'], bySector.map(([k,v]) => [k, v, pct(v, placed.length)]))}
      </div>
      <div>
        <p style="font-size:0.6rem;font-weight:700;color:#94a3b8;text-transform:uppercase;margin-bottom:0.35rem;">Employment Type</p>
        ${summaryTable(['Type','Count','%'], byEmpType.map(([k,v]) => [k, v, pct(v, placed.length)]))}
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
      <div>
        <p style="font-size:0.6rem;font-weight:700;color:#94a3b8;text-transform:uppercase;margin-bottom:0.35rem;">By Employer</p>
        ${summaryTable(['Employer','Count','%'], byEmployer.map(([k,v]) => [k, v, pct(v, placed.length)]))}
      </div>
      <div>
        <p style="font-size:0.6rem;font-weight:700;color:#94a3b8;text-transform:uppercase;margin-bottom:0.35rem;">Income Band (GHS)</p>
        ${summaryTable(['Income','Count','%'], byIncome.map(([k,v]) => [k, v, pct(v, placed.length)]))}
      </div>
    </div>` : ''}`;
}

function summaryTable(headers, rows) {
  if (!rows.length) return '<p style="font-size:0.7rem;color:#94a3b8;margin-bottom:0.5rem;">No data</p>';
  const head = headers.map(h =>
    `<th style="padding:0.3rem 0.5rem;text-align:left;font-size:0.58rem;font-weight:900;text-transform:uppercase;color:#64748b;background:#f8fafc;border-bottom:2px solid #e2e8f0;white-space:nowrap;">${h}</th>`
  ).join('');
  const body = rows.map((row, ri) => {
    const isTotal = String(row[0]).toUpperCase() === 'TOTAL';
    const rowStyle = isTotal ? 'background:#f0f9ff;border-top:2px solid #e2e8f0;' : 'border-bottom:1px solid #f1f5f9;';
    return '<tr style="' + rowStyle + '">' + row.map((cell, ci) =>
      `<td style="padding:0.3rem 0.5rem;font-size:0.7rem;color:${isTotal ? '#0f172a' : (ci === 0 ? '#374151' : '#1e293b')};font-weight:${isTotal || ci === 0 ? '700' : '400'};">${escapeHtml(String(cell ?? ''))}</td>`
    ).join('') + '</tr>';
  }).join('');
  return `<div style="overflow-x:auto;margin-bottom:0.5rem;"><table style="width:100%;border-collapse:collapse;"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
}

function clearReportFilters() {
  ['filterStartDate','filterEndDate','filterCollector',
   'filterPartner','filterRegion','filterSex','filterStatus'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  applyReportFilters();
}

function exportReportData() {
  const data = formState.reportFilteredData || formState.masterSheetData || [];
  if (!data.length) { showToast('No data to export', 'error'); return; }
  const keys = Array.from(data.reduce((set, row) => { Object.keys(row || {}).forEach(k => set.add(k)); return set; }, new Set()));
  const csv = [
    keys.join(','),
    ...data.map(row => keys.map(k => {
      const val = String(row[k] ?? '').replace(/"/g, '""');
      return (val.includes(',') || val.includes('"') || val.includes('\n')) ? `"${val}"` : val;
    }).join(','))
  ].join('\n');
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `happy-report-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Report CSV downloaded.', 'success');
}

function humanizeHeader(key) {
  return String(key||'').replace(/([a-z0-9])([A-Z])/g,'$1 $2').replace(/^./,c=>c.toUpperCase());
}
function formatCell(value) {
  if (value === null || value === undefined || value === '') return '-';
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    const d = new Date(value);
    if (!isNaN(d)) return d.toLocaleString();
  }
  return String(value);
}
function escapeHtml(v) {
  return String(v||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function exportSheetData() {
  const data = formState.masterSheetData;
  if (!data || !data.length) { showToast('No data to export — refresh first.', 'error'); return; }
  const keys = Array.from(data.reduce((set, row) => { Object.keys(row||{}).forEach(k => set.add(k)); return set; }, new Set()));
  const csv = [
    keys.join(','),
    ...data.map(row => keys.map(k => {
      const val = String(row[k] ?? '').replace(/"/g, '""');
      return (val.includes(',') || val.includes('"') || val.includes('\n')) ? `"${val}"` : val;
    }).join(','))
  ].join('\n');
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `happy-kollect-${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('CSV downloaded.', 'success');
}

// ===== UI UTILITIES =====
function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  document.getElementById('toastMessage').textContent = msg;
  toast.className = `toast toast-${type}`;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3000);
}
function showStatus(msg, type) {
  const bar = document.getElementById('statusBar');
  document.getElementById('statusText').textContent = msg;
  bar.className = `status-bar ${type}`;
  bar.classList.remove('hidden');
}
function hideStatus() { document.getElementById('statusBar').classList.add('hidden'); }
function updateOnlineStatus() {
  const pending = getPendingSubmissions().length;
  if (navigator.onLine && pending) {
    showStatus(`Online — ${pending} record(s) pending sync`, 'offline');
  } else if (navigator.onLine) {
    showStatus('Online — data syncs to Google Sheets', 'online');
    setTimeout(() => hideStatus(), 3000);
  } else {
    showStatus(pending ? `Offline — ${pending} record(s) saved locally` : 'Offline — new data will be saved locally', 'offline');
  }
}

// ===== BATCH PLACEMENT =====
let batchDetails = {};
let batchEligible = [];
let batchSelectedIds = new Set();

function loadBatchPlacement() {
  batchDetails = {};
  batchEligible = [];
  batchSelectedIds = new Set();
  showBatchStep(1);
  // Populate region dropdown once
  const sel = document.getElementById('batchRegion');
  if (sel && sel.options.length <= 1) {
    Object.keys(CONFIG.REGIONS).sort().forEach(region => {
      const opt = document.createElement('option');
      opt.value = region; opt.textContent = region;
      sel.appendChild(opt);
    });
  }
}

function showBatchStep(step) {
  ['1', '2', '3', 'success'].forEach(s => {
    const el = document.getElementById('batch-step-' + s) || document.getElementById('batch-' + s);
    if (el) el.classList.add('hidden');
  });
  const target = document.getElementById('batch-step-' + step) || document.getElementById('batch-' + step);
  if (target) target.classList.remove('hidden');
}

// ── Cascade for batch form ──
function batchPopulateDistricts() {
  const region = document.getElementById('batchRegion').value;
  const dist   = document.getElementById('batchDistrict');
  dist.innerHTML = '<option value="">Select District</option>';
  if (region && CONFIG.REGIONS[region]) {
    CONFIG.REGIONS[region].sort().forEach(d => {
      const opt = document.createElement('option');
      opt.value = d; opt.textContent = d;
      dist.appendChild(opt);
    });
    dist.disabled = false;
  } else {
    dist.disabled = true;
  }
}

function batchPopulateIndustries() {
  const sector = document.getElementById('batchSector').value;
  const indSel = document.getElementById('batchIndustry');
  const typSel = document.getElementById('batchJobType');
  const rolSel = document.getElementById('batchJobRole');
  [indSel, typSel, rolSel].forEach(s => { s.innerHTML = '<option value="">Select</option>'; s.disabled = true; });
  if (sector && CONFIG.SECTOR_DATA[sector]) {
    Object.keys(CONFIG.SECTOR_DATA[sector]).sort().forEach(ind => {
      const opt = document.createElement('option');
      opt.value = ind; opt.textContent = ind;
      indSel.appendChild(opt);
    });
    indSel.disabled = false;
  }
}

function batchPopulateJobTypes() {
  const industry = document.getElementById('batchIndustry').value;
  const typSel   = document.getElementById('batchJobType');
  document.getElementById('batchJobRole').innerHTML = '<option value="">Select</option>';
  document.getElementById('batchJobRole').disabled  = true;
  if (industry) populateJobTypeOptions(typSel);
}

function batchPopulateJobRoles() {
  const sector   = document.getElementById('batchSector').value;
  const industry = document.getElementById('batchIndustry').value;
  const jobType  = document.getElementById('batchJobType').value;
  const rolSel   = document.getElementById('batchJobRole');
  rolSel.innerHTML = '<option value="">Select</option>';
  rolSel.disabled  = true;
  if (sector && industry && jobType && CONFIG.SECTOR_DATA[sector]?.[industry]) {
    CONFIG.SECTOR_DATA[sector][industry]
      .filter(role => classifyJobRole(role) === jobType)
      .forEach(role => {
        const opt = document.createElement('option');
        opt.value = role; opt.textContent = role;
        rolSel.appendChild(opt);
      });
    rolSel.disabled = false;
  }
}

function collectBatchDetails() {
  return {
    employerName:        document.getElementById('batchEmployerName').value.trim(),
    placedByPartner:     document.getElementById('batchPlacedByPartner').value,
    placementStartDate:  document.getElementById('batchStartDate').value,
    placementRegion:     document.getElementById('batchRegion').value,
    placementDistrict:   document.getElementById('batchDistrict').value,
    placementCommunity:  document.getElementById('batchCommunity').value.trim(),
    plSector:            document.getElementById('batchSector').value,
    plIndustry:          document.getElementById('batchIndustry').value,
    plJobType:           document.getElementById('batchJobType').value,
    plJobRole:           document.getElementById('batchJobRole').value,
    employmentType:      document.getElementById('batchEmploymentType').value,
    employmentCategory:  document.getElementById('batchEmploymentCategory').value,
    contractType:        document.getElementById('batchContractType').value,
    workHours:           document.getElementById('batchWorkHours').value,
    placementIncome:     document.getElementById('batchIncome').value,
    placementIncomeFreq: document.getElementById('batchIncomeFreq').value
  };
}

// ── Step navigation ──
async function batchGoToStep2() {
  const errEl = document.getElementById('batchStep1Error');
  errEl.classList.add('hidden');
  const d = collectBatchDetails();
  const required = [
    ['employerName',       'Employer Name'],
    ['placedByPartner',    'Placed By Partner'],
    ['placementStartDate', 'Placement Start Date'],
    ['plSector',           'Sector'],
    ['plIndustry',         'Industry'],
    ['plJobType',          'Job Type'],
    ['plJobRole',          'Job Role'],
    ['employmentType',     'Employment Type'],
    ['employmentCategory', 'Employment Category'],
    ['placementIncome',    'Income']
  ];
  for (const [field, label] of required) {
    if (!d[field]) {
      errEl.textContent = `Please complete: ${label}`;
      errEl.classList.remove('hidden');
      return;
    }
  }
  batchDetails = d;
  try {
    showToast('Loading eligible participants…', 'info');
    const result = await apiAction('getEligibleForPlacement', { adminPassword: formState.adminPassword });
    batchEligible    = result.eligible || [];
    batchSelectedIds = new Set();
    renderBatchParticipantList();
    showBatchStep(2);
  } catch (err) {
    errEl.textContent = 'Failed to load participants: ' + err.message;
    errEl.classList.remove('hidden');
  }
}

function batchGoToStep1() { showBatchStep(1); }

function batchGoToStep3() {
  if (!batchSelectedIds.size) { showToast('Select at least one participant.', 'error'); return; }
  renderBatchReview();
  showBatchStep(3);
}

// ── Participant list ──
function renderBatchParticipantList() {
  const list    = document.getElementById('batchParticipantList');
  const countEl = document.getElementById('batchEligibleCount');
  if (!batchEligible.length) {
    list.innerHTML = '<p style="text-align:center;padding:2rem;color:#94a3b8;font-size:0.82rem;">No participants are currently eligible.<br><small>Participants must have completed capacity building and not yet been placed.</small></p>';
    countEl.textContent = '0 eligible participants';
    return;
  }
  countEl.textContent = batchEligible.length + ' participant(s) eligible for placement';
  list.innerHTML = batchEligible.map(p => `
    <label style="display:flex;align-items:center;gap:0.75rem;padding:0.65rem 0.75rem;border-bottom:1px solid #f1f5f9;cursor:pointer;transition:background 0.1s;"
           onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background=''">
      <input type="checkbox" value="${escapeHtml(p.participantId)}"
             onchange="batchToggleParticipant(this.value, this.checked)"
             style="width:1rem;height:1rem;accent-color:#10b981;flex-shrink:0;">
      <div style="flex:1;min-width:0;">
        <div style="font-weight:700;font-size:0.8rem;color:#1e293b;">${escapeHtml((p.surname || '') + ', ' + (p.firstName || ''))}</div>
        <div style="font-size:0.67rem;color:#64748b;font-family:monospace;">${escapeHtml(p.participantId)}</div>
      </div>
      <div style="text-align:right;flex-shrink:0;">
        <div style="font-size:0.68rem;color:#64748b;">${escapeHtml(p.sex || '')} &bull; Age ${escapeHtml(String(p.age || '?'))}</div>
        <div style="font-size:0.62rem;color:#94a3b8;">${escapeHtml(p.region || '')}</div>
      </div>
    </label>
  `).join('');
  updateBatchSelectedCount();
}

function batchToggleParticipant(id, checked) {
  if (checked) batchSelectedIds.add(id);
  else batchSelectedIds.delete(id);
  updateBatchSelectedCount();
}

function batchSelectAll(select) {
  batchEligible.forEach(p => select ? batchSelectedIds.add(p.participantId) : batchSelectedIds.delete(p.participantId));
  document.querySelectorAll('#batchParticipantList input[type="checkbox"]').forEach(cb => { cb.checked = select; });
  updateBatchSelectedCount();
}

function updateBatchSelectedCount() {
  document.getElementById('batchSelectedCount').textContent = batchSelectedIds.size + ' selected';
}

// ── Review ──
function renderBatchReview() {
  const d = batchDetails;
  document.getElementById('batchReviewSummary').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem 1.5rem;font-size:0.8rem;">
      <div><span style="color:#94a3b8;font-size:0.63rem;text-transform:uppercase;font-weight:700;">Employer</span><br><strong>${escapeHtml(d.employerName)}</strong></div>
      <div><span style="color:#94a3b8;font-size:0.63rem;text-transform:uppercase;font-weight:700;">Start Date</span><br><strong>${escapeHtml(d.placementStartDate)}</strong></div>
      <div><span style="color:#94a3b8;font-size:0.63rem;text-transform:uppercase;font-weight:700;">Role</span><br><strong>${escapeHtml(d.plJobRole)}</strong> &mdash; ${escapeHtml(d.plSector)} / ${escapeHtml(d.plIndustry)}</div>
      <div><span style="color:#94a3b8;font-size:0.63rem;text-transform:uppercase;font-weight:700;">Employment</span><br><strong>${escapeHtml(d.employmentType)}</strong>${d.contractType ? ' &bull; ' + escapeHtml(d.contractType) : ''}</div>
      <div><span style="color:#94a3b8;font-size:0.63rem;text-transform:uppercase;font-weight:700;">Income</span><br><strong>GHS ${escapeHtml(d.placementIncome)}</strong> ${escapeHtml(d.placementIncomeFreq || '')}</div>
      <div><span style="color:#94a3b8;font-size:0.63rem;text-transform:uppercase;font-weight:700;">Location</span><br>${escapeHtml(d.placementRegion || '—')}${d.placementDistrict ? ', ' + escapeHtml(d.placementDistrict) : ''}</div>
    </div>
    <div style="margin-top:0.75rem;padding-top:0.75rem;border-top:1px solid #d1fae5;font-size:0.78rem;color:#065f46;font-weight:700;">
      ${batchSelectedIds.size} participant(s) will be placed in this batch
    </div>`;

  const selected = batchEligible.filter(p => batchSelectedIds.has(p.participantId));
  document.getElementById('batchReviewTable').innerHTML = `
    <table style="width:100%;border-collapse:collapse;font-size:0.72rem;">
      <thead>
        <tr style="background:#f0fdf4;">
          ${['#','Name','ID','Sex','Age','Region'].map(h =>
            `<th style="padding:0.4rem 0.6rem;text-align:left;color:#065f46;font-weight:900;border-bottom:2px solid #d1fae5;white-space:nowrap;">${h}</th>`
          ).join('')}
        </tr>
      </thead>
      <tbody>
        ${selected.map((p, i) => `
          <tr style="border-bottom:1px solid #f1f5f9;">
            <td style="padding:0.4rem 0.6rem;color:#94a3b8;">${i + 1}</td>
            <td style="padding:0.4rem 0.6rem;font-weight:600;color:#1e293b;">${escapeHtml((p.surname || '') + ', ' + (p.firstName || ''))}</td>
            <td style="padding:0.4rem 0.6rem;font-family:monospace;color:#64748b;font-size:0.67rem;">${escapeHtml(p.participantId)}</td>
            <td style="padding:0.4rem 0.6rem;">${escapeHtml(p.sex || '')}</td>
            <td style="padding:0.4rem 0.6rem;">${escapeHtml(String(p.age || ''))}</td>
            <td style="padding:0.4rem 0.6rem;">${escapeHtml(p.region || '')}</td>
          </tr>`).join('')}
      </tbody>
    </table>`;
}

// ── Submit ──
async function submitBatchPlacement() {
  const btn   = document.getElementById('batchSubmitBtn');
  const errEl = document.getElementById('batchStep3Error');
  errEl.classList.add('hidden');
  btn.disabled  = true;
  btn.innerHTML = '<span class="spinner"></span> Submitting batch…';

  try {
    const result = await apiAction('submitPlacementBatch', {
      adminPassword:  formState.adminPassword,
      collectorName:  formState.collectorName || 'admin',
      participantIds: Array.from(batchSelectedIds),
      ...batchDetails
    });

    document.getElementById('batchSuccessMessage').textContent = result.message +
      (result.failed?.length ? ` (${result.failed.length} skipped: ${result.failed.map(f => f.participantId + ' — ' + f.error).join('; ')})` : '');
    document.getElementById('batchSuccessId').textContent = 'Batch ID: ' + result.batchId;
    showBatchStep('success');
    showToast(result.message, 'success');

    // Refresh master data quietly in background
    fetchProtectedSheetData(formState.adminPassword)
      .then(data => { formState.masterSheetData = data; })
      .catch(() => {});
  } catch (err) {
    errEl.textContent = 'Submission failed: ' + err.message;
    errEl.classList.remove('hidden');
  } finally {
    btn.disabled  = false;
    btn.innerHTML = '&#10003; Confirm &amp; Submit Batch';
  }
}

function resetBatchPlacement() {
  batchDetails    = {};
  batchEligible   = [];
  batchSelectedIds = new Set();
  const textFields = ['batchEmployerName', 'batchCommunity', 'batchWorkHours'];
  const selectFields = [
    'batchPlacedByPartner', 'batchStartDate', 'batchRegion',
    'batchSector', 'batchEmploymentType', 'batchEmploymentCategory',
    'batchContractType', 'batchIncome', 'batchIncomeFreq'
  ];
  const cascadeFields = ['batchDistrict', 'batchIndustry', 'batchJobType', 'batchJobRole'];
  [...textFields, ...selectFields].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  cascadeFields.forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.innerHTML = '<option value="">Select</option>'; el.disabled = true; }
  });
  document.getElementById('batchStep1Error').classList.add('hidden');
  showBatchStep(1);
}
