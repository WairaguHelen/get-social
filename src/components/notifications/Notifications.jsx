import React, { useState } from "react";
import NotificationItem from "./NotificationItem";

const dummyNotifications = [
  {
    id: 1,
    message: "Lilian like your update.",
    isRead: false,
    timestamp: "5 minutes ago",
  },
  {
    id: 2,
    message: "Disi commented on your post.",
    isRead: false,
    timestamp: "1 hour ago",
  },
  {
    id: 3,
    message: "Anthony started following you.",
    isRead: true,
    timestamp: "2 days ago",
  },
];

function Notifications() {
  const [notifications, setNotifications] = useState(dummyNotifications);

  const setAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className="notifications">
      <h2>Your Notifications</h2>
      {notifications.length === 0 ? (
        <p>Sorry, there's no new notification! Come back soon!</p>
      ) : (
        <ul>
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              markAsRead={setAsRead}
              deleteNotification={removeNotification}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notifications;
