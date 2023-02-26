import React from "react";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import "./users.css";
import Qualitie from "../Qualitie/Qualitie";
import Bookmark from "../Bookmark/Bookmark";

import PropTypes from "prop-types";

const Users = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  handleBookmark,
  bookmark,
  handleDelete,
}) => {
  return (
    <>
      <TableRow
        key={_id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        <TableCell align="center">
          <Stack direction="row" spacing={2}>
            {qualities.map((badge) => (
              <Qualitie key={badge._id} {...badge} />
            ))}
          </Stack>
        </TableCell>
        <TableCell align="center">{profession.name}</TableCell>
        <TableCell align="center">{completedMeetings}</TableCell>
        <TableCell align="center">{rate}</TableCell>
        <TableCell align="center">
          <Bookmark
            id={_id}
            name={name}
            handleBookmark={handleBookmark}
            boolean={bookmark}
          />
        </TableCell>
        <TableCell align="center">
          <Button
            variant="contained"
            onClick={() => handleDelete(_id, name)}
            color="error"
          >
            Удалить
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

Users.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  bookmark: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Users;
