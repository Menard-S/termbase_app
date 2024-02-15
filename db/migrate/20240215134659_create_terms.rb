class CreateTerms < ActiveRecord::Migration[7.1]
  def change
    create_table :terms do |t|
      t.string :source_term
      t.string :target_term
      t.text :definition
      t.string :term_type
      t.string :geographical_usage

      t.timestamps
    end
  end
end
