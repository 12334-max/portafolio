import { Contacts } from "../molecules/SectionInformation/Contacts";
import { Presentation } from "../molecules/SectionInformation/Presentation";
import { Profile } from "../molecules/SectionInformation/Profile";


export function SideInformation() {
    return (<>
        <div className="w-full bg-card rounded-lg shadow-sm flex flex-col gap-3 items-center py-3">
            <Profile />
            <Presentation />
            <div className="border-t-2 w-[90%]" />
            <p className="uppercase text-lg font-bold">contactos</p>
            <Contacts />
        </div>
    </>);
}