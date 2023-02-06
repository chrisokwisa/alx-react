import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import "./App.css";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";

class App extends React.component({ isLoggedIn }) {
  const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
  const listNotifications = [
    { id: 1, type: "default", value: "New Course available" },
    { id: 2, type: "default", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
  ];
  let component = undefined;
  isLoggedIn
    ? (component = <CourseList listCourses={listCourses} />)
    : (component = <Login />);
  return (
    <>
      <Notifications listNotifications={listNotifications} />
      <Header />
      {component}
      <Footer />
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
