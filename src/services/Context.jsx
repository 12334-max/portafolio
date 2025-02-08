import { createContext, useEffect, useState } from 'react';
import { dataJobs, dataKills } from '../data/proyect-data';

export const Context = createContext();

export function ContextProvider(props) {
    const [jobs, setJobs] = useState([]);
    const [kills, setKills] = useState([])
    useEffect(() => {
        setJobs(dataJobs);
        setKills(dataKills);
    }, [])


    return (
        <Context.Provider value={{
            jobs,
            kills
        }}>
            {props.children}
        </Context.Provider>
    )
}