import React from "react";
import "./GroupList.css";

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const GroupList = ({ handleClearFilter, proffessions, onHandlerBtnList, indexListBtn }) => {
  const [arrayItems, setArrayItems] = React.useState([]);

  React.useEffect(() => {
    setArrayItems(Array?.isArray(proffessions) ? proffessions : Object.values(proffessions));
  }, [proffessions]);

  return (
    <ButtonGroup variant="outlined" className="button-list" aria-label="outlined primary button group">
      {
        arrayItems.length > 0 &&
          arrayItems.reverse().map(el => (
            <Button 
              variant={indexListBtn === el ? "contained" : "outlined"}
              onClick={() => onHandlerBtnList(el)}
              key={el._id || el.name + "__"}
            >
              {el.name}
            </Button>
          ))
      }

      <Button onClick={handleClearFilter}>
        Сбросить фильтр
      </Button>
    </ButtonGroup>
  );
};
    
GroupList.propTypes = {
  proffessions: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onHandlerBtnList: PropTypes.func.isRequired,
  indexListBtn: PropTypes.object.isRequired,
  handleClearFilter: PropTypes.func
};

export default GroupList;