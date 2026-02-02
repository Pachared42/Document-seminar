import Navbar from "../pages/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ui/ScrollToTop";

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
