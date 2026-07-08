import React, { useState, useEffect, createContext, useContext } from "react";
import BuyActionWindow from "./BuyActionWindow";
import axios from "axios";

axios.defaults.withCredentials = true;

// Create the raw context tracking engine instance
const GeneralContext = createContext(null);


export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Handle Fetching Real Profile Data
  useEffect(() => {
    const initializeDashboardAuth = async () => {
      try {
        const refreshRes = await axios.post("http://localhost:3002/api/auth/refresh");
        if (refreshRes.data && refreshRes.data.accessToken) {
          const profileRes = await axios.get("http://localhost:3002/api/auth/me", {
            headers: { Authorization: `Bearer ${refreshRes.data.accessToken}` },
          });
          if (profileRes.data.success) {
            setUser(profileRes.data.user);
          }
        } else {
          window.location.href = "http://localhost:5173/login";
        }
      } catch (err) {
        window.location.href = "http://localhost:5173/login";
      }
    };
    initializeDashboardAuth();
  }, []);

  // Handle Applying Dark Mode CSS Classes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev); // Safe functional state update tracking
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        user,
        darkMode,
        toggleDarkMode,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

// Export the secure hook wrapper to feed reactive state changes down seamlessly
export function useGeneralContext() {
  return useContext(GeneralContext);
}

export default GeneralContext;