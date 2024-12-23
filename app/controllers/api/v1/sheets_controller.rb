module Api
    module V1
        class SheetsController < ApplicationController
            def index
                spreadsheet_id = ENV['GOOGLE_SHEET_ID'] # Your Google Sheet ID
                range = '🗓️ Daily Recap!G5:Q21' # Adjust to match your sheet's data range
        
                begin
                  result = GOOGLE_SHEETS_SERVICE.get_spreadsheet_values(spreadsheet_id, range)
                  render json: { data: result.values } # Returns the sheet data as JSON
                rescue Google::Apis::Error => e
                  render json: { error: e.message }, status: :unprocessable_entity
                end
              end
        end
    end
end