import { useEffect } from 'react';
import Router from 'next/router';

export default function LogOutPage() {
    useEffect(() => {
        localStorage.removeItem('reel:token');
        Router.push('/');
    }, []);
    return null;
}
