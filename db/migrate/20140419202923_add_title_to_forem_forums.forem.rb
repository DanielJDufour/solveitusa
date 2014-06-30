# This migration was coded so that new migration to rename title to name works
class AddTitleToForemForums < ActiveRecord::Migration
  def up
    add_column :forem_forums, :title, :string
  end
end
