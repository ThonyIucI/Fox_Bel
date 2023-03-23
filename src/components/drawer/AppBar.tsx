import { FC } from "react";
import SearchBar from "../SearchBar";
import Sidebar from "./Sidebar";
import '../../styles/dashboard.css'
import '../../styles/index.css'
import ActualCard from "../ActualCard";

interface Props {
    children: JSX.Element

}
const AppBar: FC<Props> = ({ children }) => {
    return (
        <div>

            <Sidebar />
            {/* Main layout */}
            <main>

                <SearchBar />
                <div className="results">
                    {/*  Navbar */}
                    <ActualCard />
                    {children}
                </div>
            </main>
            {/* Main layout */}
        </div>
    );
}

export default AppBar;