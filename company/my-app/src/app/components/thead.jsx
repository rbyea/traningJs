import React from "react";
import PropTypes from "prop-types";

const Thead = () => {
    return (
        <thead>
            <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качество</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встречи</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
            </tr>
        </thead>
    );
};

export default Thead;
