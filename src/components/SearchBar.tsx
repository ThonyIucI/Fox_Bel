import { FC, useState } from "react";
import { alertError } from "../assets/alerts";
import { useDataContext } from "../context/dataContext";
import '../styles/searchbar.css'


const SearchBar: FC = () => {
    const [stringToSearch, SetString] = useState(),
   {saveResults}=useDataContext(),
        handleChange = (e:any) => {
            SetString(e.target.value)

        },
        handleSubmit= ()=>{
            try {
                if (stringToSearch) {
                window.DZ.api(`/search?q=track:"${stringToSearch}"`, function (response: any) {
                    console.log(response);
                    
                    if (!response.data.length) {
                      return  alertError('Ups, No existen coincidencias, pruebe con otra canción o álbum')
                    }
                    saveResults(response.data)
                    return response
                });
              }  
            } catch (error) {
                console.log(error);
            }         
        }
        
    return <>
        <div
            id="main-navbar"
            className="navbar navbar-expand-lg navbar-light bg-white"
        >

            <div className="container-fluid">

                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>


                {/* <a className="navbar-brand" href="#">
                    <img
                        src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                        height="25"
                        alt=""
                        loading="lazy"
                    />
                </a> */}

                <div className="col-md-10 col-lg-6 col-xl-6 mx-auto">
                    <div className="input-group input-group-lg search-box">
                        <input type="text" className="form-control form-control-lg rounded" placeholder="Buscar"
                            aria-label="Type Keywords" aria-describedby="basic-addon2" onChange={handleChange} />
                        <span className="input-group-text border-0" id="basic-addon2"
                            onClick={handleSubmit}
                        ><i className="fas fa-search"></i></span>
                    </div>
                </div>


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
                                src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
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
                            <li><a className="dropdown-item" href="#">My profile</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    </>

}

export default SearchBar;