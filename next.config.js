require('dotenv').config();

module.exports = {
    env: {
        CONNECT_DATABASE: process.env.CONNECT_DATABASE,
        JWT_SECRET: process.env.JWT_SECRET,
        FAUNA_DB: process.env.FAUNA_DB,
    },
};
