import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    // check if the data exists
    const user = await knex("users").first()
    if(user) return

    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { id: 1, username: "user1", email: "user1@gmail.com" },
        { id: 2, username: "user2", email: "user2@gmail.com" },
        { id: 3, username: "user3", email: "user3@gmail.com" }
    ]);
};
