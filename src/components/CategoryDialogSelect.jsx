import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import DialogActions from "@mui/material/DialogActions";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

function OnSelectCategory() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCategory(event.target.value);
    navigate(`/reviews/category_name/${event.target.value}`);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Category</Button>
      <Dialog disableEscapeKeyDown open={open}>
        <DialogTitle>Select a category</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Category</InputLabel>
              <Select
                native
                value={category}
                onChange={handleChange}
                input={
                  <OutlinedInput label="category" id="demo-dialog-native" />
                }
              >
                <option aria-label="None" value="" />
                <option value={"all"}>All Categories</option>
                <option value={"strategy"}>Strategy</option>
                <option value={"hidden-roles"}>Hidden-roles</option>
                <option value={"dexterity"}>Dexterity</option>
                <option value={"push-your-luck"}>Push-your-luck</option>
                <option value={"roll-and-write"}>Roll-and-write</option>
                <option value={"deck-building"}>Deck-building</option>
                <option value={"engine-building"}>Engine-building</option>
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

export default OnSelectCategory;
