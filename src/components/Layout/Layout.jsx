import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "../Header/Header";
import { ImageGrid } from "../Loader/Loader";
export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<ImageGrid />}>
        <Outlet />
      </Suspense>
    </>
  );
};
