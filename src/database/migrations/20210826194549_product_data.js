exports.up = function(knex) {
    return knex.schema.createTable('product_data', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('price').notNullable();
        table.string('image_source').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('product_data');
};
