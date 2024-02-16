class Term < ApplicationRecord
    validates :source_term, presence: true
    validates :target_term, presence: true
    validates :part_of_speech, presence: true
    validates :definition, presence: true,
                            length: { minimum: 5}
    validates :term_type, presence: true
    validates :geographical_usage, presence: true,
                            length: { is: 3, message: 'must be a valid ISO 3166-1 alpha-3 country code'}
  
    
end
