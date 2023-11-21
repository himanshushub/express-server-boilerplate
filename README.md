# express-server-boilerplate

Express server basic boiler plate

## How to run this app

- Install Docker on your machine
- run `npm run start`

## knex

- install knex cli globally `npm i knex -g`

### migration

- `knex migrate:make user_table --knexfile src/knex/knexfile.ts`

#### run migration

- `npm run migrate`

### seed

- `knex seed:make seed_name --knexfile src/knex/knexfile.ts`

#### run seed

- `npm run seed`
