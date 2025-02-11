import { Stack, Autocomplete, TextField } from "@mui/material";

const languages = [{ label: "English" }, { label: "Spanish" }, { label: "French" }];

export default function LanguageSelector() {
  return (
    <Stack>
      <Autocomplete
        options={languages}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => <TextField {...params} label="Select Language" />}
      />
    </Stack>
  );
}
