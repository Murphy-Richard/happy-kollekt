// ─── SPREADSHEET IDs ────────────────────────────────────────────────────────
const KOLLECT_SPREADSHEET_ID   = '15wqqAiJIbw6lfzwZFG_fGiklG-jFMCCpQhkaWVtPSzA';
const CONSENT_SPREADSHEET_ID   = '1D_LyM6SQFp2GjU88ytXe1yPkePuPxM4OeI0lgpzs8O4';

// ─── SHEET NAMES ─────────────────────────────────────────────────────────────
const MASTER_SHEET_NAME              = 'Master';
const AUDIT_SHEET_NAME               = 'Audit_Log';
const SUBMISSION_METADATA_SHEET_NAME = 'Submission Metadata';
const PARTICIPANT_INFO_SHEET_NAME    = 'Participant Information';
const CAPACITY_BUILDING_SHEET_NAME   = 'Capacity Building / Training';
const JOB_PLACEMENT_SHEET_NAME       = 'Job Placement';
const PLACEMENT_BATCHES_SHEET_NAME   = 'Placement Batches';
const CONSENT_TAB_NAME               = 'Consents';

// ─── OTHER CONSTANTS ─────────────────────────────────────────────────────────
const PARTICIPANT_PREFIX       = 'HAPPY-2026-';
const CV_UPLOAD_FOLDER         = '1WEqqBy9AvnzMAkd6dJBXeaO_IqnO1bSc';
const CONSENT_SIGNATURE_FOLDER = '1uczj5UbNUqY0-j6Rn7bosXO13LvvACmV';
const BACKEND_VERSION          = '2026-06-02-unified';
const JSON_MIME                = ContentService.MimeType.JSON;

// ─── CONSENT LOG HEADERS ─────────────────────────────────────────────────────
const CONSENT_LOG_HEADERS = [
  'Consent ID', 'Timestamp', 'Venue of Engagement', 'Participant Name',
  'Phone Number', 'Email', 'Accept to Participate', 'Language', 'Program', 'Signature'
];

// ─── HEADERS ─────────────────────────────────────────────────────────────────
const MASTER_HEADERS = [
  'participantId', 'continuationTokenHash', 'continuationTokenCreatedAt',
  'consentStatus', 'consentSubmittedAt', 'consentSubmissionId',
  'consentName', 'consentPhone', 'consentEmail',
  'consentEmailSent', 'consentEmailSentAt', 'consentEmailSendError',
  'consentVenue', 'consentSignatureFileUrl', 'consentSignatureFileId', 'consentSignatureFileName',
  'participantInfoStatus', 'capacityBuildingStatus', 'jobPlacementStatus',
  'currentStage', 'lockedSections', 'cvStatus',
  'cvUploadedAt', 'cvFileUrl', 'cvFileId', 'cvDecisionAt', 'cvTemplateFolderAccessed',
  'lastUpdatedAt', 'lastUpdatedBy', 'createdAt', 'createdBy',
  'submissionId', 'localQueueId', 'syncStatus', 'collectorName', 'deviceId', 'submissionTimestamp',
  'hamisId', 'onboardingDate', 'implementingPartner',
  'region', 'district', 'community', 'locationStatus',
  'surname', 'firstName', 'otherNames', 'sex', 'dob', 'age', 'participantTypeAge',
  'telephone', 'idType', 'ghanaCardId', 'voterId',
  'refugeeStatus', 'nationality', 'displacementStatus', 'displacementReason',
  'originalCommunity', 'hostCommunity', 'disabilityStatus', 'disabilitySpecify',
  'educationLevel', 'employmentStatus', 'currentOccupation',
  'monthlyIncome', 'incomeFrequency', 'sector', 'industry', 'jobType', 'jobRole',
  'workRegion', 'workDistrict', 'workCommunity',
  'trainedByPartner', 'trainingStartDate', 'trainingEndDate', 'trainingLocation',
  'trainingMode', 'virtualPlatform', 'trainerType', 'trainingPartner',
  'completionStatus', 'certificateIssued', 'modules', 'digitalSkills',
  'wishTraining', 'previousTrainings', 'previousTrainingDesc',
  'placedByPartner', 'placementStartDate', 'placementRegion', 'placementDistrict',
  'placementCommunity', 'plSector', 'plIndustry', 'plJobType', 'plJobRole',
  'employmentType', 'employmentCategory', 'placementIncome', 'placementIncomeFreq',
  'employerName', 'contractType', 'workHours',
  'currentlyEmployed', 'currentEmployer', 'currentJobRoleAlt', 'currentIncomeAlt',
  'hasCv', 'cvUploadName', 'cvUploadType', 'cvUploadSize',
  'participantPhoneNormalized', 'participantEmailNormalized', 'ghanaCardNormalized', 'adminNotes',
  'legacyParticipantId', 'batchId'
];

const PLACEMENT_BATCHES_HEADERS = [
  'BATCH ID', 'EMPLOYER NAME', 'SECTOR', 'INDUSTRY', 'JOB TYPE', 'JOB ROLE',
  'EMPLOYMENT TYPE', 'EMPLOYMENT CATEGORY', 'CONTRACT TYPE', 'WORK HOURS',
  'PLACEMENT INCOME', 'PLACEMENT INCOME FREQ', 'PLACEMENT START DATE',
  'PLACEMENT REGION', 'PLACEMENT DISTRICT', 'PLACEMENT COMMUNITY',
  'PLACED BY PARTNER', 'PARTICIPANT COUNT', 'CREATED AT', 'CREATED BY'
];

const AUDIT_HEADERS = [
  'auditId', 'timestamp', 'participantId', 'actorType', 'actor',
  'action', 'section', 'notes'
];

const SUBMISSION_METADATA_HEADERS = [
  'SUBMISSION ID', 'COLLECTOR NAME', 'DEVICE ID', 'SUBMISSION TIMESTAMP'
];

const PARTICIPANT_INFO_HEADERS = [
  'PARTICIPANT ID', 'HAMIS ID', 'ONBOARDING DATE', 'IMPLEMENTING PARTNER',
  'REGION', 'DISTRICT', 'COMMUNITY', 'LOCATION STATUS',
  'SURNAME', 'FIRST NAME', 'OTHER NAMES', 'SEX', 'DOB', 'AGE', 'PARTICIPANT TYPE AGE',
  'TELEPHONE', 'ID TYPE', 'GHANA CARD ID', 'VOTER ID',
  'REFUGEE STATUS', 'NATIONALITY', 'DISPLACEMENT STATUS', 'DISPLACEMENT REASON',
  'ORIGINAL COMMUNITY', 'HOST COMMUNITY', 'DISABILITY STATUS', 'DISABILITY SPECIFY',
  'EDUCATION LEVEL', 'EMPLOYMENT STATUS', 'CURRENT OCCUPATION',
  'MONTHLY INCOME', 'INCOME FREQUENCY', 'SECTOR', 'INDUSTRY', 'JOB TYPE', 'JOB ROLE',
  'WORK REGION', 'WORK DISTRICT', 'WORK COMMUNITY'
];

const CAPACITY_BUILDING_HEADERS = [
  'PARTICIPANT ID', 'SUBMISSION ID', 'TRAINED BY PARTNER',
  'TRAINING START DATE', 'TRAINING END DATE', 'TRAINING LOCATION', 'TRAINING MODE',
  'VIRTUAL PLATFORM', 'TRAINER TYPE', 'TRAINING PARTNER', 'COMPLETION STATUS',
  'CERTIFICATE ISSUED', 'MODULES', 'DIGITAL SKILLS', 'WISH TRAINING',
  'PREVIOUS TRAININGS', 'PREVIOUS TRAINING DESC'
];

const JOB_PLACEMENT_HEADERS = [
  'PARTICIPANT ID', 'SUBMISSION ID', 'BATCH ID',
  'PLACED BY PARTNER', 'PLACEMENT START DATE', 'PLACEMENT REGION', 'PLACEMENT DISTRICT',
  'PLACEMENT COMMUNITY', 'SECTOR', 'INDUSTRY', 'JOB TYPE', 'JOB ROLE',
  'EMPLOYMENT TYPE', 'EMPLOYMENT CATEGORY', 'PLACEMENT INCOME', 'PLACEMENT INCOME FREQ',
  'EMPLOYER NAME', 'CONTRACT TYPE', 'WORK HOURS', 'CURRENTLY EMPLOYED',
  'CURRENT EMPLOYER', 'CURRENT JOB ROLE', 'CURRENT INCOME'
];

const CAPACITY_FIELDS = [
  'trainedByPartner', 'trainingStartDate', 'trainingEndDate', 'trainingLocation',
  'trainingMode', 'virtualPlatform', 'trainerType', 'trainingPartner',
  'completionStatus', 'certificateIssued', 'modules', 'digitalSkills',
  'wishTraining', 'previousTrainings', 'previousTrainingDesc'
];

const PLACEMENT_FIELDS = [
  'placedByPartner', 'placementStartDate', 'placementRegion', 'placementDistrict',
  'placementCommunity', 'plSector', 'plIndustry', 'plJobType', 'plJobRole',
  'employmentType', 'employmentCategory', 'placementIncome', 'placementIncomeFreq',
  'employerName', 'contractType', 'workHours',
  'currentlyEmployed', 'currentEmployer', 'currentJobRoleAlt', 'currentIncomeAlt'
];

// ─── ROUTING ─────────────────────────────────────────────────────────────────
function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const action  = payload.action || 'saveParticipantInfo';

    if (action === 'initConsent')                 return jsonResponse(initConsent(payload));
    if (action === 'getParticipantByToken')       return jsonResponse(getParticipantByToken(payload.token));
    if (action === 'getParticipantById')          return jsonResponse(getParticipantById(payload.participantId));
    if (action === 'getParticipantByLookup')      return jsonResponse(getParticipantByLookup(payload.query));
    if (action === 'saveParticipantInfo')         return jsonResponse(saveParticipantInfo(payload));
    if (action === 'submitCapacityBuilding')      return jsonResponse(saveParticipantInfo(payload, 'capacity'));
    if (action === 'submitJobPlacement')          return jsonResponse(saveParticipantInfo(payload, 'placement'));
    if (action === 'updateCvStatus')              return jsonResponse(updateCvStatus(payload));
    if (action === 'adminUpdateParticipant')      return jsonResponse(adminUpdateParticipant(payload));
    if (action === 'getSheetData')                return jsonResponse(getProtectedSheetData(payload.adminPassword, payload.sheetName));
    if (action === 'getReportStats')              return jsonResponse(getReportStats());
    if (action === 'refreshDashboard')            return jsonResponse(refreshDashboard(payload.adminPassword));
    if (action === 'importFromSheet')             return jsonResponse(importFromSheet(payload));
    if (action === 'generateNameMismatchReport')  return jsonResponse(generateNameMismatchReport(payload.adminPassword));
    if (action === 'getEligibleForPlacement')     return jsonResponse(getEligibleForPlacement(payload.adminPassword));
    if (action === 'submitPlacementBatch')        return jsonResponse(submitPlacementBatch(payload));
    if (action === 'bulkSetPartner')              return jsonResponse(bulkSetPartner(payload));
    if (action === 'normalizeExistingRecords')   return jsonResponse(normalizeExistingRecords(payload.adminPassword));

    throw new Error('Unsupported action: ' + action);
  } catch (err) {
    return jsonResponse({ status: 'ERROR', message: err.message });
  }
}

function doGet(e) {
  try {
    const p = (e && e.parameter) ? e.parameter : {};
    const cb = p.callback || '';
    let result;

    if (p.action === 'getParticipantByToken') result = getParticipantByToken(p.token);
    else if (p.action === 'getParticipantById') result = getParticipantById(p.participantId);
    else if (p.action === 'getReportStats')   result = getReportStats();
    else if (p.action === 'getSheetData')     result = getProtectedSheetData(p.adminPassword, p.sheetName);
    else result = { status: 'OK', version: BACKEND_VERSION };

    return cb ? jsonpResponse(cb, result) : jsonResponse(result);
  } catch (err) {
    return jsonResponse({ status: 'ERROR', message: err.message });
  }
}

// ─── PARTICIPANT LOOKUP ───────────────────────────────────────────────────────
function getParticipantByToken(token) {
  if (!token) throw new Error('Missing token.');
  const master  = getMasterSheet();
  const headers = ensureHeaders(master, MASTER_HEADERS);
  const row     = findParticipantRow(master, headers, { tokenHash: hashValue(token) });
  if (row < 1) throw new Error('Participant not found for this link.');
  const participant = rowToObject(headers, master.getRange(row, 1, 1, headers.length).getValues()[0]);
  participant.continuationTokenHash = '';
  // Map consent fields → registration fields for participants not yet registered
  if (!participant.telephone) participant.telephone = participant.consentPhone || '';
  if (!participant.surname && !participant.firstName && participant.consentName) {
    const parts = participant.consentName.trim().split(/\s+/);
    participant.surname   = parts[0] || '';
    participant.firstName = parts.slice(1).join(' ') || '';
  }
  return { status: 'OK', participant };
}

function getParticipantById(participantId) {
  if (!participantId) throw new Error('Missing participant ID.');
  const master  = getMasterSheet();
  const headers = ensureHeaders(master, MASTER_HEADERS);
  const row     = findParticipantRow(master, headers, { participantId });
  if (row < 1) throw new Error('Participant not found.');
  const participant = rowToObject(headers, master.getRange(row, 1, 1, headers.length).getValues()[0]);
  participant.continuationTokenHash = '';
  return { status: 'OK', participant };
}

// ─── FLEXIBLE PARTICIPANT LOOKUP ─────────────────────────────────────────────
// Accepts: HAPPY ID, name (full / partial), phone, or Ghana Card.
// Returns { status:'OK', participant } for a single match.
// Returns { status:'MULTIPLE', participants:[…] } when a name query matches > 1 record.
function getParticipantByLookup(query) {
  if (!query) throw new Error('Missing search query.');
  const master  = getMasterSheet();
  const headers = ensureHeaders(master, MASTER_HEADERS);
  const q       = String(query).trim();

  // 1. Participant ID
  var row = findParticipantRow(master, headers, { participantId: q.toUpperCase() });

  // 2. Normalized phone
  if (row < 1) {
    const phone = normalizePhone(q);
    if (phone) row = findParticipantRow(master, headers, { phone: phone });
  }

  // 3. Ghana Card
  if (row < 1) {
    const card = normalizeGhanaCard(q);
    if (/^GHA-/i.test(q) && card) row = findParticipantRow(master, headers, { ghanaCard: card });
  }

  // 4. Name search — may return multiple
  if (row < 1 && q.length >= 2) {
    const nameRows = findParticipantRowsByName(master, headers, q);
    if (nameRows.length === 1) {
      row = nameRows[0];
    } else if (nameRows.length > 1) {
      const participants = nameRows.map(function(r) {
        const p = rowToObject(headers, master.getRange(r, 1, 1, headers.length).getValues()[0]);
        return {
          participantId: p.participantId  || '',
          surname:       p.surname        || '',
          firstName:     p.firstName      || '',
          telephone:     p.telephone      || '',
          region:        p.region         || '',
          currentStage:  p.currentStage   || ''
        };
      });
      return { status: 'MULTIPLE', participants: participants, count: participants.length };
    }
  }

  if (row < 1) {
    throw new Error('No participant found. Try the HAPPY ID, full name, phone number, or Ghana Card.');
  }
  const participant = rowToObject(headers, master.getRange(row, 1, 1, headers.length).getValues()[0]);
  participant.continuationTokenHash = '';
  return { status: 'OK', participant: participant };
}

function findParticipantRowsByName(sheet, headers, query) {
  if (sheet.getLastRow() < 2) return [];
  const rows   = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues();
  const sIdx   = headers.indexOf('surname');
  const fIdx   = headers.indexOf('firstName');
  const qNorm  = String(query).toLowerCase().replace(/\s+/g, ' ').trim();
  const matches = [];
  for (var i = 0; i < rows.length; i++) {
    const sn   = String(rows[i][sIdx] || '').toLowerCase().trim();
    const fn   = String(rows[i][fIdx] || '').toLowerCase().trim();
    if (!sn && !fn) continue;
    const full1 = (sn + ' ' + fn).trim();   // Surname First
    const full2 = (fn + ' ' + sn).trim();   // First Surname
    const isMatch =
      full1 === qNorm || full2 === qNorm ||
      sn === qNorm    || fn === qNorm    ||
      (qNorm.length >= 3 && (full1.includes(qNorm) || full2.includes(qNorm)));
    if (isMatch) matches.push(i + 2);
  }
  return matches;
}

// ─── SAVE PARTICIPANT INFO ────────────────────────────────────────────────────
function saveParticipantInfo(payload, explicitSection) {
  const accessMode = payload.accessMode || '';

  // Capacity building via ?mode=capacity does NOT require admin password
  const isCapacityMode = (accessMode === 'capacity-new' || accessMode === 'capacity-existing');

  // Admin mode and explicit capacity/placement submissions require password
  if (accessMode === 'admin' || (!isCapacityMode && (explicitSection === 'capacity' || explicitSection === 'placement'))) {
    const pwd = getAdminPassword();
    if (!pwd || payload.adminPassword !== pwd) {
      throw new Error('Admin password required for this action.');
    }
  }

  const master  = getMasterSheet();
  const headers = ensureHeaders(master, MASTER_HEADERS);
  const now     = new Date().toISOString();
  const phone   = normalizePhone(payload.telephone || payload.consentPhone || payload.phone);
  const email   = normalizeEmail(payload.email || payload.consentEmail);
  const ghanaCard = normalizeGhanaCard(payload.ghanaCardId);
  const tokenHash = payload.token ? hashValue(payload.token) : '';

  let rowIndex = findParticipantRow(master, headers, {
    participantId: payload.participantId,
    tokenHash,
    phone,
    email,
    ghanaCard
  });

  const isNew     = rowIndex < 1;
  const existing  = isNew ? {} : rowToObject(headers, master.getRange(rowIndex, 1, 1, headers.length).getValues()[0]);
  const participantId = existing.participantId || payload.participantId || generateParticipantId(master, headers);

  // Build the fields to write — scoped to the section being submitted
  const incoming = pickKnownFields(payload, headers);
  scopeToSection(incoming, explicitSection, accessMode, existing);

  // Always preserve the existing HAMIS ID; generate a new unique one only for first-time submissions
  if (existing.hamisId) {
    incoming.hamisId = existing.hamisId;
  } else if (!incoming.hamisId) {
    incoming.hamisId = generateHamisId(
      master, headers,
      incoming.region || existing.region || '',
      incoming.implementingPartner || existing.implementingPartner || ''
    );
  }

  // Detect name mismatch between consent name and registration name
  const normName = s => String(s || '').toLowerCase().replace(/[-]/g, ' ').replace(/\s+/g, ' ').trim();
  if (existing.consentName && (incoming.surname || incoming.firstName)) {
    const consentName    = normName(existing.consentName);
    const registeredName = normName((incoming.surname || '') + ' ' + (incoming.firstName || ''));
    const conWords = consentName.split(' ').filter(w => w.length > 2);
    const regWords = registeredName.split(' ').filter(w => w.length > 2);
    const hasOverlap = regWords.some(w => conWords.includes(w));
    if (consentName && registeredName && !hasOverlap) {
      const flag = 'NAME_MISMATCH: consent="' + existing.consentName + '" registered="' + (incoming.surname || '') + ' ' + (incoming.firstName || '') + '"';
      incoming.adminNotes = incoming.adminNotes ? incoming.adminNotes + ' | ' + flag : flag;
    }
  }
  // For legacy records (no consentName), detect if the already-registered name is being changed
  if (!existing.consentName && existing.surname && (incoming.surname || incoming.firstName)) {
    const existingName = normName(existing.surname + ' ' + existing.firstName);
    const newName      = normName((incoming.surname || existing.surname) + ' ' + (incoming.firstName || existing.firstName));
    if (existingName && newName && existingName !== newName) {
      const existWords = existingName.split(' ').filter(w => w.length > 2);
      const newWords   = newName.split(' ').filter(w => w.length > 2);
      const hasOverlap = newWords.some(w => existWords.includes(w));
      if (!hasOverlap) {
        const flag = 'NAME_CHANGE: was="' + existing.surname + ' ' + existing.firstName + '" new="' + (incoming.surname || '') + ' ' + (incoming.firstName || '') + '"';
        incoming.adminNotes = incoming.adminNotes ? incoming.adminNotes + ' | ' + flag : flag;
      }
    }
  }

  const capacityStatus  = resolveCapacityStatus(existing, incoming, explicitSection, accessMode);
  const placementStatus = resolvePlacementStatus(existing, incoming, explicitSection, accessMode);
  const lockedSections  = buildLockedSections(capacityStatus, placementStatus);

  const record = Object.assign(blankRecord(headers), existing, incoming, {
    participantId,
    continuationTokenHash:     existing.continuationTokenHash || tokenHash,
    // Never allow a payload to overwrite an already-assigned HAMIS ID
    hamisId:                   existing.hamisId || incoming.hamisId || '',
    // Only mark registered if this submission actually includes participant info.
    // Capacity-only and placement-only submissions should not flip a consent-only record to 'submitted'.
    participantInfoStatus: (accessMode === 'capacity-existing' || explicitSection === 'capacity' || explicitSection === 'placement')
      ? (existing.participantInfoStatus || 'not_started')
      : 'submitted',
    capacityBuildingStatus:    capacityStatus,
    jobPlacementStatus:        placementStatus,
    currentStage:              resolveStage(capacityStatus, placementStatus, incoming.employerName || existing.employerName),
    lockedSections,
    lastUpdatedAt:             now,
    lastUpdatedBy:             payload.collectorName || payload.actor || 'participant',
    createdAt:                 existing.createdAt || now,
    createdBy:                 existing.createdBy || 'kollect',
    syncStatus:                payload.syncStatus || 'synced',
    // Always backfill normalized fields if the stored value is blank — covers capacity/placement submissions
    // that arrive with contact details, and fixes records that were stored without normalization.
    participantPhoneNormalized: phone || existing.participantPhoneNormalized || '',
    participantEmailNormalized: email || existing.participantEmailNormalized || '',
    ghanaCardNormalized:        ghanaCard || existing.ghanaCardNormalized || ''
  });

  // Apply display normalisations: local phone format + Title Case names
  normaliseRecordFields(record);

  if (isNew) {
    master.appendRow(headers.map(h => toSheetValue(record[h] || '')));
    rowIndex = master.getLastRow();
  } else {
    updateRow(master, headers, rowIndex, record);
  }

  // Write to the data collection tabs
  appendRegistrationData(record, explicitSection, accessMode);

  appendAudit({
    participantId,
    actorType: payload.actorType || 'participant',
    actor:     payload.collectorName || payload.actor || 'participant',
    action:    isNew ? 'createParticipant' : 'updateParticipant',
    section:   explicitSection || accessMode || 'participantInfo',
    notes:     lockedSections ? 'Locked: ' + lockedSections : ''
  });

  return {
    status:                'OK',
    participantId,
    duplicate:             !isNew,
    capacityBuildingStatus: capacityStatus,
    jobPlacementStatus:    placementStatus,
    lockedSections
  };
}

// ─── SECTION SCOPING ─────────────────────────────────────────────────────────
function scopeToSection(incoming, explicitSection, accessMode, existing) {
  if (accessMode === 'admin') {
    // Admin submits all visible sections in one pass — no stripping
    return;
  }
  if (accessMode === 'capacity-new') {
    // New participant via capacity mode: Participant Info + Capacity Building, no Job Placement
    PLACEMENT_FIELDS.forEach(f => delete incoming[f]);
    return;
  }
  if (accessMode === 'capacity-existing' || explicitSection === 'capacity') {
    // Existing participant adding Capacity Building only
    PLACEMENT_FIELDS.forEach(f => delete incoming[f]);
    const capacitySet = new Set(CAPACITY_FIELDS);
    Object.keys(incoming).forEach(k => {
      if (!capacitySet.has(k) && !['submissionId','collectorName','deviceId','submissionTimestamp'].includes(k)) {
        if (existing[k] !== undefined) incoming[k] = existing[k];
      }
    });
    return;
  }
  if (explicitSection === 'placement') {
    CAPACITY_FIELDS.forEach(f => delete incoming[f]);
    const placementSet = new Set(PLACEMENT_FIELDS);
    Object.keys(incoming).forEach(k => {
      if (!placementSet.has(k) && !['submissionId','collectorName','deviceId','submissionTimestamp'].includes(k)) {
        if (existing[k] !== undefined) incoming[k] = existing[k];
      }
    });
    return;
  }
  // Default: Participant Info only — strip capacity and placement fields
  CAPACITY_FIELDS.forEach(f => delete incoming[f]);
  PLACEMENT_FIELDS.forEach(f => delete incoming[f]);
}

// ─── APPEND TO DATA TABS ──────────────────────────────────────────────────────
function appendRegistrationData(record, explicitSection, accessMode) {
  try {
    appendSubmissionMetadata(record);
    if (accessMode === 'admin') {
      appendParticipantInfo(record);
      if (record.trainedByPartner === 'Yes') appendCapacityBuilding(record);
      if (record.placedByPartner   === 'Yes') appendJobPlacement(record);
    } else if (accessMode === 'capacity-new') {
      appendParticipantInfo(record);
      if (record.trainedByPartner === 'Yes') appendCapacityBuilding(record);
    } else if (accessMode === 'capacity-existing' || explicitSection === 'capacity') {
      appendCapacityBuilding(record);
    } else if (explicitSection === 'placement') {
      appendJobPlacement(record);
    } else {
      appendParticipantInfo(record);
    }
  } catch (err) {
    appendAudit({ action: 'appendRegistrationDataFailed', section: 'data', notes: err.message });
  }
}

function appendSubmissionMetadata(record) {
  const sheet = getOrCreateSheet(SUBMISSION_METADATA_SHEET_NAME, SUBMISSION_METADATA_HEADERS);
  sheet.appendRow([
    record.submissionId        || '',
    record.collectorName       || '',
    record.deviceId            || '',
    record.submissionTimestamp || ''
  ]);
}

// Maps UPPER_CASE sheet header → camelCase record field for each data tab.
// Having an explicit map per sheet avoids collisions where the same header name
// (e.g. SECTOR, JOB ROLE) means different record fields in different sheets.
var PARTICIPANT_INFO_FIELD_MAP = {
  'PARTICIPANT ID':'participantId', 'HAMIS ID':'hamisId',
  'ONBOARDING DATE':'onboardingDate', 'IMPLEMENTING PARTNER':'implementingPartner',
  'REGION':'region', 'DISTRICT':'district', 'COMMUNITY':'community',
  'LOCATION STATUS':'locationStatus', 'SURNAME':'surname', 'FIRST NAME':'firstName',
  'OTHER NAMES':'otherNames', 'SEX':'sex', 'DOB':'dob', 'AGE':'age',
  'PARTICIPANT TYPE AGE':'participantTypeAge', 'TELEPHONE':'telephone',
  'ID TYPE':'idType', 'GHANA CARD ID':'ghanaCardId', 'VOTER ID':'voterId',
  'REFUGEE STATUS':'refugeeStatus', 'NATIONALITY':'nationality',
  'DISPLACEMENT STATUS':'displacementStatus', 'DISPLACEMENT REASON':'displacementReason',
  'ORIGINAL COMMUNITY':'originalCommunity', 'HOST COMMUNITY':'hostCommunity',
  'DISABILITY STATUS':'disabilityStatus', 'DISABILITY SPECIFY':'disabilitySpecify',
  'EDUCATION LEVEL':'educationLevel', 'EMPLOYMENT STATUS':'employmentStatus',
  'CURRENT OCCUPATION':'currentOccupation', 'MONTHLY INCOME':'monthlyIncome',
  'INCOME FREQUENCY':'incomeFrequency', 'SECTOR':'sector', 'INDUSTRY':'industry',
  'JOB TYPE':'jobType', 'JOB ROLE':'jobRole',
  'WORK REGION':'workRegion', 'WORK DISTRICT':'workDistrict', 'WORK COMMUNITY':'workCommunity'
};

var CAPACITY_BUILDING_FIELD_MAP = {
  'PARTICIPANT ID':'participantId', 'SUBMISSION ID':'submissionId',
  'TRAINED BY PARTNER':'trainedByPartner',
  'TRAINING START DATE':'trainingStartDate', 'TRAINING END DATE':'trainingEndDate',
  'TRAINING LOCATION':'trainingLocation', 'TRAINING MODE':'trainingMode',
  'VIRTUAL PLATFORM':'virtualPlatform', 'TRAINER TYPE':'trainerType',
  'TRAINING PARTNER':'trainingPartner', 'COMPLETION STATUS':'completionStatus',
  'CERTIFICATE ISSUED':'certificateIssued', 'MODULES':'modules',
  'DIGITAL SKILLS':'digitalSkills', 'WISH TRAINING':'wishTraining',
  'PREVIOUS TRAININGS':'previousTrainings', 'PREVIOUS TRAINING DESC':'previousTrainingDesc'
};

var JOB_PLACEMENT_FIELD_MAP = {
  'PARTICIPANT ID':'participantId', 'SUBMISSION ID':'submissionId', 'BATCH ID':'batchId',
  'PLACED BY PARTNER':'placedByPartner', 'PLACEMENT START DATE':'placementStartDate',
  'PLACEMENT REGION':'placementRegion', 'PLACEMENT DISTRICT':'placementDistrict',
  'PLACEMENT COMMUNITY':'placementCommunity',
  'SECTOR':'plSector', 'INDUSTRY':'plIndustry', 'JOB TYPE':'plJobType', 'JOB ROLE':'plJobRole',
  'EMPLOYMENT TYPE':'employmentType', 'EMPLOYMENT CATEGORY':'employmentCategory',
  'PLACEMENT INCOME':'placementIncome', 'PLACEMENT INCOME FREQ':'placementIncomeFreq',
  'EMPLOYER NAME':'employerName', 'CONTRACT TYPE':'contractType', 'WORK HOURS':'workHours',
  'CURRENTLY EMPLOYED':'currentlyEmployed', 'CURRENT EMPLOYER':'currentEmployer',
  'CURRENT JOB ROLE':'currentJobRoleAlt', 'CURRENT INCOME':'currentIncomeAlt'
};

// Writes a row to a data tab using the actual header order in the sheet, not the
// declared constants order. This prevents column-shift bugs when headers are added
// or manually reordered after the sheet is first created.
function appendMappedRow(sheetName, desiredHeaders, fieldMap, record) {
  const sheet         = getOrCreateSheet(sheetName, desiredHeaders);
  const actualHeaders = ensureHeaders(sheet, desiredHeaders);
  sheet.appendRow(actualHeaders.map(function(h) {
    var field = fieldMap[h];
    return toSheetValue(field !== undefined ? (record[field] || '') : '');
  }));
}

function appendParticipantInfo(record) {
  appendMappedRow(PARTICIPANT_INFO_SHEET_NAME, PARTICIPANT_INFO_HEADERS, PARTICIPANT_INFO_FIELD_MAP, record);
}

function appendCapacityBuilding(record) {
  appendMappedRow(CAPACITY_BUILDING_SHEET_NAME, CAPACITY_BUILDING_HEADERS, CAPACITY_BUILDING_FIELD_MAP, record);
}

function appendJobPlacement(record) {
  appendMappedRow(JOB_PLACEMENT_SHEET_NAME, JOB_PLACEMENT_HEADERS, JOB_PLACEMENT_FIELD_MAP, record);
}

// ─── CV STATUS ───────────────────────────────────────────────────────────────
function updateCvStatus(payload) {
  const master  = getMasterSheet();
  const headers = ensureHeaders(master, MASTER_HEADERS);
  const row     = findParticipantRow(master, headers, {
    participantId: payload.participantId,
    tokenHash: payload.token ? hashValue(payload.token) : ''
  });
  if (row < 1) throw new Error('Participant not found for CV update.');

  const now      = new Date().toISOString();
  const existing = rowToObject(headers, master.getRange(row, 1, 1, headers.length).getValues()[0]);
  let storedFile = null;
  if (payload.cvUploadDataUrl) storedFile = saveCvFileToDrive(payload, payload.participantId);
  const clearFile = payload.hasCv === 'No' || payload.cvStatus === 'no_cv';

  const update = {
    cvStatus:               payload.cvStatus || (payload.hasCv === 'Yes' ? 'cv_uploaded' : 'no_cv'),
    hasCv:                  payload.hasCv || '',
    cvUploadedAt:           payload.hasCv === 'Yes' ? now : '',
    cvUploadName:           payload.cvUploadName || '',
    cvUploadType:           payload.cvUploadType || '',
    cvUploadSize:           payload.cvUploadSize || '',
    cvFileUrl:              storedFile ? storedFile.url : (clearFile ? '' : existing.cvFileUrl),
    cvFileId:               storedFile ? storedFile.id  : (clearFile ? '' : existing.cvFileId),
    cvDecisionAt:           now,
    cvTemplateFolderAccessed: payload.cvTemplateFolderAccessed || '',
    lastUpdatedAt:          now,
    lastUpdatedBy:          payload.actor || 'participant'
  };
  updateRow(master, headers, row, update);

  appendAudit({
    participantId: payload.participantId,
    actorType: 'participant',
    actor:     payload.actor || 'participant',
    action:    'updateCvStatus',
    section:   'cv',
    notes:     update.cvStatus
  });

  return { status: 'OK', participantId: payload.participantId, cvStatus: update.cvStatus };
}

function saveCvFileToDrive(payload, participantId) {
  const match = String(payload.cvUploadDataUrl || '').match(/^data:([^;]+);base64,(.+)$/);
  if (!match) throw new Error('Invalid CV file payload.');
  const mimeType = payload.cvUploadType || match[1];
  const bytes    = Utilities.base64Decode(match[2]);
  const safeName = sanitizeFileName(payload.cvUploadName || 'participant-cv');
  const fileName = `${participantId}_${new Date().toISOString().replace(/[:.]/g, '-')}_${safeName}`;
  const blob     = Utilities.newBlob(bytes, mimeType, fileName);
  const folder   = DriveApp.getFolderById(CV_UPLOAD_FOLDER);
  const file     = folder.createFile(blob);
  return { id: file.getId(), url: file.getUrl() };
}

// ─── ADMIN ────────────────────────────────────────────────────────────────────
function adminUpdateParticipant(payload) {
  const pwd = getAdminPassword();
  if (!pwd || payload.adminPassword !== pwd) throw new Error('Incorrect admin password.');
  const master  = getMasterSheet();
  const headers = ensureHeaders(master, MASTER_HEADERS);
  const row     = findParticipantRow(master, headers, { participantId: payload.participantId });
  if (row < 1) throw new Error('Participant not found.');
  const updates = pickKnownFields(payload.updates || {}, headers);
  updates.lastUpdatedAt = new Date().toISOString();
  updates.lastUpdatedBy = payload.actor || 'admin';
  updateRow(master, headers, row, updates);

  // Re-read the full updated record and append a correction row to the sub-sheets
  // so the Participant Information, Capacity Building, and Job Placement tabs stay current.
  try {
    const updatedRecord = rowToObject(headers, master.getRange(row, 1, 1, headers.length).getValues()[0]);
    appendParticipantInfo(updatedRecord);
  } catch (err) {
    appendAudit({ action: 'adminUpdateParticipant_subsheetFailed', section: 'data', notes: err.message });
  }

  appendAudit({
    participantId: payload.participantId,
    actorType: 'staff',
    actor:     payload.actor || 'admin',
    action:    'adminUpdateParticipant',
    section:   payload.section || 'admin',
    notes:     Object.keys(updates).join(', ')
  });
  return { status: 'OK', participantId: payload.participantId };
}

function getProtectedSheetData(password, sheetName) {
  const pwd = getAdminPassword();
  if (!pwd) return { status: 'ERROR', message: 'Admin password not configured.' };
  if (password !== pwd) return { status: 'ERROR', message: 'Incorrect password.' };
  const master  = getMasterSheet();
  const headers = ensureHeaders(master, MASTER_HEADERS);
  return { status: 'OK', data: getRecords(master, headers) };
}

function getReportStats() {
  const master  = getMasterSheet();
  const headers = ensureHeaders(master, MASTER_HEADERS);
  const records = getRecords(master, headers);
  return {
    status: 'OK',
    stats: {
      total:                   records.length,
      consentComplete:         countWhere(records, 'consentStatus', 'complete'),
      registrationSubmitted:   countWhere(records, 'participantInfoStatus', 'submitted'),
      capacitySubmitted:       countWhere(records, 'capacityBuildingStatus', 'submitted'),
      placementSubmitted:      countWhere(records, 'jobPlacementStatus', 'submitted'),
      noCv:                    countWhere(records, 'cvStatus', 'no_cv'),
      cvUploaded:              countWhere(records, 'cvStatus', 'cv_uploaded')
    }
  };
}

function refreshDashboard(password) {
  const pwd = getAdminPassword();
  if (!pwd || password !== pwd) throw new Error('Incorrect admin password.');
  const ss      = SpreadsheetApp.openById(KOLLECT_SPREADSHEET_ID);
  const sheet   = ss.getSheetByName('Dashboard') || ss.insertSheet('Dashboard');
  const stats   = getReportStats().stats;
  const master  = getMasterSheet();
  const headers = ensureHeaders(master, MASTER_HEADERS);
  const records = getRecords(master, headers);

  sheet.clear();
  const rows = [
    ['HAPPY Lifecycle Dashboard', ''],
    ['Last refreshed', new Date()],
    ['', ''],
    ['Total participants',          stats.total],
    ['Consent complete',            stats.consentComplete],
    ['Registration submitted',      stats.registrationSubmitted],
    ['Capacity building submitted', stats.capacitySubmitted],
    ['Job placement submitted',     stats.placementSubmitted],
    ['No CV',                       stats.noCv],
    ['CV uploaded',                 stats.cvUploaded],
    ['', ''],
    ['Female',                      countWhere(records, 'sex', 'Female')],
    ['Male',                        countWhere(records, 'sex', 'Male')],
    ['Youth (15-35)',                countYouth(records)],
    ['PWD',                         countWhere(records, 'disabilityStatus', 'Yes')],
    ['Refugee',                     countWhere(records, 'refugeeStatus', 'Yes')]
  ];
  sheet.getRange(1, 1, rows.length, 2).setValues(rows);
  sheet.autoResizeColumns(1, 2);
  return { status: 'OK', stats };
}

// ─── BULK IMPORT ──────────────────────────────────────────────────────────────
const SOURCE_TO_MASTER = {
  'HAMIS ID': 'hamisId', 'Onboarding Date': 'onboardingDate',
  'Implementing Partner (or Sub-Partner)': 'implementingPartner',
  'Region': 'region', 'District': 'district', 'Community': 'community',
  'Location Status': 'locationStatus', 'Surname': 'surname', 'First Name': 'firstName',
  'Other Name(s)': 'otherNames', 'Sex': 'sex', 'Date of Birth': 'dob',
  'Age': 'age', 'Participant Type - Age': 'participantTypeAge',
  'Telephone (E.g. 0244111111)': 'telephone', 'Ghana Card ID Number': 'ghanaCardId',
  "Voter's ID Number": 'voterId', 'Refugee Status': 'refugeeStatus',
  'Nationality (If "Yes" to Refugee)': 'nationality',
  'Disability Status': 'disabilityStatus', 'Specify Disability': 'disabilitySpecify',
  'Education Level': 'educationLevel', 'Employment Status': 'employmentStatus',
  'Occupation': 'currentOccupation', 'Monthly Income': 'monthlyIncome',
  'Organization': 'employerName',
  'Sector': 'sector', 'Sector Type': 'industry', 'Job Role': 'jobRole'
};

function importFromSheet(payload) {
  const pwd = getAdminPassword();
  if (!pwd || payload.adminPassword !== pwd) throw new Error('Admin access required.');
  const sourceId  = payload.sourceSpreadsheetId;
  const sourceGid = payload.sourceSheetGid !== undefined ? Number(payload.sourceSheetGid) : 0;
  if (!sourceId) throw new Error('sourceSpreadsheetId is required.');

  const sourceSS    = SpreadsheetApp.openById(sourceId);
  const sourceSheet = sourceSS.getSheets().find(s => s.getSheetId() === sourceGid) || sourceSS.getSheets()[0];
  if (sourceSheet.getLastRow() < 2) return { status: 'OK', imported: 0, skipped: 0, message: 'No data rows.' };

  const lastCol      = sourceSheet.getLastColumn();
  const srcHeaders   = sourceSheet.getRange(1, 1, 1, lastCol).getValues()[0];
  const srcRows      = sourceSheet.getRange(2, 1, sourceSheet.getLastRow() - 1, lastCol).getValues();
  const master       = getMasterSheet();
  const masterHeaders = ensureHeaders(master, MASTER_HEADERS);
  const now          = new Date().toISOString();
  let imported = 0, skipped = 0;
  const errors = [];

  for (let r = 0; r < srcRows.length; r++) {
    const row = srcRows[r];
    if (row.every(c => !String(c).trim())) continue;
    try {
      const incoming = {};
      srcHeaders.forEach((h, i) => {
        const key = SOURCE_TO_MASTER[String(h).trim()];
        if (key) incoming[key] = String(row[i] || '').trim();
      });
      if (row[0]) incoming.legacyParticipantId = String(row[0]).trim();

      // Mirror participant sector/industry/role into placement fields
      if (incoming.sector)   incoming.plSector  = incoming.sector;
      if (incoming.industry) incoming.plIndustry = incoming.industry;
      if (incoming.jobRole)  incoming.plJobRole  = incoming.jobRole;

      // Derive jobType and plJobType from role using server-side classifier
      if (incoming.jobRole   && !incoming.jobType)   incoming.jobType   = classifyJobRoleServer(incoming.jobRole);
      if (incoming.plJobRole && !incoming.plJobType) incoming.plJobType = classifyJobRoleServer(incoming.plJobRole);

      // For legacy placed records, work location = home location when not separately recorded
      if (incoming.region    && !incoming.workRegion)    incoming.workRegion    = incoming.region;
      if (incoming.district  && !incoming.workDistrict)  incoming.workDistrict  = incoming.district;
      if (incoming.community && !incoming.workCommunity) incoming.workCommunity = incoming.community;

      // Infer ID type from whichever card is present
      if (incoming.ghanaCardId)          incoming.idType = 'Ghana Card';
      else if (incoming.voterId)         incoming.idType = 'Voter ID';

      // Onboarding date doubles as placement start date for legacy records
      if (incoming.onboardingDate)       incoming.placementStartDate = incoming.onboardingDate;

      // Implementing partner is who placed the participant
      if (incoming.implementingPartner)  incoming.placedByPartner = incoming.implementingPartner;

      const phone     = normalizePhone(incoming.telephone);
      const ghanaCard = normalizeGhanaCard(incoming.ghanaCardId);
      if (findParticipantRow(master, masterHeaders, { phone, ghanaCard }) > 0) { skipped++; continue; }
      const participantId = generateParticipantId(master, masterHeaders);
      const record        = blankRecord(masterHeaders);
      // Only mark as placed if the minimum placement fields are present
      const hasPlacement = !!(incoming.employerName && incoming.plJobRole);
      Object.assign(record, incoming, {
        participantId,
        consentStatus:               'complete',
        participantInfoStatus:       'submitted',
        capacityBuildingStatus:      'not_started',
        jobPlacementStatus:          hasPlacement ? 'submitted'         : 'not_started',
        currentStage:                hasPlacement ? 'placement_complete' : 'registration_complete',
        lockedSections:              hasPlacement ? 'jobPlacement'      : '',
        cvStatus:                    'not_started',
        syncStatus:                  'migrated',
        participantPhoneNormalized:  phone,
        ghanaCardNormalized:         ghanaCard,
        lastUpdatedAt:               now,
        lastUpdatedBy:               payload.actor || 'bulk_import',
        createdAt:                   now,
        createdBy:                   'bulk_import'
      });
      if (!record.hamisId) {
        record.hamisId = generateHamisId(master, masterHeaders, record.region, record.implementingPartner);
      }
      master.appendRow(masterHeaders.map(h => toSheetValue(record[h] || '')));
      appendParticipantInfo(record);
      appendJobPlacement(record);
      appendAudit({
        participantId: record.participantId,
        actorType:     'staff',
        actor:         payload.actor || 'bulk_import',
        action:        'legacyImport',
        section:       'migration',
        notes:         'Legacy ID: ' + (record.legacyParticipantId || '')
      });
      imported++;
    } catch (err) {
      errors.push('Row ' + (r + 2) + ': ' + err.message);
    }
  }
  return { status: 'OK', imported, skipped, errors, message: `Imported ${imported}, skipped ${skipped}.` };
}

// ─── MASTER & SHEET HELPERS ───────────────────────────────────────────────────
function getMasterSheet() {
  const ss    = SpreadsheetApp.openById(KOLLECT_SPREADSHEET_ID);
  const sheet = ss.getSheetByName(MASTER_SHEET_NAME) || ss.insertSheet(MASTER_SHEET_NAME);
  ensureHeaders(sheet, MASTER_HEADERS);
  return sheet;
}

function getOrCreateSheet(name, headers) {
  const ss    = SpreadsheetApp.openById(KOLLECT_SPREADSHEET_ID);
  let sheet   = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  ensureHeaders(sheet, headers);
  return sheet;
}

function appendAudit(entry) {
  try {
    const ss    = SpreadsheetApp.openById(KOLLECT_SPREADSHEET_ID);
    let sheet   = ss.getSheetByName(AUDIT_SHEET_NAME);
    if (!sheet) sheet = ss.insertSheet(AUDIT_SHEET_NAME);
    ensureHeaders(sheet, AUDIT_HEADERS);
    sheet.appendRow([
      Utilities.getUuid(),
      new Date().toISOString(),
      entry.participantId || '',
      entry.actorType     || '',
      entry.actor         || '',
      entry.action        || '',
      entry.section       || '',
      entry.notes         || ''
    ]);
  } catch (_) {}
}

// ─── SHEET UTILITIES ─────────────────────────────────────────────────────────
function ensureHeaders(sheet, desired) {
  if (!desired || !desired.length) return [];
  const lastCol = Math.max(sheet.getLastColumn(), desired.length);
  let current   = sheet.getRange(1, 1, 1, lastCol).getValues()[0].filter(Boolean);
  if (!current.length) {
    sheet.getRange(1, 1, 1, desired.length).setValues([desired]);
    sheet.setFrozenRows(1);
    return desired.slice();
  }
  const missing = desired.filter(h => !current.includes(h));
  if (missing.length) {
    sheet.getRange(1, current.length + 1, 1, missing.length).setValues([missing]);
    current = current.concat(missing);
  }
  return current;
}

function findParticipantRow(sheet, headers, criteria) {
  if (sheet.getLastRow() < 2) return -1;
  const rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues();
  const idx  = {};
  headers.forEach((h, i) => idx[h] = i);
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    if (criteria.tokenHash     && r[idx.continuationTokenHash]      === criteria.tokenHash)     return i + 2;
    if (criteria.participantId && r[idx.participantId]              === criteria.participantId) return i + 2;
    if (criteria.ghanaCard     && r[idx.ghanaCardNormalized]        === criteria.ghanaCard)     return i + 2;
    if (criteria.phone         && r[idx.participantPhoneNormalized] === criteria.phone)         return i + 2;
    if (criteria.email         && criteria.email && r[idx.participantEmailNormalized] === criteria.email) return i + 2;
  }
  return -1;
}

function generateParticipantId(sheet, headers) {
  const col = headers.indexOf('participantId');
  let max = 0;
  if (sheet.getLastRow() >= 2 && col >= 0) {
    sheet.getRange(2, col + 1, sheet.getLastRow() - 1, 1).getValues().flat().forEach(id => {
      const m = String(id || '').match(/^HAPPY-2026-(\d+)$/);
      if (m) max = Math.max(max, Number(m[1]));
    });
  }
  return PARTICIPANT_PREFIX + String(max + 1).padStart(6, '0');
}

function updateRow(sheet, headers, rowIndex, values) {
  const existing = rowToObject(headers, sheet.getRange(rowIndex, 1, 1, headers.length).getValues()[0]);
  const merged   = Object.assign({}, existing, values);
  sheet.getRange(rowIndex, 1, 1, headers.length).setValues([headers.map(h => toSheetValue(merged[h] || ''))]);
}

function rowToObject(headers, row) {
  const obj = {};
  headers.forEach((h, i) => obj[h] = fromSheetValue(row[i] !== undefined ? row[i] : ''));
  return obj;
}

function blankRecord(headers) {
  const obj = {};
  headers.forEach(h => obj[h] = '');
  return obj;
}

function getRecords(sheet, headers) {
  if (sheet.getLastRow() < 2) return [];
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length)
    .getValues()
    .map(row => rowToObject(headers, row))
    .filter(row => Object.values(row).some(Boolean));
}

function pickKnownFields(payload, headers) {
  const picked = {};
  headers.forEach(h => { if (Object.prototype.hasOwnProperty.call(payload, h)) picked[h] = payload[h]; });
  return picked;
}

function toSheetValue(v) {
  if (typeof v !== 'string') return v;
  return /^[=+\-@]/.test(v) ? `'${v}` : v;
}

function fromSheetValue(v) {
  return typeof v === 'string' && v.startsWith("'") ? v.slice(1) : v;
}

// ─── STATUS HELPERS ───────────────────────────────────────────────────────────
function resolveCapacityStatus(existing, incoming, explicitSection, accessMode) {
  if (existing.capacityBuildingStatus === 'submitted') return 'submitted';
  if (explicitSection === 'capacity' || accessMode === 'capacity-existing') return 'submitted';
  // capacity-new: only mark submitted if the participant was actually trained
  if (accessMode === 'capacity-new' && incoming.trainedByPartner === 'Yes') return 'submitted';
  if (accessMode === 'admin' && incoming.trainedByPartner === 'Yes') return 'submitted';
  return existing.capacityBuildingStatus || 'not_started';
}

function resolvePlacementStatus(existing, incoming, explicitSection, accessMode) {
  if (existing.jobPlacementStatus === 'submitted') return 'submitted';
  if (explicitSection === 'placement') return 'submitted';
  if (accessMode === 'admin' && incoming.placedByPartner === 'Yes') return 'submitted';
  return existing.jobPlacementStatus || 'not_started';
}

function buildLockedSections(capacityStatus, placementStatus) {
  const locked = [];
  if (capacityStatus === 'submitted')  locked.push('capacityBuilding');
  if (placementStatus === 'submitted') locked.push('jobPlacement');
  return locked.join(',');
}

function resolveStage(capacityStatus, placementStatus, employerName) {
  // Require employer name to be present before granting placement_complete
  if (placementStatus === 'submitted' && employerName) return 'placement_complete';
  if (placementStatus === 'submitted') return 'capacity_complete'; // flag set but no employer data
  if (capacityStatus === 'submitted')  return 'capacity_complete';
  return 'registration_complete';
}

function countWhere(records, field, value) {
  return records.filter(r => r[field] === value).length;
}

function countYouth(records) {
  return records.filter(r => { const a = Number(r.age); return !isNaN(a) && a >= 15 && a <= 35; }).length;
}

// ─── STRING UTILITIES ────────────────────────────────────────────────────────
function hashValue(value) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, String(value || ''))
    .map(b => ('0' + (b < 0 ? b + 256 : b).toString(16)).slice(-2))
    .join('');
}

function normalizePhone(value) {
  const d = String(value || '').replace(/\D+/g, '');
  if (!d) return '';
  if (d.length === 10 && d.startsWith('0')) return '233' + d.slice(1);
  if (d.length >= 9) return d.slice(-12);
  return d;
}

function normalizeEmail(value) {
  return String(value || '').trim().toLowerCase();
}

function normalizeGhanaCard(value) {
  return String(value || '').trim().toUpperCase().replace(/\s+/g, '');
}

function sanitizeFileName(value) {
  return String(value || 'file')
    .replace(/[\\/:*?"<>|#%{}~&]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 120) || 'file';
}

// ─── BATCH PLACEMENT ─────────────────────────────────────────────────────────
function generateBatchId() {
  const ss    = SpreadsheetApp.openById(KOLLECT_SPREADSHEET_ID);
  const sheet = ss.getSheetByName(PLACEMENT_BATCHES_SHEET_NAME);
  let max = 0;
  if (sheet && sheet.getLastRow() >= 2) {
    sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues().flat().forEach(function(id) {
      const m = String(id || '').match(/^BATCH-\d{4}-(\d+)$/);
      if (m) max = Math.max(max, parseInt(m[1], 10));
    });
  }
  return 'BATCH-2026-' + String(max + 1).padStart(6, '0');
}

function getEligibleForPlacement(password) {
  const pwd = getAdminPassword();
  if (!pwd || password !== pwd) throw new Error('Admin access required.');
  const master  = getMasterSheet();
  const headers = ensureHeaders(master, MASTER_HEADERS);
  const records = getRecords(master, headers);
  const eligible = records
    .filter(function(r) {
      // Include all registered participants who have not yet been placed
      return r.participantInfoStatus === 'submitted' && r.jobPlacementStatus !== 'submitted';
    })
    .map(function(r) {
      return {
        participantId:        r.participantId        || '',
        surname:              r.surname              || '',
        firstName:            r.firstName            || '',
        consentName:          r.consentName          || '',
        sex:                  r.sex                  || '',
        age:                  r.age                  || '',
        region:               r.region               || '',
        district:             r.district             || '',
        telephone:            r.telephone            || r.consentPhone || '',
        implementingPartner:  r.implementingPartner  || '',
        capacityStatus:       r.capacityBuildingStatus || 'not_started',
        modules:              r.modules              || ''
      };
    });
  return { status: 'OK', eligible: eligible, count: eligible.length };
}

function submitPlacementBatch(payload) {
  const pwd = getAdminPassword();
  if (!pwd || payload.adminPassword !== pwd) throw new Error('Admin access required.');

  const participantIds = payload.participantIds || [];
  if (!participantIds.length) throw new Error('No participants selected.');

  // Validate all required placement fields before touching any records
  const BATCH_REQUIRED = [
    ['employerName',       'Employer Name'],
    ['placedByPartner',    'Placed By Partner'],
    ['placementStartDate', 'Placement Start Date'],
    ['plSector',           'Sector'],
    ['plIndustry',         'Industry'],
    ['plJobType',          'Job Type'],
    ['plJobRole',          'Job Role'],
    ['employmentType',     'Employment Type'],
    ['employmentCategory', 'Employment Category'],
    ['placementIncome',    'Placement Income']
  ];
  for (var brf = 0; brf < BATCH_REQUIRED.length; brf++) {
    if (!payload[BATCH_REQUIRED[brf][0]]) throw new Error('Missing required field: ' + BATCH_REQUIRED[brf][1]);
  }

  const master  = getMasterSheet();
  const headers = ensureHeaders(master, MASTER_HEADERS);
  const now     = new Date().toISOString();
  const batchId = generateBatchId();
  const actor   = payload.collectorName || payload.actor || 'admin';

  // Write one row to Placement Batches sheet
  const batchSheet   = getOrCreateSheet(PLACEMENT_BATCHES_SHEET_NAME, PLACEMENT_BATCHES_HEADERS);
  const batchHeaders = ensureHeaders(batchSheet, PLACEMENT_BATCHES_HEADERS);
  const batchValues  = {
    'BATCH ID':              batchId,
    'EMPLOYER NAME':         payload.employerName        || '',
    'SECTOR':                payload.plSector            || '',
    'INDUSTRY':              payload.plIndustry          || '',
    'JOB TYPE':              payload.plJobType           || '',
    'JOB ROLE':              payload.plJobRole           || '',
    'EMPLOYMENT TYPE':       payload.employmentType      || '',
    'EMPLOYMENT CATEGORY':   payload.employmentCategory  || '',
    'CONTRACT TYPE':         payload.contractType        || '',
    'WORK HOURS':            payload.workHours           || '',
    'PLACEMENT INCOME':      payload.placementIncome     || '',
    'PLACEMENT INCOME FREQ': payload.placementIncomeFreq || '',
    'PLACEMENT START DATE':  payload.placementStartDate  || '',
    'PLACEMENT REGION':      payload.placementRegion     || '',
    'PLACEMENT DISTRICT':    payload.placementDistrict   || '',
    'PLACEMENT COMMUNITY':   payload.placementCommunity  || '',
    'PLACED BY PARTNER':     payload.placedByPartner     || '',
    'PARTICIPANT COUNT':     participantIds.length,
    'CREATED AT':            now,
    'CREATED BY':            actor
  };
  batchSheet.appendRow(batchHeaders.map(function(h) {
    return toSheetValue(batchValues[h] !== undefined ? batchValues[h] : '');
  }));

  // Place each selected participant
  var placed = [], failed = [];
  participantIds.forEach(function(pid) {
    try {
      const row = findParticipantRow(master, headers, { participantId: pid });
      if (row < 1) throw new Error('Participant not found');
      const existing = rowToObject(headers, master.getRange(row, 1, 1, headers.length).getValues()[0]);
      if (existing.jobPlacementStatus === 'submitted') throw new Error('Already placed');

      // Write to Job Placement sheet
      const placementRecord = Object.assign({}, existing, {
        batchId:             batchId,
        submissionId:        '',
        placedByPartner:     payload.placedByPartner    || '',
        placementStartDate:  payload.placementStartDate || '',
        placementRegion:     payload.placementRegion    || '',
        placementDistrict:   payload.placementDistrict  || '',
        placementCommunity:  payload.placementCommunity || '',
        plSector:            payload.plSector           || '',
        plIndustry:          payload.plIndustry         || '',
        plJobType:           payload.plJobType          || '',
        plJobRole:           payload.plJobRole          || '',
        employmentType:      payload.employmentType     || '',
        employmentCategory:  payload.employmentCategory || '',
        placementIncome:     payload.placementIncome    || '',
        placementIncomeFreq: payload.placementIncomeFreq || '',
        employerName:        payload.employerName       || '',
        contractType:        payload.contractType       || '',
        workHours:           payload.workHours          || ''
      });
      appendJobPlacement(placementRecord);

      // Update Master record — write all placement fields so dashboard/report reads are correct
      updateRow(master, headers, row, {
        jobPlacementStatus:  'submitted',
        currentStage:        'placement_complete',
        batchId:             batchId,
        employerName:        payload.employerName        || '',
        placedByPartner:     payload.placedByPartner     || '',
        placementStartDate:  payload.placementStartDate  || '',
        placementRegion:     payload.placementRegion     || '',
        placementDistrict:   payload.placementDistrict   || '',
        placementCommunity:  payload.placementCommunity  || '',
        plSector:            payload.plSector            || '',
        plIndustry:          payload.plIndustry          || '',
        plJobType:           payload.plJobType           || '',
        plJobRole:           payload.plJobRole           || '',
        employmentType:      payload.employmentType      || '',
        employmentCategory:  payload.employmentCategory  || '',
        placementIncome:     payload.placementIncome     || '',
        placementIncomeFreq: payload.placementIncomeFreq || '',
        contractType:        payload.contractType        || '',
        workHours:           payload.workHours           || '',
        lastUpdatedAt:       now,
        lastUpdatedBy:       actor
      });

      appendAudit({
        participantId: pid,
        actorType:     'staff',
        actor:         actor,
        action:        'jobPlacement',
        section:       'placement',
        notes:         'Batch: ' + batchId + ' | Employer: ' + (payload.employerName || '')
      });

      placed.push(pid);
    } catch (err) {
      failed.push({ participantId: pid, error: err.message });
    }
  });

  return {
    status:  'OK',
    batchId: batchId,
    placed:  placed.length,
    failed:  failed,
    message: placed.length + ' participant(s) placed in batch ' + batchId + '.'
  };
}

// ─── HAMIS ID GENERATION (server-side, unique) ────────────────────────────────
const PARTNER_CODE_MAP = { 'Jobberman':'JOB', 'Agrico':'AGR', 'YouthEmpower':'YOU', 'SkillsGH':'SKI' };
const REGION_CODE_MAP  = {
  'Greater Accra':'GRE', 'Ashanti':'ASH', 'Central':'CEN',
  'Eastern':'EAS', 'Western':'WES', 'Northern':'NOR',
  'Upper East':'UPE', 'Upper West':'UPW', 'Volta':'VOL',
  'Bono':'BON', 'Bono East':'BOE', 'Ahafo':'AHA',
  'Savannah':'SAV', 'North East':'NOE', 'Oti':'OTI', 'Western North':'WEN'
};

function generateHamisId(sheet, headers, region, partner) {
  const partnerCode = PARTNER_CODE_MAP[partner] || String(partner || '').substring(0, 3).toUpperCase() || 'UNK';
  const regionCode  = REGION_CODE_MAP[region]  || String(region  || '').substring(0, 3).toUpperCase() || 'UNK';
  const prefix = 'HAMIS-' + partnerCode + '-' + regionCode + '-';
  const col = headers.indexOf('hamisId');
  let max = 0;
  if (col >= 0 && sheet.getLastRow() >= 2) {
    sheet.getRange(2, col + 1, sheet.getLastRow() - 1, 1).getValues().flat().forEach(function(id) {
      const s = String(id || '');
      if (s.startsWith(prefix)) {
        const n = parseInt(s.slice(prefix.length), 10);
        if (!isNaN(n)) max = Math.max(max, n);
      }
    });
  }
  return prefix + String(max + 1).padStart(6, '0');
}

// ─── NAME MISMATCH REPORT (one-time admin tool) ───────────────────────────────
function generateNameMismatchReport(password) {
  const pwd = getAdminPassword();
  if (!pwd || password !== pwd) throw new Error('Admin access required.');

  const master  = getMasterSheet();
  const headers = ensureHeaders(master, MASTER_HEADERS);
  const records = getRecords(master, headers);

  const ss          = SpreadsheetApp.openById(KOLLECT_SPREADSHEET_ID);
  let reviewSheet   = ss.getSheetByName('Name Mismatch Review');
  if (!reviewSheet) reviewSheet = ss.insertSheet('Name Mismatch Review');
  reviewSheet.clear();

  const reviewHeaders = ['PARTICIPANT ID', 'CONSENT NAME', 'REGISTERED NAME', 'MISMATCH TYPE', 'STATUS', 'ADMIN NOTES'];
  reviewSheet.getRange(1, 1, 1, reviewHeaders.length).setValues([reviewHeaders]);
  reviewSheet.setFrozenRows(1);

  const normalize = function(s) {
    return String(s || '').toLowerCase().replace(/[-]/g, ' ').replace(/\s+/g, ' ').trim();
  };

  const rows = [];
  records.forEach(function(rec) {
    const consentNorm   = normalize(rec.consentName);
    const registeredNorm = normalize((rec.surname || '') + ' ' + (rec.firstName || ''));
    if (!consentNorm || !registeredNorm) return;
    const conWords = consentNorm.split(' ').filter(function(w) { return w.length > 2; });
    const regWords = registeredNorm.split(' ').filter(function(w) { return w.length > 2; });
    const hasOverlap = regWords.some(function(w) { return conWords.indexOf(w) >= 0; });
    if (!hasOverlap) {
      rows.push([
        rec.participantId || '',
        rec.consentName   || '',
        ((rec.surname || '') + ' ' + (rec.firstName || '')).trim(),
        'No name overlap',
        'PENDING',
        rec.adminNotes || ''
      ]);
    }
  });

  if (rows.length) {
    reviewSheet.getRange(2, 1, rows.length, reviewHeaders.length).setValues(rows);
  }
  reviewSheet.autoResizeColumns(1, reviewHeaders.length);
  return { status: 'OK', mismatches: rows.length, message: rows.length + ' mismatch(es) written to "Name Mismatch Review" sheet.' };
}

// ─── AUTH ─────────────────────────────────────────────────────────────────────
function getAdminPassword() {
  return PropertiesService.getScriptProperties().getProperty('ADMIN_PASSWORD');
}

// ─── RESPONSE ────────────────────────────────────────────────────────────────
function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(JSON_MIME);
}

function jsonpResponse(callback, payload) {
  const safe = String(callback || '').replace(/[^\w.$]/g, '');
  if (!safe) return jsonResponse({ status: 'ERROR', message: 'Invalid callback.' });
  return ContentService.createTextOutput(safe + '(' + JSON.stringify(payload) + ');')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

// ─── BULK SET IMPLEMENTING PARTNER ───────────────────────────────────────────
// Patches all Master rows where implementingPartner is blank.
// Call via the app or from the Apps Script editor using runBulkSetPartner().
function bulkSetPartner(payload) {
  const pwd = getAdminPassword();
  if (!pwd || payload.adminPassword !== pwd) throw new Error('Admin access required.');
  if (!payload.implementingPartner) throw new Error('implementingPartner is required.');

  const master  = getMasterSheet();
  const headers = ensureHeaders(master, MASTER_HEADERS);
  const now     = new Date().toISOString();
  const actor   = payload.actor || 'admin';
  const partner = String(payload.implementingPartner).trim();

  const piIdx    = headers.indexOf('participantInfoStatus');
  const partnerIdx = headers.indexOf('implementingPartner');
  if (partnerIdx < 0) throw new Error('implementingPartner column not found in Master sheet.');

  const lastRow = master.getLastRow();
  if (lastRow < 2) return { status: 'OK', updated: 0, message: 'No data rows.' };

  const rows = master.getRange(2, 1, lastRow - 1, headers.length).getValues();
  let updated = 0;

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const currentPartner = String(row[partnerIdx] || '').trim();
    const infoStatus     = String(row[piIdx]       || '').trim();
    if (currentPartner || infoStatus !== 'submitted') continue;

    master.getRange(i + 2, partnerIdx + 1).setValue(partner);
    master.getRange(i + 2, headers.indexOf('lastUpdatedAt') + 1).setValue(now);
    master.getRange(i + 2, headers.indexOf('lastUpdatedBy') + 1).setValue(actor);

    const participantId = String(row[headers.indexOf('participantId')] || '');
    appendAudit({
      participantId,
      actorType: 'staff',
      actor,
      action:    'bulkSetPartner',
      section:   'admin',
      notes:     'Set implementingPartner = ' + partner
    });
    updated++;
  }

  return { status: 'OK', updated, message: `Updated ${updated} record(s) with partner: ${partner}.` };
}

// Run directly from Apps Script editor to patch blank-partner records.
function runBulkSetPartner() {
  const result = bulkSetPartner({
    adminPassword:       PropertiesService.getScriptProperties().getProperty('ADMIN_PASSWORD'),
    implementingPartner: 'Jobberman',   // ← change this before running
    actor:               'admin'
  });
  Logger.log(JSON.stringify(result, null, 2));
}

// ─── JOB ROLE CLASSIFIER (server-side mirror of client classifyJobRole) ───────
function classifyJobRoleServer(role) {
  const text = String(role || '').toLowerCase();
  if (/\b(manager|director|principal|dean|registrar|administrator|superintendent|cto|lead|head)\b/.test(text)) return 'Management';
  if (/\b(accountant|bookkeeper|officer|coordinator|specialist|analyst|secretary|clerk|cashier|teller|buyer|recruiter|writer|controller|auditor|agent|rep|representative|relationship|records|admissions|documentation|dispatcher)\b/.test(text)) return 'Administrative';
  if (/\b(cleaner|security|guard|driver|loader|laborer|worker|operator|attendant|hand|janitor|gardener|courier|picker|stocker|sanitation|bellhop|housekeeper|laundry|storekeeper|helper|assistant)\b/.test(text)) return 'Support';
  return 'Technical';
}

// ─── ONE-TIME LEGACY MIGRATION ────────────────────────────────────────────────
// Run once from the Apps Script editor (Run → runMigration). Check Logs for result.
function runMigration() {
  const result = importFromSheet({
    adminPassword:        PropertiesService.getScriptProperties().getProperty('ADMIN_PASSWORD'),
    sourceSpreadsheetId:  '1wmEH-iDZVBairol-4COpj1a5dUdHPz7wOfqCCZpWtso',
    sourceSheetGid:       0,
    actor:                'migration_2026'
  });
  Logger.log(JSON.stringify(result, null, 2));
}

// ─── CONSENT (merged from happy-consent-form) ────────────────────────────────
function initConsent(payload) {
  const now        = new Date().toISOString();
  const rawToken   = createToken();
  const tokenHash  = hashValue(rawToken);
  const registrationUrl = buildRegistrationUrl(rawToken);
  const consentId  = generateConsentId();
  const phone      = normalizePhone(payload.phone);
  const email      = normalizeEmail(payload.email);

  const master  = getMasterSheet();
  const headers = ensureHeaders(master, MASTER_HEADERS);
  const existingRow = findParticipantRow(master, headers, { phone, email });

  let participantId;
  let rowIndex;
  let existingConsentName = '';
  let signatureFileUrl = '';

  if (existingRow > 0) {
    const existing = rowToObject(headers, master.getRange(existingRow, 1, 1, headers.length).getValues()[0]);
    participantId      = existing.participantId;
    existingConsentName = existing.consentName || '';
    const sig = saveConsentSignatureToDrive(payload, participantId);
    signatureFileUrl = sig.url;
    updateRow(master, headers, existingRow, {
      continuationTokenHash:      tokenHash,
      continuationTokenCreatedAt: now,
      consentStatus:              'complete',
      consentSubmittedAt:         payload.timestamp || now,
      consentSubmissionId:        consentId,
      consentName:                payload.name  || '',
      consentPhone:               phone,
      consentEmail:               email,
      consentVenue:               payload.venue || '',
      consentSignatureFileUrl:    sig.url,
      consentSignatureFileId:     sig.id,
      consentSignatureFileName:   sig.name,
      currentStage:               'registration',
      lastUpdatedAt:              now,
      lastUpdatedBy:              'participant',
      participantPhoneNormalized: phone,
      participantEmailNormalized: email
    });
    rowIndex = existingRow;
  } else {
    participantId = generateParticipantId(master, headers);
    const sig = saveConsentSignatureToDrive(payload, participantId);
    signatureFileUrl = sig.url;
    const record = blankRecord(headers);
    Object.assign(record, {
      participantId,
      continuationTokenHash:      tokenHash,
      continuationTokenCreatedAt: now,
      consentStatus:              'complete',
      consentSubmittedAt:         payload.timestamp || now,
      consentSubmissionId:        consentId,
      consentName:                payload.name  || '',
      consentPhone:               phone,
      consentEmail:               email,
      consentVenue:               payload.venue || '',
      consentSignatureFileUrl:    sig.url,
      consentSignatureFileId:     sig.id,
      consentSignatureFileName:   sig.name,
      participantInfoStatus:      'not_started',
      capacityBuildingStatus:     'not_started',
      jobPlacementStatus:         'not_started',
      currentStage:               'registration',
      lockedSections:             '',
      cvStatus:                   'not_started',
      lastUpdatedAt:              now,
      lastUpdatedBy:              'participant',
      createdAt:                  now,
      createdBy:                  'consent',
      participantPhoneNormalized: phone,
      participantEmailNormalized: email
    });
    master.appendRow(headers.map(h => toSheetValue(record[h] || '')));
    rowIndex = master.getLastRow();
  }

  appendToConsentLog(payload, consentId, participantId, signatureFileUrl);

  appendAudit({
    participantId,
    actorType: 'participant',
    actor:     payload.name || phone || 'participant',
    action:    'initConsent',
    section:   'consent',
    notes:     payload.venue || ''
  });

  const emailResult = sendConsentParticipantEmail({
    participantId,
    token:               rawToken,
    registrationUrl,
    consentSubmissionId: consentId,
    name:                payload.name || '',
    email
  });

  updateRow(master, headers, rowIndex, {
    consentEmailSent:      emailResult.sent ? 'yes' : (email ? 'no' : ''),
    consentEmailSentAt:    emailResult.sent ? new Date().toISOString() : '',
    consentEmailSendError: emailResult.error || ''
  });

  if (emailResult.sent || emailResult.error) {
    appendAudit({
      participantId,
      actorType: 'system',
      actor:     'apps-script',
      action:    emailResult.sent ? 'sendConsentEmail' : 'sendConsentEmailFailed',
      section:   'consent',
      notes:     emailResult.sent ? email : emailResult.error
    });
  }

  return {
    status:             'OK',
    participantId,
    token:              rawToken,
    registrationUrl,
    emailSent:          emailResult.sent,
    existingConsentName
  };
}

function getConsentLogSheet() {
  const ss = SpreadsheetApp.openById(CONSENT_SPREADSHEET_ID);
  return ss.getSheetByName(CONSENT_TAB_NAME) || ss.getSheets()[0];
}

function appendToConsentLog(payload, consentId, participantId, signatureFileUrl) {
  try {
    const sheet = getConsentLogSheet();
    ensureHeaders(sheet, CONSENT_LOG_HEADERS);
    const row = sheet.getLastRow() + 1;
    sheet.appendRow([
      consentId,
      payload.timestamp || new Date().toISOString(),
      payload.venue     || '',
      payload.name      || '',
      payload.phone     || '',
      payload.email     || '',
      'Yes',
      payload.language  || 'en',
      'HAPPY Program',
      ''
    ]);
    if (signatureFileUrl) {
      sheet.getRange(row, 10).setFormula('=HYPERLINK("' + signatureFileUrl + '","View")');
    }
  } catch (_) {}
}

function saveConsentSignatureToDrive(payload, participantId) {
  try {
    const match = String(payload.signature || '').match(/^data:image\/png;base64,(.+)$/);
    if (!match) return { id: '', url: '', name: '' };
    const bytes    = Utilities.base64Decode(match[1]);
    const safeName = sanitizeFileName(payload.name || participantId || 'participant');
    const fileName = `${participantId}_${new Date().toISOString().replace(/[:.]/g, '-')}_${safeName}_consent-signature.png`;
    const blob     = Utilities.newBlob(bytes, 'image/png', fileName);
    const folder   = DriveApp.getFolderById(CONSENT_SIGNATURE_FOLDER);
    const file     = folder.createFile(blob);
    return { id: file.getId(), url: file.getUrl(), name: file.getName() };
  } catch (_) {
    return { id: '', url: '', name: '' };
  }
}

function sendConsentParticipantEmail(details) {
  if (!details.email) return { sent: false, error: '' };
  try {
    const name = details.name ? ` ${details.name}` : '';
    MailApp.sendEmail({
      to:      details.email,
      subject: 'Your HAPPY Program Consent Confirmation',
      body: [
        `Hello${name},`,
        '',
        'Thank you for giving your consent to participate in the HAPPY Program.',
        '',
        'Here are your details — please keep them safe:',
        '',
        `  Consent ID:     ${details.consentSubmissionId}`,
        `  Participant ID: ${details.participantId}`,
        '',
        'Click the link below to complete your registration:',
        '',
        `  ${details.registrationUrl}`,
        '',
        'If you have any questions, please contact your HAPPY Program field officer.',
        '',
        'Regards,',
        'HAPPY Program Team'
      ].join('\n'),
      name: 'HAPPY Program'
    });
    return { sent: true, error: '' };
  } catch (err) {
    return { sent: false, error: err.message };
  }
}

function buildRegistrationUrl(token) {
  return 'https://murphy-richard.github.io/happy-kollekt/?token=' + encodeURIComponent(token);
}

function createToken() {
  return Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().replace(/-/g, '');
}

function generateConsentId() {
  return 'HAPPY-' + Utilities.getUuid().replace(/-/g, '').slice(0, 8).toUpperCase();
}

// ─── DRIVE AUTH HELPER ────────────────────────────────────────────────────────
function authorizeDriveAccess() {
  const folder = DriveApp.getFolderById(CV_UPLOAD_FOLDER);
  const test   = folder.createFile(Utilities.newBlob('auth-test', 'text/plain', 'auth-test.txt'));
  test.setTrashed(true);
  return 'Drive access OK: ' + folder.getName();
}

// ─── DATA NORMALISATION ───────────────────────────────────────────────────────

// Convert any stored phone format to local Ghana format: 0244111111 (10 digits)
function toLocalPhone(value) {
  const d = String(value || '').replace(/\D+/g, '');
  if (!d) return String(value || '');
  if (d.length === 12 && d.startsWith('233')) return '0' + d.slice(3);
  if (d.length === 10 && d.startsWith('0'))   return d;
  if (d.length === 9)                          return '0' + d;
  return String(value || ''); // unrecognised format — leave unchanged
}

// Title-case a name: "miriam asante" → "Miriam Asante"
function toTitleCase(str) {
  return String(str || '').trim()
    .toLowerCase()
    .replace(/\b([a-z])/g, function(c) { return c.toUpperCase(); });
}

// Normalise a new record's display phone and name fields before writing to sheet.
// Called at the end of saveParticipantInfo for every new submission.
function normaliseRecordFields(record) {
  var phoneFields = ['telephone', 'consentPhone'];
  phoneFields.forEach(function(f) {
    if (record[f]) record[f] = toLocalPhone(record[f]);
  });
  var nameFields = ['surname', 'firstName', 'otherNames', 'consentName',
                    'currentOccupation', 'currentEmployer'];
  nameFields.forEach(function(f) {
    if (record[f]) record[f] = toTitleCase(record[f]);
  });
  return record;
}

// ─── CLEANUP PASS — normalise ALL existing Master records ────────────────────
// Exposed via doPost (requires admin password) and runnable from the editor.
function normalizeExistingRecords(password) {
  const pwd = getAdminPassword();
  if (!pwd || password !== pwd) throw new Error('Admin access required.');

  const master  = getMasterSheet();
  const headers = ensureHeaders(master, MASTER_HEADERS);
  if (master.getLastRow() < 2) return { status: 'OK', updated: 0, total: 0 };

  const rows = master.getRange(2, 1, master.getLastRow() - 1, headers.length).getValues();
  const idx  = {};
  headers.forEach(function(h, i) { idx[h] = i; });
  const now  = new Date().toISOString();

  const PHONE_FIELDS = ['telephone', 'consentPhone'];
  const NAME_FIELDS  = ['surname', 'firstName', 'otherNames', 'consentName',
                        'currentOccupation', 'currentEmployer'];

  var updated = 0;
  var updatedRows = [];

  for (var r = 0; r < rows.length; r++) {
    var row      = rows[r].slice(); // copy so we can compare
    var original = rows[r].slice();
    var changed  = false;

    PHONE_FIELDS.forEach(function(f) {
      var i = idx[f];
      if (i === undefined) return;
      var raw = String(row[i] || '').trim();
      if (!raw) return;
      var fixed = toLocalPhone(raw);
      if (fixed !== raw) { row[i] = fixed; changed = true; }
    });

    NAME_FIELDS.forEach(function(f) {
      var i = idx[f];
      if (i === undefined) return;
      var raw = String(row[i] || '').trim();
      if (!raw) return;
      var fixed = toTitleCase(raw);
      if (fixed !== raw) { row[i] = fixed; changed = true; }
    });

    if (changed) {
      if (idx['lastUpdatedAt'] !== undefined) row[idx['lastUpdatedAt']] = now;
      if (idx['lastUpdatedBy'] !== undefined) row[idx['lastUpdatedBy']] = 'normalize_script';
      updatedRows.push({ rowIndex: r + 2, values: row });
      updated++;
    }
  }

  // Write updates individually to avoid touching unchanged rows
  updatedRows.forEach(function(u) {
    master.getRange(u.rowIndex, 1, 1, headers.length).setValues([u.values]);
  });

  appendAudit({
    participantId: '',
    actorType: 'staff',
    actor:     'normalize_script',
    action:    'normalizeExistingRecords',
    section:   'admin',
    notes:     'Updated ' + updated + ' of ' + rows.length + ' records'
  });

  return { status: 'OK', updated: updated, total: rows.length,
           message: 'Normalised ' + updated + ' of ' + rows.length + ' records.' };
}

// Run directly from Apps Script editor: Run → runNormalizeExistingRecords
function runNormalizeExistingRecords() {
  const pwd    = PropertiesService.getScriptProperties().getProperty('ADMIN_PASSWORD');
  const result = normalizeExistingRecords(pwd);
  Logger.log(JSON.stringify(result, null, 2));
}
