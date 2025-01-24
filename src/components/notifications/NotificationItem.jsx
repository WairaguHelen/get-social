import React from "react";

function NotificationItem({ notification, markAsRead, deleteNotification }) {
  return (
    <li className={`notification-item ${notification.isRead ? "read" : "unread"}`}>
      <div className="notification-message">
        <p>{notification.message}</p>
        <small>{notification.timestamp}</small>
      </div>
      <div className="notification-actions">
        {!notification.isRead && (
          <button onClick={() => markAsRead(notification.id)}>Mark as Read</button>
        )}
        <button onClick={() => deleteNotification(notification.id)}>Delete</button>
      </div>
    </li>
  );
}

export default NotificationItem;
