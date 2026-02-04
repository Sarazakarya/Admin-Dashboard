import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
export const DropDown = ({children}) => {
  return (
    <PopupState variant="popover" popupId="user-menu">
      {(popupState) => (
        <>

          <div {...bindTrigger(popupState)}>
            {children}
          </div>


          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Last Day</MenuItem>
            <MenuItem onClick={popupState.close}>Last Week</MenuItem>
            <MenuItem onClick={popupState.close}>Last Month</MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
};

