import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom/dist/index.d.mts";
import { Activity } from "../../../app/models/Activity";
interface Props {
    activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src="/assets/user.png" />
                    <Item.Content>
                        <Item.Header as={Link} to={`/activities/${activity.id}`}>
                            {activity.title}
                        </Item.Header>
                        <Item.Description>
                            Hosted By King
                        </Item.Description>
                    </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'/> {activity.date}
                    <Icon name='marker'/> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees Here
            </Segment>
            <Segment clearing>
                <span>
                    {activity.description}
                </span>
                <Button as={Link} 
                        to={`/activities/${activity.id}`} 
                        color="teal"
                        floated="right"
                        content='View'/>
            </Segment>
        </Segment.Group>
    )
}