const mongoose = require('mongoose');

const dotenv = require(`dotenv`);

dotenv.config({ path: './config.env' });

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTIONS 💥! SUTTING DOWN...');
  console.log(err.name, '>', err.message);

  process.exit(1);
});

const app = require(`./app.js`);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.set('strictQuery', true);

mongoose.connect(DB).then(() => {
  console.log('DB connection succesful!');
});

//////////////////////////////////////////
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLER REJECTION 💥! SUTTING DOWN...');
  console.log(err.name, '>', err.message);

  server.close(() => {
    process.exit(1);
  });
});
