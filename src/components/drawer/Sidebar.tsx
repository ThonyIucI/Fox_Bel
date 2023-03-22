import '../../styles/listItems.css'


const Sidebar
    = () => {
        return (

            <header className='h-sidebar'>
                <nav
                    id="sidebarMenu"
                    className="collapse d-lg-block collapse bg-white sidebar"
                >

                    <div className="sidebar_color">
                    <div className="image-container">

                        <img src="/images/foxbel-music.png" alt="Logo FoxBel" />

                    </div>
                    <div className="position-sticky">
                        <div className="sidebar-title">
                            Mi librería
                        </div>

                        <ul className="sidebar-item">
                            <li className='active'>Recientes</li>
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
                    </div>
                    </div>

                </nav>



                {/*  Navbar */}
            </header >

        );
    }

export default Sidebar
