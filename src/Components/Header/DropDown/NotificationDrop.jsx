import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import User from '../../../images/OIP.webp';
import User2 from '../../../images/t-shirt1.jpg';
import User3 from '../../../images/t-shirt8.jpg';
import User4 from '../../../images/t-shirt4.jpg';

export const NotificationDrop = ({ children }) => {
  const notifications = [
    { id: 1, user: "Satah", message: "Leather belt steve madden", time: "Few Seconds", image: User4 },
    { id: 2, user: "John", message: "New shoes Nike", time: "2 min ago", image: User2 },
    { id: 3, user: "Alice", message: "Cool jacket", time: "5 min ago", image: User3 },
    { id: 4, user: "Bob", message: "Sneakers", time: "10 min ago", image: User },
    { id: 5, user: "Bob", message: "Sneakers", time: "10 min ago", image: User },
  ];

  return (
    <PopupState variant="popover" popupId="user-menu">
      {(popupState) => (
        <>
          <div {...bindTrigger(popupState)} style={{ cursor: 'pointer' }}>
            {children}
          </div>

          <Menu
            {...bindMenu(popupState)}
            disableAutoFocusItem   // ✅ يمنع تحذير aria-hidden
            PaperProps={{
              style: {
                maxHeight: 300,
                overflowY: 'auto',
              },
            }}
          >
            <MenuItem onClick={popupState.close}>Notification</MenuItem>
            <Divider component="li" className='m-0' />

            {notifications.map((n, index) => [
              <MenuItem
                key={`item-${n.id}`}
                onClick={popupState.close}
                style={{
                  alignItems: 'flex-start',
                  gap: '10px',
                  display: 'flex',
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                  wordWrap: 'break-word',
                  backgroundColor: `${index < 2 ? "#d6deed82" : "transparent"}`,
                }}
              >
                <img
                  src={n.image}
                  alt="User"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="body2">
                    added to his favorite list <b>{n.user}</b> <b>{n.message}</b>
                  </Typography>
                  <Typography variant="caption" color="info">
                    {n.time}
                  </Typography>
                </div>
              </MenuItem>,
              <Divider key={`divider-${n.id}`} component="li" className='m-0' />
            ])}
          </Menu>
        </>
      )}
    </PopupState>
  );
};
