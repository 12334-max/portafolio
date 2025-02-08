import React from 'react'
import { MdSaveAlt } from "react-icons/md";
import cv from '../../assets/CV-Javier-Perez.pdf'

function DownloandCv() {
    return (
        <>
            <div className='flex gap-3 pb-5'>
                <a className='text-slate-400 justify-items-center' href={cv} download>
                    <p className='text-lg '>Descargar CV</p>
                    <MdSaveAlt className='hover:animate-bounce' size={25} />
                </a>
            </div>
        </>
    )
}

export default DownloandCv
