import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="min-h-[100vh] min-w-full">
      <Outlet />
    </main>
  );
};

export default MainLayout;
