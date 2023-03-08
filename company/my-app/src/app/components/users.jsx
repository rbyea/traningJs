import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import api from "../api";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import _ from "lodash";

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = React.useState({ iter: "name", order: "asc" });

    const pageSize = 5;

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const filteredUsers = selectedProf
        ? allUsers.filter(
              (user) =>
                  JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
          )
        : allUsers;

    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);
    const usersCrop = paginate(sortedUsers, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedProf();
    };

    const onHundleTableHead = (title) => {
        if (sortBy.iter === title) {
            setSortBy(({
              ...sortBy,
              order: sortBy.order === "asc" ? "desc" : "asc"
            }));
          } else {
            setSortBy({ iter: title, order: "asc" });
          }
    };

    console.log(sortBy);

    return (
        <div className="wrapper wrapper_large">
            <SearchStatus length={count} />
            {professions && (
                <div className="d-flex flex-shrink-0 mt-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button
                        className="btn-filter btn btn-secondary"
                        onClick={clearFilter}
                    >
                        {" "}
                        Очистить
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                {count > 0 && (
                    <table className="table table-dark table-striped mt-3">
                        <thead>
                            <tr>
                                <th scope="col" onClick={() => onHundleTableHead("name")}>Имя</th>
                                <th scope="col" >Качества</th>
                                <th scope="col" onClick={() => onHundleTableHead("profession.name")}>Профессия</th>
                                <th scope="col" onClick={() => onHundleTableHead("completedMeetings")}>Встретился, раз</th>
                                <th scope="col" onClick={() => onHundleTableHead("rate")}>Оценка</th>
                                <th scope="col" onClick={() => onHundleTableHead("bookmark")}>Избранное</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {usersCrop.map((user) => (
                                <User {...rest} {...user} key={user._id} />
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="d-flex justify-content-flex-start">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};
Users.propTypes = {
    users: PropTypes.array
};

export default Users;
