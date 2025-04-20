// import Head from "/Users/Admin/Desktop/Website/src/components/head"
import Navbar from "/Users/Admin/Desktop/Website/src/components/navbar"
import Banner from "/Users/Admin/Desktop/Website/src/components/aboutbanner"
import About from "/Users/Admin/Desktop/Website/src/components/about"
import Footer from "/Users/Admin/Desktop/Website/src/components/footer"
// import OurMember from "..//components/ourmember"
import Cookies from"../components/cookies"
import { useEffect } from "react";

function AboutusPage() {
   useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner of the page
    }, []);
    return ( 
        <div>
           <Navbar/> 
           <Banner/>
           <About/>
           {/* <OurMember/> */}
           <Footer/>
           <Cookies/>
        </div>
     );
}

export default AboutusPage;