class Term < ApplicationRecord
    validates :source_term, presence: true
    validates :target_term, presence: true
    validates :part_of_speech, presence: true
    validates :definition, presence: true,
                            length: { minimum: 5}
    validates :term_type, presence: true
    validates :geographical_usage, presence: true
    validate :geographical_usage_must_be_iso3166_alpha3

    private

    def geographical_usage_must_be_iso3166_alpha3
      country = ISO3166::Country.find_country_by_alpha3(geographical_usage)
      unless country
        errors.add(:geographical_usage, "must be a valid ISO 3166-1 alpha-3 country code")
      end
    end
  
    
end
