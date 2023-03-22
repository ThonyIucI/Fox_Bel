import axios from 'axios'
import {
    createContext, useCallback,
    useContext, useMemo, useState
} from 'react'
import { Song } from '../vite-env'

interface values{
    results:Song[]
    saveResults: (data: Song[]) => void
}

export const DataContext = createContext <values>(
    {
       results:[],
        saveResults:(data:Song[])=>{}
    }
)
interface props {
    children: any
}
export default function DataContextProvider({ children }: props) {

    const [results, setResults] = useState<Song[]>([])


    const saveResults=(data:Song[])=>{
        setResults(data)
    }

    const value =  {
            results,
            saveResults
        }

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useDataContext() {
    return useContext(DataContext)
}
// localStorage.setItem('token', '"JSON.stringify(token)"')
// localStorage.setItem('user', '{"access_token":"\\"JSON.stringify(token)\\"","email": "email@email.com", "name": "Probando un"}')
