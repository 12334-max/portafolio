import { SectionIcon } from "lucide-react";
import { Presentation } from "../componets/molecules/SectionInformation/Presentation";
import { Profile } from "../componets/molecules/SectionInformation/Profile";
import { ThemeMode } from "../componets/molecules/theme/ThemeMode";
import { SideInformation } from "../componets/templates/SideInformation";


export function Home() {
    return (
        <>
            <div className="flex gap-3 py-5 px-3 flex-col sm:flex-row h-[100%]">
                <ThemeMode />
                <section className="h-full w-[100%] sm:w-[40%] p-2">
                    <SideInformation />
                </section>
                <article className="border-2 h-full w-full p-2"></article>
            </div>
        </>
    );

}