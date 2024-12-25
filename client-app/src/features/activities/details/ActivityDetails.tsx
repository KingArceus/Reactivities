import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default function ActivityDetails() {
    const {activityStore} = useStore();
    const {selectedActivity} = activityStore;

    if (!selectedActivity) return undefined;

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${selectedActivity.category}.jpg`} />
            <CardContent>
            <CardHeader>{selectedActivity.title}</CardHeader>
            <CardMeta>
                <span>{selectedActivity.date}</span>
            </CardMeta>
            <CardDescription>
                {selectedActivity.description}
            </CardDescription>
            </CardContent>
            <CardContent extra>
            <Button.Group widths='2'>
                <Button onClick={() => activityStore.openForm(selectedActivity.id)} 
                        basic 
                        color='blue' 
                        content='Edit' />
                <Button onClick={activityStore.cancelSelectedActivity} 
                        basic 
                        color='grey' 
                        content='Cancel' />
            </Button.Group>
            </CardContent>
        </Card>
    )
}