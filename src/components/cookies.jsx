import { useEffect } from "react";
import "boxicons/css/boxicons.min.css";

// Function to generate a UUID (Universal Unique Identifier)
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const CookieConsent = () => {
  useEffect(() => {
    const cookieBox = document.querySelector(".wrapper");
    const buttons = document.querySelectorAll(".button");

    const setUserIdCookie = (userId) => {
      document.cookie = `userId=${userId}; max-age=` + 60 * 60 * 24 * 30; // Set cookie for 30 days
    };

    const getUserIdFromCookie = () => {
      const match = document.cookie.match(new RegExp('(^| )userId=([^;]+)'));
      return match ? match[2] : null;
    };

    const executeCodes = () => {
      let userId = getUserIdFromCookie();

      if (!userId) {
        userId = generateUUID();
        setUserIdCookie(userId);
      }

      if (document.cookie.includes("cookieBy=TadsTechnologies")) return;
      
      // Show the cookie consent box
      cookieBox.classList.add("show");

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          cookieBox.classList.remove("show");

          if (button.id === "acceptBtn") {
            document.cookie = "cookieBy=TadsTechnologies; max-age=" + 60 * 60 * 24 * 30;
          }
        });
      });
    };

    window.addEventListener("load", executeCodes);


    return () => {
      window.removeEventListener("load", executeCodes);
    };
  }, []);

  return (
    <div className="wrapper">
      <header>
        <i className="bx bx-cookie"></i>
        <h2>Cookies Consent</h2>
      </header>

      <div className="data">
        <p>
          This website uses cookies to help you have a superior and more relevant
          browsing experience on the website. <a href="#">Read more...</a>
        </p>
      </div>

      <div className="buttons">
        <button className="button" id="acceptBtn">Accept</button>
        <button className="button" id="declineBtn">Decline</button>
      </div>
    </div>
  );
};

export default CookieConsent;
