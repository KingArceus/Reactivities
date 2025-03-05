import { Box, Paper, TextField, Typography, Button } from "@mui/material";
import { FormEvent } from "react";

type Props = {
  closeForm: () => void;
  activity?: Activity;
  submitForm: (activity: Activity) => void;
}

function ActivityForm({closeForm, activity, submitForm}: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const data: {[key: string]: FormDataEntryValue} = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (activity) 
      data.id = activity.id;

    submitForm(data as unknown as Activity);
  }

  return (
    <Paper sx={{borderRadius: 3, padding: 3}}>
      <Typography variant="h4" gutterBottom color="primary">Create Activity</Typography>
      <Box component={'form'} onSubmit={handleSubmit} display={'flex'} flexDirection={'column'} gap={3}>
        <TextField name="title" label="Title" defaultValue={activity?.title}/>
        <TextField name="description" label="Description" defaultValue={activity?.description} multiline={true} rows={3}/>
        <TextField name="category" label="Category" defaultValue={activity?.category}/>
        <TextField name="date" label="Date" type="date" defaultValue={activity?.date}/>
        <TextField name="city" label="City" defaultValue={activity?.city}/>
        <TextField name="venue" label="Venue" defaultValue={activity?.venue}/>
        <Box display={'flex'} justifyContent={'end'} gap={3}>
          <Button onClick={closeForm} color="inherit">Cancel</Button>
          <Button color="success" variant="contained">Submit</Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default ActivityForm;