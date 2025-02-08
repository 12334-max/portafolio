import ProfileSection from '../../sections/profile';
import Footer from '../footer/Footer';
import AcademySection from "../../sections/academy"
import ProjectSection from "../../sections/projects"
import ExperienceSection from "../../sections/experience"

function App() {
    return <>
        <main className="dark:bg-slate-900 p-3">
            <body className='flex flex-col md:flex-row gap-3'>
                <section>
                    <ProfileSection />
                </section>
                <article className=' grid gap-3'>
                    <AcademySection />
                    <ExperienceSection />
                    <ProjectSection />
                </article>
            </body>
            <footer>
                <Footer />
            </footer>
        </main>
    </>
}

export default App