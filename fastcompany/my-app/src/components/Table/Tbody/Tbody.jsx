import React from "react";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TableBody from "@mui/material/TableBody";

import "./Tbody.css";
import Qualitie from "../../Qualitie/Qualitie";
import Bookmark from "../../Bookmark/Bookmark";
import _ from "lodash";

import PropTypes from "prop-types";

const Tbody = ({
  data, collumns
}) => {
  return (
    <>    
      <TableBody>
        {
          data.map(item => (
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }} key={item._id}>
              {Object.keys(collumns).map(collumn => (
                <TableCell  
                  component="th"
                  scope="row"
                  align="center"
                  key={collumn}
                >
                  {collumns[collumn].component || _.get(item, collumns[collumn].path)}
                </TableCell>
              ))}
            </TableRow>
          ))
        }
      </TableBody>
    </>
    // <TableBody>
    //   <TableRow
    //     key={_id}
    //     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //   >
    //     <TableCell component="th" scope="row">
    //       {name}
    //     </TableCell>
    //     <TableCell align="center">
    //       <Stack direction="row" spacing={2}>
    //         {qualities.map((badge) => (
    //           <Qualitie key={badge._id} {...badge} />
    //         ))}
    //       </Stack>
    //     </TableCell>
    //     <TableCell align="center">{profession.name}</TableCell>
    //     <TableCell align="center">{completedMeetings}</TableCell>
    //     <TableCell align="center">{rate}</TableCell>
    //     <TableCell align="center">
    //       <Bookmark
    //         id={_id}
    //         name={name}
    //         handleBookmark={handleBookmark}
    //         boolean={bookmark}
    //       />
    //     </TableCell>
    //     <TableCell align="center">
    //       <Button
    //         variant="contained"
    //         onClick={() => handleDelete(_id, name)}
    //         color="error"
    //       >
    //         Удалить
    //       </Button>
    //     </TableCell>
    //   </TableRow>
    // </TableBody>

  );
};

Tbody.propTypes = {
  data: PropTypes.array,
  collumns: PropTypes.object
};

export default Tbody;