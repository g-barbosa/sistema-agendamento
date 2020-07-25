import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.uuid('entityId').notNullable();
        table.string('name').notNullable();
        table.string('phone').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.string('type').notNullable();
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('users')
}

