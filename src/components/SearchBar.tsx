import { FC, useEffect, useState } from "react";
import { alertError, shortAlert } from "../assets/alerts";
import { useDataContext } from "../context/dataContext";
import '../styles/searchbar.css'


const SearchBar: FC = () => {
    const [stringToSearch, SetString] = useState('random'),
        { saveResults, showSong } = useDataContext(),
        handleChange = (e: any) => {
            SetString(e.target.value)

        },
        handleSubmit = () => {
            try {
                if (stringToSearch) {
                    window.DZ.api(`/search?q=track:"${stringToSearch}"`, function (response: any) {
                        // console.log(response);

                        if (!response.data.length) {
                            return alertError('Ups, No existen coincidencias, pruebe con otra canción o álbum')
                        }
                        shortAlert('success', `${response.data?.length} Resultados para ${stringToSearch}`)
                        showSong(response.data[0])
                        saveResults(response.data)
                        return response
                    });
                }
            } catch (error) {
                // console.log(error);
            }
        }
    useEffect(() => {
        handleSubmit()
    }, [])
    return <>
        <div
            id="main-navbar"
            className="navbar navbar-expand-lg navbar-light bg-white"
        >



            <button
                className="navbar-toggler nav-button"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars"></i>
            </button>

            <div className="searcbar mx-auto">
                <div className="input-group input-group-lg search-box">
                    <input type="text" className="form-control form-control-lg rounded" placeholder="Buscar"
                        aria-label="Type Keywords" aria-describedby="basic-addon2" onChange={handleChange} />
                    <span className="input-group-text border-0" id="basic-addon2"
                        onClick={handleSubmit}
                    ><i className="fas fa-search"></i></span>
                </div>
            </div>

            <div className="user">
                <div className="user-name d-none d-sm-block">Anthony Urbina</div>
                <ul className="navbar-nav ms-auto d-flex flex-row">



                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="data:image/jpeg;base64,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"
                                className="rounded-circle"
                                height="22"
                                alt=""
                                loading="lazy"
                            />
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                           
                            <li><a className="dropdown-item" href="#">Anthony Urbina</a></li>
                            <li><a className="dropdown-item" href="https://pe.linkedin.com/in/anthony-urbina-5773b9173" target='_blank'>Linkedin</a></li>
                            <li><a className="dropdown-item" href="https://github.com/ThonyIucI/Fox_Bel" target='_blank'>GitHub</a></li>
                            <li><a className="dropdown-item" href="https://thony-verse.vercel.app/" target='_blank'>Portafolio</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    </>

}

export default SearchBar;