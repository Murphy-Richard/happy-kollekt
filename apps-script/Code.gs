const SPREADSHEET_ID = '15wqqAiJIbw6lfzwZFG_fGiklG-jFMCCpQhkaWVtPSzA';
const SHEET_GID = 0;
const JSON_MIME = ContentService.MimeType.JSON;

function doPost(e) {
  try {
    const payload = parsePayload(e);

    if (payload.action === 'getSheetData') {
      return jsonResponse(getProtectedSheetData(payload.adminPassword));
    }

    const result = syncPayloadToSheets(payload);

    if (result.duplicate) {
      return jsonResponse({
        status: 'OK',
        duplicate: true,
        referenceId: payload.submissionId || payload.localQueueId,
        row: result.row,
        sheet: result
      });
    }

    return jsonResponse({
      status: 'OK',
      duplicate: false,
      referenceId: payload.submissionId || payload.localQueueId,
      row: result.row,
      sheet: result
    });
  } catch (err) {
    return jsonResponse({
      status: 'ERROR',
      message: err.message
    });
  }
}

function doGet(e) {
  try {
    const action = e && e.parameter ? e.parameter.action : '';

    if (action === 'getSheetData') {
      return jsonResponse({
        status: 'ERROR',
        message: 'Admin password required.'
      });
    }

    return jsonResponse({
      status: 'OK',
      message: 'HAPPY data collection backend is running.'
    });
  } catch (err) {
    return jsonResponse({
      status: 'ERROR',
      message: err.message
    });
  }
}

function parsePayload(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('No POST body received.');
  }

  return JSON.parse(e.postData.contents);
}

function getResponseSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheets().find(item => item.getSheetId() === SHEET_GID);

  if (!sheet) {
    throw new Error(`Target sheet gid=${SHEET_GID} was not found.`);
  }

  return sheet;
}

function syncPayloadToSheets(payload) {
  const sheet = getResponseSheet();
  const headers = ensureHeaders(sheet, Object.keys(payload));
  const duplicateRow = findDuplicateRow(sheet, headers, payload);

  if (duplicateRow > 0) {
    return {
      spreadsheetId: SPREADSHEET_ID,
      sheetName: sheet.getName(),
      duplicate: true,
      row: duplicateRow
    };
  }

  const row = headers.map(header => payload[header] || '');
  sheet.appendRow(row);

  return {
    spreadsheetId: SPREADSHEET_ID,
    sheetName: sheet.getName(),
    duplicate: false,
    row: sheet.getLastRow()
  };
}

function ensureHeaders(sheet, incomingKeys) {
  const existingLastColumn = Math.max(sheet.getLastColumn(), 1);
  let headers = sheet.getRange(1, 1, 1, existingLastColumn).getValues()[0].filter(Boolean);

  if (!headers.length) {
    headers = incomingKeys;
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    return headers;
  }

  const missing = incomingKeys.filter(key => headers.indexOf(key) === -1);
  if (missing.length) {
    sheet.getRange(1, headers.length + 1, 1, missing.length).setValues([missing]);
    headers = headers.concat(missing);
  }

  return headers;
}

function findDuplicateRow(sheet, headers, payload) {
  const localQueueCol = headers.indexOf('localQueueId');
  const submissionCol = headers.indexOf('submissionId');

  if (sheet.getLastRow() < 2) return -1;

  const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues();
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const sameLocalQueueId = localQueueCol >= 0 && payload.localQueueId && row[localQueueCol] === payload.localQueueId;
    const sameSubmissionId = submissionCol >= 0 && payload.submissionId && row[submissionCol] === payload.submissionId;

    if (sameLocalQueueId || sameSubmissionId) {
      return i + 2;
    }
  }

  return -1;
}

function getSheetData() {
  const sheet = getResponseSheet();
  if (sheet.getLastRow() < 2) return [];

  const values = sheet.getDataRange().getValues();
  const headers = values.shift();

  return values.map(row => {
    const item = {};
    headers.forEach((header, index) => {
      item[header] = row[index];
    });
    return item;
  });
}

function getProtectedSheetData(password) {
  const adminPassword = getAdminPassword();
  if (!adminPassword) {
    return {
      status: 'ERROR',
      message: 'Admin password is not configured.'
    };
  }

  if (password !== adminPassword) {
    return {
      status: 'ERROR',
      message: 'Incorrect password.'
    };
  }

  return {
    status: 'OK',
    data: getSheetData()
  };
}

function getAdminPassword() {
  return PropertiesService
    .getScriptProperties()
    .getProperty('ADMIN_PASSWORD');
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(JSON_MIME);
}
