class AddContributorToRequests < ActiveRecord::Migration[6.0]
  def change
    add_column :requests, :contributor, :boolean
  end
end
