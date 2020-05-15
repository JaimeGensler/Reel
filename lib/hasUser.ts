export default function hasUser(cookie: string | undefined) {
    return !!cookie?.includes('@reel/sessionID=');
}
