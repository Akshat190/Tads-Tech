// import Head from "/Users/Admin/Desktop/Website/src/components/head"
import Navbar from "/Users/Admin/Desktop/Website/src/components/navbar"
import Carousel from "/Users/Admin/Desktop/Website/src/components/carousel"
import About from "/Users/Admin/Desktop/Website/src/components/about"
import Services from "/Users/Admin/Desktop/Website/src/components/service"
import CallToAction from "/Users/Admin/Desktop/Website/src/components/calltoaction"
import Portfolio from "/Users/Admin/Desktop/Website/src/components/portfolio"
import Footer from "/Users/Admin/Desktop/Website/src/components/footer"
// import OurMember from "../components/ourmember"
import Cookies from"../components/cookies"
import { useEffect } from "react";

function MainPage() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top-left corner of the page
      }, []);
    return ( 
        <div>
            {/* <Head/> */}
            <Navbar/>
            <Carousel/>
            <About/>
            <Services/>
            <CallToAction/>
            {/* <OurMember/> */}
            <Portfolio/>
            <Footer/>
            <Cookies/>
        </div>
     );
}

export default MainPage;