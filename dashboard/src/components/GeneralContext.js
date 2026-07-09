import React, { useState, useEffect, createContext, useContext } from "react";
import BuyActionWindow from "./BuyActionWindow";
import axios from "axios";

axios.defaults.withCredentials = true;

// Create the raw context tracking engine instance
const GeneralContext = createContext(null);

// Dynamically points to Render in production, or localhost during development
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
const LANDING_PAGE_URL = 'https://zuno-ee9u.vercel.app';

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
        const refreshRes = await axios.post(`${API_URL}/api/auth/refresh`);
        if (refreshRes.data && refreshRes.data.accessToken) {
          // Explicitly assign the default common header for any sequential axios lifecycle requests
          axios.defaults.headers.common["Authorization"] = `Bearer ${refreshRes.data.accessToken}`;

          const profileRes = await axios.get(`${API_URL}/api/auth/me`, {
            headers: { Authorization: `Bearer ${refreshRes.data.accessToken}` },
          });
          if (profileRes.data.success) {
            setUser(profileRes.data.user);
          } else {
            window.location.href = `${LANDING_PAGE_URL}/login`;
          }
        } else {
          window.location.href = `${LANDING_PAGE_URL}/login`;
        }
      } catch (err) {
        window.location.href = `${LANDING_PAGE_URL}/login`;
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