import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const CustomSelect = ({ value, handleChange, options, children }) => {

  return (
    <FormControl fullWidth>
      <Select
        value={value}
        size="small"
        onChange={(e) => handleChange(e)}
      >
        {options ? options.map(item =>
          <MenuItem
            key={item.value}
            value={JSON.stringify(item)}
          >
            {item.label}
          </MenuItem>) : children}

      </Select>
    </FormControl>
  );
};
