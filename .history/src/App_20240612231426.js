import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminPortal from "./pages/AdminPortal";

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
      </Routes>
    </BrowserRouter>
  );
}

// Centered layout for login and signup
const CenteredLayout = ({ children }) => (
  <div className="app-container min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      src="/LandingPage.mp4"
      type="video/mp4"
      autoPlay
      loop
      muted
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
