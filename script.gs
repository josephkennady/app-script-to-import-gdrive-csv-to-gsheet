function updateSheetFromCSV() {
  // Define the ID of the CSV file in Google Drive
  var csvFileId = 'abcdefghijklmnopqrstuvwxyz';
  
  // Define the name of the sheet to update
  var sheetName = 'Sheet1';
  
  // Get the CSV file from Google Drive
  var csvFile = DriveApp.getFileById(csvFileId);
  
  // Get the data from the CSV file as a string
  var csvData = csvFile.getBlob().getDataAsString();
  
  // Get the sheet to update
  var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  
  // Clear the current data in the sheet
  sheet.clear();
  
  // Import the data from the CSV file into the sheet
  var newData = Utilities.parseCsv(csvData);
  sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
}
