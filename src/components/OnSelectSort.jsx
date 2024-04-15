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
import { useNavigate } from "react-router-dom";

function OnSelectSort(props) {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSort(event.target.value);
    if (props.category_name === undefined || props.category_name === "all") {
      navigate(`/reviews/all/sort_by/${event.target.value}`);
    } else {
      navigate(`/reviews/${props.category_name}/sort_by/${event.target.value}`);
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
      <Button onClick={handleClickOpen}>Sort</Button>
      <Dialog disableEscapeKeyDown open={open}>
        <DialogTitle>Select a sort</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Sort By</InputLabel>
              <Select
                native
                value={sort}
                onChange={handleChange}
                input={<OutlinedInput label="sort" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={"votes"}>Votes</option>
                <option value={"comment_count"}>Comment Count</option>
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

export default OnSelectSort;
