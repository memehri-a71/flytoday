import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export const CustomSelect = ({ options }) => {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl variant="outlined" fullWidth>
      {/* <InputLabel id="select-label">{label}</InputLabel> */}
      <Select
        labelId="select-label"
        value={selectedValue}
        onChange={handleChange}
        sx={{ bgcolor: 'white' }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option?.value}>
            {option?.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
