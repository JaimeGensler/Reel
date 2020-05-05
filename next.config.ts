require('dotenv').config();

export default {
    env: {
        CONNECT_DATABASE: process.env.CONNECT_DATABASE,
        JWT_SECRET: process.env.JWT_SECRET,
    },
};
