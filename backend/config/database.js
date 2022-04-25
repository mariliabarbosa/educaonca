require('dotenv/config');

module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialectOptions: {
        dateStrings: true,
        typeCast: true,
        timezone: "-03:00"
    },
    timezone: "-03:00",
    define: {
        timestamps: true,
        underscored: true
    }
}
