import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

type Props = {
    activities: Activity[];
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivity?: Activity;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
<<<<<<< HEAD
}

function ActivityDashboard({ activities, selectActivity, cancelSelectActivity, selectedActivity, editMode, openForm, closeForm }: Props) {
=======
    submitForm: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

function ActivityDashboard({ activities, selectActivity, cancelSelectActivity, selectedActivity, editMode, openForm, closeForm, submitForm, deleteActivity }: Props) {
>>>>>>> ef615985708bea5fcd7cfe042648d8ab48bf6313
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <ActivityList activities={activities}
<<<<<<< HEAD
                              selectActivity={selectActivity}/>
            </Grid2>
            <Grid2 size={5}>
                {selectedActivity && !editMode &&
                    <ActivityDetails selectedActivity={selectedActivity}
=======
                              selectActivity={selectActivity}
                              deleteActivity={deleteActivity}/>
            </Grid2>
            <Grid2 size={5}>
                {selectedActivity && !editMode &&
                    <ActivityDetails activity={selectedActivity}
>>>>>>> ef615985708bea5fcd7cfe042648d8ab48bf6313
                                     cancelSelectActivity={cancelSelectActivity}
                                     openForm={openForm}/>
                }
                {editMode &&
<<<<<<< HEAD
                    <ActivityForm closeForm={closeForm} activity={selectedActivity}/>
=======
                    <ActivityForm closeForm={closeForm} activity={selectedActivity} submitForm={submitForm}/>
>>>>>>> ef615985708bea5fcd7cfe042648d8ab48bf6313
                }
            </Grid2>
        </Grid2>
    )
}

export default ActivityDashboard;