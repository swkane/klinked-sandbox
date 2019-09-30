import React from "react";
import StudentCard from "./StudentCard";
import { Link } from "react-router-dom";

export default class StudentCardList extends React.Component {
  state = {
    users: []
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

    const filteredResults = users.filter(student =>
      this.props.checked.includes(student.class_name)
    );

    return (
      <div
        style={{ marginLeft: "auto", marginRight: "auto", paddingTop: "50px" }}
      >
        <div>
          {filteredResults.map((user, i) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`/profile/${user.id}/${user.first_name}-${user.last_name}`}
              key={i}
            >
              <div style={{ marginBottom: "25px" }}>
                <StudentCard user={user} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
