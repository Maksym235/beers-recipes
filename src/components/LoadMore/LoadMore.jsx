import { Btn } from "./LoadMore.styled";
import { useBeers } from "../../Pages/Home/store";
export const LoadMore = () => {
  const loadMore = useBeers((store) => store.loadMore);

  const handleClick = () => {
    console.log(loadMore);
    loadMore();
  };
  return (
    <Btn onClick={handleClick} type="button">
      Load more
    </Btn>
  );
};
