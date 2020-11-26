import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('employees', table => {
        table.increments('id').primary();
        table.uuid('entityId').notNullable();
        table.string('name').notNullable();
        table.string('phone').notNullable();
        table.string('login').notNullable();
        table.string('password').notNullable();
        table.dateTime('starts').notNullable();
        table.dateTime('ends').notNullable();
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('employees')
}

