import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', function(table) {
    table.increments('id');
    table.string('username');
    table.string('email');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}

