import { BeersListItem } from "../BeerListItem/BeerListItem";
import { List } from "./BeersList.styled";
import PropTypes from "prop-types";
import { useState } from "react";
import { SettingsMenu } from "../SettingsMenu/SettingsMenu";
import { useBeers } from "../../Pages/Home/store";
export const BeersList = ({ beers }) => {
  const deleteBeers = useBeers((state) => state.deleteBeerById);
  const [selected, setSelected] = useState([]);
  const onRightClick = (id) => {
    if (selected.includes(id)) {
      setSelected((state) => state.filter((item) => item !== id));
      return;
    }
    setSelected((state) => [...state, id]);
    console.log(selected);
  };

  const onClear = () => {
    setSelected([]);
  };

  const onDelete = () => {
    selected.map((id) => {
      deleteBeers(id);
    });
    setSelected([]);
  };
  return (
    <>
      <List>
        {beers.map((beer) => (
          <li key={beer.id}>
            <BeersListItem
              selected={selected}
              onRightClick={onRightClick}
              beer={beer}
            />
          </li>
        ))}
      </List>
      {selected.length >= 1 && (
        <SettingsMenu onDelete={onDelete} onClear={onClear} />
      )}
    </>
  );
};

BeersList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object),
};
