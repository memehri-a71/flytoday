import { CustomSelectType } from "@/types/select";
import { FormControl,  MenuItem, Select } from "@mui/material";

export const CustomSelect = (props:CustomSelectType) => {
const { value, handleChange, options, children ,placeholder}=props

  return (
    <FormControl fullWidth>
      <Select
        value={value}
        size="small"
        onChange={handleChange}
        placeholder={placeholder}
      >
        {options ? options.map((item:Record<string,any>) =>
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
