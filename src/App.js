import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CreateNewMessage from "./pages/CreateNewMessage";
import DashboardEmpty from "./pages/DashboardEmpty";
import DashboardFull from "./pages/DashboardFull";
import Responses from "./pages/Responses";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/create-new-message":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-empty-main":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-full":
        title = "";
        metaDescription = "";
        break;
      case "/responses":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-new-message" element={<CreateNewMessage />} />
      <Route path="/dashboard-empty-main" element={<DashboardEmpty />} />
      <Route path="/dashboard-full" element={<DashboardFull />} />
      <Route path="/responses" element={<Responses />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
export default App;
