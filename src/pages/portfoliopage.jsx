// import Head from "/Users/Admin/Desktop/Website/src/components/head"
import Navbar from "/Users/Admin/Desktop/Website/src/components/navbar"
import Banner from "/Users/Admin/Desktop/Website/src/components/portfoliobanner"
import Portfolio from "/Users/Admin/Desktop/Website/src/components/portfolio"
import Footer from "/Users/Admin/Desktop/Website/src/components/footer"
import Cookies from"../components/cookies"
import { useEffect } from "react";

function PortfolioPage() {
   useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner of the page
    }, []);
    return ( 
        <div>
           {/* <Head/> */}
           <Navbar/> 
           <Banner/>
           <Portfolio/>
           <Footer/>
           <Cookies/>
        </div>
     );
}

export default PortfolioPage;