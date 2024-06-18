import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminPortal from "./pages/AdminPortal";
import Products from "./pages/Products";
import Statistics from "./pages/Statistics";
import TrackOrder from "./pages/TrackOrder";
import ReturnsPage from "./pages/ReturnsPage";
import PersonalDetailsPage from "./pages/PersonalDetails";
import HelpPage from "./pages/HelpPage";
import SearchResults from "./pages/SearchResults";
import CheckoutPage from "./pages/CheckoutPage";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CenteredLayout>
              <LoginPage />
            </CenteredLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <CenteredLayout>
              <SignupPage />
            </CenteredLayout>
          }
        />
        <Route
          path="/login"
          element={
            <CenteredLayout>
              <LoginPage />
            </CenteredLayout>
          }
        />
        <Route
          path="/home"
          element={
            <FullScreenLayout>
              <Home />
            </FullScreenLayout>
          }
        />
        <Route
          path="/about"
          element={
            <FullScreenLayout>
              <About />
            </FullScreenLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <FullScreenLayout>
              <Contact />
            </FullScreenLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <FullScreenLayout>
              <AdminPortal />
            </FullScreenLayout>
          }
        />
        <Route
          path="/admin/products"
          element={
            <FullScreenLayout>
              <Products />
            </FullScreenLayout>
          }
        />
        <Route
          path="/admin/statistics"
          element={
            <FullScreenLayout>
              <Statistics />
            </FullScreenLayout>
          }
        />
        <Route
          path="/track-order"
          element={
            <FullScreenLayout>
              <TrackOrder />
            </FullScreenLayout>
          }
        />
        <Route
          path="/returns"
          element={
            <FullScreenLayout>
              <ReturnsPage />
            </FullScreenLayout>
          }
        />
        <Route
          path="/personal-details"
          element={
            <FullScreenLayout>
              <PersonalDetailsPage />
            </FullScreenLayout>
          }
        />
        <Route
          path="/help"
          element={
            <FullScreenLayout>
              <HelpPage />
            </FullScreenLayout>
          }
        />
        <Route
          path="/search"
          element={
            <FullScreenLayout>
              <SearchResults />
            </FullScreenLayout>
          }
        />
        <Route
          path="/checkout"
          element={
            <FullScreenLayout>
              <CheckoutPage />
            </FullScreenLayout>
          }
        />
        <Route
          path="/thank-you"
          element={
            <FullScreenLayout>
              <ThankYouPage />
            </FullScreenLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// Centered layout for login and signup
const CenteredLayout = ({ children }) => (
  <div className="app-container min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    {/* <video
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      src="/LandingPage.mp4"
      type="video/mp4"
      autoPlay
      loop
      muted
    /> */}
    <iframe
      className="w-full h-full object-cover z-0"
      src="https://www.youtube.com/embed/X895D_cTC10?autoplay=1&mute=1&loop=1&playlist=X895D_cTC10"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="YouTube video"
    />
    <div className="relative z-10 form-container">
      {/* <div className="logo-container">
        <img src="/Logo.png" alt="Active Life Hub Logo" className="h-14 w-14" />
      </div> */}
      {children}
    </div>
  </div>
);

// Fullscreen layout for home and other pages
const FullScreenLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">{children}</div>
);

export default App;
