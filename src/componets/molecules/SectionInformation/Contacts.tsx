import { Phone } from "lucide-react";


export function Contacts() {
    return (<div className="flex gap-1 items-center">
        <Phone size={15} />
        <span>555 444 5522</span>
    </div>);
}