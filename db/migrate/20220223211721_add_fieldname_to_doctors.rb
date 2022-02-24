class AddFieldnameToDoctors < ActiveRecord::Migration[7.0]
  def change
    add_column :doctors, :image_data, :text
  end
end
