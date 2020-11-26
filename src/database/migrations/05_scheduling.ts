import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('scheduling', table => {
        table.increments('id').primary();
        table.uuid('entityId').notNullable();
        table.integer('idProduto').unsigned().references('id').inTable('produtos')
        table.integer('idServicos').unsigned().references('id').inTable('servicos')
        table.integer('idAgenda').unsigned().references('id').inTable('agenda')
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('scheduling')
}

