import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('prices', table => {
        table.increments('id').primary();
        table.uuid('entityId').notNullable();
        table.string('description', 30).notNullable();
        table.decimal('value').notNullable();
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('prices')
}

