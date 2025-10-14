import { Outlet, Link } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <section></section>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
