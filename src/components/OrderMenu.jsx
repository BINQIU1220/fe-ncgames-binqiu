import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, useParams } from "react-router-dom";

function OnOrder(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  let { sort_by } = useParams();
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
      navigate(
        `/reviews/all/sort_by/${sort_by}/order/${event.currentTarget.dataset.myValue}`
      );

      if (sort_by === undefined) {
        navigate(
          `/reviews/all/sort_by/votes/order/${event.currentTarget.dataset.myValue}`
        );
      }
    } else if (sort_by === undefined) {
      navigate(
        `/reviews/${props.category_name}/sort_by/votes/order/${event.currentTarget.dataset.myValue}`
      );
    } else {
      navigate(
        `/reviews/${props.category_name}/sort_by/${sort_by}/order/${event.currentTarget.dataset.myValue}`
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
        Order
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
        <MenuItem onClick={handleChange} data-my-value={"ASC"}>
          ASC Order
        </MenuItem>
        <MenuItem onClick={handleChange} data-my-value={"DESC"}>
          DESC Order
        </MenuItem>
      </Menu>
    </div>
  );
}

export default OnOrder;
