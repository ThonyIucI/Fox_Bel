import axios from 'axios'
import {
    createContext, useCallback,
    useContext, useMemo, useState
} from 'react'



export const DataContext = createContext(
    {
       results:[],
        saveResults:()=>{}
    }
)
interface props {
    children: any
}
export default function DataContextProvider({ children }: props) {

    const [results, setResults] = useState([])


    const saveResults=(data)=>setResults(data)

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
