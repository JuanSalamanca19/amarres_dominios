import React, {useState} from 'react';
import { useServicios } from '../context/ServiciosContext';
import ServicioCard from './ServicioCard';
import Modal from './Modal';

const Servicios = () => {
    const {servicios, servicio} = useServicios()
    const [open, setOpen] = useState(false)
    return (
        <section id='seccion2'className='m-4 '>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  s gap-2'>
                {
                    servicio ? (<Modal open={open} setOpen={setOpen}/>) : (<></>)
                }
                {
                    servicios.map((servicio, i) =>(
                        <ServicioCard servicio={servicio} setOpen={setOpen} key={i}/>
                    ))
                }
            </div>
        </section>
    );
};

export default Servicios;