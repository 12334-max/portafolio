import image from '../../assets/avatar.png'

function Avatar() {
    return (
        <div className='mb-5'>
            <img src={image} alt="avatar" className='transition rounded-full  shadow my-3 mx-auto hover:-translate-y-1 hover:scale-110 duration-300' />
            <center><span className='text-slate-400 text-sm'>ING. JAVIER PÉREZ SANTIZ</span></center>
            <hr className='w-48 mx-auto ' />
        </div>
    )
}

export default Avatar