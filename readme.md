You will need to replace 'abcdefghijklmnopqrstuvwxyz' with the ID of your specific CSV file. In this script, it uses the Utilities.parseCsv() method to parse the data from the CSV file, and the sheet.clear() method to clear the current data in the sheet, and then sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData) method to import the data into the sheet.

You can set the time-based trigger for this function to run automatically at a specific time.

Please note that this script will only work when you have the google sheet open and running the script. you will need to authorize the script to access your google sheet and drive
