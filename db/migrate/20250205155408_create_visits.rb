class CreateVisits < ActiveRecord::Migration[7.1]
  def change
    create_table :visits do |t|
      t.references :image, null: false, foreign_key: true

      t.timestamps
    end
  end
end
