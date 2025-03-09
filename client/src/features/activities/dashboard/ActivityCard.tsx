import { Box, CardActions, Chip, Typography, Button, CardContent, Card } from "@mui/material";
<<<<<<< HEAD
import { useActivities } from "../../../lib/hooks/useActivities";
=======
>>>>>>> ef615985708bea5fcd7cfe042648d8ab48bf6313

type Props = {
    activity: Activity;
    selectActivity: (id: string) => void;
<<<<<<< HEAD
}

export default function ActivityCard({ activity, selectActivity }: Props) {
    const { deleteActivity } = useActivities();

=======
    deleteActivity: (id: string) => void;
}

export default function ActivityCard({ activity, selectActivity, deleteActivity }: Props) {
>>>>>>> ef615985708bea5fcd7cfe042648d8ab48bf6313
    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardContent>
                <Typography variant="h5">{activity.title}</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1 }}>{activity.date}</Typography>
                <Typography variant="body2">{activity.description}</Typography>
                <Typography variant="subtitle1">{activity.city}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}>
                <Chip label={activity.category} variant="outlined" />
                <Box display={'flex'} gap={3}>
                    <Button onClick={() => selectActivity(activity.id)} size="medium" variant="contained">View</Button>
<<<<<<< HEAD
                    <Button onClick={() => deleteActivity.mutate(activity.id)} 
                            size="medium" 
                            variant="contained" 
                            color="error"
                            disabled={deleteActivity.isPending}>Delete</Button>
=======
                    <Button onClick={() => deleteActivity(activity.id)} size="medium" variant="contained" color="error">Delete</Button>
>>>>>>> ef615985708bea5fcd7cfe042648d8ab48bf6313
                </Box>
            </CardActions>
        </Card>
    )
}
