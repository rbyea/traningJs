import React from "react";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import PropTypes from "prop-types";

const Boockmark = ({ boolean, handleBookmark, id, name }) => {
  const style = {
    cursor: "pointer",
  };

  return (
    <>
      <BookmarkAddedIcon
        style={style}
        onClick={() => {
          handleBookmark(id, name, boolean);
        }}
        color={boolean === true ? "primary" : "#616161"}
      />
    </>
  );
};

Boockmark.propTypes = {
  boolean: PropTypes.bool.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Boockmark;
