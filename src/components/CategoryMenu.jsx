import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

function OnSelectCategory() {
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
    navigate(`/reviews/category_name/${event.currentTarget.dataset.myValue}`);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Category
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
        <MenuItem onClick={handleChange} data-my-value={"all"}>
          All Categories
        </MenuItem>
        <MenuItem onClick={handleChange} data-my-value={"strategy"}>
          Strategy
        </MenuItem>
        <MenuItem onClick={handleChange} data-my-value={"hidden-roles"}>
          Hidden-roles
        </MenuItem>
        <MenuItem onClick={handleChange} data-my-value={"dexterity"}>
          Dexterity
        </MenuItem>
        <MenuItem onClick={handleChange} data-my-value={"push-your-luck"}>
          Push-your-luck
        </MenuItem>
        <MenuItem onClick={handleChange} data-my-value={"roll-and-write"}>
          Roll-and-write
        </MenuItem>
        <MenuItem onClick={handleChange} data-my-value={"deck-building"}>
          Deck-building
        </MenuItem>
        <MenuItem onClick={handleChange} data-my-value={"engine-building"}>
          Engine-building
        </MenuItem>
      </Menu>
    </div>
  );
}

export default OnSelectCategory;
