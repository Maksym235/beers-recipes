import { BeersList } from "../../components/BeersList/BeersList";
import { useBeers } from "./store";
import { useEffect } from "react";
import { Main } from "./Home.styled";
import { LoadMore } from "../../components/LoadMore/LoadMore";

const Home = () => {
  const { getBeers, beers, resetPage } = useBeers((store) => ({
    getBeers: store.getAllBeers,
    beers: store.beers,
    resetPage: store.resetPage,
  }));

  useEffect(() => {
    if (beers.length) {
      return;
    }
    getBeers();
  }, [beers.length, getBeers, resetPage]);

  return (
    <Main>
      <BeersList beers={beers} />
      <LoadMore />
    </Main>
  );
};

export default Home;
