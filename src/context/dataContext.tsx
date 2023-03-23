import axios from 'axios'
import {
    createContext, useCallback,
    useContext, useMemo, useState
} from 'react'
import { Song } from '../vite-env'
// ||
interface values {
    actualSong: Song | null
    results: Song[]
    saveResults: (data: Song[]) => void
    showSong: (data: Song) => void
}

export const DataContext = createContext<values>(
    {
        actualSong: null,
        results: [],
        saveResults: (data: Song[]) => { },
        showSong: (data: Song) => { }
    }
)
interface props {
    children: any
}
export default function DataContextProvider({ children }: props) {

    const [results, setResults] = useState<Song[]>([])
    const [actualSong, setActualSong] = useState<Song | null>(null)


    const saveResults = (data: Song[]) => setResults(data)
    const showSong = (data: Song) => setActualSong(data)


    const value = {
        actualSong,
        showSong,
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
