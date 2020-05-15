import { useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';

export default function LogOutPage() {
    useEffect(() => {
        axios
            .post('/api/logout')
            .catch(() => null)
            .finally(() => Router.push('/'));
        //     localStorage.removeItem('reel:token');
        //     Router.push('/');
    }, []);
    return null;
}
