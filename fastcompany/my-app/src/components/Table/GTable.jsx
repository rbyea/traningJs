import React from "react";

import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import HeadTable from "./HeadTable/HeadTable";
import Tbody from "./Tbody/Tbody";
import Boockmark from "../Bookmark/Bookmark";

import PropTypes from "prop-types";

const GTable = ({
  users,
  filteredUsers,
  currentSort,
  userCrop,
  handleDelete,
  handleHeadSort,
  handleBookmark,
  indexListBtn,
}) => {

  const collumns = {
    name:{path:"name", name: "Имя"},
    qualities:{name:"Качество"},
    profession:{path:"profession.name", name: "Профессия"},
    completedMeetings:{path:"completedMeetings", name:"Количество встреч"},
    rate:{path:"rate", name: "Оценка"},
    bookmark:{
      path:"bookmark",
      name:"Избранное",
      component: <Boockmark 
        handleBookmark={handleBookmark}
      />
    },
    delete:{ component: "delete"}
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer
        sx={{
          maxHeight: "calc(100vh - 277px)",
          "&::-webkit-scrollbar": {
            width: 7,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#ffffff",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#DFDFDF",
            borderRadius: 2,
          },
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <HeadTable collumns={collumns} currentSort={currentSort} onSort={handleHeadSort}/>
          <Tbody data={userCrop} collumns={collumns}/>
          {/* {
            data.map(item => <tr key={item._id}>
              {Object.keys(collumns).map(collumn => <td key={collumn}>{_.get(item, collumns[collumn].path)}</td>)}
            </tr>)
          } */}
          {/* {
            data && filteredUsers.length >= 1 ?
              userCrop.map((user) => (
                <Tbody
                  key={user._id}
                  handleBookmark={handleBookmark}
                  handleDelete={handleDelete}
                  {...user}
                />
              ))
              : <tr className="table-clear">
                <th>Человек с профессией {
                  indexListBtn ?
                    <strong>{indexListBtn.name}</strong>
                    : ""
                } отсутсвует</th>
              </tr>
          } */}
        </Table>
      </TableContainer>
    </Paper>
  );
};

GTable.propTypes = {
  users: PropTypes.array,
  filteredUsers: PropTypes.array,
  handleDelete: PropTypes.func,
  handleBookmark: PropTypes.func,
  currentSort: PropTypes.object,
  userCrop: PropTypes.array,
  handleHeadSort: PropTypes.func,
  indexListBtn: PropTypes.object
};

export default GTable;