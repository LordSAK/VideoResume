# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140702045954) do

  create_table "opening_templates", force: true do |t|
    t.string   "TemplateName"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "openings", force: true do |t|
    t.string   "OpeningTitle"
    t.string   "OpeningLocation"
    t.string   "OpeningDescription"
    t.integer  "template_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "resume_sections", force: true do |t|
    t.integer  "Resume_id"
    t.integer  "section_id"
    t.string   "ResumePath"
    t.integer  "Rate"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "resumes", force: true do |t|
    t.integer  "user_id"
    t.integer  "opening_id"
    t.date     "InterviewDate"
    t.string   "From"
    t.string   "To"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "sections", force: true do |t|
    t.string   "SectionName"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "selection_candidates", force: true do |t|
    t.integer  "UserID"
    t.integer  "CandidateID"
    t.integer  "OpeningsID"
    t.integer  "ConsultantID"
    t.string   "ConsultantSelection"
    t.integer  "Con_Tech_Skills"
    t.integer  "Con_Pre_Skills"
    t.integer  "Con_Mng_Skills"
    t.string   "Con_Comments"
    t.integer  "ManagerID"
    t.string   "ManagerSelection"
    t.integer  "Mngr_Tech_Skills"
    t.integer  "Mngr_Pre_Skills"
    t.integer  "Mngr_Mng_Skills"
    t.string   "Mngr_Comments"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "template_sections", force: true do |t|
    t.integer  "template_id"
    t.integer  "section_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "templates", force: true do |t|
    t.string   "TemplateName"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "password_digest"
    t.string   "user_type"
    t.string   "address"
    t.string   "phone"
    t.string   "country"
    t.string   "remember_token"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["remember_token"], name: "index_users_on_remember_token"

end
