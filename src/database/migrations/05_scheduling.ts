import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('scheduling', table => {
        table.increments('id').primary();
        table.uuid('entityId').notNullable();
        table.integer('idProduct').unsigned().references('id').inTable('products')
        table.integer('idService').unsigned().references('id').inTable('services')
        table.integer('idAgenda').unsigned().references('id').inTable('agenda')
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('scheduling')
}

