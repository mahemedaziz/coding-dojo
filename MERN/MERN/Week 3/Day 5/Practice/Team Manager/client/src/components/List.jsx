import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const List = () => {
  const [teams, setTeams] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/teams")
      .then((res) => {
        console.log(res.data);
        setTeams(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const deleteTeam = (TeamID) => {
    axios
      .delete("http://localhost:5000/api/teams/" + TeamID)
      .then((res) => {
        console.log(teams);
        const Filtredteams = teams.filter((oneTeam) => {
          return oneTeam._id !== TeamID;
        });
        setTeams(Filtredteams);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="linke">
      <Link to="/players/list">List </Link>
      <br />
      <Link to="/players/addplayer">Add Player </Link>

      <table id="customers">
        <thead>
          <th>Team Name </th>
          <th>Preferred Position</th>
          <th>Actions availlable</th>
        </thead>
        <tbody>
          {teams.map((c, i) => (
            <tr key={c._id}>
              <td>
                <Link to={`/teams/${c._id}`}>{c.name}</Link>
              </td>
              <td>
                <Link to={`/teams/${c._id}`}>{c.position}</Link>
              </td>
              <td>
                <button
                  className="btn"
                  onClick={() => {
                    deleteTeam(c._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
