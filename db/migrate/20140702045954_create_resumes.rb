class CreateResumes < ActiveRecord::Migration
  def change
    create_table :resumes do |t|
      t.integer :user_id
      t.integer :opening_id
      t.date :InterviewDate
      t.string :From
      t.string :To

      t.timestamps
    end
  end
end
