import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Badge, FormControl, InputLabel, Link, Select } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Cookies from "universal-cookie";
import { Image } from "@mui/icons-material";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export default function MenuAppBar() {
  // const [auth, setAuth] = React.useState(true);
  const cookies = new Cookies();
  const [anchorEl, setAnchorEl] = useState(null);
  const [userName, setUserName] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    cookies.remove("token");
    localStorage.clear();
    window.location.href = "/";
  };
  useEffect(() => {
    if (cookies.get("token") === undefined) {
      window.location.href = "/";
    } else {
      const jwt = cookies.get("token");
      const decoded = jwt_decode(jwt);
      setUserName(decoded.userName);
      console.log(decoded);
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#01022e", color:"#ffffff" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img
              src={require("../logo3.png")}
              alt="logo"
              style={{ width: "40px", height: "40px" }}
              onClick={() => {
                window.location.href = "/housingpage";
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              color: "#ffffff",
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "/housingpage";
            }}
          >
            Future Cities
          </Typography>

          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, mr: 5, color: "#ffffff" }}
            onClick={() => {
              window.location.href = "/applications";
            }}
          >
            Applications
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <IconButton
							size="large"
							aria-label="show 4 new mails"
							color="primary"
						>
							<Badge badgeContent={4} color="primary">
								<MailIcon />
							</Badge>
						</IconButton> */}
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="primary"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="primary"
              open={handleClick}
              // onClick={handleClick}
            >
              <Badge badgeContent={0} color="error" sx={{ mr: 1 }}>
                <Typography>{userName}</Typography>
              </Badge>
              <AccountCircle onClick={handleClick} />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem
                  onClick={() => (window.location.href = "/applications")}
                >
                  Applications
                </MenuItem>
                {/* <MenuItem
                  onClick={() => {
                    window.location.href = "/draftapplications";
                    handleClose();
                  }}
                >
                  Drafts
                </MenuItem> */}
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
