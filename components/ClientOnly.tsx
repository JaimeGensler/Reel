import { useState, useEffect } from 'react';

type Props = { children: any };
export default function ClientOnly({ children }: Props) {
    const [shouldRender, setShouldRender] = useState(false);
    useEffect(() => setShouldRender(true), []);

    if (!shouldRender) return null;
    return children;
}
