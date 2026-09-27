import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="container mx-auto flex-1">
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default MainLayout;
