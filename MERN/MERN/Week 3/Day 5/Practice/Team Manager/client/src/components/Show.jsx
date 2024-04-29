import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

const Show = () => {
  const { game } = useParams();
  const [teams, setTeams] = useState([]);
  const [status, setStatus] = useState([]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/teams/")
      .then((res) => {
        console.log(res.data);
        setTeams(res.data);
        if (game == 1) {
          setStatus(teams.map((c) => c.status1));
          console.log(setStatus);
        } else if (game == 2) {
          setStatus(teams.map((c) => c.status2));
        } else {
          setStatus(teams.map((c) => c.status3));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update, game]);

  const changerStatus = (idx, id, st) => {
    const player = teams[idx];
    if (game == 1) {
      player.status1 = st;
    } else if (game == 2) {
      player.status2 = st;
    } else {
      player.status3 = st;
    }
    axios
      .patch("http://localhost:5000/api/teams/" + id, player)
      .then((res) => setUpdate(update + 1))
      .catch((err) => console.error(err));
  };

  return (
    <div className="linke">
      <Link to="/players/list">List </Link>
      <br />
      <Link to="/players/addplayer">Add Player </Link>
      <br />
      <Link to="/status/game/1">Game 1 </Link>
      <Link to="/status/game/2">Game 2 </Link>
      <Link to="/status/game/3">Game 3 </Link>
      <table id="customers">
        <thead>
          <th>Team Name </th>&nbsp;
          <th>Action</th>
        </thead>
        <tbody>
          {teams.map((c, i) => (
            <tr key={c._id}>
              <td>
                <Link to={`/teams/${c._id}`}>{c.name}</Link>
              </td>
              &nbsp;
              <td>
                <button
                  onClick={() => changerStatus(i, c._id, "Playing")}
                  className={status[i] == "Playing" ? "btn btn-success" : "btn"}
                >
                  Playing
                </button>
                <button
                  onClick={() => changerStatus(i, c._id, "Not Playing")}
                  className={
                    status[i] == "Not Playing" ? "btn btn-danger" : "btn"
                  }
                >
                  Not Playing
                </button>
                <button
                  onClick={() => changerStatus(i, c._id, "Undecided")}
                  className={
                    status[i] == "Undecided" ? "btn btn-warning" : "btn"
                  }
                >
                  Undecided
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Show;
