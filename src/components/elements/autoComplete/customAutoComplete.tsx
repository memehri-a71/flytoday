
import { CustomAutoCompleteProps } from "@/types/autoComplete";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";
import { HelperText } from "../helperText";


export const CustomAutoComplete = (props:CustomAutoCompleteProps) => {
  const {
    url = '',
    optionLabel = 'label',
    placeholder,
    disabled,
    error,
    helperText,
    querySearch='',
    label,
    onChange,
  } = props;

  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [options, setOptions] = useState<any[]>([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
       const res = await response.json();
      setOptions(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };


  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
    if (options.length==0) {
      fetchData();
    }
  };

  return (
    <div className="w-full">
      <Autocomplete
        {...props}
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        // onInputChange={(_event, newInputValue) => {
        //   querySearch!='' && inputHandler(newInputValue);
        // }}
        options={Array.isArray(options) ? options : [options]}
        getOptionLabel={(option: Record<string, any>) =>
          option[optionLabel] ? option[optionLabel] : ""
        }
        fullWidth
        size="small"
        disabled={disabled}
        loading={isLoading}
        onChange={(_event, newValue): void => {
          onChange?.(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={label}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {/* {params.InputProps.endAdornment} */}
                </>
              ),
            }}
          />
        )}
      />
      {error ? <HelperText>{helperText}</HelperText> : null}
    </div>
  );
};

