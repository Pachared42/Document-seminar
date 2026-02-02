import Navbar from "../pages/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ui/ScrollToTop";
import ScrollProgressButton from "../ui/ScrollProgressButton";

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgressButton />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
