import { BeersList } from "../../components/BeersList/BeersList";
import { useBeers } from "./store";
import { useEffect } from "react";
import { Main } from "./Home.styled";
import { LoadMore } from "../../components/LoadMore/LoadMore";
const Home = () => {
  const { getBeers, beers, isLoading } = useBeers((store) => ({
    getBeers: store.getAllBeers,
    beers: store.beers,
    isLoading: store.isLoading,
  }));

  useEffect(() => {
    if (beers.length) {
      return;
    }
    getBeers();
  }, [beers.length, getBeers]);

  return (
    <Main>
      <BeersList beers={beers} />
      {isLoading ? null : <LoadMore />}
    </Main>
  );
};

export default Home;
