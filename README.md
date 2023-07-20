<h1 align="center">Transactions Viewer (API)</h1>

## 📋 Index

- [About](#-about)
- [Technologies](#-technologies)
- [Features](#-features)
- [How To Use](#-how-to-use)
- [Author](#-author)

# 🗃 About

**Transactions Viewer** is a Single Page Application that allows users to import CSV financial transactions files through an API endpoint and then exhibits all them in a table in the client side. Besides that, this web application also provides the possibility of filtering transactions by month/year and checking each transaction details.

The Front-end is stored in a different repository, and you can check it on the link below:

https://github.com/cassiocappellari/transactions-viewer-v2-client

# 🤖 Technologies

## Front-end

- Vue.js
- JavaScript
- GraphQL
- Vue Apollo
- Vue Router
- V-mask

## Back-end

- Node.js
- TypeScript
- Prisma
- GraphQL
- GraphQL Tools
- Express GraphQL
- Express
- Multer
- Luxon

## Database

- PostgreSQL

# 🚀 Features

- 📃 List transactions
- 📆 Filter transactions by date range (YYYY/MM)
- 🔎 Verify transaction details
- 📦 Import transactions CSV files

You can test the features by sending the GraphQL Queries or HTTP Requests through the button bellow:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=transactions-viewer-app&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fcassiocappellari%2Ftransactions-viewer-app%2Fmaster%2Fserver%2Ftransaction-viewer-collection.json)

In order to use the import CSV files feature, the transactions table must have this 11 columns:

| id 	| account 	| description 	| category 	| reference 	| currency 	| amount 	| status 	| transactionDate 	| createdAt 	| updatedAt 	|
|:--:	|:-------:	|:-----------:	|:--------:	|:---------:	|:--------:	|:------:	|:------:	|:---------------:	|:---------:	|:---------:	|

# 🛠 How to Run

## 💻 Front-end

To run the Front-end, please access the other repository on the link below:

https://github.com/cassiocappellari/transactions-viewer-v2-client

## 🗄 Back-end

```bash
# Clone this repository

$ git clone https://github.com/cassiocappellari/transactions-viewer-v2-api

# Enter the project folder

$ cd transactions-viewer-v2-api

# Install the dependencies

$ npm install

# Start the server

$ npm run dev
```

## 💽 Database

Configure the database .env variable:
## 🔑 .env

key|value
---|---
DATABASE_URL|`"postgresql://postgres:postgres@localhost:5432/transactions-viewer"`

```bash
# Run a Docker PostgreSQL container

docker run --name postgresql-transactions-viewer-app -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres

# Link Prisma schema and DATABASE_URL variable

$ npx prisma generate

# Run the migrations

$ npx prisma migrate dev
```

# 👨‍🚀 Author

**Cássio Cappellari**

- GitHub: [@cassiocappellari](https://github.com/cassiocappellari)
- LinkedIn: [@cassiocappellari](https://www.linkedin.com/in/cassiocappellari/)
- Dev Community ([Basic Concepts of Node.js](https://dev.to/cassiocappellari/basic-concepts-of-node-js-pch) | [Fundamentals of REST API](https://dev.to/cassiocappellari/fundamentals-of-rest-api-2nag)): [@cassiocappellari](https://dev.to/cassiocappellari)

---

Developed with 🤍 by Cássio Cappellari!
