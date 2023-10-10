import { Autocomplete, TextField } from "@mui/material";
const optionsdefaul = [{ _id: "", name: "Khong co du lieu" }];
import { AccordionSummary, Typography } from "@mui/material";
export default function InputSelect(props: any) {
  const {
    options,
    multiple,
    readOnly = false,
    defaultValue,
    value,
    label,
    row = false,
    alignLabel = "left",
    placeholder,
    change,
  } = props;
  const onChange = (e: any, value: any) => {
    change(value?._id);
  };

  return (
    <AccordionSummary className="box-shawder-bt ">
      <Typography
        className="col-md-2 pb-2 d-flex align-items-end"
        style={{
          fontWeight: "bolder",
          color: "darkblue",
          textAlign: alignLabel || "left",
        }}
      >
        {label}
      </Typography>
      <div style={{ color: "text.secondary" }} className="col-md-10">
        <Autocomplete
          style={{ background: "white" }}
          multiple={multiple} //multiple field
          id="tags-outlined"
          options={options || optionsdefaul}
          getOptionLabel={(option: any) => option.name}
          readOnly={readOnly}
          defaultValue={
            defaultValue
              ? options?.find((option: any) => option._id === defaultValue)
              : null
          } //disable
          value={
            value ? options?.find((option: any) => option._id === value) : null
          }
          // filterSelectedOptions
          onChange={onChange}
          renderInput={(params: any) => (
            <TextField {...params} label={label} placeholder={placeholder} />
          )}
        />
      </div>
    </AccordionSummary>
  );
}
