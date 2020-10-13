import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link, useHistory } from "react-router-dom";
import { firebaseAuth } from "../context/firebase";
import { ServiceContext } from "../context/context";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    // "&:focus": {
    //   backgroundColor: theme.palette.warning.main,
    //   "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
    //     color: theme.palette.common.white,
    //   },
    // },
  },
}))(MenuItem);

export default function MonCompteMenus() {
  const history = useHistory();
  const { logoutUser } = useContext(ServiceContext);
  const logout = async () => {
    await firebaseAuth.signOut().then(() => {
      logoutUser();
      history.push("/login");
    });
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Link
        className='nav-item btn btn-outline-warning'
        aria-controls='customized-menu'
        aria-haspopup='true'
        onClick={handleClick}
        to='#'
      >
        حسابي
      </Link>
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}>
          <ListItemText
            primary='حسابي'
            color=' #30526a'
            className='text-right text-info'
            onClose={handleClose}
            onClick={() => history.push("/moncompte")}
          />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <ListItemText
            primary='تسجيل الخروج'
            className='text-right text-info'
            color=' #30526a'
            onClick={logout}
          />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
