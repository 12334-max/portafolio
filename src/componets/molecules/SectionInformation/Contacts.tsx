import { FacebookIcon, GithubIcon, LinkedinIcon, Phone } from "lucide-react";


export function Contacts() {
    return (<div className="w-[95%] rounded-xl flex gap-2 justify-center items-center flex-col py-2 bg-background">
        <div className="flex items-center gap-1">
            <Phone size={15} />
            <span>555 444 5522</span>
        </div>
        <div className="flex gap-3">
            <FacebookIcon />
            <GithubIcon />
            <LinkedinIcon />
        </div>
    </div>);
}