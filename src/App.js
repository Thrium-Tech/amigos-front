import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CreateNewMessage from "./pages/CreateNewMessage";
import Responses from "./pages/Responses";
import Profile from "./pages/Profile";
import DashboardFull from "./pages/DashboardFull";
import DashboardEmpty from "./pages/DashboardEmpty";
import Dashboard from "./pages/Dashboard";
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
      case "/responses":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-full":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-empty-main":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
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
      <Route path="/" element={<CreateNewMessage />} />
      <Route path="/responses" element={<Responses />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard-full" element={<DashboardFull />} />
      <Route path="/dashboard-empty-main" element={<DashboardEmpty />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default App;
