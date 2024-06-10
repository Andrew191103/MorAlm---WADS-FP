import React from 'react';
import './NotifPopUp.css';

const NotificationsModal = ({ isActive, onClose, notifications, onNotificationClose, onClearAllNotifications }) => {
    if (!isActive) return null;

    return (
        <div className="notif-popup-overlay" onClick={onClose}>
            <div className="notif-popup-content" onClick={(e) => e.stopPropagation()}>
                <div className="notif-popup-header">
                    <h2>All Notifications</h2>
                    <div className="notif-popup-header-buttons">
                        {notifications.length > 0 && (
                            <button className="notif-popup-clear-all" onClick={onClearAllNotifications}>clear All</button>
                        )}
                        <button className="notif-popup-close-button" onClick={onClose}>×</button>
                    </div>
                </div>
                <div className="notif-popup-body">
                    {notifications.length === 0 ? (
                        <div className="notif-popup-no-notifications">You have no Notifs!</div>
                    ) : (
                        notifications.map((notification) => (
                            <div key={notification.id} className="notif-popup-notification-item">
                                <div className="notif-popup-notification-title">{notification.title}</div>
                                <div className="notif-popup-notification-message">{notification.message}</div>
                                <button className="notif-popup-close-notification" onClick={() => onNotificationClose(notification.id)}>×</button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotificationsModal;
