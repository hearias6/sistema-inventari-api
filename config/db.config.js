module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "hans123",
    DB: "colombia-hogar",
    dialect: "mysql",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };