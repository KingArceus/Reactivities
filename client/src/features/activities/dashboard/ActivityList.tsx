import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
    activities: Activity[];
    selectActivity: (id: string) => void;
<<<<<<< HEAD
}

function ActivityList({activities, selectActivity}: Props) {
=======
    deleteActivity: (id: string) => void;
}

function ActivityList({activities, selectActivity, deleteActivity}: Props) {
>>>>>>> ef615985708bea5fcd7cfe042648d8ab48bf6313
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
            {activities.map(activity => (
                <ActivityCard key={activity.id} 
                              activity={activity} 
<<<<<<< HEAD
                              selectActivity={selectActivity}/>
=======
                              selectActivity={selectActivity} 
                              deleteActivity={deleteActivity}/>
>>>>>>> ef615985708bea5fcd7cfe042648d8ab48bf6313
            ))}
        </Box>
    )
}

export default ActivityList;