<<<<<<< HEAD
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
    selectedActivity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}
=======
import { useStore } from "../../../app/stores/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

type Props = {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

function ActivityDetails({activity, cancelSelectActivity, openForm}: Props) {
    const {activityStore} = useStore();
    const {selectedActivity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();
>>>>>>> ef615985708bea5fcd7cfe042648d8ab48bf6313

function ActivityDetails({selectedActivity, cancelSelectActivity, openForm}: Props) {
    const {activities} = useActivities();
    const activity = activities?.find(a => a.id === selectedActivity.id);

    if (!activity) return <Typography>
        Loading...
    </Typography>;

    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardMedia component={'img'} src={`/images/categoryImages/${activity?.category}`}/>
            <CardContent>
                <Typography variant="h5">{activity?.title}</Typography>
                <Typography variant="subtitle1" fontWeight={'light'}>{activity?.date}</Typography>
                <Typography variant="body1">{activity?.description}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => openForm(activity.id)} color="primary">Edit</Button>
                <Button onClick={cancelSelectActivity} color="inherit">Cancel</Button>
            </CardActions>
        </Card>
    )
}

export default ActivityDetails;