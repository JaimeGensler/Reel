interface Vars {
    [name: string]: any;
}

const getParams = (query: string, variables?: Vars) => ({ query, variables });

export default getParams;
