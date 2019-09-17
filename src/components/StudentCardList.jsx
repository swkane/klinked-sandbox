import React from "react";
import StudentCard from "./StudentCard";
import { Link } from "react-router-dom";

export default class StudentCardList extends React.Component {
  state = {
    users: ""
  };

  componentWillMount() {
    fetch(process.env.REACT_APP_API + "/api/students/page/1")
      .then(res => res.json())
      .then(myJson => {
        this.setState({
          users: myJson
        });
      });
  }

  render() {
    const { users } = this.state;
    return (
      <div
        style={{ marginLeft: "auto", marginRight: "auto", paddingTop: "50px" }}
      >
        {users && (
          <div>
            {users.map((user, i) => (
              <Link style={{ textDecoration: "none" }} to="/profile" key={i}>
                <div style={{ marginBottom: "25px" }}>
                  <StudentCard user={user} />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
}
