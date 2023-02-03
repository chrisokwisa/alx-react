import React, { Fragment } from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes, { nominalTypeHack } from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <Fragment>
      <div className="menuItem">
        <p>Your Notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of Notifications</p>
          <ul>
            {listNotifications.length === 0 && (
              <NotificationItem value="No new notification for now" />
            )}
            {listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
              />
            ))}
          </ul>
          <button
            type="button"
            aria-label="Close"
            onClick={() => console.log("Close button has been clicked")}
            style={{
              display: "inline-block",
              position: "absolute",
              top: "56px",
              right: "16px",
              background: 0,
              border: 0,
              outline: "none",
              cursor: "pointer",
              zIndex: 1,
            }}
          >
            <img
              src={closeIcon}
              alt=""
              style={{ width: "8px", height: "8px" }}
            />
          </button>
        </div>
      )}
    </Fragment>
  );
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.PropTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
