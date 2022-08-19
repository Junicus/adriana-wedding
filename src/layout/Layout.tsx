import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

export function Layout() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <div className="w-full flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
