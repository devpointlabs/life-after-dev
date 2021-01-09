class Removestringfromusers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :string, :string
    remove_column :users, :name, :string
    remove_column :users, :nickname, :string
  end
end
