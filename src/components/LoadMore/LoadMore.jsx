import { Btn } from "./LoadMore.styled";
import { useBeers } from "../../Pages/Home/store";
import { MyLoader } from "../Loader/Loader";
export const LoadMore = () => {
  const { loadMore, isLoading } = useBeers((store) => ({
    loadMore: store.loadMore,
    isLoading: store.isLoading,
  }));

  const handleClick = () => {
    console.log(loadMore);
    loadMore();
  };
  return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : (
        <Btn onClick={handleClick} type="button">
          Load more
        </Btn>
      )}
    </>
  );
};
