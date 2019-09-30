import React, { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";

// This Component uses hooks, if you would like a introduction / refresher to hooks please read the following resources:
// https://reactjs.org/docs/hooks-intro.html
// https://reactjs.org/docs/hooks-state.html
// https://reactjs.org/docs/hooks-effect.html
// https://codeburst.io/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd

const ProfilePageContainer = ({ match }) => {
  const [student, setStudent] = useState({});

  async function fetchStudent() {
    const res = await fetch(
      process.env.REACT_APP_API + `/api/students/user/${match.params.id}`
    );
    res.json().then(student => setStudent(student[0]));
  }

  useEffect(() => {
    fetchStudent();
  }, []);

  return <ProfilePage student={student} />;
};

export default ProfilePageContainer;
