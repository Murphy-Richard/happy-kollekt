// ===== CONFIGURATION =====
const CONFIG = {
  API_ENDPOINT: 'https://script.google.com/a/macros/jobberman.com.gh/s/AKfycbw4qHIg5rgBRn8EflcuE0-nWyDWpiz5_0PwuC0ema-Bg1kfqc-8cPlgqNefyuthsEi5/exec',
  ADMIN_PASSWORD: 'MurphyMERL2026!',
  QUEUE_KEY: 'happy_pending_submissions',
  LOCAL_DB_KEY: 'happy_db',
  DEVICE_ID_KEY: 'happyDeviceId',
  PARTNER_PREFIXES: { 'Jobberman':'JOB', 'Agrico':'AGR', 'YouthEmpower':'YOU', 'SkillsGH':'SKI', 'Other':'OTH' },
  // Ghana Regions & Districts (16 regions, 260+ districts)
  REGIONS: {
    "Greater Accra": ["Accra Metropolitan", "Tema", "Adenta", "Ashaiman", "Ga East", "Ga West", "Ga South", "Ga Central", "La Dade-Kotopon", "Ledzokuku", "Krowor", "Ayawaso West", "Ayawaso East", "Ayawaso North", "Okaikwei North", "Ablekuma North", "Ablekuma Central", "Ablekuma West", "Korle Klottey", "Adabraka", "Osu Klottey", "Ningo-Prampram", "Shai-Osudoku", "Ada East", "Ada West", "Weija-Gbawe", "Kpone-Katamanso"],
    "Ashanti": ["Kumasi Metropolitan", "Obuasi Municipal", "Ejisu", "Bekwai", "Mampong", "Agona", "Asokore Mampong", "Suame", "Bantama", "Subin", "Oforikrom", "Old Tafo", "Kwadaso", "Nhyiaeso", "Atwima Kwanwoma", "Atwima Nwabiagya", "Afigya Kwabre North", "Afigya Kwabre South", "Asante Akim Central", "Asante Akim North", "Asante Akim South", "Bosome Freho", "Bosomtwe", "Ejura Sekyedumase", "Juaben", "Kwabre East", "Offinso Municipal", "Offinso North", "Sekyere Central", "Sekyere East", "Sekyere South", "Sekyere Afram Plains", "Adansi North", "Adansi South", "Amansie Central", "Amansie West", "Ahafo Ano North", "Ahafo Ano South"],
    "Eastern": ["Koforidua", "Akropong", "Nkawkaw", "Mpraeso", "Aburi", "Kibi", "Akim Oda", "Asamankese", "Somanya", "Kade", "Begoro", "Donkorkrom", "Akim Swedru", "Asuogyaman", "Atiwa East", "Atiwa West", "Ayensuano", "Birim Central", "Birim North", "Birim South", "Denkyembour", "Fanteakwa North", "Fanteakwa South", "Kwaebibirem", "Kwahu Afram Plains North", "Kwahu Afram Plains South", "Kwahu East", "Kwahu South", "Kwahu West", "Lower Manya Krobo", "New Juaben North", "New Juaben South", "Nsawam Adoagyiri", "Okere", "Suhum", "Upper Manya Krobo", "Upper West Akim", "Yilo Krobo"],
    "Volta": ["Ho", "Keta", "Hohoe", "Kpando", "Aflao", "Sogakope", "Dzodze", "Adaklu", "Afadzato South", "Agotime-Ziope", "Akatsi North", "Akatsi South", "Anloga", "Central Tongu", "Ho West", "Ketu North", "Ketu South", "North Dayi", "North Tongu", "South Dayi", "South Tongu"],
    "Northern": ["Tamale", "Yendi", "Savelugu", "Tolon", "Kumbungu", "Nanton", "Gushegu", "Karaga", "Saboba", "Zabzugu", "Tatale-Sanguli", "Mion", "Nanumba North", "Nanumba South", "Kpandai"],
    "North East": ["Nalerigu", "Walewale", "Gambaga", "Bunkpurugu", "Yunyoo", "Chereponi"],
    "Upper West": ["Wa", "Lawra", "Nadowli", "Jirapa", "Lambussie", "Nandom", "Sissala East", "Sissala West", "Wa East", "Wa West", "Daffiama-Bussie-Issa"],
    "Upper East": ["Bolgatanga", "Bawku", "Navrongo", "Zebilla", "Paga", "Binduri", "Bongo", "Builsa North", "Builsa South", "Garu", "Kassena-Nankana East", "Kassena-Nankana West", "Nabdam", "Pusiga", "Talensi", "Tempane"],
    "Oti": ["Dambai", "Jasikan", "Kadjebi", "Krachi", "Nkwanta", "Biakoye", "Guan", "Krachi East", "Krachi Nchumuru", "Krachi West", "Nkwanta North", "Nkwanta South"],
    "Bono": ["Sunyani", "Berekum", "Dormaa", "Wenchi", "Techiman", "Nkoranza", "Kintampo", "Atebubu", "Sene", "Pru", "Tain", "Banda", "Jaman North", "Jaman South", "Berekum East", "Berekum West", "Dormaa Central", "Dormaa East", "Dormaa West"],
    "Bono East": ["Techiman Municipal", "Techiman North", "Nkoranza North", "Nkoranza South", "Kintampo North", "Kintampo South", "Atebubu-Amantin", "Pru East", "Pru West", "Sene East", "Sene West"],
    "Ahafo": ["Goaso", "Bechem", "Duayaw Nkwanta", "Hwidiem", "Kenyasi", "Mim", "Asunafo North", "Asunafo South", "Asutifi North", "Asutifi South", "Tano North", "Tano South"],
    "Savannah": ["Damongo", "Bole", "Sawla", "Salaga", "Buipe", "Daboya", "Larabanga", "Mole", "Central Gonja", "East Gonja", "North East Gonja", "North Gonja", "West Gonja", "Sawla-Tuna-Kalba"],
    "Western": ["Sekondi-Takoradi", "Tarkwa", "Prestea", "Bogoso", "Axim", "Elubo", "Half Assini", "Ahanta West", "Effia-Kwesimintsim", "Ellembelle", "Jomoro", "Mpohor", "Nzema East", "Prestea-Huni Valley", "Shama", "Tarkwa-Nsuaem", "Wassa Amenfi Central", "Wassa Amenfi East", "Wassa Amenfi West", "Wassa East"],
    "Western North": ["Sefwi Wiawso", "Bibiani", "Juaboso", "Bodi", "Aowin", "Bia East", "Bia West", "Bibiani-Anhwiaso-Bekwai", "Sefwi Akontombra", "Suaman"],
    "Central": ["Cape Coast", "Winneba", "Kasoa", "Swedru", "Dunkwa", "Elmina", "Moree", "Abura-Asebu-Kwamankese", "Agona East", "Agona West", "Ajumako-Enyan-Essiam", "Asikuma-Odoben-Brakwa", "Assin Central", "Assin North", "Assin South", "Awutu Senya", "Awutu Senya East", "Effutu", "Ekumfi", "Gomoa Central", "Gomoa East", "Gomoa West", "Komenda-Edina-Eguafo-Abrem", "Mfantsiman", "Twifo-Atti Morkwa", "Twifo Hemang Lower Denkyira", "Upper Denkyira East", "Upper Denkyira West"]
  },
  // Sector → Industry → Job Role cascade (expanded from your Excel)
  SECTOR_DATA: {
    "Agriculture": {
      "Crop Farming": ["Farm Manager", "Agronomist", "Soil Scientist", "Irrigation Specialist", "Plant Breeder", "Crop Scout", "Seed Technologist", "Precision Ag Specialist", "Agricultural Engineer", "Horticulturalist", "Entomologist", "Farm Laborer", "Tractor Operator", "Combine Operator", "Irrigation Technician", "Storekeeper", "Driver", "Security Guard", "Gardener", "Accountant", "Bookkeeper", "Farm Administrator", "Purchasing Agent", "Sales Rep", "Inventory Clerk", "HR Officer", "Compliance Officer"],
      "Livestock": ["Ranch Manager", "Veterinary Surgeon", "Animal Nutritionist", "AI Technician", "Livestock Geneticist", "Animal Health Inspector", "Herdsman", "Poultry Attendant", "Milker", "Stable Hand", "Feed Mill Operator", "Livestock Hauler", "Security Guard", "Sanitation Crew", "Accountant", "Procurement Officer", "HR Coordinator", "Logistics Coordinator", "Sales Manager"],
      "Aquaculture": ["Fish Farm Manager", "Marine Biologist", "Aquaculturist", "Water Quality Technician", "Fish Pathologist", "RAS Specialist", "Fisheries Ecologist", "Algae Technician", "Pond Attendant", "Cage Technician", "Net Repairer", "Fish Feeder", "Trawler Deckhand", "Aquaculture Plumber", "Security Guard", "Office Cleaner", "Accountant", "Exports Officer", "HR Generalist", "Supply Chain Officer"],
      "Forestry": ["Forest Manager", "Forester", "Forest Ranger", "Silviculturist", "Timber Cruiser", "Log Grader", "Arborist", "Fire Management Officer", "Chainsaw Operator", "Skidder Operator", "Tree Climber", "Choker Setter", "Logging Truck Driver", "Security Guard", "Accountant", "Permitting Specialist", "HR Officer", "Land Rights Coordinator", "HSE Manager"]
    },
    "Non-Agriculture": {
      "Mining & Extractive": ["Mine Manager", "Petroleum Engineer", "Reservoir Engineer", "Drilling Engineer", "Geologist", "Geophysicist", "Metallurgist", "Mine Surveyor", "Ventilation Officer", "Blasting Engineer", "Environmental Coordinator", "Roustabout", "Roughneck", "Derrickhand", "Heavy Equipment Operator", "Drill Rig Operator", "Crusher Operator", "Maintenance Mechanic", "Security Guard", "Accountant", "Procurement Manager", "HR Business Partner", "Logistics Coordinator", "Regulatory Officer"],
      "Manufacturing": ["Factory Manager", "Production Manager", "QA Manager", "Food Technologist", "Product Developer", "Lab Technician", "QC Inspector", "Brewmaster", "Industrial Baker", "Machine Engineer", "Machine Operator", "Packaging Hand", "Warehouse Loader", "Delivery Driver", "Sanitation Worker", "Accountant", "Purchasing Officer", "Supply Chain Coordinator", "HR Officer", "Compliance Officer"],
      "Construction": ["Project Manager", "Site Manager", "Civil Engineer", "Structural Engineer", "Quantity Surveyor", "Architect", "BIM Coordinator", "Land Surveyor", "Safety Officer", "CAD Technician", "Bricklayer", "Carpenter", "Electrician", "Plumber", "Crane Operator", "Scaffolder", "Painter", "Tipper Driver", "Site Security", "Post-Construction Cleaner", "Construction Accountant", "Contract Administrator", "Document Controller", "HR Manager", "Procurement Officer"],
      "ICT & Digital": ["CTO", "IT Project Manager", "Product Manager", "Software Engineer", "Full-stack Developer", "Mobile Developer", "UI/UX Designer", "Data Scientist", "Cybersecurity Specialist", "Cloud Architect", "Systems Admin", "AI/ML Engineer", "Network Engineer", "IT Helpdesk", "Hardware Repairer", "Data Entry", "CCTV Installer", "Office Cleaner", "IT Accountant", "Digital Marketing Manager", "Content Strategist", "IT Recruiter", "Technical Writer"],
      "Financial Services": ["Branch Manager", "Operations Manager", "Credit Manager", "Loan Officer", "Credit Analyst", "Relationship Manager", "Risk Officer", "Mobile Money Coordinator", "Bank Teller", "Cashier", "Bullion Driver", "Armed Security", "Office Cleaner", "Accountant", "Data Entry Clerk", "HR Officer", "Customer Service Executive"],
      "Healthcare": ["Hospital Administrator", "Medical Director", "Nursing Superintendent", "Medical Doctor", "Registered Nurse", "Pharmacist", "Lab Scientist", "Radiographer", "Physiotherapist", "Biomedical Engineer", "Ward Assistant", "Pharmacy Technician", "Ambulance Driver", "Hospital Security", "Sanitation Officer", "Gardener", "Medical Accountant", "Records Officer", "HR Manager", "Insurance Coordinator", "Medical Secretary"],
      "Education": ["Principal", "Registrar", "Dean", "Director of Studies", "Teacher", "Lecturer", "Curriculum Developer", "Educational Psychologist", "Librarian", "Lab Technician", "Teaching Assistant", "School Nurse", "Bus Driver", "Security Guard", "Janitor", "Gardener", "School Accountant", "Admissions Officer", "HR Manager", "Exams Officer", "School Secretary"],
      "Hospitality & Tourism": ["Hotel GM", "Front Office Manager", "Executive Housekeeper", "F&B Manager", "Event Planner", "Revenue Manager", "Maintenance Engineer", "IT Specialist", "Front Desk", "Bellhop", "Room Attendant", "Laundry Worker", "Security", "Gardener", "Shuttle Driver", "Hotel Accountant", "Reservations Agent", "HR Manager", "Night Auditor"],
      "Retail & Trade": ["Store Manager", "Floor Manager", "Merchandise Manager", "Branch Manager", "Regional Director", "Visual Merchandiser", "Buyer", "Pricing Analyst", "Loss Prevention", "E-commerce Specialist", "Sales Associate", "Cashier", "Shelf Stocker", "Warehouse Picker", "Delivery Driver", "Security Guard", "Store Cleaner", "Retail Accountant", "Inventory Manager", "Procurement Officer", "HR Coordinator", "Customer Service Manager"],
      "Logistics & Transport": ["Fleet Manager", "Logistics Director", "Warehouse Manager", "Supply Chain Manager", "Port Manager", "Logistics Analyst", "Route Optimizer", "Transport Safety Officer", "WMS Admin", "Customs Broker", "Freight Forwarder", "HGV Driver", "Forklift Operator", "Courier", "Loader", "Fleet Mechanic", "Warehouse Security", "Facility Cleaner", "Logistics Accountant", "Documentation Specialist", "Dispatcher", "HR Specialist", "Cargo Coordinator"]
    }
  }
};

// ===== STATE =====
let formState = {
  collectorName: '', deviceId: '', regionCounter: {}, globalSequence: 0, isSubmitting: false, isSyncing: false, isAdmin: false
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  initializeForm();
  setupEventListeners();
  updatePartnerDisplays();
  // Check admin login
  if (localStorage.getItem('happyAdmin') === 'true') {
    formState.isAdmin = true;
  }
  syncPendingSubmissions();
});

function initializeForm() {
  document.getElementById('onboardingDate').valueAsDate = new Date();
  formState.deviceId = generateDeviceId();
  document.getElementById('deviceId').value = formState.deviceId;
  populateRegions();
  const saved = localStorage.getItem('happyCollector');
  if (saved) {
    document.getElementById('collectorName').value = saved;
    formState.collectorName = saved;
    updateCollectorDisplays(saved);
  }
  updateSyncPanel();
  updateOnlineStatus();
  updateIds();
  handleIdTypeChange();
  toggleBaselineEmploymentFields();
  toggleCapacityFields(document.querySelector('input[name="tr_check"]:checked')?.value === 'Yes');
  togglePlacementFields(document.querySelector('input[name="pl_check"]:checked')?.value === 'Yes');
}

function setupEventListeners() {
  document.getElementById('collectorName').addEventListener('change', e => {
    formState.collectorName = e.target.value;
    localStorage.setItem('happyCollector', e.target.value);
    updateCollectorDisplays(e.target.value);
  });
  document.getElementById('telephone').addEventListener('blur', e => validatePhone(e.target));
  document.getElementById('ghanaCardId').addEventListener('blur', e => validateGhanaCard(e.target));
  window.addEventListener('online', () => {
    updateOnlineStatus();
    syncPendingSubmissions();
  });
  window.addEventListener('offline', updateOnlineStatus);
  // Prevent form submit on Enter in non-textarea fields
  document.getElementById('mainForm').addEventListener('keypress', e => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') e.preventDefault();
  });
  document.getElementById('mainForm').addEventListener('invalid', e => {
    showToast(`Please complete: ${getFieldLabel(e.target)}`, 'error');
  }, true);
}

// ===== VIEW SWITCHING =====
function setView(view) {
  document.getElementById('view-form').classList.toggle('hidden', view !== 'form');
  document.getElementById('view-sheet').classList.toggle('hidden', view !== 'sheet');
  document.getElementById('tab-form').classList.toggle('active', view === 'form');
  document.getElementById('tab-sheet').classList.toggle('active', view === 'sheet');
}

// ===== ADMIN LOGIN =====
function showAdminLogin() {
  document.getElementById('adminModal').classList.remove('hidden');
  const password = document.getElementById('adminPassword');
  const toggle = document.getElementById('toggleAdminPassword');
  password.value = '';
  password.type = 'password';
  if (toggle) toggle.textContent = 'Show';
  password.focus();
}
function closeAdminLogin() {
  document.getElementById('adminModal').classList.add('hidden');
}
function toggleAdminPassword() {
  const password = document.getElementById('adminPassword');
  const toggle = document.getElementById('toggleAdminPassword');
  const isHidden = password.type === 'password';
  password.type = isHidden ? 'text' : 'password';
  if (toggle) toggle.textContent = isHidden ? 'Hide' : 'Show';
  password.focus();
}
function verifyAdmin() {
  const pwd = document.getElementById('adminPassword').value;
  if (pwd === CONFIG.ADMIN_PASSWORD) {
    formState.isAdmin = true;
    localStorage.setItem('happyAdmin', 'true');
    closeAdminLogin();
    showToast('✅ Admin access granted', 'success');
    loadSheetData();
    setView('sheet');
  } else {
    showToast('❌ Incorrect password', 'error');
  }
}

// ===== REGION & DISTRICT LOGIC =====
function populateRegions() {
  const selects = ['region', 'workRegion', 'placementRegion'];
  selects.forEach(selId => {
    const sel = document.getElementById(selId);
    if (!sel) return;
    Object.keys(CONFIG.REGIONS).sort().forEach(region => {
      const opt = document.createElement('option');
      opt.value = region; opt.textContent = region;
      sel.appendChild(opt.cloneNode(true));
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
  } else { dist.disabled = true; }
}

// ===== CASCADE: Sector → Industry → Job Type → Job Role =====
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
function populateJobTypes() { document.getElementById('jobType').disabled = false; }
function populateJobRoles() {
  const sector = document.getElementById('sector').value;
  const industry = document.getElementById('industry').value;
  const jobType = document.getElementById('jobType').value;
  const roleSel = document.getElementById('jobRole');
  roleSel.innerHTML = '<option value="">Select</option>';
  if (sector && industry && jobType && CONFIG.SECTOR_DATA[sector]?.[industry]) {
    CONFIG.SECTOR_DATA[sector][industry].forEach(role => {
      const opt = document.createElement('option');
      opt.value = role; opt.textContent = role;
      roleSel.appendChild(opt);
    });
    roleSel.disabled = false;
  }
}
// Placement cascade (separate selectors)
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
function populatePlacementJobTypes() { document.getElementById('plJobType').disabled = false; }
function populatePlacementJobRoles() {
  const sector = document.getElementById('plSector').value;
  const industry = document.getElementById('plIndustry').value;
  const jobType = document.getElementById('plJobType').value;
  const roleSel = document.getElementById('plJobRole');
  roleSel.innerHTML = '<option value="">Select</option>';
  if (sector && industry && jobType && CONFIG.SECTOR_DATA[sector]?.[industry]) {
    CONFIG.SECTOR_DATA[sector][industry].forEach(role => {
      const opt = document.createElement('option');
      opt.value = role; opt.textContent = role;
      roleSel.appendChild(opt);
    });
    roleSel.disabled = false;
  }
}

// ===== CONDITIONAL FIELD TOGGLES =====
function toggleRefugeeField() {
  const show = document.getElementById('refugeeStatus').value === 'Yes';
  document.getElementById('nationalityField').classList.toggle('hidden', !show);
}
function toggleDisplacementFields() {
  const show = document.getElementById('displacementStatus').value === 'Yes';
  ['displacementReasonField', 'originalCommunityField', 'hostCommunityField'].forEach(id => {
    document.getElementById(id).classList.toggle('hidden', !show);
  });
}
function toggleDisabilityField() {
  const show = document.getElementById('disabilityStatus').value === 'Yes';
  document.getElementById('disabilitySpecField').classList.toggle('hidden', !show);
}
function toggleBaselineEmploymentFields() {
  const status = document.getElementById('employmentStatus').value;
  const show = status === 'Employed' || status === 'Casual Worker';
  document.getElementById('baselineEmploymentFields').classList.toggle('show', show);

  if (!show) {
    ['currentOccupation', 'monthlyIncome', 'incomeFrequency', 'sector', 'industry', 'jobType', 'jobRole', 'workRegion', 'workDistrict', 'workCommunity'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    ['industry', 'jobType', 'jobRole', 'workDistrict'].forEach(id => {
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
  document.getElementById('virtualTrainingFields').classList.toggle('hidden', mode !== 'Virtual');
}
function togglePlacementFields(show) {
  document.getElementById('placementFields').classList.toggle('show', show);
  setSectionControlsDisabled('placementFields', !show);
  document.getElementById('currentEmploymentFields').classList.toggle('show', !show);
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
    control.disabled = disabled;
    if (disabled && control.type !== 'radio' && control.type !== 'checkbox') {
      control.value = '';
    }
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
  const dob = document.getElementById('dob').value;
  if (!dob) { document.getElementById('age').value = ''; document.getElementById('participantTypeAge').value = ''; return; }
  const birth = new Date(dob), today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  document.getElementById('age').value = age;
  document.getElementById('participantTypeAge').value = (age >= 15 && age <= 35) ? 'Youth' : 'Non-Youth';
}

// ===== ID GENERATION =====
function onPartnerChange() {
  updatePartnerDisplays();
  updateIds();
}
function updatePartnerDisplays() {
  const partner = document.getElementById('implementingPartner').value || 'the implementing partner';
  document.getElementById('partnerNameDisplay').textContent = partner;
  document.getElementById('partnerNameDisplay2').textContent = partner;
}
function updateCollectorDisplays(name) {
  const displayName = name || 'Not Set';
  const primary = document.getElementById('collectorDisplay');
  const secondary = document.getElementById('collectorDisplaySub');
  if (primary) primary.textContent = displayName;
  if (secondary) secondary.textContent = displayName;
}
function updateIds() {
  const partner = document.getElementById('implementingPartner').value || 'UNK';
  const region = document.getElementById('region').value || 'XXX';
  const pPrefix = CONFIG.PARTNER_PREFIXES[partner] || partner.substring(0,3).toUpperCase();
  const rPrefix = region.substring(0,3).toUpperCase();
  const ts = new Date().toISOString().replace(/[-:T.]/g, '').substring(0,14);
  const sequence = getNextLocalSequence();
  // Submission ID
  document.getElementById('submissionId').value = `${rPrefix}-${String(sequence).padStart(6,'0')}-${ts}`;
  document.getElementById('subIdDisplay').textContent = `${rPrefix}-${String(sequence).padStart(6,'0')}-${ts}`;
  // HAMIS ID
  document.getElementById('hamisId').value = generateHamisId(rPrefix, sequence);
  // Participant ID placeholder
  document.getElementById('participantId').placeholder = `${pPrefix}--${String(sequence).padStart(7,'0')} (will auto-generate)`;
}
function generateHamisId(regionPrefix, sequence) {
  return `HAMIS-${regionPrefix}-${String(sequence).padStart(6,'0')}`;
}
function generateDeviceId() {
  const saved = localStorage.getItem(CONFIG.DEVICE_ID_KEY);
  if (saved) return saved;
  const ua = navigator.userAgent, platform = navigator.platform, lang = navigator.language;
  const hash = `${ua}${platform}${lang}${Date.now()}`.split('').reduce((a,b) => { a = ((a<<5)-a)+b.charCodeAt(0); return a&a; }, 0);
  const deviceId = `DEV-${Math.abs(hash).toString(36).toUpperCase().substring(0,8)}`;
  localStorage.setItem(CONFIG.DEVICE_ID_KEY, deviceId);
  return deviceId;
}

// ===== VALIDATION (INDEX5 STYLE) =====
function validatePhone(input) {
  const val = input.value.replace(/\D/g, '');
  if (val && !/^0\d{9}$/.test(val)) {
    showToast('Phone must be 10 digits starting with 0 (e.g., 0244111111)', 'error');
    input.focus();
    return false;
  }
  return true;
}
function validateGhanaCard(input) {
  const val = input.value.toUpperCase();
  // Index5 logic: GHA-XXXXXXXXX-X format (15 chars total)
  if (val && !/^GHA-\d{9}-\d$/.test(val)) {
    showToast('Ghana Card must be: GHA-XXXXXXXXX-X (15 chars)', 'error');
    input.focus();
    return false;
  }
  return true;
}
function formatGhanaCard(input) {
  // Auto-format as user types: GHA-123456789-0
  let val = input.value.toUpperCase().replace(/[^A-Z0-9-]/g, '');
  if (!val.startsWith('GHA-')) val = 'GHA-' + val.replace('GHA', '');
  if (val.length > 13 && val[13] !== '-') val = val.slice(0,13) + '-' + val.slice(13);
  input.value = val.slice(0,15);
}

// ===== OFFLINE QUEUE =====
function getPendingSubmissions() {
  try {
    return JSON.parse(localStorage.getItem(CONFIG.QUEUE_KEY)) || [];
  } catch {
    return [];
  }
}

function setPendingSubmissions(queue) {
  localStorage.setItem(CONFIG.QUEUE_KEY, JSON.stringify(queue));
  updateOnlineStatus();
}

function getNextLocalSequence() {
  return db.length + getPendingSubmissions().length + 1;
}

function queueSubmission(formData, reason = '') {
  const queue = getPendingSubmissions();
  if (queue.some(item => item.data.localQueueId === formData.localQueueId)) return;

  queue.push({
    id: formData.localQueueId,
    data: { ...formData, syncStatus: 'queued' },
    queuedAt: new Date().toISOString(),
    attempts: 0,
    lastError: reason
  });
  setPendingSubmissions(queue);
}

async function postSubmission(formData) {
  const response = await fetch(CONFIG.API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ ...formData, syncStatus: 'synced' })
  });
  const responseText = await response.text();
  let result;

  try {
    result = JSON.parse(responseText);
  } catch {
    const message = responseText.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    throw new Error(message || 'Backend returned a non-JSON response');
  }

  if (!response.ok || result.status !== 'OK') {
    throw new Error(result.message || `Submission failed (${response.status})`);
  }

  return result;
}

function saveLocalSubmission(formData, referenceId = '') {
  const record = {
    ...formData,
    referenceId,
    syncStatus: 'synced',
    syncedAt: new Date().toISOString()
  };

  if (!db.some(item => item.localQueueId === record.localQueueId)) {
    db.push(record);
    localStorage.setItem(CONFIG.LOCAL_DB_KEY, JSON.stringify(db));
  }
}

async function syncPendingSubmissions() {
  if (formState.isSyncing || !navigator.onLine) return;

  let queue = getPendingSubmissions();
  if (!queue.length) {
    updateOnlineStatus();
    return;
  }

  formState.isSyncing = true;
  updateSyncPanel('syncing', `Syncing ${queue.length} pending record(s) to Google Sheets...`);
  showToast(`Syncing ${queue.length} queued record(s)...`, 'info');
  showStatus(`🟢 Online - Syncing ${queue.length} pending record(s)...`, 'online');

  for (const item of [...queue]) {
    try {
      const result = await postSubmission(item.data);
      saveLocalSubmission(item.data, result.referenceId || item.data.submissionId);
      queue = queue.filter(pending => pending.id !== item.id);
      localStorage.setItem(CONFIG.QUEUE_KEY, JSON.stringify(queue));
      updateSyncPanel('syncing', queue.length ? `Syncing ${queue.length} pending record(s)...` : 'Finalizing sync...');
    } catch (err) {
      queue = queue.map(pending => {
        if (pending.id !== item.id) return pending;
        return {
          ...pending,
          attempts: pending.attempts + 1,
          lastError: err.message,
          lastAttemptAt: new Date().toISOString()
        };
      });
      localStorage.setItem(CONFIG.QUEUE_KEY, JSON.stringify(queue));
      updateSyncPanel('pending', `${queue.length} record(s) still waiting. Last error: ${err.message}`);
      console.error('Offline sync failed:', err);
      showToast(`Sync paused: ${err.message}`, 'error');
      break;
    }
  }

  formState.isSyncing = false;
  if (queue.length) {
    showStatus(`🟡 ${queue.length} record(s) still pending sync`, 'offline');
  } else {
    showToast('All queued records synced to Google Sheets.', 'success');
    updateIds();
    updateOnlineStatus();
  }
  updateSyncPanel();
}

function showSubmissionComplete(referenceId, message, status = 'submitted') {
  const statusConfig = {
    submitted: {
      badge: 'Submitted',
      title: 'Submission Successful!',
      detail: 'This record has been received by Google Sheets.'
    },
    queued: {
      badge: 'Queued Offline',
      title: 'Saved on This Device',
      detail: 'This record is waiting in the offline queue and will sync automatically.'
    },
    pending: {
      badge: 'Pending Sync',
      title: 'Saved Locally',
      detail: 'This record is saved on this device and will retry when the backend is available.'
    }
  };
  const config = statusConfig[status] || statusConfig.submitted;
  const badge = document.getElementById('submissionStatusBadge');

  badge.textContent = config.badge;
  badge.className = `submission-status-badge ${status}`;
  document.getElementById('submissionStatusTitle').textContent = config.title;
  document.getElementById('submissionStatusMessage').textContent = message;
  document.getElementById('submissionSyncDetail').textContent = `${config.detail} Pending records: ${getPendingSubmissions().length}.`;
  document.getElementById('refDisplay').textContent = referenceId || 'N/A';
  document.getElementById('mainForm').classList.add('hidden');
  document.getElementById('successScreen').classList.add('show');
  showStatus(message, navigator.onLine ? 'online' : 'offline');
}

// ===== FORM SUBMISSION =====
async function handleSubmit(e) {
  e.preventDefault();
  if (formState.isSubmitting) return;
  
  // Final validation
  if (!validatePhone(document.getElementById('telephone'))) return;
  const idType = document.getElementById('idType').value;
  if (idType === 'Ghana Card' && !validateGhanaCard(document.getElementById('ghanaCardId'))) return;
  
  formState.isSubmitting = true;
  const btn = document.getElementById('submitBtn');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span class="spinner"></span> Submitting...';
  btn.disabled = true;
  
  try {
    const formData = collectFormData();
    updateSyncPanel(navigator.onLine ? 'syncing' : 'offline', navigator.onLine ? 'Submitting to Google Sheets...' : 'Saving this record on this device...');
    showToast(navigator.onLine ? 'Submitting to Google Sheets...' : 'Offline. Queuing this record on this device.', 'info');
    showStatus(navigator.onLine ? '🟢 Online - Syncing...' : '🔴 Offline - Saving locally...', navigator.onLine ? 'online' : 'offline');

    if (!navigator.onLine) {
      queueSubmission(formData, 'Device offline');
      showSubmissionComplete(formData.submissionId, 'Queued locally. It will sync when internet returns.', 'queued');
      showToast('Queued offline. It will sync when internet returns.', 'success');
    } else {
      try {
        const result = await postSubmission(formData);
        saveLocalSubmission(formData, result.referenceId || formData.submissionId);
        updateSyncPanel('online', 'Last record submitted to Google Sheets.');
        showSubmissionComplete(result.referenceId || formData.submissionId, 'Saved to Google Sheets.', 'submitted');
        showToast('Submitted to Google Sheets.', 'success');
      } catch (syncErr) {
        queueSubmission(formData, syncErr.message);
        updateSyncPanel('pending', `${getPendingSubmissions().length} record(s) queued. Last error: ${syncErr.message}`);
        showSubmissionComplete(formData.submissionId, 'Saved locally. It will retry automatically when internet is available.', 'pending');
        showToast('Backend unavailable. Saved locally and queued for sync.', 'success');
      }
    }
  } catch (err) {
    console.error('Submit error:', err);
    showToast(`Error: ${err.message}`, 'error');
  } finally {
    formState.isSubmitting = false;
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
}

function collectFormData() {
  const region = document.getElementById('region').value;
  const modules = Array.from(document.querySelectorAll('input[name="modules"]:checked')).map(cb => cb.value).join(', ');
  const digitalSkills = Array.from(document.querySelectorAll('input[name="digitalSkills"]:checked')).map(cb => cb.value).join(', ');
  const virtualModules = ''; // Placeholder if needed
  
  return {
    // Section A: Meta
    submissionId: document.getElementById('submissionId').value,
    participantId: document.getElementById('participantId').value || generateParticipantId(),
    localQueueId: globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `LOCAL-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    syncStatus: 'pending',
    collectorName: document.getElementById('collectorName').value,
    deviceId: formState.deviceId,
    submissionTimestamp: new Date().toISOString(),
    
    // Section B: General
    hamisId: document.getElementById('hamisId').value,
    onboardingDate: document.getElementById('onboardingDate').value,
    implementingPartner: document.getElementById('implementingPartner').value,
    region: region,
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
    disabilityStatus: document.getElementById('disabilityStatus').value,
    disabilitySpecify: document.getElementById('disabilitySpecify').value,
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
    
    // Section C: Capacity Building
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
    modules: modules,
    digitalSkills: digitalSkills,
    wishTraining: document.getElementById('wishTraining').value,
    previousTrainings: document.getElementById('previousTrainings').value,
    previousTrainingDesc: document.getElementById('previousTrainingDesc').value,
    
    // Section D: Placement
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
    currentIncomeAlt: document.getElementById('currentIncomeAlt').value
  };
}

function generateParticipantId() {
  const partner = document.getElementById('implementingPartner').value || 'UNK';
  const prefix = CONFIG.PARTNER_PREFIXES[partner] || partner.substring(0,3).toUpperCase();
  return `${prefix}--${String(getNextLocalSequence()).padStart(7,'0')}`;
}

function resetForm() {
  document.getElementById('mainForm').reset();
  document.getElementById('mainForm').classList.remove('hidden');
  document.getElementById('successScreen').classList.remove('show');
  // Reset conditionals
  ['baselineEmploymentFields', 'capacityFields', 'placementFields', 'currentEmploymentFields'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('show', 'hidden');
  });
  ['nationalityField', 'disabilitySpecField', 'virtualTrainingFields', 'previousTrainingDetails', 'currentEmploymentDetails', 'displacementReasonField', 'originalCommunityField', 'hostCommunityField'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  // Reset disables
  ['district', 'industry', 'jobType', 'jobRole', 'placementDistrict', 'workDistrict', 'plIndustry', 'plJobType', 'plJobRole'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.disabled = true;
  });
  // Reset radios
  document.querySelectorAll('input[name="tr_check"]').forEach(r => r.checked = r.value === 'No');
  document.querySelectorAll('input[name="pl_check"]').forEach(r => r.checked = r.value === 'No');
  toggleCapacityFields(false);
  togglePlacementFields(false);
  // Reset dates
  document.getElementById('onboardingDate').valueAsDate = new Date();
  handleIdTypeChange();
  toggleBaselineEmploymentFields();
  // Reset IDs
  updateIds();
  hideStatus();
  formState.isSubmitting = false;
}

// ===== MASTER SHEET FUNCTIONS =====
async function loadSheetData() {
  if (!formState.isAdmin) { showAdminLogin(); return; }
  const status = document.getElementById('sheetBody').querySelector('td');
  if (status) status.textContent = '🔄 Loading from Google Sheets...';
  try {
    const res = await fetch(CONFIG.API_ENDPOINT + '?action=getSheetData');
    const data = await res.json();
    renderSheet(data);
  } catch (err) {
    console.error('Sheet load error:', err);
    showToast('❌ Failed to load data', 'error');
  }
}
function renderSheet(data) {
  const head = document.getElementById('sheetHead');
  const body = document.getElementById('sheetBody');
  if (!data?.length) { body.innerHTML = '<tr><td colspan="25" class="text-center py-6 text-slate-500">No data</td></tr>'; return; }
  // Headers
  head.innerHTML = '';
  const trH = document.createElement('tr');
  Object.keys(data[0]).forEach(k => { const th = document.createElement('th'); th.textContent = k; trH.appendChild(th); });
  head.appendChild(trH);
  // Rows
  body.innerHTML = '';
  data.forEach(row => {
    const tr = document.createElement('tr');
    Object.values(row).forEach(v => { const td = document.createElement('td'); td.textContent = v || '-'; tr.appendChild(td); });
    body.appendChild(tr);
  });
}
function exportSheetData() {
  showToast('📥 Export requires backend support', 'info');
}

// ===== UI UTILITIES =====
function showToast(msg, type='info') {
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
function updateSyncPanel(statusOverride = '', detailOverride = '') {
  const panel = document.getElementById('syncStatusPanel');
  const title = document.getElementById('syncStatusTitle');
  const detail = document.getElementById('syncStatusDetail');
  if (!panel || !title || !detail) return;

  const pendingCount = getPendingSubmissions().length;
  let status = statusOverride;
  let titleText = 'Ready to submit';
  let detailText = 'Online. New records will save to Google Sheets.';

  if (!status) {
    if (formState.isSyncing) {
      status = 'syncing';
      titleText = 'Syncing queued records';
      detailText = pendingCount ? `Uploading ${pendingCount} pending record(s)...` : 'Finishing sync...';
    } else if (!navigator.onLine) {
      status = 'offline';
      titleText = pendingCount ? 'Queued offline' : 'Offline';
      detailText = pendingCount
        ? `${pendingCount} record(s) saved on this device. They will sync when internet returns.`
        : 'New records will be saved on this device until internet returns.';
    } else if (pendingCount) {
      status = 'pending';
      titleText = 'Pending sync';
      detailText = `${pendingCount} record(s) waiting to sync to Google Sheets.`;
    } else {
      status = 'online';
    }
  } else if (status === 'syncing') {
    titleText = 'Syncing now';
    detailText = detailOverride || detailText;
  } else if (status === 'pending') {
    titleText = 'Pending sync';
    detailText = detailOverride || `${pendingCount} record(s) waiting to sync to Google Sheets.`;
  }

  panel.className = `sync-status-panel ${status}`;
  title.textContent = titleText;
  detail.textContent = detailOverride || detailText;
}
function updateOnlineStatus() {
  const bar = document.getElementById('statusBar');
  const txt = document.getElementById('statusText');
  const pendingCount = getPendingSubmissions().length;
  updateSyncPanel();

  if (navigator.onLine && pendingCount) {
    txt.textContent = `🟡 Online - ${pendingCount} record(s) pending sync`;
    bar.className = 'status-bar offline';
  } else if (navigator.onLine) {
    txt.textContent = '🟢 Online - Data syncs to Google Sheets';
    bar.className = 'status-bar online';
  } else {
    txt.textContent = pendingCount
      ? `🔴 Offline - ${pendingCount} record(s) saved locally`
      : '🔴 Offline - New data will be saved locally';
    bar.className = 'status-bar offline';
  }

  if (!formState.isSubmitting && !formState.isSyncing) setTimeout(() => bar.classList.add('hidden'), 4000);
}

// Local storage fallback for demo (index5 style)
let db = JSON.parse(localStorage.getItem(CONFIG.LOCAL_DB_KEY)) || [];

