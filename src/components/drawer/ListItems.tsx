import '../../styles/listItems.css'
const ListItems
    = () => {
        return (
            <>
                <div className="sidebar-title">
                    Mi librería
                </div>

                <ul className="sidebar-item">
                    <li>Recientes</li>
                    <li>Artistas</li>
                    <li>Albums</li>
                    <li>Canciones</li>
                    <li>Estaciones</li>
                </ul>

                <div className="sidebar-title">
                    PlayList
                </div>

                <ul className="sidebar-item">
                    <li>Metal</li>
                    <li>Para bailar</li>
                    <li>Rock 90s</li>
                    <li>Baladas</li>
                </ul>
            </>
        );
    }

export default ListItems
    ;