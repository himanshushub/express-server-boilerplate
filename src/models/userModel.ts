import { knex } from "db/knex";

export async function  getUsers() {
  return knex('users');
}