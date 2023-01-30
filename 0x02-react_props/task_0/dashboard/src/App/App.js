import React from "react";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="App-header">
          <Notifications listNotifications={listNotifications} />
          <Header />
        </div>
        {isLoggedIn ? <CourseList listCoursec={listCourses} /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: propTypes.bool,
};

export default App;
