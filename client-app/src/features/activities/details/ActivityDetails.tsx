import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityDetailHeader from "./ActivityDetailHeader";
import ActivityDetailInfo from "./ActivityDetailInfo";
import ActivityDetailSideBar from "./ActivityDetailSideBar";
import ActivityDetailChat from "./ActivityDetailChat";

function ActivityDetails() {
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
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailHeader activity={selectedActivity}/>
                <ActivityDetailInfo activity={selectedActivity}/>
                <ActivityDetailChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailSideBar />
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDetails);