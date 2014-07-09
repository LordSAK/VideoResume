class CreateSelectionCandidates < ActiveRecord::Migration
  def change
    create_table :selection_candidates do |t|
      t.integer :UserID
      t.integer :CandidateID
      t.integer :OpeningsID
      t.integer :ConsultantID
      t.string :ConsultantSelection
      t.integer :Con_Tech_Skills
      t.integer :Con_Pre_Skills
      t.integer :Con_Mng_Skills
      t.string :Con_Comments
      t.integer :ManagerID
      t.string :ManagerSelection
      t.integer :Mngr_Tech_Skills
      t.integer :Mngr_Pre_Skills
      t.integer :Mngr_Mng_Skills
      t.string :Mngr_Comments

      t.timestamps
    end
  end
end
