const getSessionID = (cookie: string | undefined) => {
    if (!cookie) return '';
    return (cookie.match(/@reel\/sessionID=([\d]+);?/i) as [any, string])[1];
};

export default getSessionID;
