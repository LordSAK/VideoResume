class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.string :SectionName

      t.timestamps
    end
  end
end
