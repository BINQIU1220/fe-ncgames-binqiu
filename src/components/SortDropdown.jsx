import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

function OnSelectSort(props) {
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

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="sort"
          onChange={handleChange}
        >
          <MenuItem value={"votes"}>Votes</MenuItem>
          <MenuItem value={"comment_count"}>Comment Count</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default OnSelectSort;
