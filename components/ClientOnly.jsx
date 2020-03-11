import { useState, useEffect } from 'react';

export default function ClientOnly({ children }) {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => setShouldRender(true), []);

    if (!shouldRender) return null;
    return children;
}
