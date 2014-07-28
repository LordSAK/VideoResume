class DropResumes < ActiveRecord::Migration
def up
    drop_table :resumes
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
