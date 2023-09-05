import { createContext, useState, useContext } from "react";

const ServicioContext = createContext();

export const useServicios = () => {
    const context = useContext(ServicioContext);

    if (!context){
        throw new Error("useServicios must be used within a ServiciosProvider");
    }
    return context;
}

export function ServicioProvider({children}){
    
    const [servicios ,  setServicios] = useState([{ titulo: 'Magia negra', href: '#' },
                                                    { titulo: 'Magia roja', href: '#seccion2' },
                                                    { titulo: 'Retorno de pareja', href: '#' },
                                                    { titulo: 'Amarres de amor', href: '#' },
                                                    { titulo: 'Magia vudu', href: '#seccion2' },
                                                    { titulo: 'Magia blanca', href: '#' },
                                                    { titulo: 'Manipulación', href: '#seccion2' },
                                                    { titulo: 'Dominación', href: '#' },
                                                    { titulo: 'Purificaciones', href: '#' },
                                                    { titulo: 'Endulzamientos sexuales', href: '#seccion2' },
                                                    { titulo: 'Tarot', href: '#' }])
    const [servicio, setServicio] = useState(null)

    return(
        <ServicioContext.Provider value={{
            servicios,
            servicio,
            setServicio
        }}>
            {
                children
            }
        </ServicioContext.Provider>
    )
    
}