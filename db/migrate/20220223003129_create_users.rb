class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.integer :age
      t.string :password_digest
      t.boolean :isLoggedIn, default: false

      t.timestamps
    end
  end
end
