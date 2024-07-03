import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainLayout = () => {
  return (
    <main className="min-h-[100vh] min-w-full flex flex-col items-center p-12">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
