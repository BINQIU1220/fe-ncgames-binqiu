import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

function OnSelectSort(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    if (props.category_name === undefined || props.category_name === "all") {
      navigate(`/reviews/all/sort_by/${event.currentTarget.dataset.myValue}`);
    } else {
      navigate(
        `/reviews/${props.category_name}/sort_by/${event.currentTarget.dataset.myValue}`
      );
    }
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          fontFamily: "Josefin Sans",
          color: "white",
          fontWeight: 550,
          marginTop: "0.18rem",
        }}
      >
        Sort
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleChange} data-my-value={"votes"}>
          Votes
        </MenuItem>
        <MenuItem onClick={handleChange} data-my-value={"comment_count"}>
          Comment Count
        </MenuItem>
      </Menu>
    </div>
  );
}

export default OnSelectSort;
