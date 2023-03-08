import React from "react";
import PropTypes from "prop-types";

const Tbody = ({ users }) => {
    return (
        <tbody>
            {users.map((el) => (
                <tr key={el._id}>
                    <td>{el.name}</td>
                    <td>
                        {el.qualities.map((qual) => (
                            <span>{qual.name}</span>
                        ))}
                    </td>
                    <td>{el.profession.name}</td>
                    <td>{el.completedMeetings}</td>
                    <td>{el.rate}</td>
                    <td>
                        <button>Удалить</button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

Tbody.propTypes = {
    users: PropTypes.array
};

export default Tbody;
