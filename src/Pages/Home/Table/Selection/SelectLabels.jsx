import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";

export default function SelectLabels({ setCategory, category }) {
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div style={{ marginTop: 20 }}>
      {/* Category */}
      <div>
        <h6>Category</h6>
        <FormControl sx={{ minWidth: 200, position: "relative" }} size="small">
          <Select
            value={category}
            onChange={handleCategoryChange}
            sx={{
              position: "absolute",
              top:"10px",
              left: 0,
              width: "100%",
            }}
          >
            <MenuItem>
              <em>None</em>
            </MenuItem>
            <MenuItem value={"men's clothing"}>men's clothing</MenuItem>
            <MenuItem value={"jewelery"}>jewelery</MenuItem>
            <MenuItem value={"electronics"}>electronics</MenuItem>
            <MenuItem value={"women's clothing"}>women's clothing</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
