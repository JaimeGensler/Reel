import faunadb from 'faunadb';

export const q = faunadb.query;
export const client = new faunadb.Client({
    secret: process.env.FAUNA_DB as string,
    timeout: 5000,
});

export const queryURL = 'https://graphql.fauna.com/graphql';
export const faunaHeaders = {
    headers: {
        Authorization: `Bearer ${process.env.FAUNA_DB}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};
