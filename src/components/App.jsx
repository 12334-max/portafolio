import Profile from "./profile/Profile";
import ProyectList from './proyects/Proyects';
import Educations from './educations/Educations'

function App() {
    return <>
        <div className="bg-slate-900 px-10 pt-3 grid md:grid-cols-1 lg:grid-cols-3  text-white">
            <div className="rounded-xl mb-10  mx-3 shadow-lg shadow-gray-900 bg-slate-950 ">
                <Profile />
            </div>
            <div className='col-span-2 mx-3'>
                <Educations />
                <ProyectList />
            </div>
        </div>
        <footer className='text-center'>
            Contactame: 55-4057-8129
        </footer>
    </>

}

export default App