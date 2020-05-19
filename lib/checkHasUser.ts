export default function checkHasUser(cookie: string | undefined) {
    return !!cookie?.includes('@reel/sessionID=');
}
