import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export const CustomSelect = ({ options,size='small' }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl variant="outlined" fullWidth>
      {/* <InputLabel id="select-label">{label}</InputLabel> */}
      <Select
        labelId="select-label"
        value={selectedValue}
        defaultValue={options[0]}
        onChange={handleChange}
        sx={{ bgcolor: 'white' }}
        size={size}
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
