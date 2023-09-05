import React from 'react';
import { useServicios } from '../context/ServiciosContext';

const ServicioCard = ({servicio, setOpen}) => {
    const {setServicio} = useServicios()

    return (
        <div className='bg-zinc-800 max-w-xl w-full p-10 rounded-md'>
           
            <header className='flex justify-center'>
                <h1 className='text-xl font-bold'>{servicio.titulo}</h1>
               

            </header>
            <div className='flex gap-x-2 items-center'>
                
                    <button
                    className='bg-blue-300 py-1 px-4 rounded-md m-0.5'
                    onClick={() =>{
                        
                        setServicio(servicio);
                        setOpen(true);
                    }}
                    >ver mas</button>
            </div>
            
        </div>
    );
};

export default ServicioCard;