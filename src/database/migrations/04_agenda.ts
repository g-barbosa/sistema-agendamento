import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('agenda', table => {
        table.increments('id').primary();
        table.uuid('entityId').notNullable();
        table.dateTime('data').notNullable();
        table.integer('employeeId').unsigned().references('id').inTable('funcionarios')
        table.integer('customerId').unsigned().references('id').inTable('clientes')
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('agenda')
}

