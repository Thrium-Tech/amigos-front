import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CreateNewMessage from "./pages/CreateNewMessage";
import DashboardEmpty from "./pages/DashboardEmpty";
import Login from "./pages/Login";
// import WhatsAppChatBox from "./components_chat/Messenger";'
import WhatsAppChatBox from "./pages/WhatsAppChatBox";
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
      case "/livechat":
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
      <Route path="/livechat" element={<WhatsAppChatBox />} />
      
    </Routes>
  );
}
export default App;
