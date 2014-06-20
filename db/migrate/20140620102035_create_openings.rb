class CreateOpenings < ActiveRecord::Migration
  def change
    create_table :openings do |t|
      t.string :OpeningTitle
      t.string :OpeningLocation
      t.string :OpeningDescription
      t.integer :template_id

      t.timestamps
    end
  end
end
