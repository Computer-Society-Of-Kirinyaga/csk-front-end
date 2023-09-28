import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

function CustomInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  select = false,
  options = [],
}) {
  return (
    <div>
      {select ? (
        <FormControl fullWidth required={required} margin="normal">
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <Select label={label} name={name} value={value} onChange={onChange}>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <TextField
          fullWidth
          label={label}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          margin="normal"
        />
      )}
    </div>
  );
}

export default CustomInput;
