import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const CustomSelect = ({ value, handleChange, options }) => {

  return (
    <FormControl fullWidth>
      <Select
        value={value}
        onChange={(e) => handleChange(e)}
      >
        {options.map(item =>
          <MenuItem
            key={item.value}
            value={JSON.stringify(item)}
          >
            {item.label}
          </MenuItem>)}

      </Select>
    </FormControl>
  );
};
