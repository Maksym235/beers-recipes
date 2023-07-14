import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
const HomePage = lazy(() => import("./Pages/Home/Home"));
const BeerDetailsPage = lazy(() => import("./Pages/BeerDetails/BeerDetails"));
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/:id" element={<BeerDetailsPage />}>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
