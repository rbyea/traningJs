import React from "react";
import "./GroupList.css";
import ContentLoader from "react-content-loader";

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const GroupList = ({ handleClearFilter, proffessions, onHandlerBtnList, indexListBtn }) => {
  const [arrayItems, setArrayItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setArrayItems(Array.isArray(proffessions) ? proffessions : Object.values(proffessions));
  }, [proffessions]);

  React.useEffect(() => {
    setLoading(false);
  }, [arrayItems]);

  return (
    <>
      {
        loading ?
          <ContentLoader 
            speed={2}
            width={400}
            height={36}
            viewBox="0 0 400 36"
            backgroundColor="#263238"
            foregroundColor="#ecebeb"
          >
            <rect x="5" y="4" rx="3" ry="3" width="100%" height="36" />
          </ContentLoader>
          : <ButtonGroup variant="outlined" className="button-list" aria-label="outlined primary button group">
            {
              arrayItems.length > 0 &&
                arrayItems.map(el => (
                  <Button 
                    variant={indexListBtn === el ? "contained" : "outlined"}
                    onClick={() => onHandlerBtnList(el)}
                    key={el._id || el.name + "__"}
                  >
                    {el.name}
                  </Button>
                ))
            }
            {
              arrayItems.length > 0 &&
                <Button onClick={handleClearFilter}>
                  Сбросить фильтр
                </Button>
            }
          </ButtonGroup>
      }
    </>
  );
};
    
GroupList.propTypes = {
  proffessions: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onHandlerBtnList: PropTypes.func.isRequired,
  indexListBtn: PropTypes.object.isRequired,
  handleClearFilter: PropTypes.func
};

export default GroupList;