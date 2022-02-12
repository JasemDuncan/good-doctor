class CreateDoctors < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|
      t.string :name
      t.integer :age
      t.string :specialization
      t.integer :bookingFee
      t.text :biography

      t.timestamps
    end
  end
end
