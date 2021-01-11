class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :picture
      t.string :github_link
      t.text :description
      t.string :live_link
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
