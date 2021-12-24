import axios from "axios";
import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://african-marketplace-6.herokuapp.com/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="usersContainer">
      {users.map((user) => {
        return (
          <div className="user">
            <Link key={user.user_id} to={`/users/${user.user_id}`}>
              {" "}
              {user.username}{" "}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
