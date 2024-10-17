import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



const MainLayout = () => {
    const {loading} = useContext(AuthContext);
    
    return (
        <>
        {loading ? (
            <div className="flex absolute left-1/2 z-10 justify-center items-center py-20">
              <div className="spinner border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
            </div>
          ) : (
            <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
          )}
          </>

       
    );
};


MainLayout.propTypes = {

};


export default MainLayout;
