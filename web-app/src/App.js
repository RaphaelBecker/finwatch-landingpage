import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/Landing-page";
import EducationPage from "./pages/Education";
import SignupPage from "./pages/Signup";

import Layout from "./components/ui/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
