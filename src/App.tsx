
import './styles/index.css'
import Home from './components/drawer/Home'
import { useDataContext } from './context/dataContext'
import Card from './components/Card'
import './styles/app.css'


function App() {
  const {results}=useDataContext()

  return (
     <Home>
        <div className='cards'>
        {results && results.length? results?.map(
          e=><Card song={e} key={e.id} />
        ):null}
        </div>
      </Home>
   
  )
}

export default App
