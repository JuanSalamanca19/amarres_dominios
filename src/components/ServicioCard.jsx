import React from 'react';
import { useServicios } from '../context/ServiciosContext';

const ServicioCard = ({servicio, setOpen}) => {
    const {setServicio} = useServicios()

    return (
        <div className='bg-zinc-800 max-w-xl w-full p-10 rounded-md'>
           <img className="h-auto w-auto mx-auto" src={servicio.img} alt="" />
            <header className='flex justify-center'>
                <h1 className='text-2xl font-bold m-5 text-center'>{servicio.titulo}</h1>
            </header>
            <p className='text-slate-200 text-justify'>
                {
                    servicio.des
                }
            </p>
            <div className='flex flex-col items-center justify-center'>
                
                    <button
                    className='text-blue-500 underline m-5'
                    onClick={() =>{
                        
                        setServicio(servicio);
                        setOpen(true);
                    }}
                    >Ver más</button>
            </div>
            
        </div>
    );
};

export default ServicioCard;