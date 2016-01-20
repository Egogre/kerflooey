class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :status, default: "incomplete"
      t.text :notes
      t.date :due
      t.date :start
      t.references :user, index: true, foreign_key: true
      t.references :task_list, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
