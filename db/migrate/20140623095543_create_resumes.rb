class CreateResumes < ActiveRecord::Migration
  def change
    create_table :resumes do |t|
      t.integer :user_id
      t.integer :opening_id
      t.integer :section_id
      t.string :resume_path
      t.integer :rate

      t.timestamps
    end
  end
end
