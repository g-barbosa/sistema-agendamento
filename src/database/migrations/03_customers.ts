import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('customers', table => {
        table.increments('id').primary();
        table.uuid('entityId').notNullable();
        table.string('name').notNullable();
        table.string('phone').notNullable();
        table.string('login').notNullable();
        table.string('password').notNullable();
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('customers')
}

