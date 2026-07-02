// ===== CONFIGURATION =====
const CONFIG = {
  API_ENDPOINT: 'https://script.google.com/macros/s/AKfycbwAnymRCItipYfY66c96mrSRdJE_r2x84J7caU3LmdxRcUgUgmQTOOAe7jdbxm1UgJB/exec',
  QUEUE_KEY: 'happy_kollect_pending',
  LOCAL_DB_KEY: 'happy_kollect_db',
  DEVICE_ID_KEY: 'happyKollectDeviceId',
  PARTNER_PREFIXES: { 'Jobberman':'JOB', 'Agrico':'AGR', 'YouthEmpower':'YOU', 'SkillsGH':'SKI', 'Other':'OTH' },
  JOB_TYPE_OPTIONS: ['Management','Technical','Administrative','Skilled Trades','Support Services'],
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
  accessMode: null,  // 'token' | 'capacity-existing' | 'capacity-new' | 'admin'
  entryMode:  null,  // 'registration' | 'capacity-new'
  consentName: '',   // stored when participant is loaded, used for name mismatch check
  // Consent step canvas state
  consentSigned: false,
  consentDrawing: false,
  consentContext: null
};

let db = JSON.parse(localStorage.getItem(CONFIG.LOCAL_DB_KEY)) || [];

function isCompleteStatus(value) {
  return value === 'complete' || value === 'submitted';
}

function isPlaced(record) {
  return isCompleteStatus(record?.jobPlacementStatus);
}

function stageMessage(stage) {
  return {
    'registration': 'Consent taken - registration not yet started.',
    'participant_information': 'Consent taken - registration not yet started.',
    'registration_complete': 'Registration submitted - you can update it.',
    'cv_upload': 'Registration complete - CV can be uploaded or deferred.',
    'capacity_complete': 'Training complete - registration can still be corrected.',
    'outcome_tracking': 'Participant has been placed - be careful editing registration data.',
    'placement_complete': 'Participant is fully placed - be careful editing registration data.'
  }[stage] || `Stage: ${stage}`;
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  updatePartnerDisplays();
  syncPendingSubmissions();
  initializeConsentStep();
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
  const mode  = params.get('mode');

  if (token) {
    unlockWithToken(token);
  } else if (mode === 'capacity') {
    showCapacityPickerScreen();
  } else if (mode === 'consent') {
    startNewParticipant();
  } else {
    showEntryModeScreen();
  }
}

function showEntryModeScreen() {
  ['lockedScreen','entryModeScreen','continueScreen',   'capacityEntryScreen','adminStageScreen',
   'placementLookupScreen','registrationLookupScreen','view-form'].forEach(id => {
    document.getElementById(id)?.classList.add('hidden');
  });
  document.getElementById('entryModeScreen').classList.remove('hidden');
}

function showContinueScreen() {
  document.getElementById('entryModeScreen').classList.add('hidden');
  document.getElementById('continueScreen').classList.remove('hidden');
  document.getElementById('continueInput').value = '';
  document.getElementById('continueError').classList.add('hidden');
  document.getElementById('continueInput').focus();
}

function showPlacementLookup() {
  showEntryModeScreen();
  document.getElementById('entryModeScreen').classList.add('hidden');
  document.getElementById('placementLookupScreen')?.classList.remove('hidden');
}

async function submitContinue() {
  const raw   = (document.getElementById('continueInput')?.value || '').trim();
  const errEl = document.getElementById('continueError');
  errEl.classList.add('hidden');
  if (!raw) {
    errEl.textContent = 'Please enter a HAPPY ID, phone number, or paste the link.';
    errEl.classList.remove('hidden');
    return;
  }

  // Extract token from a pasted URL
  try {
    const url   = new URL(raw);
    const token = url.searchParams.get('token');
    if (token) { unlockWithToken(token); return; }
  } catch (_) {}

  // Raw token (64-char hex)
  if (/^[0-9a-f]{64}$/i.test(raw)) { unlockWithToken(raw); return; }

  // Otherwise treat as a participant lookup (ID, phone, name)
  try {
    const result = await apiAction('getParticipantByLookup', { query: raw });
    if (result.status === 'MULTIPLE') {
      renderNameMatchList(result.participants);
      return;
    }
    if (!result?.participant?.participantId) throw new Error('No participant found.');
    document.getElementById('continueScreen').classList.add('hidden');
    formState.accessMode  = 'admin';
    formState.consentName = result.participant.consentName || '';
    initializeForm();
    prefillParticipantInfo(result.participant);
    showSections({ A: true, B: true, C: false, D: false });
    document.getElementById('view-form').classList.remove('hidden');
    showRegistrationUpdateBanner(result.participant);
  } catch (err) {
    errEl.textContent = err.message || 'Could not find that participant. Try their HAPPY ID or phone.';
    errEl.classList.remove('hidden');
  }
}

function showLockedScreen() {
  // Only shown when a token link is invalid/expired
  ['entryModeScreen','continueScreen',   'capacityEntryScreen','view-form'].forEach(id => {
    document.getElementById(id)?.classList.add('hidden');
  });
  document.getElementById('lockedScreen').classList.remove('hidden');
}

// ===== CONSENT STEP =====
function startNewParticipant() {
  formState.entryMode = 'registration';
  formState.participant = null;
  formState.token = '';
  showConsentStep();
}

function showConsentStep() {
  ['entryModeScreen','continueScreen','capacityEntryScreen'].forEach(id => {
    document.getElementById(id)?.classList.add('hidden');
  });
  // consentStep lives inside view-form — the parent must be visible
  document.getElementById('mainForm')?.classList.add('hidden');
  document.getElementById('view-form')?.classList.remove('hidden');
  document.getElementById('consentStep')?.classList.remove('hidden');
  setTimeout(setupConsentCanvas, 50);
  document.getElementById('consentVenue')?.focus();
}

function backToEntryChoice() {
  document.getElementById('consentStep')?.classList.add('hidden');
  showEntryModeScreen();
}

function initializeConsentStep() {
  setupConsentCanvas();
  const clearBtn = document.getElementById('clearConsentSig');
  if (clearBtn) clearBtn.addEventListener('click', clearConsentSignature);
  const canvas = document.getElementById('consentSig');
  if (!canvas) return;
  canvas.addEventListener('mousedown',  startConsentSignature);
  canvas.addEventListener('mousemove',  moveConsentSignature);
  canvas.addEventListener('mouseup',    endConsentSignature);
  canvas.addEventListener('mouseleave', endConsentSignature);
  canvas.addEventListener('touchstart', startConsentSignature, { passive: false });
  canvas.addEventListener('touchmove',  moveConsentSignature,  { passive: false });
  canvas.addEventListener('touchend',   endConsentSignature);
  window.addEventListener('resize', setupConsentCanvas);
}

function setupConsentCanvas() {
  const canvas = document.getElementById('consentSig');
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  if (!rect.width) return;
  const dpr = window.devicePixelRatio || 1;
  const nextWidth  = Math.round(rect.width  * dpr);
  const nextHeight = Math.round(rect.height * dpr);
  if (canvas.width === nextWidth && canvas.height === nextHeight && formState.consentContext) return;
  const prev = formState.consentSigned && canvas.width && canvas.height ? canvas.toDataURL('image/png') : '';
  canvas.width  = nextWidth;
  canvas.height = nextHeight;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.lineWidth = 2.5; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = '#111827';
  formState.consentContext = ctx;
  if (prev) { const img = new Image(); img.onload = () => ctx.drawImage(img, 0, 0, rect.width, rect.height); img.src = prev; }
}

function getConsentPoint(e) {
  const canvas = document.getElementById('consentSig');
  const rect   = canvas.getBoundingClientRect();
  const src    = e.touches?.[0] || e;
  return { x: src.clientX - rect.left, y: src.clientY - rect.top };
}

function startConsentSignature(e) {
  e.preventDefault();
  const ctx = formState.consentContext;
  if (!ctx) return;
  formState.consentDrawing = true;
  formState.consentSigned  = true;
  const p = getConsentPoint(e);
  ctx.beginPath(); ctx.moveTo(p.x, p.y);
}

function moveConsentSignature(e) {
  if (!formState.consentDrawing || !formState.consentContext) return;
  e.preventDefault();
  const p = getConsentPoint(e);
  formState.consentContext.lineTo(p.x, p.y);
  formState.consentContext.stroke();
}

function endConsentSignature() {
  if (!formState.consentDrawing) return;
  formState.consentDrawing = false;
  formState.consentContext?.closePath();
}

function clearConsentSignature() {
  const canvas = document.getElementById('consentSig');
  const ctx    = formState.consentContext;
  if (canvas && ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  formState.consentSigned = false;
  setConsentStatus('', '');
}

function setConsentStatus(message, type) {
  const el = document.getElementById('consentStatus');
  if (!el) return;
  if (!message) { el.className = 'status-bar hidden'; el.textContent = ''; return; }
  el.className = `status-bar ${type === 'error' ? 'offline' : 'online'}`;
  el.innerHTML = message;
}

function validateConsentFields() {
  for (const id of ['consentVenue', 'consentName', 'consentPhone']) {
    const field = document.getElementById(id);
    if (!String(field?.value || '').trim()) {
      setConsentStatus(`Please complete: ${getFieldLabel(field)}`, 'error');
      field?.focus();
      return false;
    }
  }
  if (!formState.consentSigned) {
    setConsentStatus('Please provide the participant signature.', 'error');
    document.getElementById('consentSig')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return false;
  }
  if (!document.getElementById('consentAgree')?.checked) {
    setConsentStatus('Please tick the consent agreement box.', 'error');
    return false;
  }
  return true;
}

async function handleConsentSubmit(event) {
  event.preventDefault();
  if (!navigator.onLine) {
    setConsentStatus('Consent requires an internet connection.', 'error');
    return;
  }
  if (!validateConsentFields()) return;

  const button   = document.getElementById('consentSubmitBtn');
  const original = button.innerHTML;
  button.disabled = true;
  button.innerHTML = '<span class="spinner"></span> Submitting consent...';
  setConsentStatus('Processing…', 'success');

  try {
    const canvas  = document.getElementById('consentSig');
    const payload = {
      venue:        document.getElementById('consentVenue').value.trim(),
      name:         document.getElementById('consentName').value.trim(),
      phone:        document.getElementById('consentPhone').value.trim(),
      email:        document.getElementById('consentEmail').value.trim(),
      consentGiven: true,
      timestamp:    new Date().toISOString(),
      signature:    canvas.toDataURL('image/png'),
      language:     navigator.language || 'en'
    };
    const result = await apiAction('initConsent', payload);
    formState.token       = result.token || '';
    formState.consentName = result.existingConsentName || payload.name;
    if (formState.token) localStorage.setItem('happyContinuationToken', formState.token);

    // Store participant stub for pre-filling
    formState.participant = {
      participantId: result.participantId,
      consentName:   payload.name,
      consentPhone:  payload.phone,
      telephone:     payload.phone
    };

    // Auto-proceed based on entry mode — no choice screen
    document.getElementById('consentStep').classList.add('hidden');
    showToast(`Consent recorded — ID: ${result.participantId}`, 'success');
    if (formState.entryMode === 'capacity-new') {
      continueToRegistrationWithCapacity();
    } else {
      continueToRegistration();
    }
  } catch (err) {
    setConsentStatus(`Consent failed: ${err.message}`, 'error');
  } finally {
    button.disabled  = false;
    button.innerHTML = original;
  }
}

function continueToRegistration() {
  formState.accessMode = 'token';
  initializeForm();
  if (formState.participant) prefillParticipantInfo(formState.participant);
  showSections({ A: true, B: true, C: false, D: false });
  document.getElementById('mainForm')?.classList.remove('hidden');
  document.getElementById('view-form').classList.remove('hidden');
}

function continueToRegistrationWithCapacity() {
  formState.accessMode = 'capacity-new';
  initializeForm();
  if (formState.participant) prefillParticipantInfo(formState.participant);
  showSections({ A: true, B: true, C: true, D: false });
  document.getElementById('mainForm')?.classList.remove('hidden');
  document.getElementById('view-form').classList.remove('hidden');
}

function showCapacityPickerScreen() {
  ['lockedScreen','entryModeScreen','continueScreen',   'adminStageScreen','placementLookupScreen',
   'registrationLookupScreen','view-form'].forEach(id => {
    document.getElementById(id)?.classList.add('hidden');
  });
  // Reset picker state
  document.getElementById('participantIdLookup')?.classList.add('hidden');
  document.getElementById('lookupParticipantId') && (document.getElementById('lookupParticipantId').value = '');
  document.getElementById('lookupError')?.classList.add('hidden');
  ['btnHasId','btnNoId'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.borderColor = '#e2e8f0';
  });
  document.getElementById('capacityEntryScreen').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCapacityEntryScreen() {
  showCapacityPickerScreen();
}

function selectCapacityMode(mode) {
  document.getElementById('btnHasId').style.borderColor = mode === 'existing' ? '#5B45E8' : '#e2e8f0';
  document.getElementById('btnNoId').style.borderColor  = mode === 'new'      ? '#5B45E8' : '#e2e8f0';
  if (mode === 'existing') {
    document.getElementById('participantIdLookup').classList.remove('hidden');
    document.getElementById('lookupParticipantId').focus();
  } else {
    // New participant — run full consent → registration (A+B) + capacity (C)
    document.getElementById('capacityEntryScreen').classList.add('hidden');
    formState.entryMode  = 'capacity-new';
    formState.participant = null;
    formState.token       = '';
    showConsentStep();
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
  // When coming straight from consent, we only have consentName + telephone.
  // Split consentName into surname / firstName so the registration fields fill in.
  if (data.consentName && !data.surname && !data.firstName) {
    const parts = String(data.consentName).trim().split(/\s+/);
    data = Object.assign({}, data, {
      surname:   parts[0]                   || '',
      firstName: parts.slice(1).join(' ')   || ''
    });
  }
  // consentPhone is the same value as telephone — map it across
  if (data.consentPhone && !data.telephone) {
    data = Object.assign({}, data, { telephone: data.consentPhone });
  }

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
    if (el && data[f] !== undefined && data[f] !== '') el.value = data[f];
  });
  if (data.age) document.getElementById('age').value = data.age;
  if (data.participantTypeAge) document.getElementById('participantTypeAge').value = data.participantTypeAge;
}

function setupEventListeners() {
  const consentForm = document.getElementById('consentForm');
  if (consentForm) consentForm.addEventListener('submit', handleConsentSubmit);
  document.getElementById('collectorName').addEventListener('change', e => {
    formState.collectorName = e.target.value;
    localStorage.setItem('happyKollectCollector', e.target.value);
  });
  document.getElementById('telephone').addEventListener('blur', e => validatePhone(e.target));
  const consentPhoneEl = document.getElementById('consentPhone');
  if (consentPhoneEl) consentPhoneEl.addEventListener('blur', e => validatePhone(e.target));
  document.getElementById('ghanaCardId').addEventListener('blur', e => validateGhanaCard(e.target));
  window.addEventListener('online', () => { updateOnlineStatus(); syncPendingSubmissions(); });
  window.addEventListener('offline', updateOnlineStatus);
  document.getElementById('mainForm').addEventListener('keypress', e => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') e.preventDefault();
  });
  document.getElementById('mainForm').addEventListener('invalid', e => {
    showToast(`Please complete: ${getFieldLabel(e.target)}`, 'error');
  }, true);
  const batchSearchEl = document.getElementById('batchSearchInput');
  if (batchSearchEl) batchSearchEl.addEventListener('input', e => batchSearchParticipants(e.target.value));
}

// ===== ADMIN STAGE SELECTION (Entry tab) =====
function showAdminStageScreen() {
  ['lockedScreen','capacityEntryScreen',
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
    showToast(stageMessage(stage), (stage === 'placement_complete' || stage === 'outcome_tracking') ? 'error' : 'info');

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
  const query  = document.getElementById('placementLookupId').value.trim();
  const errEl  = document.getElementById('placementLookupError');
  const matchEl = document.getElementById('placementNameMatchList');
  errEl.classList.add('hidden');
  matchEl.classList.add('hidden');
  if (!query) {
    errEl.textContent = 'Please enter a name, HAPPY ID, or phone number.';
    errEl.classList.remove('hidden');
    return;
  }
  const btn = document.querySelector('#placementLookupScreen button[onclick="loadParticipantForPlacement()"]');
  if (btn) { btn.disabled = true; btn.textContent = 'Searching…'; }
  try {
    const result = await apiAction('getParticipantByLookup', { query });

    if (result.status === 'MULTIPLE') {
      // Show pick list — let admin choose the right person
      matchEl.innerHTML = `
        <p style="font-size:0.72rem;font-weight:700;color:#065f46;padding:0.5rem 0.75rem;background:#f0fdf4;border-bottom:1px solid #d1fae5;">
          ${result.participants.length} matches — tap the correct participant:
        </p>
        ${result.participants.map(p => `
          <button type="button" onclick="selectPlacementParticipant('${escapeHtml(p.participantId)}')"
            style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:0.6rem 0.75rem;background:#fff;border:none;border-bottom:1px solid #f1f5f9;cursor:pointer;text-align:left;"
            onmouseover="this.style.background='#f0fdf4'" onmouseout="this.style.background='#fff'">
            <div>
              <div style="font-weight:700;font-size:0.8rem;color:#1e293b;">${escapeHtml((p.surname || '') + (p.surname && p.firstName ? ', ' : '') + (p.firstName || ''))}</div>
              <div style="font-size:0.67rem;color:#5B45E8;font-family:monospace;">${escapeHtml(p.participantId)}</div>
            </div>
            <div style="text-align:right;font-size:0.67rem;color:#94a3b8;">
              <div>${escapeHtml(p.region || '')}</div>
              <div>${escapeHtml(p.currentStage || '')}</div>
            </div>
          </button>`).join('')}`;
      matchEl.classList.remove('hidden');
      return;
    }

    // Single match — load directly
    await openPlacementForm(result.participant);
  } catch (err) {
    errEl.textContent = err.message;
    errEl.classList.remove('hidden');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Search & Load →'; }
  }
}

async function selectPlacementParticipant(participantId) {
  const errEl   = document.getElementById('placementLookupError');
  const matchEl = document.getElementById('placementNameMatchList');
  errEl.classList.add('hidden');
  matchEl.classList.add('hidden');
  const btn = document.querySelector('#placementLookupScreen button[onclick="loadParticipantForPlacement()"]');
  if (btn) { btn.disabled = true; btn.textContent = 'Loading…'; }
  try {
    const result = await apiAction('getParticipantById', { participantId });
    await openPlacementForm(result.participant);
  } catch (err) {
    errEl.textContent = err.message;
    errEl.classList.remove('hidden');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Search & Load →'; }
  }
}

function openPlacementForm(p) {
  if (!p?.participantId) throw new Error('Participant not found.');
  if (isCompleteStatus(p.jobPlacementStatus)) {
    throw new Error('This participant has already been placed.');
  }
  document.getElementById('placementLookupScreen').classList.add('hidden');
  formState.accessMode  = 'admin';
  formState.consentName = p.consentName || '';
  initializeForm();
  prefillParticipantInfo(p);
  showSections({ A: true, B: true, C: false, D: true });
  document.getElementById('mainForm')?.classList.remove('hidden');
  document.getElementById('view-form').classList.remove('hidden');
  document.querySelectorAll('input[name="pl_check"]').forEach(r => { r.checked = r.value === 'Yes'; });
  togglePlacementFields(true);
  showToast('Record loaded. Complete Section D and submit.', 'success');
}

// ===== ADMIN SIDEBAR =====
function toggleAdminSidebar() {
  const panel   = document.getElementById('adminSidebarPanel');
  const overlay = document.getElementById('adminSidebarOverlay');
  const isOpen  = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}
function closeAdminSidebar() {
  document.getElementById('adminSidebarPanel')?.classList.remove('open');
  document.getElementById('adminSidebarOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}
function syncSidebarActive(view) {
  ['dashboard','report','placement','correction','sheet','batch','entry'].forEach(v => {
    document.getElementById('sidebar-tab-' + v)?.classList.toggle('active',
      v === view || (v === 'entry' && view === 'form'));
  });
}

// ===== VIEW SWITCHING =====
function setView(view) {
  formState.currentView = view;
  ['form', 'sheet', 'dashboard', 'report', 'batch', 'correction'].forEach(v => {
    document.getElementById('view-' + v)?.classList.toggle('hidden', view !== v);
    document.getElementById('tab-' + v)?.classList.toggle('active', view === v);
  });
  document.getElementById('tab-entry')?.classList.toggle('active', view === 'form');
  if (view !== 'placement') {
    document.getElementById('placementLookupScreen')?.classList.add('hidden');
  }
  document.getElementById('tab-placement')?.classList.toggle('active', view === 'placement');
  syncSidebarActive(view);
}

// ===== ADMIN NAV TOGGLE =====
function handleNavLogoClick() {
  if (formState.isAdmin) {
    exitAdminMode();
  } else {
    openAdminView('dashboard');
  }
}

function switchToAdminNav() {
  document.getElementById('fieldNav').classList.add('hidden');
  document.getElementById('adminNav').classList.remove('hidden');
  document.querySelector('.navbar').classList.add('admin-mode');
  document.getElementById('navSubtitle').textContent = 'HAPPY PROGRAM • ADMIN';
  // adminMenuBtn visibility handled by CSS .navbar.admin-mode .admin-menu-btn
}

function exitAdminMode() {
  formState.isAdmin       = false;
  formState.adminPassword = '';
  formState.masterSheetData = [];
  closeAdminSidebar();
  document.getElementById('adminNav').classList.add('hidden');
  document.getElementById('fieldNav').classList.remove('hidden');
  document.querySelector('.navbar').classList.remove('admin-mode');
  document.getElementById('navSubtitle').textContent = 'HAPPY PROGRAM • FIELD REGISTRATION';
  setView('form');
  showEntryModeScreen();
  showToast('Exited admin mode', 'info');
}

// ===== ADMIN LOGIN =====
function showAdminLogin() {
  openAdminView('sheet');
}

function openAdminView(targetView) {
  if (formState.isAdmin) {
    if (targetView === 'placement') {
      openAdminPlacement();
      return;
    }
    setView(targetView);
    if (targetView === 'dashboard')   loadDashboard();
    else if (targetView === 'report')     loadReport();
    else if (targetView === 'sheet')      loadSheetData();
    else if (targetView === 'batch')      loadBatchPlacement();
    else if (targetView === 'correction') loadCorrection();
    return;
  }
  formState.pendingAdminView = targetView;
  document.getElementById('adminModal').classList.remove('hidden');
  document.getElementById('adminPassword').value = '';
  document.getElementById('adminPassword').focus();
}
function openAdminPlacement() {
  // Hide all view-* divs and mark placement tab active
  ['form','sheet','dashboard','report','batch','correction'].forEach(v => {
    document.getElementById('view-' + v)?.classList.add('hidden');
    document.getElementById('tab-' + v)?.classList.remove('active');
  });
  document.getElementById('tab-entry')?.classList.remove('active');
  document.getElementById('tab-placement')?.classList.add('active');
  formState.currentView = 'placement';
  syncSidebarActive('placement');
  formState.accessMode  = 'admin';
  // Reset and show the placement lookup screen
  const pidInput = document.getElementById('placementLookupId');
  if (pidInput) { pidInput.value = ''; pidInput.focus(); }
  document.getElementById('placementLookupError')?.classList.add('hidden');
  const btn = document.querySelector('#placementLookupScreen button[onclick="loadParticipantForPlacement()"]');
  if (btn) { btn.disabled = false; btn.textContent = 'Load Participant'; }
  document.getElementById('view-form')?.classList.add('hidden');
  document.getElementById('placementLookupScreen').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
    switchToAdminNav();
    showToast('Admin access granted', 'success');
    // Coming from locked/entry screen → go to dashboard by default
    const targetView = formState.pendingAdminView || 'dashboard';
    formState.pendingAdminView = null;
    if (targetView === 'dashboard')   { setView('dashboard'); populateDashboardFilters(data); applyDashboardFilters(); }
    else if (targetView === 'report')     { setView('report'); renderReport(data); }
    else if (targetView === 'correction') { setView('correction'); loadCorrection(); }
    else if (targetView === 'batch')      { setView('batch'); loadBatchPlacement(); }
    else if (targetView === 'placement')  { openAdminPlacement(); }
    else if (targetView === 'form')       { setView('form'); showAdminStageScreen(); }
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
const JOB_ROLE_EXACT_CATEGORY = {
  'BIM Coordinator':'Technical','Bullion Driver':'Skilled Trades','Bus Driver':'Skilled Trades',
  'Contract Administrator':'Administrative','Delivery Driver':'Skilled Trades','Dispatcher':'Administrative',
  'Environmental Coordinator':'Technical','Executive Housekeeper':'Support Services','Farm Administrator':'Administrative',
  'Fire Management Officer':'Technical','Fleet Mechanic':'Skilled Trades','Freight Forwarder':'Administrative',
  'Front Desk':'Administrative','HGV Driver':'Skilled Trades','Hospital Administrator':'Management',
  'HR Business Partner':'Administrative','HR Coordinator':'Administrative','IT Helpdesk':'Support Services',
  'Land Rights Coordinator':'Administrative','Livestock Hauler':'Skilled Trades','Logging Truck Driver':'Skilled Trades',
  'Logistics Coordinator':'Administrative','Maintenance Engineer':'Skilled Trades','Medical Secretary':'Administrative',
  'Mobile Money Coordinator':'Administrative','Post-Construction Cleaner':'Support Services','Relationship Manager':'Administrative',
  'Room Attendant':'Support Services','Safety Officer':'Technical','Sales Associate':'Administrative',
  'Shuttle Driver':'Skilled Trades','Supply Chain Coordinator':'Administrative','Systems Admin':'Technical',
  'Tipper Driver':'Skilled Trades','Transport Safety Officer':'Technical','Trawler Deckhand':'Skilled Trades',
  'Ventilation Officer':'Technical','WMS Admin':'Technical'
};

function normalizeJobType(value) {
  return value === 'Support' ? 'Support Services' : value;
}

function resetOtherJobRole(selectId) {
  const inputId = `${selectId}Other`;
  const group = document.getElementById(`${selectId}OtherGroup`);
  const input = document.getElementById(inputId);
  if (group) group.classList.add('hidden');
  if (input) {
    input.value = '';
    input.disabled = true;
    input.required = false;
  }
}

function resetSelect(select, placeholder = 'Select') {
  select.innerHTML = `<option value="">${placeholder}</option>`;
  select.disabled = true;
  if (select.id) resetOtherJobRole(select.id);
}

function getIndustryRoles(sector, industry) {
  return CONFIG.SECTOR_DATA[sector]?.[industry] || [];
}

function getJobTypesForIndustry(sector, industry) {
  const types = new Set(getIndustryRoles(sector, industry).map(classifyJobRole));
  return CONFIG.JOB_TYPE_OPTIONS.filter(type => types.has(type));
}

function populateJobTypeOptions(select, sector, industry) {
  resetSelect(select);
  getJobTypesForIndustry(sector, industry).forEach(type => {
    const opt = document.createElement('option');
    opt.value = type; opt.textContent = type;
    select.appendChild(opt);
  });
  select.disabled = select.options.length <= 1;
}

function populateRoleOptions(select, sector, industry, jobType) {
  resetSelect(select);
  const selectedType = normalizeJobType(jobType);
  if (!(sector && industry && selectedType)) return;
  const roles = getIndustryRoles(sector, industry)
    .filter(role => classifyJobRole(role) === selectedType)
    .sort((a, b) => a.localeCompare(b));
  if (!roles.includes('Other')) roles.push('Other');
  roles.forEach(role => {
    const opt = document.createElement('option');
    opt.value = role; opt.textContent = role;
    select.appendChild(opt);
  });
  select.disabled = select.options.length <= 1;
  toggleOtherJobRole(select.id, `${select.id}Other`);
}

function toggleOtherJobRole(selectId, inputId) {
  const select = document.getElementById(selectId);
  const input = document.getElementById(inputId);
  const group = document.getElementById(`${selectId}OtherGroup`);
  const isOther = select?.value === 'Other';
  if (group) group.classList.toggle('hidden', !isOther);
  if (input) {
    input.disabled = !isOther;
    input.required = Boolean(isOther && select?.required);
    if (!isOther) input.value = '';
  }
}

function getResolvedJobRole(selectId, inputId) {
  const selected = document.getElementById(selectId)?.value || '';
  if (selected !== 'Other') return selected;
  return document.getElementById(inputId)?.value.trim() || '';
}
function populateIndustries() {
  const sector = document.getElementById('sector').value;
  const indSel = document.getElementById('industry');
  const typeSel = document.getElementById('jobType');
  const roleSel = document.getElementById('jobRole');
  [indSel, typeSel, roleSel].forEach(select => resetSelect(select));
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
  const sector = document.getElementById('sector').value;
  const industry = document.getElementById('industry').value;
  const typeSel = document.getElementById('jobType');
  resetSelect(document.getElementById('jobRole'));
  if (industry) populateJobTypeOptions(typeSel, sector, industry);
}
function populateJobRoles() {
  const sector = document.getElementById('sector').value;
  const industry = document.getElementById('industry').value;
  const jobType = document.getElementById('jobType').value;
  populateRoleOptions(document.getElementById('jobRole'), sector, industry, jobType);
}
function populatePlacementIndustries() {
  const sector = document.getElementById('plSector').value;
  const indSel = document.getElementById('plIndustry');
  const typeSel = document.getElementById('plJobType');
  const roleSel = document.getElementById('plJobRole');
  [indSel, typeSel, roleSel].forEach(select => resetSelect(select));
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
  const sector = document.getElementById('plSector').value;
  const industry = document.getElementById('plIndustry').value;
  const typeSel = document.getElementById('plJobType');
  resetSelect(document.getElementById('plJobRole'));
  if (industry) populateJobTypeOptions(typeSel, sector, industry);
}
function populatePlacementJobRoles() {
  const sector = document.getElementById('plSector').value;
  const industry = document.getElementById('plIndustry').value;
  const jobType = document.getElementById('plJobType').value;
  populateRoleOptions(document.getElementById('plJobRole'), sector, industry, jobType);
}
function classifyJobRole(role) {
  const title = String(role || '').trim();
  if (JOB_ROLE_EXACT_CATEGORY[title]) return JOB_ROLE_EXACT_CATEGORY[title];
  const text = title.toLowerCase().replace(/[^a-z0-9\s&/+-]/g, ' ');
  if (/\b(manager|director|supervisor|principal|dean|registrar|administrator|superintendent|cto|lead|head|owner|chief)\b/.test(text)) return 'Management';
  if (/\b(engineer|scientist|developer|designer|programmer|analyst|doctor|nurse|pharmacist|teacher|lecturer|architect|consultant|specialist|technician|biologist|surgeon|agronomist|geologist|data scientist|ai|ml|cybersecurity|product manager|research|lab)\b/.test(text)) return 'Technical';
  if (/\b(accountant|bookkeeper|clerk|secretary|cashier|teller|buyer|recruiter|records|admissions|dispatcher|procurement|compliance|hr|customer service|sales|agent|representative|inventory|documentation|officer|assistant|coordinator|admin)\b/.test(text)) return 'Administrative';
  if (/\b(electrician|plumber|carpenter|mason|bricklayer|welder|mechanic|painter|tailor|barber|cook|chef|baker|driver|hauler|deckhand|roughneck|roustabout|installer|repairer|machinist|artisan|fitter|forester|ranger|operator)\b/.test(text)) return 'Skilled Trades';
  if (/\b(cleaner|security|guard|porter|helper|attendant|laborer|courier|janitor|gardener|warehouse|picker|stocker|loader|bellhop|housekeeper|sanitation|shelf|storekeeper|assistant|hand|worker)\b/.test(text)) return 'Support Services';
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
    resetOtherJobRole('jobRole');
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
  ['jobRole','plJobRole','batchJobRole'].forEach(id => toggleOtherJobRole(id, `${id}Other`));
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
    jobRole: getResolvedJobRole('jobRole', 'jobRoleOther'),
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
    plJobRole: getResolvedJobRole('plJobRole', 'plJobRoleOther'),
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
    // After a token-based registration, go back to the entry screen for a new participant
    returnToWorkflowStart();
  } else if (formState.accessMode === 'capacity-new' || formState.accessMode === 'capacity-existing') {
    document.getElementById('successScreen').classList.remove('show');
    formState.token      = null;
    formState.accessMode = null;
    formState.entryMode  = null;
    formState.participant = null;
    // Clear consent fields for next participant
    ['consentVenue','consentName','consentPhone','consentEmail'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = '';
    });
    const ca = document.getElementById('consentAgree');
    if (ca) ca.checked = false;
    clearConsentSignature();
    showCapacityPickerScreen();
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
   'currentEmploymentDetails','displacementReasonField','originalCommunityField','hostCommunityField',
   'jobRoleOtherGroup','plJobRoleOtherGroup','batchJobRoleOtherGroup'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  ['district','industry','jobType','jobRole','placementDistrict','workDistrict','plIndustry','plJobType','plJobRole',
   'jobRoleOther','plJobRoleOther','batchJobRoleOther'].forEach(id => {
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

function returnToWorkflowStart() {
  resetForm();
  formState.token       = null;
  formState.participant = null;
  formState.accessMode  = null;
  formState.entryMode   = null;
  formState.consentName = '';
  formState.consentSigned  = false;
  formState.consentDrawing = false;
  formState.consentContext = null;
  localStorage.removeItem('happyContinuationToken');
  document.getElementById('mainForm')?.classList.add('hidden');
  document.getElementById('consentStep')?.classList.add('hidden');
  document.getElementById('successScreen')?.classList.remove('show');
  // Clear consent step fields for the next participant
  ['consentVenue','consentName','consentPhone','consentEmail'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const consentAgree = document.getElementById('consentAgree');
  if (consentAgree) consentAgree.checked = false;
  clearConsentSignature();
  showEntryModeScreen();
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
    if (f.status === 'registered'  && !isCompleteStatus(r.participantInfoStatus))   return false;
    if (f.status === 'capacity'    && !isCompleteStatus(r.capacityBuildingStatus))  return false;
    if (f.status === 'placement'   && !isCompleteStatus(r.jobPlacementStatus))      return false;
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

// ===== DASHBOARD (M&E layout) ================================================
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
  const registered = data.filter(r => isCompleteStatus(r.participantInfoStatus)).length;
  const trained    = data.filter(r => isCompleteStatus(r.capacityBuildingStatus)).length;
  const placed     = data.filter(r => isCompleteStatus(r.jobPlacementStatus)).length;
  const cvUploaded = data.filter(r => r.cvStatus === 'cv_uploaded').length;
  const noCv       = data.filter(r => r.cvStatus === 'no_cv').length;
  const trainedData = data.filter(r => isCompleteStatus(r.capacityBuildingStatus));
  const placedData  = data.filter(r => isCompleteStatus(r.jobPlacementStatus));

  document.getElementById('dashboardContent').innerHTML =
    dashSection1_Snapshot(total, registered, trained, placed, female, male, youth, pwd, refugee, displaced, cvUploaded, noCv) +
    dashSection2_Trend(data) +
    dashSectionDemographics(data, total, registered, female, male, youth, pwd, refugee, displaced) +
    dashSection3_Partners(data) +
    dashSection7_Training(trainedData, trained) +
    dashSection8_Placement(placedData, placed) +
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
  const registeredPer = periods.map(p => data.filter(r => isCompleteStatus(r.participantInfoStatus) && inPeriod(getRegDate(r), p)).length);
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

// ── Demographics — age bands, gender, education, inclusion, geography ─────────
function dashSectionDemographics(data, total, registered, female, male, youth, pwd, refugee, displaced) {
  if (!total) return '';
  const clean   = (field) => groupCount(data, field).filter(([k]) => k !== '(blank)');
  const byRegion  = clean('region');
  const byEdu     = clean('educationLevel');
  const byEmpStat = clean('employmentStatus');

  const AGE_GROUPS = [[15,19,'15–19'],[20,24,'20–24'],[25,29,'25–29'],[30,35,'30–35'],[36,50,'36–50'],[51,120,'51+']];
  const ageBands  = AGE_GROUPS.map(([min, max, label]) => {
    const n = data.filter(r => { const a = Number(r.age); return !isNaN(a) && a >= min && a <= max; }).length;
    return [label, n];
  });
  const ageUnknown = data.filter(r => !r.age || isNaN(Number(r.age))).length;

  const mini = (title, entries, color) => entries.length
    ? `<div><p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#94a3b8;letter-spacing:0.07em;margin-bottom:0.5rem;">${title}</p>${barChart(entries, color)}</div>`
    : '';

  return `
    <div style="background:#f8fafc;border-radius:0.75rem;padding:0.85rem 1rem;margin-bottom:1.5rem;">
      <p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#94a3b8;letter-spacing:0.07em;margin-bottom:0.9rem;">Demographics &amp; Inclusion</p>

      <!-- Gender + inclusion bars -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-bottom:1.1rem;">
        <div>
          <p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#94a3b8;letter-spacing:0.07em;margin-bottom:0.5rem;">Gender</p>
          ${pipelineBar('Female', female, total, '#ec4899')}
          ${pipelineBar('Male',   male,   total, '#3b82f6')}
        </div>
        <div>
          <p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#94a3b8;letter-spacing:0.07em;margin-bottom:0.5rem;">Inclusion Indicators</p>
          ${pipelineBar('Youth (15–35)', youth,    total, '#8b5cf6')}
          ${pipelineBar('PWD',          pwd,      total, '#f59e0b')}
          ${pipelineBar('Refugee',      refugee,  total, '#ef4444')}
          ${pipelineBar('Displaced',    displaced,total, '#f97316')}
        </div>
      </div>

      <!-- Age bands -->
      <div style="margin-bottom:1.1rem;">
        <p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#94a3b8;letter-spacing:0.07em;margin-bottom:0.5rem;">Age Bands${ageUnknown ? ` <span style="font-weight:400;font-size:0.58rem;">(${ageUnknown} unknown)</span>` : ''}</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.2rem 1rem;">
          ${ageBands.map(([label, n]) => pipelineBar(label, n, total, '#5B45E8')).join('')}
        </div>
      </div>

      <!-- Education + baseline employment + geography -->
      <div style="display:grid;grid-template-columns:1fr 1fr${byRegion.length?' 1fr':''};gap:1.25rem;">
        ${mini('Education Level', byEdu, '#f59e0b')}
        ${mini('Baseline Employment', byEmpStat, '#10b981')}
        ${mini('By Region', byRegion, '#3b82f6')}
      </div>
    </div>`;
}

// ── 3. Partner performance — conversion + inclusion breakdown ─────────────────
function dashSection3_Partners(data) {
  const partners = [...new Set(data.map(r => r.implementingPartner).filter(Boolean))].sort();
  if (!partners.length) return '';

  const ragBg  = p => p >= 70 ? '#dcfce7' : p >= 40 ? '#fef3c7' : '#fee2e2';
  const ragFg  = p => p >= 70 ? '#166534' : p >= 40 ? '#92400e' : '#991b1b';
  const ragCell = (n, d) => {
    if (!d) return `<td style="padding:0.3rem 0.5rem;text-align:right;font-size:0.67rem;color:#94a3b8;">—</td>`;
    const p = Math.round(n / d * 100);
    return `<td style="padding:0.3rem 0.5rem;text-align:right;">
      <span style="font-size:0.68rem;font-weight:700;padding:0.1rem 0.4rem;border-radius:999px;background:${ragBg(p)};color:${ragFg(p)};">${p}%</span>
      <span style="font-size:0.58rem;color:#94a3b8;"> (${n})</span></td>`;
  };
  const numCell = (n, sub) => `<td style="padding:0.3rem 0.5rem;text-align:right;font-size:0.68rem;font-weight:600;">${n}${sub ? `<span style="font-size:0.57rem;color:#94a3b8;font-weight:400;"> (${sub})</span>` : ''}</td>`;

  const rows = partners.map(p => {
    const g    = data.filter(r => r.implementingPartner === p);
    const f    = g.filter(r => r.sex === 'Female').length;
    const yo   = g.filter(r => { const a = Number(r.age); return !isNaN(a) && a >= 15 && a <= 35; }).length;
    const reg  = g.filter(r => isCompleteStatus(r.participantInfoStatus)).length;
    const tr   = g.filter(r => isCompleteStatus(r.capacityBuildingStatus)).length;
    const pl   = g.filter(r => isCompleteStatus(r.jobPlacementStatus)).length;
    return `<tr style="border-bottom:1px solid #f1f5f9;">
      <td style="padding:0.3rem 0.5rem;font-weight:700;font-size:0.73rem;color:#1e293b;white-space:nowrap;">${escapeHtml(p)}</td>
      ${numCell(g.length)}
      ${numCell(f, pct(f, g.length))}
      ${numCell(yo, pct(yo, g.length))}
      ${ragCell(reg, g.length)}
      ${ragCell(tr, reg)}
      ${ragCell(pl, tr)}
    </tr>`;
  }).join('');

  const total = data.length;
  const tf    = data.filter(r => r.sex === 'Female').length;
  const tyo   = data.filter(r => { const a = Number(r.age); return !isNaN(a) && a >= 15 && a <= 35; }).length;
  const treg  = data.filter(r => isCompleteStatus(r.participantInfoStatus)).length;
  const ttr   = data.filter(r => isCompleteStatus(r.capacityBuildingStatus)).length;
  const tpl   = data.filter(r => isCompleteStatus(r.jobPlacementStatus)).length;
  const totalsRow = `<tr style="background:#f8fafc;font-weight:800;border-top:2px solid #e2e8f0;">
    <td style="padding:0.35rem 0.5rem;font-size:0.73rem;color:#374151;">TOTAL</td>
    ${numCell(total)}
    ${numCell(tf, pct(tf, total))}
    ${numCell(tyo, pct(tyo, total))}
    ${ragCell(treg, total)}
    ${ragCell(ttr, treg)}
    ${ragCell(tpl, ttr)}
  </tr>`;

  const th = (txt, right) => `<th style="padding:0.3rem 0.5rem;text-align:${right?'right':'left'};font-size:0.57rem;font-weight:900;text-transform:uppercase;color:#64748b;background:#f8fafc;border-bottom:2px solid #e2e8f0;white-space:nowrap;">${txt}</th>`;

  return `
    <div style="margin-bottom:1.5rem;">
      <p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#94a3b8;letter-spacing:0.07em;margin-bottom:0.5rem;">Partner Performance</p>
      <div style="overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;">
          <thead><tr>
            ${th('Partner',false)}${th('Total',true)}${th('Female',true)}${th('Youth',true)}
            ${th('Registered ↓',true)}${th('Trained ↓',true)}${th('Placed ↓',true)}
          </tr></thead>
          <tbody>${rows}${totalsRow}</tbody>
        </table>
      </div>
      <p style="font-size:0.6rem;color:#94a3b8;margin-top:0.35rem;">&#x2193; = conversion from previous stage &nbsp;&#x1F7E2; &#x2265;70% &nbsp;&#x1F7E1; 40–69% &nbsp;&#x1F534; &lt;40%</p>
    </div>`;
}

// ── 4. (retired — content moved to dashSectionDemographics) ──────────────────
function dashSection4_Inclusion() { return ''; }

// ── 5. (retired — content moved to dashSectionDemographics) ──────────────────
function dashSection5_Charts() { return ''; }

// ── 6. Data quality alerts — expandable per-participant lists ─────────────────
function dashSection6_Quality(data) {
  const now = Date.now();

  const mismatchPx = data.filter(r => String(r.adminNotes || '').includes('NAME_MISMATCH'));
  const stuckPx    = data.filter(r => {
    if (isCompleteStatus(r.participantInfoStatus)) return false;
    const d = r.consentSubmittedAt ? new Date(r.consentSubmittedAt) : null;
    return d && (now - d.getTime()) / 86400000 > 7;
  });
  const badAgePx   = data.filter(r =>
    isCompleteStatus(r.participantInfoStatus) && r.age !== '' && r.age !== undefined && Number(r.age) < 10
  );
  const noNamePx   = data.filter(r =>
    isCompleteStatus(r.participantInfoStatus) && !r.surname && !r.firstName
  );
  const noPartnerPx = data.filter(r =>
    isCompleteStatus(r.participantInfoStatus) && !r.implementingPartner
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

// ── 7. Training Outcomes ──────────────────────────────────────────────────────
function dashSection7_Training(trainedData, trained) {
  if (!trained) return '';

  const female     = trainedData.filter(r => r.sex === 'Female').length;
  const youth      = trainedData.filter(r => { const a = Number(r.age); return !isNaN(a) && a >= 15 && a <= 35; }).length;
  const pwd        = trainedData.filter(r => r.disabilityStatus === 'Yes').length;
  const refugee    = trainedData.filter(r => r.refugeeStatus === 'Yes').length;
  const displaced  = trainedData.filter(r => r.displacementStatus === 'Yes').length;

  const clean      = (field) => groupCount(trainedData, field).filter(([k]) => k !== '(blank)');
  const byPartner  = clean('implementingPartner');
  const byRegion   = clean('region');
  const bySector   = clean('sector');
  const byMode     = clean('trainingMode');
  const byCompletion = clean('completionStatus');

  const mini = (title, entries, color) => entries.length
    ? `<div><p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#94a3b8;letter-spacing:0.07em;margin-bottom:0.5rem;">${title}</p>${barChart(entries, color)}</div>`
    : '';

  const cols2 = [byMode, byCompletion].filter(a => a.length).length || 1;

  return `
    <div style="background:#f0fdf4;border-radius:0.75rem;padding:0.85rem 1rem;margin-bottom:1.25rem;border-left:3px solid #10b981;">
      <p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#065f46;letter-spacing:0.07em;margin:0 0 0.85rem;">&#x1F393; Training Outcomes — ${trained} Trained</p>

      <!-- KPI row -->
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:0.6rem;margin-bottom:1rem;">
        ${statCard(trained,  'Trained',     '#10b981')}
        ${statCard(female,   'Female',      '#ec4899', pct(female, trained))}
        ${statCard(youth,    'Youth 15–35', '#6366f1', pct(youth, trained))}
        ${statCard(pwd,      'PWD',         '#f59e0b', pct(pwd, trained))}
        ${statCard(refugee + displaced, 'Refugee/IDP', '#ef4444', pct(refugee + displaced, trained))}
      </div>

      <!-- Inclusion bars -->
      <div style="margin-bottom:1rem;">
        ${pipelineBar('Female',        female,             trained, '#ec4899')}
        ${pipelineBar('Youth (15–35)', youth,              trained, '#6366f1')}
        ${pipelineBar('PWD',           pwd,                trained, '#f59e0b')}
        ${pipelineBar('Refugee/IDP',   refugee + displaced,trained, '#ef4444')}
      </div>

      <!-- Mode + completion -->
      ${cols2 > 0 ? `<div style="display:grid;grid-template-columns:repeat(${cols2},1fr);gap:1.25rem;margin-bottom:1rem;">
        ${mini('Training Mode',      byMode,       '#10b981')}
        ${mini('Completion Status',  byCompletion, '#3b82f6')}
      </div>` : ''}

      <!-- Partner + region + sector -->
      <div style="display:grid;grid-template-columns:1fr 1fr${bySector.length?' 1fr':''};gap:1.25rem;">
        ${mini('By Partner', byPartner, '#059669')}
        ${mini('By Region',  byRegion,  '#3b82f6')}
        ${mini('By Sector',  bySector,  '#8b5cf6')}
      </div>
    </div>`;
}

// ── 8. Placement Outcomes ─────────────────────────────────────────────────────
function dashSection8_Placement(placedData, placed) {
  if (!placed) return '';

  const female    = placedData.filter(r => r.sex === 'Female').length;
  const youth     = placedData.filter(r => { const a = Number(r.age); return !isNaN(a) && a >= 15 && a <= 35; }).length;
  const pwd       = placedData.filter(r => r.disabilityStatus === 'Yes').length;
  const refugee   = placedData.filter(r => r.refugeeStatus === 'Yes').length;
  const displaced = placedData.filter(r => r.displacementStatus === 'Yes').length;

  const clean      = (field) => groupCount(placedData, field).filter(([k]) => k !== '(blank)');
  const byEmployer  = clean('employerName');
  const byEmpType   = clean('employmentType');
  const byContract  = clean('contractType');
  const bySector    = clean('plSector').length ? clean('plSector') : clean('sector');
  const byIncome    = clean('placementIncome');
  const byRegion    = clean('workRegion').length ? clean('workRegion') : clean('region');

  const mini = (title, entries, color) => entries.length
    ? `<div><p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#94a3b8;letter-spacing:0.07em;margin-bottom:0.5rem;">${title}</p>${barChart(entries, color)}</div>`
    : '';

  const midCols = [byEmpType, bySector, byContract].filter(a => a.length).length || 1;

  return `
    <div style="background:#eff6ff;border-radius:0.75rem;padding:0.85rem 1rem;margin-bottom:1.25rem;border-left:3px solid #3b82f6;">
      <p style="font-size:0.62rem;font-weight:900;text-transform:uppercase;color:#1e40af;letter-spacing:0.07em;margin:0 0 0.85rem;">&#x1F4BC; Placement Outcomes — ${placed} Placed</p>

      <!-- KPI row -->
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:0.6rem;margin-bottom:1rem;">
        ${statCard(placed,   'Placed',      '#3b82f6')}
        ${statCard(female,   'Female',      '#ec4899', pct(female, placed))}
        ${statCard(youth,    'Youth 15–35', '#6366f1', pct(youth, placed))}
        ${statCard(pwd,      'PWD',         '#f59e0b', pct(pwd, placed))}
        ${statCard(refugee + displaced, 'Refugee/IDP', '#ef4444', pct(refugee + displaced, placed))}
      </div>

      <!-- Inclusion bars -->
      <div style="margin-bottom:1rem;">
        ${pipelineBar('Female',        female,             placed, '#ec4899')}
        ${pipelineBar('Youth (15–35)', youth,              placed, '#6366f1')}
        ${pipelineBar('PWD',           pwd,                placed, '#f59e0b')}
        ${pipelineBar('Refugee/IDP',   refugee + displaced,placed, '#ef4444')}
      </div>

      <!-- Employers + income -->
      <div style="display:grid;grid-template-columns:${byEmployer.length&&byIncome.length?'1fr 1fr':byEmployer.length?'1fr':'1fr'};gap:1.25rem;margin-bottom:1rem;">
        ${mini('Top Employers',   byEmployer, '#3b82f6')}
        ${mini('Placement Income', byIncome,  '#10b981')}
      </div>

      <!-- Employment type + sector + contract -->
      <div style="display:grid;grid-template-columns:repeat(${midCols},1fr);gap:1.25rem;margin-bottom:${byRegion.length?'1rem':'0'};">
        ${mini('Employment Type', byEmpType,  '#10b981')}
        ${mini('Sector',          bySector,   '#8b5cf6')}
        ${mini('Contract Type',   byContract, '#f59e0b')}
      </div>

      <!-- Work region -->
      ${byRegion.length ? `<div>${mini('By Work Region', byRegion, '#06b6d4')}</div>` : ''}
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
    ${subtitle ? `<div style="font-size:0.68rem;color:${color};font-weight:700;margin-bottom:0.1rem;">${subtitle}</div>` : ''}
    <div style="font-size:0.68rem;color:#94a3b8;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;margin-top:0.15rem;">${label}</div>
  </div>`;
}

function pct(n, d) { return d ? Math.round(n / d * 100) + '%' : '0%'; }

function groupCount(data, field) {
  const counts = {};
  data.forEach(r => { const v = r[field] || '(blank)'; counts[v] = (counts[v] || 0) + 1; });
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

function barChart(entries, color) {
  if (!entries.length) return '<p style="font-size:0.75rem;color:#94a3b8;">No data</p>';
  const max = entries[0][1];
  return entries.slice(0, 8).map(([label, count]) => {
    const w = max ? Math.round(count / max * 100) : 0;
    return `<div style="display:flex;align-items:center;gap:0.4rem;margin-bottom:0.35rem;">
      <span style="min-width:90px;max-width:90px;font-size:0.7rem;color:#374151;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${escapeHtml(label)}">${escapeHtml(label)}</span>
      <div style="flex:1;background:#f1f5f9;border-radius:999px;height:7px;">
        <div style="background:${color};height:7px;border-radius:999px;width:${w}%;"></div>
      </div>
      <span style="font-size:0.68rem;color:#64748b;min-width:24px;text-align:right;font-weight:600;">${count}</span>
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
  const total      = data.length;
  if (!total) {
    document.getElementById('reportContent').innerHTML = '<p style="text-align:center;color:#94a3b8;padding:2rem;font-size:0.85rem;">No records match the current filters.</p>';
    return;
  }

  const registered  = data.filter(r => isCompleteStatus(r.participantInfoStatus));
  const trained     = data.filter(r => isCompleteStatus(r.capacityBuildingStatus));
  const placed      = data.filter(r => isCompleteStatus(r.jobPlacementStatus));
  const cvUploaded  = data.filter(r => r.cvStatus === 'cv_uploaded').length;
  const noCv        = data.filter(r => r.cvStatus === 'no_cv').length;

  const isYouth = r => { const a = Number(r.age); return !isNaN(a) && a >= 15 && a <= 35; };
  const tf = d => d.filter(r => r.sex === 'Female').length;
  const ty = d => d.filter(isYouth).length;
  const tp = d => d.filter(r => r.disabilityStatus === 'Yes').length;
  const tr_ref = d => d.filter(r => r.refugeeStatus === 'Yes').length;
  const tr_dis = d => d.filter(r => r.displacementStatus === 'Yes').length;

  // ── 1. Summary bar ──────────────────────────────────────────────────────────
  const summaryBar = `
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:0.5rem;margin-bottom:1.25rem;">
      ${reportKpi(total,           'Consented',   '#5B45E8')}
      ${reportKpi(registered.length,'Registered', '#3b82f6', pct(registered.length, total))}
      ${reportKpi(trained.length,  'Trained',     '#10b981', pct(trained.length, total))}
      ${reportKpi(placed.length,   'Placed',      '#06b6d4', pct(placed.length, total))}
      ${reportKpi(tf(data),        'Female',      '#ec4899', pct(tf(data), total))}
      ${reportKpi(ty(data),        'Youth 15–35', '#8b5cf6', pct(ty(data), total))}
      ${reportKpi(tp(data),        'PWD',         '#f59e0b', pct(tp(data), total))}
      ${reportKpi(cvUploaded,      'CV Uploaded', '#64748b', pct(cvUploaded, total))}
    </div>`;

  // ── 2. Partner summary ──────────────────────────────────────────────────────
  const allPartners = [...new Set(data.map(r => r.implementingPartner || '(None)'))].sort();
  const partnerRows = allPartners.map(p => {
    const g = data.filter(r => (r.implementingPartner || '(None)') === p);
    const tr_n = g.filter(r => isCompleteStatus(r.capacityBuildingStatus)).length;
    const pl_n = g.filter(r => isCompleteStatus(r.jobPlacementStatus)).length;
    const tr_f = g.filter(r => isCompleteStatus(r.capacityBuildingStatus) && r.sex === 'Female').length;
    const pl_f = g.filter(r => isCompleteStatus(r.jobPlacementStatus) && r.sex === 'Female').length;
    return [p, g.length, tf(g), pct(tf(g),g.length), ty(g), pct(ty(g),g.length),
            tp(g), tr_ref(g), tr_dis(g),
            tr_n, pct(tr_n,g.length), tr_f, pct(tr_f,tr_n||1),
            pl_n, pct(pl_n,g.length), pl_f, pct(pl_f,pl_n||1)];
  });
  const ptotals = ['TOTAL', total, tf(data), pct(tf(data),total), ty(data), pct(ty(data),total),
    tp(data), tr_ref(data), tr_dis(data),
    trained.length, pct(trained.length,total), tf(trained), pct(tf(trained),trained.length||1),
    placed.length, pct(placed.length,total), tf(placed), pct(tf(placed),placed.length||1)];

  const partnerSection = reportSection('&#x1F91D; Partner Summary', '#064e3b', '#f0fdf4', summaryTable(
    ['Partner','Total','Female','F%','Youth','Y%','PWD','Refugee','Displaced',
     'Trained','Train%','F Trained','FTr%','Placed','Place%','F Placed','FPl%'],
    [...partnerRows, ptotals]
  ));

  // ── 3. Regional distribution ────────────────────────────────────────────────
  const allRegions = [...new Set(data.map(r => r.region).filter(Boolean))].sort();
  const regionRows = allRegions.map(reg => {
    const g   = data.filter(r => r.region === reg);
    const tr_n = g.filter(r => isCompleteStatus(r.capacityBuildingStatus)).length;
    const pl_n = g.filter(r => isCompleteStatus(r.jobPlacementStatus)).length;
    return [reg, g.length, tf(g), pct(tf(g),g.length), ty(g), pct(ty(g),g.length),
            tp(g), tr_ref(g), tr_n, pct(tr_n,g.length), pl_n, pct(pl_n,g.length)];
  });
  const rtotals = ['TOTAL', total, tf(data), pct(tf(data),total), ty(data), pct(ty(data),total),
    tp(data), tr_ref(data), trained.length, pct(trained.length,total), placed.length, pct(placed.length,total)];

  const regionalSection = reportSection('&#x1F5FA; Regional Distribution', '#1e3a5f', '#eff6ff', summaryTable(
    ['Region','Total','Female','F%','Youth','Y%','PWD','Refugee','Trained','Train%','Placed','Place%'],
    [...regionRows, rtotals]
  ));

  // ── 4. Age band breakdown ────────────────────────────────────────────────────
  const AGE_GROUPS = [[15,19,'15–19'],[20,24,'20–24'],[25,29,'25–29'],[30,35,'30–35'],[36,50,'36–50'],[51,120,'51+']];
  const ageRows = AGE_GROUPS.map(([min,max,label]) => {
    const g   = data.filter(r => { const a = Number(r.age); return !isNaN(a) && a >= min && a <= max; });
    const tr_n = g.filter(r => isCompleteStatus(r.capacityBuildingStatus)).length;
    const pl_n = g.filter(r => isCompleteStatus(r.jobPlacementStatus)).length;
    return [label, g.length, pct(g.length,total), tf(g), pct(tf(g),g.length||1),
            tr_n, pct(tr_n,g.length||1), pl_n, pct(pl_n,g.length||1)];
  });
  const ageUnknown = data.filter(r => !r.age || isNaN(Number(r.age))).length;

  const ageSection = reportSection('&#x1F465; Age Band Breakdown', '#4c1d95', '#faf5ff', `
    ${summaryTable(['Age Band','Count','% Total','Female','F%','Trained','Train%','Placed','Place%'], ageRows)}
    ${ageUnknown ? `<p style="font-size:0.63rem;color:#94a3b8;margin-top:0.3rem;">${ageUnknown} participant(s) with unknown age excluded from above.</p>` : ''}`);

  // ── 5. Training outcomes ─────────────────────────────────────────────────────
  let trainingSection = '';
  if (trained.length) {
    const byMode       = groupCount(trained, 'trainingMode').filter(([k]) => k !== '(blank)');
    const byCompletion = groupCount(trained, 'completionStatus').filter(([k]) => k !== '(blank)');
    const bySector     = groupCount(trained, 'sector').filter(([k]) => k !== '(blank)');
    const byPartner    = [...new Set(trained.map(r => r.implementingPartner).filter(Boolean))].sort();
    const byRegion     = [...new Set(trained.map(r => r.region).filter(Boolean))].sort();

    const trPartnerRows = byPartner.map(p => {
      const g = trained.filter(r => r.implementingPartner === p);
      return [p, g.length, pct(g.length, trained.length), tf(g), pct(tf(g),g.length||1), ty(g), pct(ty(g),g.length||1), tp(g)];
    });
    const trRegionRows = byRegion.map(reg => {
      const g = trained.filter(r => r.region === reg);
      return [reg, g.length, pct(g.length, trained.length), tf(g), pct(tf(g),g.length||1), ty(g), pct(ty(g),g.length||1)];
    });

    trainingSection = reportSection('&#x1F393; Training Outcomes', '#065f46', '#f0fdf4', `
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.5rem;margin-bottom:1rem;">
        ${reportKpi(trained.length, 'Trained',      '#10b981')}
        ${reportKpi(tf(trained),    'Female',        '#ec4899', pct(tf(trained), trained.length))}
        ${reportKpi(ty(trained),    'Youth 15–35',   '#6366f1', pct(ty(trained), trained.length))}
        ${reportKpi(tp(trained),    'PWD',           '#f59e0b', pct(tp(trained), trained.length))}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem;">
        <div>
          <p style="font-size:0.6rem;font-weight:900;text-transform:uppercase;color:#94a3b8;margin-bottom:0.35rem;">By Mode</p>
          ${summaryTable(['Mode','Count','%'], byMode.length ? byMode.map(([k,v]) => [k,v,pct(v,trained.length)]) : [['No data','–','–']])}
        </div>
        <div>
          <p style="font-size:0.6rem;font-weight:900;text-transform:uppercase;color:#94a3b8;margin-bottom:0.35rem;">Completion Status</p>
          ${summaryTable(['Status','Count','%'], byCompletion.length ? byCompletion.map(([k,v]) => [k,v,pct(v,trained.length)]) : [['No data','–','–']])}
        </div>
      </div>
      ${bySector.length ? `<p style="font-size:0.6rem;font-weight:900;text-transform:uppercase;color:#94a3b8;margin-bottom:0.35rem;">By Sector</p>
        ${summaryTable(['Sector','Count','%'], bySector.map(([k,v]) => [k,v,pct(v,trained.length)]))}` : ''}
      ${trPartnerRows.length > 1 ? `<p style="font-size:0.6rem;font-weight:900;text-transform:uppercase;color:#94a3b8;margin:0.75rem 0 0.35rem;">By Partner</p>
        ${summaryTable(['Partner','Trained','% of Total','Female','F%','Youth','Y%','PWD'], trPartnerRows)}` : ''}
      ${trRegionRows.length > 1 ? `<p style="font-size:0.6rem;font-weight:900;text-transform:uppercase;color:#94a3b8;margin:0.75rem 0 0.35rem;">By Region</p>
        ${summaryTable(['Region','Trained','% of Total','Female','F%','Youth','Y%'], trRegionRows)}` : ''}
    `);
  }

  // ── 6. Placement outcomes ────────────────────────────────────────────────────
  let placementSection = '';
  if (placed.length) {
    const bySector    = groupCount(placed, 'plSector').length ? groupCount(placed, 'plSector') : groupCount(placed, 'sector');
    const byEmpType   = groupCount(placed, 'employmentType').filter(([k]) => k !== '(blank)');
    const byContract  = groupCount(placed, 'contractType').filter(([k]) => k !== '(blank)');
    const byEmployer  = groupCount(placed, 'employerName').filter(([k]) => k !== '(blank)');
    const byIncome    = groupCount(placed, 'placementIncome').filter(([k]) => k !== '(blank)');
    const byPartner   = [...new Set(placed.map(r => r.implementingPartner).filter(Boolean))].sort();
    const byRegion    = [...new Set(placed.map(r => r.workRegion || r.region).filter(Boolean))].sort();

    const plPartnerRows = byPartner.map(p => {
      const g = placed.filter(r => r.implementingPartner === p);
      return [p, g.length, pct(g.length,placed.length), tf(g), pct(tf(g),g.length||1), ty(g), pct(ty(g),g.length||1), tp(g)];
    });
    const plRegionRows = byRegion.map(reg => {
      const g = placed.filter(r => (r.workRegion || r.region) === reg);
      return [reg, g.length, pct(g.length,placed.length), tf(g), pct(tf(g),g.length||1), ty(g), pct(ty(g),g.length||1)];
    });

    placementSection = reportSection('&#x1F4BC; Placement Outcomes', '#1e40af', '#eff6ff', `
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.5rem;margin-bottom:1rem;">
        ${reportKpi(placed.length,  'Placed',       '#3b82f6')}
        ${reportKpi(tf(placed),     'Female',        '#ec4899', pct(tf(placed), placed.length))}
        ${reportKpi(ty(placed),     'Youth 15–35',   '#6366f1', pct(ty(placed), placed.length))}
        ${reportKpi(tp(placed),     'PWD',           '#f59e0b', pct(tp(placed), placed.length))}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem;">
        <div>
          <p style="font-size:0.6rem;font-weight:900;text-transform:uppercase;color:#94a3b8;margin-bottom:0.35rem;">By Sector</p>
          ${summaryTable(['Sector','Count','%'], bySector.filter(([k])=>k!=='(blank)').map(([k,v]) => [k,v,pct(v,placed.length)]))}
        </div>
        <div>
          <p style="font-size:0.6rem;font-weight:900;text-transform:uppercase;color:#94a3b8;margin-bottom:0.35rem;">Employment Type</p>
          ${summaryTable(['Type','Count','%'], byEmpType.map(([k,v]) => [k,v,pct(v,placed.length)]))}
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem;">
        ${byContract.length ? `<div>
          <p style="font-size:0.6rem;font-weight:900;text-transform:uppercase;color:#94a3b8;margin-bottom:0.35rem;">Contract Type</p>
          ${summaryTable(['Contract','Count','%'], byContract.map(([k,v]) => [k,v,pct(v,placed.length)]))}
        </div>` : ''}
        ${byEmployer.length ? `<div>
          <p style="font-size:0.6rem;font-weight:900;text-transform:uppercase;color:#94a3b8;margin-bottom:0.35rem;">Top Employers</p>
          ${summaryTable(['Employer','Count','%'], byEmployer.slice(0,10).map(([k,v]) => [k,v,pct(v,placed.length)]))}
        </div>` : ''}
      </div>
      ${plPartnerRows.length > 1 ? `<p style="font-size:0.6rem;font-weight:900;text-transform:uppercase;color:#94a3b8;margin-bottom:0.35rem;">By Partner</p>
        ${summaryTable(['Partner','Placed','% of Total','Female','F%','Youth','Y%','PWD'], plPartnerRows)}` : ''}
      ${plRegionRows.length > 1 ? `<p style="font-size:0.6rem;font-weight:900;text-transform:uppercase;color:#94a3b8;margin:0.75rem 0 0.35rem;">By Work Region</p>
        ${summaryTable(['Region','Placed','% of Total','Female','F%','Youth','Y%'], plRegionRows)}` : ''}
    `);

    // ── 7. Income analysis (only if income data exists) ──────────────────────
    if (byIncome.length) {
      const baselineIncome = groupCount(data.filter(r => r.monthlyIncome), 'monthlyIncome').filter(([k]) => k !== '(blank)');
      placementSection += reportSection('&#x1F4B0; Income Analysis', '#92400e', '#fffbeb', `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
          <div>
            <p style="font-size:0.6rem;font-weight:900;text-transform:uppercase;color:#94a3b8;margin-bottom:0.35rem;">Post-Placement Income (GHS)</p>
            ${summaryTable(['Income Band','Count','%'], byIncome.map(([k,v]) => [k,v,pct(v,placed.length)]))}
          </div>
          ${baselineIncome.length ? `<div>
            <p style="font-size:0.6rem;font-weight:900;text-transform:uppercase;color:#94a3b8;margin-bottom:0.35rem;">Baseline Income (pre-programme)</p>
            ${summaryTable(['Income Band','Count','%'], baselineIncome.map(([k,v]) => [k,v,pct(v,total)]))}
          </div>` : ''}
        </div>
      `);
    }
  }

  document.getElementById('reportContent').innerHTML =
    summaryBar +
    partnerSection +
    regionalSection +
    ageSection +
    trainingSection +
    placementSection;
}

function reportSection(title, color, bg, content) {
  return `<div style="background:${bg};border-radius:0.75rem;padding:0.85rem 1rem;margin-bottom:1.25rem;border-left:3px solid ${color};">
    <p style="font-size:0.72rem;font-weight:900;text-transform:uppercase;color:${color};letter-spacing:0.07em;margin:0 0 0.75rem;">${title}</p>
    ${content}
  </div>`;
}

function reportKpi(value, label, color, sub) {
  return `<div style="background:#fff;border-radius:0.5rem;padding:0.6rem 0.5rem;text-align:center;border:1px solid #e2e8f0;">
    <div style="font-size:1.3rem;font-weight:900;color:${color};line-height:1.1;">${value}</div>
    ${sub ? `<div style="font-size:0.68rem;color:${color};font-weight:700;">${sub}</div>` : ''}
    <div style="font-size:0.68rem;color:#94a3b8;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;margin-top:0.1rem;">${label}</div>
  </div>`;
}

function summaryTable(headers, rows) {
  if (!rows.length) return '<p style="font-size:0.7rem;color:#94a3b8;margin-bottom:0.5rem;">No data</p>';
  const head = headers.map(h =>
    `<th style="padding:0.35rem 0.5rem;text-align:left;font-size:0.68rem;font-weight:900;text-transform:uppercase;color:#64748b;background:#f8fafc;border-bottom:2px solid #e2e8f0;white-space:nowrap;">${h}</th>`
  ).join('');
  const body = rows.map((row, ri) => {
    const isTotal = String(row[0]).toUpperCase() === 'TOTAL';
    const rowStyle = isTotal ? 'background:#f0f9ff;border-top:2px solid #e2e8f0;' : 'border-bottom:1px solid #f1f5f9;';
    return '<tr style="' + rowStyle + '">' + row.map((cell, ci) =>
      `<td style="padding:0.35rem 0.5rem;font-size:0.75rem;color:${isTotal ? '#0f172a' : (ci === 0 ? '#374151' : '#1e293b')};font-weight:${isTotal || ci === 0 ? '700' : '400'};">${escapeHtml(String(cell ?? ''))}</td>`
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

// ===== DATA CORRECTION =====
let editModalParticipant = null;

const EDIT_MODAL_FIELDS = [
  { key:'surname',            label:'Surname',             type:'text' },
  { key:'firstName',          label:'First Name',          type:'text' },
  { key:'otherNames',         label:'Other Name(s)',        type:'text' },
  { key:'telephone',          label:'Phone',               type:'tel'  },
  { key:'sex',                label:'Sex',                 type:'select', opts:['Male','Female'] },
  { key:'dob',                label:'Date of Birth',       type:'date' },
  { key:'age',                label:'Age',                 type:'number' },
  { key:'idType',             label:'ID Type',             type:'select', opts:['Ghana Card',"Voter's ID"] },
  { key:'ghanaCardId',        label:'Ghana Card ID',       type:'text' },
  { key:'voterId',            label:'Voter ID',            type:'text' },
  { key:'implementingPartner',label:'Implementing Partner',type:'select', opts:['Jobberman','Agrico','YouthEmpower','SkillsGH','Other'] },
  { key:'region',             label:'Region',              type:'text' },
  { key:'district',           label:'District',            type:'text' },
  { key:'community',          label:'Community',           type:'text' },
  { key:'locationStatus',     label:'Location Status',     type:'select', opts:['Urban','Rural','Peri-Urban'] },
  { key:'educationLevel',     label:'Education Level',     type:'select', opts:['None','Primary','JHS','SHS','College','Vocational','Technical','University'] },
  { key:'employmentStatus',   label:'Employment Status',   type:'select', opts:['Unemployed','Employed','Casual Worker','Self-Employed','Student'] },
  { key:'disabilityStatus',   label:'Disability Status',   type:'select', opts:['No','Yes'] },
  { key:'refugeeStatus',      label:'Refugee Status',      type:'select', opts:['No','Yes'] },
  { key:'adminNotes',         label:'Admin Notes',         type:'textarea' }
];

function loadCorrection() {
  renderPendingQueue();
  const data = formState.masterSheetData || [];
  if (data.length) renderCorrectionQuality(data);
  else document.getElementById('correctionQualityPanel').innerHTML =
    '<p style="font-size:0.78rem;color:#94a3b8;">No data loaded — click Refresh.</p>';
}

async function previewRemoveBulkImport() {
  if (!formState.isAdmin) return;
  const btn = document.getElementById('removeBulkBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Checking…'; }
  try {
    const result = await apiAction('previewBulkImportedRecords', {
      adminPassword: formState.adminPassword
    });
    if (result.count === 0) {
      showToast('No bulk-imported records found on the Master sheet.', 'info');
      return;
    }
    // Show confirmation with count before deleting
    const confirmed = window.confirm(
      `Found ${result.count} bulk-imported record(s) out of ${result.total} total.\n\n` +
      `This will permanently delete them from the Master sheet and all sub-sheets ` +
      `(Participant Information, Job Placement, Capacity Building).\n\n` +
      `This cannot be undone. Continue?`
    );
    if (!confirmed) return;
    await runRemoveBulkImport(result.count);
  } catch (err) {
    showToast('Error: ' + err.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = '🗑 Remove Bulk Import Data'; }
  }
}

async function runRemoveBulkImport(expectedCount) {
  const btn = document.getElementById('removeBulkBtn');
  if (btn) { btn.disabled = true; btn.textContent = `Deleting ${expectedCount} records…`; }
  try {
    const result = await apiAction('removeBulkImportedRecords', {
      adminPassword: formState.adminPassword
    });
    showToast(result.message || `Removed ${result.removed} bulk-imported records.`, 'success');
    // Reload master data
    await loadSheetData({ silent: true });
  } catch (err) {
    showToast('Delete failed: ' + err.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = '🗑 Remove Bulk Import Data'; }
  }
}

async function runNormalizeAllRecords() {
  if (!formState.isAdmin) return;
  const btn = document.getElementById('normalizeBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Running…'; }
  try {
    const result = await apiAction('normalizeExistingRecords', {
      adminPassword: formState.adminPassword
    });
    showToast(`Standardised ${result.updated} of ${result.total} records.`, 'success');
    // Reload master data so dashboard/report reflect the changes
    await loadSheetData({ silent: true });
  } catch (err) {
    showToast('Standardisation failed: ' + err.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = '✨ Standardise Names & Phones'; }
  }
}

function refreshCorrection() {
  if (!formState.isAdmin) return;
  document.getElementById('pendingQueueList').textContent = 'Refreshing…';
  loadSheetData({ silent: true }).then(() => {
    renderPendingQueue();
    renderCorrectionQuality(formState.masterSheetData || []);
    showToast('Data Correction refreshed.', 'success');
  }).catch(err => showToast('Refresh failed: ' + err.message, 'error'));
}

// ── Pending queue ────────────────────────────────────────────────────────────
function renderPendingQueue() {
  const el = document.getElementById('pendingQueueList');
  if (!el) return;
  const queue = getPendingSubmissions();
  if (!queue.length) {
    el.innerHTML = '<span style="color:#10b981;font-weight:700;">&#10003; No pending submissions — all records are synced.</span>';
    document.getElementById('retryAllBtn').style.display = 'none';
    return;
  }
  document.getElementById('retryAllBtn').style.display = '';
  el.innerHTML = `
    <p style="font-size:0.72rem;color:#92400e;font-weight:700;margin-bottom:0.5rem;">${queue.length} record(s) waiting to sync to Google Sheets:</p>
    ${queue.map(item => `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:0.4rem 0;border-bottom:1px solid #fde68a;">
        <div>
          <span style="font-family:monospace;font-size:0.7rem;color:#92400e;">${escapeHtml(item.data?.participantId || item.id || '—')}</span>
          <span style="font-size:0.65rem;color:#b45309;margin-left:0.5rem;">${escapeHtml(item.data?.collectorName || '')} &bull; ${escapeHtml(item.queuedAt ? item.queuedAt.slice(0,10) : '')}</span>
        </div>
        <span style="font-size:0.65rem;padding:0.15rem 0.4rem;border-radius:999px;background:${item.data?.syncStatus === 'queued' ? '#fef3c7' : '#fee2e2'};color:${item.data?.syncStatus === 'queued' ? '#92400e' : '#991b1b'};">${escapeHtml(item.data?.syncStatus || 'pending')}</span>
      </div>`).join('')}
    <p style="font-size:0.65rem;color:#b45309;margin-top:0.5rem;">Click "Retry All" to attempt syncing these records now. Make sure you have internet access.</p>`;
}

async function retryAllPending() {
  const btn = document.getElementById('retryAllBtn');
  btn.disabled = true;
  btn.textContent = 'Syncing…';
  try {
    await syncPendingSubmissions();
    renderPendingQueue();
    showToast('Sync complete.', 'success');
  } catch (err) {
    showToast('Sync failed: ' + err.message, 'error');
  } finally {
    btn.disabled = false;
    btn.textContent = '↺ Retry All';
  }
}

// ── Data quality panel (with Fix buttons) ────────────────────────────────────
function renderCorrectionQuality(data) {
  const el = document.getElementById('correctionQualityPanel');
  if (!el) return;
  const now = Date.now();
  const fullName = r => ((r.surname || '') + ' ' + (r.firstName || '')).trim() || '—';

  const mismatchPx  = data.filter(r => String(r.adminNotes || '').includes('NAME_MISMATCH'));
  const stuckPx     = data.filter(r => {
    if (isCompleteStatus(r.participantInfoStatus)) return false;
    const d = r.consentSubmittedAt ? new Date(r.consentSubmittedAt) : null;
    return d && (now - d.getTime()) / 86400000 > 7;
  });
  const badAgePx    = data.filter(r => isCompleteStatus(r.participantInfoStatus) && r.age !== '' && r.age !== undefined && Number(r.age) < 10);
  const noNamePx    = data.filter(r => isCompleteStatus(r.participantInfoStatus) && !r.surname && !r.firstName);
  const noPartnerPx = data.filter(r => isCompleteStatus(r.participantInfoStatus) && !r.implementingPartner);

  const total = mismatchPx.length + stuckPx.length + badAgePx.length + noNamePx.length + noPartnerPx.length;

  if (!total) {
    el.innerHTML = '<div style="padding:0.75rem;background:#f0fdf4;border-radius:0.5rem;color:#065f46;font-size:0.8rem;font-weight:700;">&#10003; No data quality issues detected.</div>';
    return;
  }

  const fixBtn = (pid) => `<button onclick="openEditModal('${escapeHtml(pid)}')" style="font-size:0.62rem;padding:0.15rem 0.5rem;background:#5B45E8;color:#fff;border:none;border-radius:0.25rem;cursor:pointer;flex-shrink:0;">Fix</button>`;

  const issueTable = (headers, rows) => `
    <div style="overflow-x:auto;margin-top:0.35rem;max-height:180px;overflow-y:auto;border:1px solid #fed7aa;border-radius:0.35rem;">
      <table style="width:100%;border-collapse:collapse;font-size:0.67rem;">
        <thead><tr>${headers.map(h => `<th style="padding:0.2rem 0.5rem;text-align:left;background:#fff7ed;border-bottom:1px solid #fed7aa;white-space:nowrap;color:#92400e;font-weight:900;">${h}</th>`).join('')}</tr></thead>
        <tbody>${rows.join('')}</tbody>
      </table>
    </div>`;

  const issueSection = (icon, color, title, tableHtml) => `
    <details style="margin-bottom:0.6rem;border:1px solid #e2e8f0;border-radius:0.5rem;padding:0.5rem 0.75rem;">
      <summary style="cursor:pointer;font-size:0.75rem;font-weight:700;color:${color};list-style:none;display:flex;align-items:center;gap:0.4rem;">
        <span>${icon}</span><span>${title}</span><span style="margin-left:auto;font-size:0.6rem;color:#94a3b8;">&#9654; expand</span>
      </summary>
      ${tableHtml}
    </details>`;

  const row = (cells) => '<tr>' + cells.map(c => `<td style="padding:0.2rem 0.5rem;border-bottom:1px solid #f1f5f9;">${c}</td>`).join('') + '</tr>';

  let html = `<p style="font-size:0.72rem;font-weight:700;color:#92400e;margin-bottom:0.75rem;">${total} participant(s) need attention:</p>`;

  if (mismatchPx.length) html += issueSection('🔴', '#991b1b', `${mismatchPx.length} name mismatch${mismatchPx.length > 1 ? 'es' : ''} — consent vs. registered`,
    issueTable(['HAPPY ID','Consent Name','Registered Name','Action'],
      mismatchPx.map(r => row([escapeHtml(r.participantId||'—'), escapeHtml(r.consentName||'—'), escapeHtml(fullName(r)), fixBtn(r.participantId)]))));

  if (stuckPx.length) html += issueSection('🟡', '#92400e', `${stuckPx.length} consented 7+ days ago, not yet registered`,
    issueTable(['HAPPY ID','Name','Consented','Days','Action'],
      stuckPx.map(r => row([escapeHtml(r.participantId||'—'), escapeHtml(r.consentName||'—'), r.consentSubmittedAt ? r.consentSubmittedAt.slice(0,10) : '—', r.consentSubmittedAt ? Math.floor((now - new Date(r.consentSubmittedAt).getTime()) / 86400000) : '—', fixBtn(r.participantId)]))));

  if (badAgePx.length) html += issueSection('🔴', '#991b1b', `${badAgePx.length} invalid date of birth (age < 10)`,
    issueTable(['HAPPY ID','Name','Age','DOB','Action'],
      badAgePx.map(r => row([escapeHtml(r.participantId||'—'), escapeHtml(fullName(r)), r.age||'—', r.dob||'—', fixBtn(r.participantId)]))));

  if (noNamePx.length) html += issueSection('🟡', '#92400e', `${noNamePx.length} registered with no name`,
    issueTable(['HAPPY ID','Region','Partner','Action'],
      noNamePx.map(r => row([escapeHtml(r.participantId||'—'), escapeHtml(r.region||'—'), escapeHtml(r.implementingPartner||'—'), fixBtn(r.participantId)]))));

  if (noPartnerPx.length) html += issueSection('🟠', '#92400e', `${noPartnerPx.length} registered with no implementing partner`,
    issueTable(['HAPPY ID','Name','Region','Action'],
      noPartnerPx.map(r => row([escapeHtml(r.participantId||'—'), escapeHtml(fullName(r)), escapeHtml(r.region||'—'), fixBtn(r.participantId)]))));

  el.innerHTML = html;
}

// ── Participant search for editing ───────────────────────────────────────────
async function searchForEdit() {
  const q   = (document.getElementById('correctionSearchInput')?.value || '').trim();
  const out = document.getElementById('correctionSearchResults');
  if (!q) return;
  out.innerHTML = '<p style="font-size:0.75rem;color:#94a3b8;">Searching…</p>';
  try {
    const result = await apiAction('getParticipantByLookup', { query: q });
    if (result.status === 'MULTIPLE') {
      out.innerHTML = result.participants.map(p => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0.75rem;border:1px solid #e2e8f0;border-radius:0.4rem;margin-bottom:0.4rem;background:#fff;">
          <div>
            <span style="font-weight:700;font-size:0.8rem;">${escapeHtml(p.surname + ', ' + p.firstName)}</span>
            <span style="font-family:monospace;font-size:0.67rem;color:#64748b;margin-left:0.5rem;">${escapeHtml(p.participantId)}</span>
          </div>
          <button onclick="openEditModal('${escapeHtml(p.participantId)}')" style="font-size:0.72rem;padding:0.3rem 0.75rem;background:#5B45E8;color:#fff;border:none;border-radius:0.35rem;cursor:pointer;">Edit</button>
        </div>`).join('');
    } else if (result.participant) {
      const p = result.participant;
      out.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.6rem 0.75rem;border:1px solid #c7d2fe;border-radius:0.4rem;background:#eef2ff;">
          <div>
            <span style="font-weight:700;font-size:0.82rem;">${escapeHtml((p.surname||'') + ' ' + (p.firstName||''))}</span>
            <span style="font-family:monospace;font-size:0.67rem;color:#5B45E8;margin-left:0.5rem;">${escapeHtml(p.participantId)}</span>
            <span style="font-size:0.65rem;color:#64748b;margin-left:0.5rem;">${escapeHtml(p.currentStage||'')}</span>
          </div>
          <button onclick="openEditModal('${escapeHtml(p.participantId)}')" style="font-size:0.72rem;padding:0.3rem 0.75rem;background:#5B45E8;color:#fff;border:none;border-radius:0.35rem;cursor:pointer;">Edit</button>
        </div>`;
    }
  } catch (err) {
    out.innerHTML = `<p style="font-size:0.75rem;color:#ef4444;">${escapeHtml(err.message)}</p>`;
  }
}

// ── Edit modal ───────────────────────────────────────────────────────────────
async function openEditModal(participantId) {
  try {
    const result = await apiAction('getParticipantById', { participantId });
    editModalParticipant = result.participant;
    document.getElementById('editModalId').textContent = participantId;

    const fieldsEl = document.getElementById('editModalFields');
    fieldsEl.innerHTML = EDIT_MODAL_FIELDS.map(f => {
      const val = escapeHtml(String(editModalParticipant[f.key] || ''));
      if (f.type === 'select') {
        const opts = f.opts.map(o => `<option value="${escapeHtml(o)}"${editModalParticipant[f.key] === o ? ' selected' : ''}>${escapeHtml(o)}</option>`).join('');
        return `<div style="grid-column:${f.type === 'textarea' ? 'span 2' : ''}">
          <label style="font-size:0.65rem;font-weight:700;color:#64748b;text-transform:uppercase;display:block;margin-bottom:0.2rem;">${f.label}</label>
          <select data-key="${f.key}" style="width:100%;padding:0.4rem 0.5rem;border:1px solid #e2e8f0;border-radius:0.35rem;font-size:0.78rem;">
            <option value="">(blank)</option>${opts}
          </select></div>`;
      }
      if (f.type === 'textarea') {
        return `<div style="grid-column:span 2">
          <label style="font-size:0.65rem;font-weight:700;color:#64748b;text-transform:uppercase;display:block;margin-bottom:0.2rem;">${f.label}</label>
          <textarea data-key="${f.key}" rows="2" style="width:100%;padding:0.4rem 0.5rem;border:1px solid #e2e8f0;border-radius:0.35rem;font-size:0.78rem;resize:vertical;">${val}</textarea></div>`;
      }
      return `<div>
        <label style="font-size:0.65rem;font-weight:700;color:#64748b;text-transform:uppercase;display:block;margin-bottom:0.2rem;">${f.label}</label>
        <input type="${f.type}" data-key="${f.key}" value="${val}" style="width:100%;padding:0.4rem 0.5rem;border:1px solid #e2e8f0;border-radius:0.35rem;font-size:0.78rem;"></div>`;
    }).join('');

    document.getElementById('editModalError').classList.add('hidden');
    document.getElementById('editParticipantModal').classList.remove('hidden');
  } catch (err) {
    showToast('Could not load participant: ' + err.message, 'error');
  }
}

function closeEditModal() {
  document.getElementById('editParticipantModal').classList.add('hidden');
  editModalParticipant = null;
}

async function saveEditModal() {
  if (!editModalParticipant) return;
  const btn = document.getElementById('editModalSaveBtn');
  btn.disabled = true; btn.textContent = 'Saving…';
  const errEl = document.getElementById('editModalError');
  errEl.classList.add('hidden');

  const updates = {};
  document.querySelectorAll('#editModalFields [data-key]').forEach(el => {
    updates[el.dataset.key] = el.value;
  });

  try {
    await apiAction('adminUpdateParticipant', {
      adminPassword: formState.adminPassword,
      participantId: editModalParticipant.participantId,
      actor: formState.collectorName || 'admin',
      updates
    });
    // Update local master sheet cache
    const idx = (formState.masterSheetData || []).findIndex(r => r.participantId === editModalParticipant.participantId);
    if (idx >= 0) Object.assign(formState.masterSheetData[idx], updates);
    closeEditModal();
    // Refresh correction panel with updated data
    if (formState.masterSheetData?.length) renderCorrectionQuality(formState.masterSheetData);
    showToast('Participant record updated.', 'success');
  } catch (err) {
    errEl.textContent = err.message;
    errEl.classList.remove('hidden');
  } finally {
    btn.disabled = false; btn.textContent = 'Save Changes';
  }
}

// ===== BATCH PLACEMENT =====
let batchDetails = {};
let batchEligible = [];
let batchSelectedIds = new Set();
let batchSearchTerm = '';

function loadBatchPlacement() {
  batchDetails = {};
  batchEligible = [];
  batchSelectedIds = new Set();
  batchSearchTerm = '';
  const searchInput = document.getElementById('batchSearchInput');
  if (searchInput) searchInput.value = '';
  document.getElementById('batchSearchInfo') && (document.getElementById('batchSearchInfo').textContent = '');
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
  [indSel, typSel, rolSel].forEach(select => resetSelect(select));
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
  const sector   = document.getElementById('batchSector').value;
  const industry = document.getElementById('batchIndustry').value;
  const typSel   = document.getElementById('batchJobType');
  resetSelect(document.getElementById('batchJobRole'));
  if (industry) populateJobTypeOptions(typSel, sector, industry);
}

function batchPopulateJobRoles() {
  const sector   = document.getElementById('batchSector').value;
  const industry = document.getElementById('batchIndustry').value;
  const jobType  = document.getElementById('batchJobType').value;
  populateRoleOptions(document.getElementById('batchJobRole'), sector, industry, jobType);
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
    plJobRole:           getResolvedJobRole('batchJobRole', 'batchJobRoleOther'),
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

function batchBackToStep2() {
  renderBatchParticipantList();
  showBatchStep(2);
}

function batchGoToStep3() {
  if (!batchSelectedIds.size) { showToast('Select at least one participant.', 'error'); return; }
  renderBatchReview();
  showBatchStep(3);
}

// ── Search ──
function batchSearchParticipants(query) {
  batchSearchTerm = (query || '').trim().toLowerCase();
  renderBatchParticipantList();
}

// ── Participant list ──
function renderBatchParticipantList() {
  const list    = document.getElementById('batchParticipantList');
  const countEl = document.getElementById('batchEligibleCount');
  const infoEl  = document.getElementById('batchSearchInfo');
  if (!batchEligible.length) {
    list.innerHTML = '<p style="text-align:center;padding:2rem;color:#94a3b8;font-size:0.82rem;">No registered participants found who have not yet been placed.</p>';
    countEl.textContent = '0 participants loaded';
    if (infoEl) infoEl.textContent = '';
    return;
  }
  countEl.textContent = batchEligible.length + ' participant(s) — search to filter, select to add to batch';

  // Filter by search term if present — checks all name fields + ID + phone
  const visible = batchSearchTerm
    ? batchEligible.filter(p => {
        const q = batchSearchTerm;
        const surnameFirst  = ((p.surname || '') + ' ' + (p.firstName || '')).trim().toLowerCase();
        const firstSurname  = ((p.firstName || '') + ' ' + (p.surname || '')).trim().toLowerCase();
        const consentName   = (p.consentName  || '').toLowerCase();
        const id            = (p.participantId || '').toLowerCase();
        const phone         = (p.telephone    || '').replace(/\D/g, '');
        const qDigits       = q.replace(/\D/g, '');
        return surnameFirst.includes(q)
            || firstSurname.includes(q)
            || consentName.includes(q)
            || id.includes(q)
            || (qDigits.length >= 4 && phone.includes(qDigits));
      })
    : batchEligible;

  if (infoEl) {
    infoEl.textContent = batchSearchTerm
      ? `${visible.length} of ${batchEligible.length} shown — selections outside filter are kept`
      : '';
  }

  if (!visible.length) {
    list.innerHTML = `<p style="text-align:center;padding:1.5rem;color:#94a3b8;font-size:0.82rem;">No participants match "<strong>${escapeHtml(batchSearchTerm)}</strong>"</p>`;
    updateBatchSelectedCount();
    return;
  }

  list.innerHTML = visible.map(p => {
    const trained = isCompleteStatus(p.capacityStatus);
    return `
    <label style="display:flex;align-items:center;gap:0.75rem;padding:0.65rem 0.75rem;border-bottom:1px solid #f1f5f9;cursor:pointer;transition:background 0.1s;"
           onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background=''">
      <input type="checkbox" value="${escapeHtml(p.participantId)}"
             onchange="batchToggleParticipant(this.value, this.checked)"
             ${batchSelectedIds.has(p.participantId) ? 'checked' : ''}
             style="width:1.1rem;height:1.1rem;accent-color:#10b981;flex-shrink:0;">
      <div style="flex:1;min-width:0;">
        <div style="display:flex;align-items:center;gap:0.4rem;flex-wrap:wrap;">
          <span style="font-weight:700;font-size:0.82rem;color:#1e293b;">${escapeHtml(
            (p.surname || p.firstName)
              ? (p.surname || '') + (p.surname && p.firstName ? ', ' : '') + (p.firstName || '')
              : (p.consentName || '—')
          )}</span>
          ${trained ? `<span style="font-size:0.6rem;padding:0.1rem 0.4rem;border-radius:999px;background:#dcfce7;color:#166534;font-weight:700;">Trained</span>` : ''}
        </div>
        <div style="font-size:0.68rem;color:#5B45E8;font-family:monospace;margin-top:0.1rem;">${escapeHtml(p.participantId)}</div>
        ${p.implementingPartner ? `<div style="font-size:0.63rem;color:#94a3b8;margin-top:0.1rem;">${escapeHtml(p.implementingPartner)}</div>` : ''}
      </div>
      <div style="text-align:right;flex-shrink:0;">
        <div style="font-size:0.7rem;color:#64748b;">${escapeHtml(p.sex || '')} &bull; Age ${escapeHtml(String(p.age || '?'))}</div>
        <div style="font-size:0.65rem;color:#94a3b8;">${escapeHtml(p.region || '')}</div>
      </div>
    </label>`
  }).join('');
  updateBatchSelectedCount();
}

function batchToggleParticipant(id, checked) {
  if (checked) batchSelectedIds.add(id);
  else batchSelectedIds.delete(id);
  updateBatchSelectedCount();
}

function batchSelectAll(select) {
  // Select/clear applies to currently visible (filtered) participants only
  const visible = batchSearchTerm
    ? batchEligible.filter(p => {
        const name = ((p.surname || '') + ' ' + (p.firstName || '')).toLowerCase();
        const id   = (p.participantId || '').toLowerCase();
        return name.includes(batchSearchTerm) || id.includes(batchSearchTerm);
      })
    : batchEligible;
  visible.forEach(p => select ? batchSelectedIds.add(p.participantId) : batchSelectedIds.delete(p.participantId));
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
