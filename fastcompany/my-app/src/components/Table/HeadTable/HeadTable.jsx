import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import PropTypes from "prop-types";
import "./HeadTable.css";

const HeadTable = ({currentSort, onSort, collumns }) => {

  const handleSort = (name) => {
    if(currentSort.path === name) {
      onSort(({
        ...currentSort, 
        order: currentSort.order === "asc" ? "desc" : "asc"
      }));
    } else {
      onSort({path: name, order: "asc"});
    }
  };

  return (
    <TableHead>
      <TableRow className="table-head">
        {
          Object.keys(collumns).map(collumn => (
            <TableCell 
              align="center"
              key={collumn}
              onClick={
                collumns[collumn].path 
                  ? () => handleSort(collumns[collumn].path) 
                  : undefined}
              className={
                collumns[collumn].path 
                  ? "pointer"
                  : ""
              }
            >
              {collumns[collumn].name}
            </TableCell> 
          ))
        }
      </TableRow>
    </TableHead>
  );
};

HeadTable.propTypes = {
  onSort: PropTypes.func.isRequired,
  collumns: PropTypes.object.isRequired,
  currentSort: PropTypes.object.isRequired,
};

export default HeadTable;