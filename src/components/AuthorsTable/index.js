import { fetchUser, searchUser } from "features/users/userSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const AuthorsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const items = useSelector((state) => state?.items?.item);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleSearch = () => {
    if (searchTerm && !/^[a-zA-Z]+$/.test(searchTerm)) {
      setError("Invalid search term. Please use only letters.");
    } else {
      setError("");
      if (searchTerm) {
        dispatch(searchUser(searchTerm));
      } else {
        dispatch(fetchUser());
      }
    }
  };

  return (
    <div className="table">
      <div className="table__filter">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div className="table__container">
        <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>AUTHOR</th>
              <th>FUNCTION</th>
              <th>STATUS</th>
              <th>EMPLOYED</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody className="tbodyWrapper">
            {items?.map((userItem) => (
              <tr key={userItem?.id}>
                <td>
                  <div className="tableTitle">
                    <span className="tableAvatar">
                      <img src={userItem.avatar} alt="" />
                    </span>
                    <div className="tableWrapper">
                      <div>
                        <h5>{userItem?.name}</h5>
                      </div>
                      <p>{userItem?.email}</p>
                    </div>
                  </div>
                </td>
                <td>{userItem?.job}</td>
                <td>{userItem?.info}</td>
                <td>{userItem?.history}</td>
                <td>Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuthorsTable;
