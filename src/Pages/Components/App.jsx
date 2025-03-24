

import { useState } from "react";
import { AccountSettings } from "./AccountSettings";
import "./App.css";
import { SigninPage } from "./SigninPage";
import { SignupPage } from "./SignupPage";
import { WelcomePage } from "./WelcomPage";
import { Navigation } from "./Navigation";
const App = () => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const navigate = (direction) => {
      setCurrentPage((prev) => {
        if (direction === "next" && prev < 4) return prev + 1;
        if (direction === "prev" && prev > 1) return prev - 1;
        return prev;
      });
    };
  
    return (
      <div className="appContainer min-h-screen bg-gray-200 mx-auto ">
        <div className="mobileUI p-3">
          {currentPage === 1 && <WelcomePage />}
          {currentPage === 2 && <SigninPage />}
          {currentPage === 3 && <SignupPage />}
          {currentPage === 4 && <AccountSettings />}
          
        </div>

        {/* slider design */}

        <div className="bg-green-800 text-white">
        <Navigation currentpage={currentPage} navigate={navigate} />
        </div>
      </div>
    );
  };
  
  export default App;