import image from '../../assets/avatar.png'
import Presentation from "../profile/Presentation";

function Avatar() {
    return (
        <div className='justify-items-center'>
            <img src={image} className='outline scale-90 outline-blue-950 rounded-full  hover:-translate-y-1 duration-300' />
            <span className='text-slate-400 font-semibold underline'>ING. JAVIER PEREZ SANTIZ</span>
        </div>
    )
}

export default Avatar