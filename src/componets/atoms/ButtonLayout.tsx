import type { ReactNode } from "react";


interface ButtonLayoutProps {
    children: ReactNode,
}

export function ButtonLayout({ }: ButtonLayoutProps) {
    return (<>
        <button className="bg">children</button>
    </>);
}