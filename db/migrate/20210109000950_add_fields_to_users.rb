class AddFieldsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string
    add_column :users, :github_link, :string
    add_column :users, :linkedin_link, :string
    add_column :users, :string, :string
    add_column :users, :personal_site, :string
    add_column :users, :tag, :text
  end
end
