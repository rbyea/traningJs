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
import GroupList from "../GroupList/GroupList";

import PropTypes from "prop-types";

const Company = ({ setOpenAlert, users, handleDelete, handleBookmark, openAlert, booleanBookmark, openAlertNotification, userName }) => {
  const [proffessions, setProffessions] = React.useState([]);
  const resetFilter = [{name: "Сбросить фильтр"}];
  React.useEffect(() => {
    api.professions.fetchAll().then(data => setProffessions(data));
  });

  const [selectedProff, setSelectedProff] = React.useState();
  const [dataPage, setDataPage] = React.useState(1);
  const [mode, setMode] = React.useState(true);
  const [indexListBtn, setIndexListBtn] = React.useState({});

  const handleTheme = () => {
    setMode(!mode);
  };
  const filteredUsers = selectedProff ? users.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProff)) : users;

  const usersLength = filteredUsers.length;
  const countUser = 5;
  const pages = Math.ceil(usersLength / countUser);

  const onDataPageChange = (event, page) => {
    setDataPage(page);
  };

  const userCrop = paginate(filteredUsers, dataPage, countUser);

  const onHandlerBtnList = (params) => {
    setIndexListBtn(params);
    setDataPage(1);
    setSelectedProff(params);
  };

  const handleCloseAlert = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const handleClearFilter = () => {
    setSelectedProff();
    setIndexListBtn({});
  };

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
          <Status users={filteredUsers} mode={mode}/>
          <ThemeDark mode={mode} onHandleTheme={handleTheme}/>
        </div>

        <GroupList handleClearFilter={handleClearFilter} indexListBtn={indexListBtn} onHandlerBtnList={onHandlerBtnList} proffessions={proffessions}/>

        {users &&
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
                  {
                    users && filteredUsers.length >= 1 ?
                      userCrop.map((user) => (
                        <Users
                          key={user._id}
                          handleBookmark={handleBookmark}
                          handleDelete={handleDelete}
                          {...user}
                        />
                      ))
                      : <tr className="table-clear"><th>Человек с профессией {indexListBtn ? <strong>{indexListBtn.name}</strong> : ""} отсутсвует</th></tr>
                       
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        }

        { usersLength > 0 && pages > 1 ?
          <Pagination
            className="pagination"
            count={pages}
            page={dataPage}
            onChange={onDataPageChange}
            variant="outlined"
            shape="rounded"
          />
          : <></>
        }
      </div>
    </section>
  );
};

Company.propTypes = {
  users: PropTypes.array,
  handleBookmark: PropTypes.func,
  handleDelete: PropTypes.func,
  userName: PropTypes.string,
  openAlert: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  booleanBookmark: PropTypes.bool,
  openAlertNotification: PropTypes.number,
  setOpenAlert: PropTypes.func
};

export default Company;
