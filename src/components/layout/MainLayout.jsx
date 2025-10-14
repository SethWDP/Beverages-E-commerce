import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <section>
        <h1>this is for nav bar</h1>
      </section>
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
