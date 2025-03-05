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

    useEffect(() => {
        if (id) {
            loadActivity(id);
        };
    }, [id, loadActivity]);

    if (loadingInitial || !selectedActivity) return <LoadingComponent />;

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