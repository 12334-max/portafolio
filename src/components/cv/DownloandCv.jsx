import React from 'react'
import { MdSaveAlt } from "react-icons/md";
import cv from '../../assets/CvJavierPerez.pdf'

function DownloandCv() {
    return (
        <div className='grid place-items-center w-60 md:w-60 lg:w-auto'>
            <a className='grid place-items-center' href={cv} download><p className='text-lg'>Descagar Mi CV</p>
                <button className='hover:animate-bounce h-16 px-3' onClick={''}><MdSaveAlt size={25} /></button></a>
        </div>
    )
}

export default DownloandCv