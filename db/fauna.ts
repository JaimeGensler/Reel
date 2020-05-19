export const queryURL = 'https://graphql.fauna.com/graphql';
export const faunaHeaders = {
    headers: {
        Authorization: `Bearer ${process.env.FAUNA_DB}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};
