import { FC } from "react";
import SearchBar from "../SearchBar";
import Sidebar from "./Sidebar";
import '../../styles/dashboard.css'
import '../../styles/index.css'

interface Props {
    children: JSX.Element

}
const Home: FC<Props> = ({ children }) => {
    return (
        <div>

            <Sidebar />
            {/* Main layout */}
            <main>
                    <SearchBar />
                <div className="container pt-4">
                    {/*  Navbar */}

                    {children}
                </div>
            </main>
            {/* Main layout */}
        </div>
    );
}

export default Home;