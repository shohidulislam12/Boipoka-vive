import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBAr from "../NavBar/NavBAr";

const Root = () => {
    return (
        <div>
           <NavBAr> </NavBAr>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;