import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PollIcon from "@mui/icons-material/Poll";
import ChatIcon from "@mui/icons-material/Chat";
import MailIcon from "@mui/icons-material/Mail";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategoryMenu from "./CategoryMenu";
import SortMenu from "./SortMenu";
import OrderMenu from "./OrderMenu";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar(props) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const CustomTheme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "Josefin Sans",
      },
    },
  });

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgb(11, 50, 66)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SportsEsportsIcon
            fontSize="large"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate(`/`)}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            <Button
              id="ncgame-button"
              sx={{
                fontFamily: "Josefin Sans",
                color: "white",
                fontWeight: 550,
                marginTop: "0.18rem",
              }}
            >
              NC-GAMES
            </Button>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Button onClick={toggleDrawer(true)} id="drawer-button">
              <MenuIcon
                sx={{
                  color: "white",
                }}
              />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
              >
                <ThemeProvider theme={CustomTheme}>
                  <List>
                    <ListItem
                      key={"Most-Voted"}
                      disablePadding
                      onClick={() =>
                        navigate("/reviews/all/sort_by/votes/order/DESC")
                      }
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <PollIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Most-Voted"} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem
                      key={"Most-Commented"}
                      disablePadding
                      onClick={() =>
                        navigate(
                          "/reviews/all/sort_by/comment_count/order/DESC"
                        )
                      }
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <ChatIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Most-Commented"} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem
                      key={"Contact-Me"}
                      disablePadding
                      onClick={() =>
                        (window.location = "mailto:ezio12a@hotmail.com")
                      }
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Contact-Me"} />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </ThemeProvider>
              </Box>
            </Drawer>
          </Box>
          <SportsEsportsIcon
            fontSize="large"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />

          <Typography
            variant="h5"
            noWrap
            onClick={() => navigate(`/`)}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Josefin Sans",
              fontWeight: 550,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
              marginTop: "0.3rem",
            }}
          >
            NC-GAMES
          </Typography>
          {/*  wider screen menu bar  */}
          <ThemeProvider theme={CustomTheme}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <CategoryMenu category={props.category} />
              <SortMenu category_name={props.category_name} />
              <OrderMenu
                category_name={props.category_name}
                sortBy={props.sortBy}
              />
            </Box>
          </ThemeProvider>

          {/* //right side user profile and login icon */}
          <ThemeProvider theme={CustomTheme}>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </ThemeProvider>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
