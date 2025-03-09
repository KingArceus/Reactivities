import { Box, Paper, TextField, Typography, Button } from "@mui/material";
import { FormEvent } from "react";
<<<<<<< HEAD
import { useActivities } from "../../../lib/hooks/useActivities";
=======
>>>>>>> ef615985708bea5fcd7cfe042648d8ab48bf6313

type Props = {
  closeForm: () => void;
  activity?: Activity;
<<<<<<< HEAD
}

function ActivityForm({closeForm, activity}: Props) {
  const {updateActivity, createActivity} = useActivities();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const data: {[key: string]: FormDataEntryValue} = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (activity) {
      data.id = activity.id;
      await updateActivity.mutateAsync(data as unknown as Activity);
      closeForm();
    } else {
      await createActivity.mutateAsync(data as unknown as Activity);
      closeForm();
    }
=======
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
>>>>>>> ef615985708bea5fcd7cfe042648d8ab48bf6313
  }

  return (
    <Paper sx={{borderRadius: 3, padding: 3}}>
      <Typography variant="h4" gutterBottom color="primary">Create Activity</Typography>
      <Box component={'form'} onSubmit={handleSubmit} display={'flex'} flexDirection={'column'} gap={3}>
        <TextField name="title" label="Title" defaultValue={activity?.title}/>
        <TextField name="description" label="Description" defaultValue={activity?.description} multiline={true} rows={3}/>
        <TextField name="category" label="Category" defaultValue={activity?.category}/>
<<<<<<< HEAD
        <TextField name="date" label="Date" type="date" 
                  defaultValue={activity?.date 
                      ? new Date(activity.date).toISOString().split('T')[0]
                      : new Date().toISOString().split('T')[0]}/>
=======
        <TextField name="date" label="Date" type="date" defaultValue={activity?.date}/>
>>>>>>> ef615985708bea5fcd7cfe042648d8ab48bf6313
        <TextField name="city" label="City" defaultValue={activity?.city}/>
        <TextField name="venue" label="Venue" defaultValue={activity?.venue}/>
        <Box display={'flex'} justifyContent={'end'} gap={3}>
          <Button onClick={closeForm} color="inherit">Cancel</Button>
<<<<<<< HEAD
          <Button type="submit" 
                  color="success" 
                  variant="contained" 
                  disabled={updateActivity.isPending || createActivity.isPending}>
                    Submit
          </Button>
=======
          <Button color="success" variant="contained">Submit</Button>
>>>>>>> ef615985708bea5fcd7cfe042648d8ab48bf6313
        </Box>
      </Box>
    </Paper>
  )
}

export default ActivityForm;