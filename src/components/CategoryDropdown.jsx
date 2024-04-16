import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

function OnSelectCategory() {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCategory(event.target.value);
    navigate(`/reviews/category_name/${event.target.value}`);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="category"
          onChange={handleChange}
        >
          <MenuItem value={"all"}>All Categories</MenuItem>
          <MenuItem value={"strategy"}>Strategy</MenuItem>
          <MenuItem value={"hidden-roles"}>Hidden-roles</MenuItem>
          <MenuItem value={"dexterity"}>Dexterity</MenuItem>
          <MenuItem value={"push-your-luck"}>Push-your-luck</MenuItem>
          <MenuItem value={"roll-and-write"}>Roll-and-write</MenuItem>
          <MenuItem value={"deck-building"}>Deck-building</MenuItem>
          <MenuItem value={"engine-building"}>Engine-building</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default OnSelectCategory;
