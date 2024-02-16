class AddPartOfSpeechToTerms < ActiveRecord::Migration[7.1]
  def change
    add_column :terms, :part_of_speech, :string
  end
end
