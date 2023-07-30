import image from '../../assets/ati-tecnologia.png'

const shadow = "transition rounded-md bg-slate-900 shadow-slate-800 shadow-md hover:-translate-y-1 hover:scale-80 duration-300"

function ProyectCard() {
    return (
        <>
            <div className={shadow}>
                <img src={image} alt="logo" className='rounded-lg' />
                <p className='text-lg p-3'>ATI Buscador</p>
                <p className='text-zinc-400 text-sm text-justify px-2'>
                    La aplicaión web tienen un alcanzce de realizar búsquedas
                    personalizadas con las APIs de google como el engginer search
                    y firebase Auth para realizar un estudio del mercado.</p>
            </div>
            <div className={shadow} >
                <img src="https://th.bing.com/th/id/OIP.ac0qHVKPIwRglB1DX8k0cQHaEe?pid=ImgDet&rs=1" alt="logo" className='rounded-lg w-full' />
                <p className='text-lg p-3'>API RESTFull</p>
                <p className='text-zinc-400 text-sm text-justify px-2'>
                    La API es realizada en laravel como back-end
                    para ontner datos de la base de datos en
                    formato JSON y consumirlos en el ATI Buscador.</p>
            </div>
            <div className={shadow} >
                <img src="https://th.bing.com/th/id/R.e8355eb65ad7c65d4c2115c7e90d681b?rik=BDpsYfBUhFVzAA&pid=ImgRaw&r=0" alt="logo" className='rounded-lg full' />
                <p className='text-lg p-3'>Blog Deportivo</p>
                <p className='text-zinc-400 text-sm text-justify px-2'>Este es un proyecto de la universida en donde tiene
                    la funcion de un blog .</p>
            </div>
            <div className={shadow}>
                <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" alt="logo" className='rounded-lg' />
                <p className='text-lg p-3'>Portafolio</p>
                <p className='text-zinc-400 text-sm text-justify px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nostrum.</p>
            </div>
        </>
    )
}

export default ProyectCard