import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/index.css'
import Catalogue from './components/Catalogue'
import ResponsiveDrawer from './components/drawer/Drawer'
import Home from './components/drawer/Home'
import { useDataContext } from './context/dataContext'

function App() {
  const {results}=useDataContext()

  return (
     <Home>
        <div>
        {results && results.length&& results.map(
          e=>e.title
        )}
        </div>
      </Home>
   
  )
}

export default App
