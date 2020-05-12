
exports.up = function(knex) {

      return knex.schema.createTable("cars", tbl => {
        tbl.increments();
        tbl.integer("VIN", 200).notNullable().unique();
        tbl.string("Make", 200).notNullable();
        tbl.string("Model", 200).notNullable();
        tbl.integer("Mileage", 200).notNullable();
        tbl.string("Transmission Type", 200);
        tbl.string("Title Status", 200);
        tbl.timestamps(true, true);
      })
    
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
