class CreateResumeSections < ActiveRecord::Migration
  def change
    create_table :resume_sections do |t|
      t.integer :Resume_id
      t.integer :section_id
      t.string :ResumePath
      t.integer :Rate

      t.timestamps
    end
  end
end
