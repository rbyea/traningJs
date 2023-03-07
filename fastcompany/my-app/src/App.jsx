import React from "react";
import Company from "./components/Company/Company";
import api from "./api";

const App = () => {
  const [users, setUsers] = React.useState();

  const [userName, setUserName] = React.useState("");
  const [openAlert, setOpenAlert] = React.useState(false);
  const [openAlertNotification, setOpenAlertNotification] = React.useState(0);
  const [booleanBookmark, setBooleanBookmark] = React.useState(false);

  const handleDelete = (userId, name) => {
    setUsers(users.filter((el) => el._id !== userId));
    setOpenAlert(true);
    setOpenAlertNotification(0);
    setUserName(name);
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

  React.useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  });

  return (
    <>
      {users && (
        <Company 
          setOpenAlert={setOpenAlert}
          booleanBookmark={booleanBookmark}
          openAlertNotification={openAlertNotification}
          openAlert={openAlert}
          userName={userName}
          users={users}
          handleBookmark={handleBookmark}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default App;
