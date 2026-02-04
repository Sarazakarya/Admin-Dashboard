import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../Store/Slices/usersSlice";

export const UserDropDown = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = (popupState) => {
    dispatch(logout());
    popupState.close();
    navigate("/Login");
  };
  return (
    <PopupState variant="popover" popupId="user-menu">
      {(popupState) => (
        <>
          <div {...bindTrigger(popupState)}>{children}</div>

          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem
              onClick={() => {
                handleLogout(popupState);
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
};
