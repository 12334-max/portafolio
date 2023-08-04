import Profile from "./profile/Profile";
import ProyectList from './proyects/Proyects';
import Educations from './educations/Educations';
import Footer from './footer/Footer';

function App() {
    return <>
        <div className="dark:bg-slate-900 px-5 lg:px-10 xl:px-10 pt-3 grid lg:grid-cols-3 md:grid-cols-1 text-white">
            <div className="rounded-xl mb-10  mx-3 shadow-lg shadow-gray-900 bg-slate-950 flex justify-center items-center ">
                <Profile />
            </div>
            <div className='lg:col-span-2 mx-3'>
                <Educations />
                <ProyectList />
            </div>
        </div>
    </>

}

export default App