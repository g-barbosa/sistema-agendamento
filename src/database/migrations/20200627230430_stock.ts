import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('stock', table => {
        table.increments('id').primary();
        table.uuid('entityId').notNullable();
        table.string('description', 30).notNullable();
        table.integer('quantity').notNullable();
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('stock')
}

