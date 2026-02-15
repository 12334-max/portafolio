import { ThemeMode } from "../componets/molecules/theme/ThemeMode";
import { SideInformation } from "../componets/templates/SideInformation";
import { WorkHistory } from "../componets/organism/WorkHistory";
import { ProjectHistory } from "../componets/organism/ProjectHistory";


export function Home() {
    return (
        <>
            <div className="flex gap-3 py-5 px-3 flex-col sm:flex-row h-[100%]">
                <ThemeMode />
                <section className="w-[100%] sm:w-[40%]">
                    <SideInformation />
                </section>
                <article className="w-full flex flex-col gap-2">
                    <div id="work-history" className="bg-card rounded-md">
                        <p className="text-center uppercase">experiencia</p>
                        <WorkHistory />
                    </div>
                    <div id="project" className="bg-card rounded-md">
                        <p className="text-center uppercase">proyectos</p>
                        <ProjectHistory/>
                    </div>
                </article>
            </div>
        </>
    );

}