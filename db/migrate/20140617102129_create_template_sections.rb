class CreateTemplateSections < ActiveRecord::Migration
  def change
    create_table :template_sections do |t|
      t.integer :template_id
      t.integer :section_id

      t.timestamps
    end
  end
end
