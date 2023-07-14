import PropTypes from "prop-types";
import {
  Name,
  Text,
  Conteiner,
  Span,
  Wrapper,
  Description,
} from "./BeerListItem.styled";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const BeersListItem = ({ beer, onRightClick, selected }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { name, tagline, description, image_url, id } = beer;
  const location = useLocation();

  useEffect(() => {
    if (selected.length === 0) {
      setIsSelected(false);
    }
  }, [selected.length]);

  const handleRightClick = (evt) => {
    evt.preventDefault();
    onRightClick(id);
    setIsSelected((state) => !state);
  };
  return (
    <Link to={`${id}`} state={{ from: location }}>
      <Conteiner isSelected={isSelected} onContextMenu={handleRightClick}>
        <img src={image_url} alt="beer photo" width="80px" height="140px" />
        <Wrapper>
          <Name>
            name: <Span>{name}</Span>
          </Name>
          <Text>
            tagline:<Span>{tagline}</Span>
          </Text>
          <Description>
            description: <Span>{description} </Span>...
          </Description>
        </Wrapper>
      </Conteiner>
    </Link>
  );
};

BeersListItem.propTypes = {
  selected: PropTypes.array,
  onRightClick: PropTypes.func,
  beer: PropTypes.object.isRequired,
  name: PropTypes.string,
  tagline: PropTypes.string,
  description: PropTypes.string,
};
