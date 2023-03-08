import React from "react";
import PropTypes from "prop-types";
import Tbody from "./tbody";
import Thead from "./thead";

const Table = ({ users }) => {
    return (
        <table className="table table-dark table-striped">
            <Thead />
            <Tbody users={users} />
        </table>
    );
};

Table.propTypes = {
    users: PropTypes.array
};

export default Table;
