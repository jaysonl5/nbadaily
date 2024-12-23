require 'google/apis/sheets_v4'
require 'googleauth'

GOOGLE_SHEETS_SERVICE = Google::Apis::SheetsV4::SheetsService.new
GOOGLE_SHEETS_SERVICE.authorization = Google::Auth::ServiceAccountCredentials.make_creds(
    json_key_io: File.open(Rails.root.join('config', 'google_sheets_key.json')),
    scope: ['https://www.googleapis.com/auth/spreadsheets.readonly']
)