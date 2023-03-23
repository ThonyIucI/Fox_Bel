import Card from "../components/Card";
import AppBar from "../components/drawer/AppBar";
import { useDataContext } from "../context/dataContext";

const Home = () => {
    const { results } = useDataContext()

    return (<AppBar>
        <>

            <p className='results-title'>Resultados</p>
            <br />
            <div className='cards'>
                {results && results.length ? results?.map(
                    e => <Card song={e} key={e.id} />
                ) : null}
            </div>
        </>
    </AppBar>);
}
 
export default Home;