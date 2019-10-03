import React from "react";
import StudentCard from "./StudentCard";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

export default class StudentCardList extends React.Component {
  state = {
    users: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(process.env.REACT_APP_API + "/api/students/page/1")
      .then(res => res.json())
      .then(myJson => {
        this.setState({
          users: myJson
        });
        this.setState({ isLoading: false });
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
        {this.state.isLoading && (
          <div style={{ marginTop: "20px" }}>
            <CircularProgress />
          </div>
        )}
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
