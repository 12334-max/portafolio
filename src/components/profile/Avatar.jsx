import image from '../../assets/avatar.png'

function Avatar() {
    return (
        <div className='mb-5 grid place-items-center md:w-60 lg:w-auto'>
            <img src={image} alt="avatar"
                className='outline outline-offset-4 scale-75 md:scale-90 lg:scale-95 outline-blue-950 mb-3  rounded-full  hover:-translate-y-1 hover:scale-100 duration-300' />
            <span className='text-slate-400 text-sm font-semibold'>ING. JAVIER PÉREZ SANTIZ</span>
            <hr className='w-48 ' />
        </div>
    )
}

export default Avatar