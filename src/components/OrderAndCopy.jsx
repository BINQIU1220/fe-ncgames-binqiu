import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate, useParams } from "react-router-dom";

function OrderAndCopy(props) {
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState("");
  const navigate = useNavigate();
  let { sort_by } = useParams();

  const handleChange = (event) => {
    setOrder(event.target.value);
    if (props.category_name === undefined || props.category_name === "all") {
      navigate(`/reviews/all/sort_by/${sort_by}/order/${event.target.value}`);

      if (sort_by === undefined) {
        navigate(`/reviews/all/sort_by/votes/order/${event.target.value}`);
      }
    } else if (sort_by === undefined) {
      navigate(
        `/reviews/${props.category_name}/sort_by/votes/order/${event.target.value}`
      );
    } else {
      navigate(
        `/reviews/${props.category_name}/sort_by/${sort_by}/order/${event.target.value}`
      );
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Order</Button>
      <Dialog disableEscapeKeyDown open={open}>
        <DialogTitle>Select an order</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Order By</InputLabel>
              <Select
                native
                value={order}
                onChange={handleChange}
                input={<OutlinedInput label="order" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={"ASC"}>ASC Order</option>
                <option value={"DESC"}>DESC Order</option>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default OrderAndCopy;
