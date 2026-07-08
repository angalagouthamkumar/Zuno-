import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/AuthContext.jsx'
import './index.css'
import HomePage from './LandingPage/home/HomePage.jsx'
import Signup from './LandingPage/signup/SignUp.jsx'
import Login from './LandingPage/signup/Login.jsx'
import SupportPage from './LandingPage/support/SupportPage.jsx'
import AboutPage from './LandingPage/about/AboutPage.jsx'
import ProductsPage from './LandingPage/products/ProductPage.jsx'
import PricingPage from './LandingPage/pricing/PricingPage.jsx'
import NavBar from './LandingPage/NavBar.jsx'
import Footer from './LandingPage/Footer.jsx'
import NotFound from './LandingPage/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)