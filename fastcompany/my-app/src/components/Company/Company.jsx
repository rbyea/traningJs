import React from "react";

import api from "../../api";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";

import ThemeDark from "../Theme/Theme";
import Users from "../Users/Users";
import Notification from "../Notification/Notification";
import Status from "../Status/Status";
import { paginate } from "../../utils/utils";
import "./Company.css";

const Company = () => {
  const getUsers = api.users.fetchAll();
  const [proffessions, setProffessions] = React.useState(api.professions.fetchAll());

  const [users, setUsers] = React.useState(getUsers);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [openAlertNotification, setOpenAlertNotification] = React.useState(0);
  const [booleanBookmark, setBooleanBookmark] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [dataPage, setDataPage] = React.useState(1);
  const [mode, setMode] = React.useState(true);

  const handleDelete = (userId, name) => {
    setUsers(users.filter((el) => el._id !== userId));
    setOpenAlert(true);
    setOpenAlertNotification(0);
    setUserName(name);
  };

  const handleTheme = () => {
    setMode(!mode);
  };

  const handleCloseAlert = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const handleBookmark = (index, name, boolean) => {
    const newBoolenBookmark = users.map((users) => {
      if (users._id === index) {
        return { ...users, bookmark: !users.bookmark };
      }
      return users;
    });

    setUserName(name);
    setBooleanBookmark(boolean);
    setUsers(newBoolenBookmark);
    setOpenAlertNotification(3);
    setOpenAlert(true);
  };

  const usersLength = users.length;
  const countUser = 5;
  const pages = Math.ceil(usersLength / countUser);

  const onDataPageChange = (event, page) => {
    setDataPage(page);
  };

  const userCrop = paginate(users, dataPage, countUser);

  return (
    <section className={mode === false ? "section section_default table" : "section section_default table dark" }>
      <div className="wrapper wrapper_large">
        <Notification
          userName={userName}
          openAlertNotification={openAlertNotification}
          booleanBookmark={booleanBookmark}
          handleCloseAlert={handleCloseAlert}
          openAlert={openAlert}
        />

        <div className="section-wrap">
          <Status proffessions={proffessions} users={users} mode={mode}/>
          <ThemeDark mode={mode} onHandleTheme={handleTheme}/>
        </div>

        {users.length > 0 && (
          <Paper sx={{ width: "100%" }}>
            <TableContainer
              sx={{
                maxHeight: "calc(100vh - 193px)",
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
                <TableHead>
                  <TableRow className="table-head">
                    <TableCell>Имя</TableCell>
                    <TableCell align="left">Качество</TableCell>
                    <TableCell align="center">Профессия</TableCell>
                    <TableCell align="center">Количество встреч</TableCell>
                    <TableCell align="center">Оценка</TableCell>
                    <TableCell align="center">Избранное</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userCrop.map((user) => (
                    <Users
                      key={user._id}
                      handleBookmark={handleBookmark}
                      handleDelete={handleDelete}
                      {...user}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        )}

        {usersLength > 0 && (
          <Pagination
            className="pagination"
            count={pages}
            onChange={onDataPageChange}
            variant="outlined"
            shape="rounded"
          />
        )}
      </div>
    </section>
  );
};

export default Company;
