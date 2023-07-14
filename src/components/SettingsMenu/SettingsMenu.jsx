import { Conteiner, Clear, Delete } from "./SettingsMenu.styled";
import { AiOutlineClear, AiFillDelete } from "react-icons/ai";
import PropTypes from "prop-types";
export const SettingsMenu = ({ onClear, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };
  const handleClear = () => {
    onClear();
  };
  return (
    <Conteiner>
      <Clear onClick={handleClear}>
        Clear <AiOutlineClear />
      </Clear>
      <Delete type="button" onClick={handleDelete}>
        Delete <AiFillDelete />
      </Delete>
    </Conteiner>
  );
};

SettingsMenu.propTypes = {
  onClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
