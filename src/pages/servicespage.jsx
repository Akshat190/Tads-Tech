// import Head from "/Users/Admin/Desktop/Website/src/components/head"
import Navbar from "../components/navbar"
import Banner from "../components/servicebanner"
import Services from "../components/service"
import Footer from "../components/footer"
import Cookies from"../components/cookies"
import { useEffect } from "react";

function ServicesPage() {
   useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner of the page
    }, []);
    return ( 
        <div>
           {/* <Head/> */}
           <Navbar/> 
           <Banner/>
           <Services/>
           <Footer/>
           <Cookies/>
        </div>
     );
}

export default ServicesPage;