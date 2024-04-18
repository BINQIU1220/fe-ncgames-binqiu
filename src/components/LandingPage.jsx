import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TypeIt from "typeit-react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsVisible(true);
    }, 12166);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className="appbarClass"
          position="static"
          sx={{
            backgroundColor: "rgb(11, 50, 66)",
            display: { xs: "none", md: "none", lg: "flex" },
          }}
        >
          <Toolbar>
            <SportsEsportsIcon fontSize="large" />

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button
                size="large"
                color="inherit"
                onClick={() => window.location.reload()}
              >
                NC-GAMES
              </Button>
            </Typography>
            <Button
              color="inherit"
              onClick={() => (window.location = "mailto:ezio12a@hotmail.com")}
            >
              Contact me
            </Button>
            <Button color="inherit" onClick={() => navigate(`/login`)}>
              Log in
            </Button>
            <Button color="inherit" onClick={() => navigate(`/signup`)}>
              Sign up free
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="welcome-msg-container">
        <TypeIt
          className="landingmsg1"
          getBeforeInit={(instance) => {
            instance
              .options({ speed: 50, startDelay: 900 })
              .type("the mot versti", { delay: 100 })
              .move(-8, { delay: 100 })
              .type("s", { delay: 400 })
              .move(null, { to: "START", instant: true, delay: 300 })
              .move(1, { delay: 200 })
              .delete(1)
              .type("T", { delay: 225 })
              .pause(200)
              .move(2, { instant: true })
              .pause(200)
              .move(5, { instant: true })
              .move(5, { delay: 200 })
              .type("a", { delay: 350 })
              .move(null, { to: "END" })
              .type("le board games website")
              .type(' in the <span class="place">internet</span>', {
                delay: 400,
              })
              .move(-14, { delay: 350 })
              .delete(1, { delay: 350 })
              .type("o", { delay: 400 })
              .move(null, { to: "END" })
              .pause(500)
              .delete(".place", { delay: 200, instant: true })
              .pause(350)
              .type(
                '<em><strong class="font-semibold"> planet.</strong></em>',
                {
                  speed: 100,
                }
              )
              .go();
            return instance;
          }}
        />

        {isVisible && (
          <Button
            className="get-started-btn"
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<RocketLaunchIcon />}
            onClick={() => navigate(`/reviews/category_name/all`)}
            sx={{
              maxWidth: "35%",
              color: "white",
              fontWeight: 500,
              padding: "0.75rem",
              backgroundColor: "rgb(0, 123, 39)",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            Get Started
          </Button>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
