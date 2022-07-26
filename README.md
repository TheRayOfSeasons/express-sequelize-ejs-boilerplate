# Express Sequelize EJS boilerplate

This is a simple boilerplate that uses Express, Sequelize, and EJS for a fullstack application. This has a Todo table with a simple CRUD.

# Setup

1. Install `pnpm` via `npm i -g pnpm`.
2. Run `pnpm i`.
3. Create a postgresql database.
4. Create a `.env` and fill it with these values:
   ```bash
   DATABASE_USER=<your-database-user>
   DATABASE_PASSWORD=<your-database-password>
   DATABASE_NAME=<your-database-name>
   ```
   Example:
   ```bash
   DATABASE_USER=test_user
   DATABASE_PASSWORD=1234
   DATABASE_NAME=test_database
   ```
