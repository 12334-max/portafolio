import { Contacts } from "../molecules/SectionInformation/Contacts";
import { Skills } from "../molecules/SectionInformation/Kills";
import { Presentation } from "../molecules/SectionInformation/Presentation";
import { Profile } from "../molecules/SectionInformation/Profile";


export function SideInformation() {
    return (<>
        <div className="w-full bg-card rounded-lg shadow-sm flex flex-col gap-2 items-center py-3">
            <Profile />
            <Presentation />
            <p className="uppercase text-sm font-bold">contactos</p>
            <Contacts />
            <p className="uppercase text-sm font-bold">habilidades</p>
            <Skills />

        </div>

    </>);
}