import { Link } from "react-router-dom/dist/index.d.mts";
import { Button, Container, Header, Image, Segment } from "semantic-ui-react";

export default function HomePage() {
    return (
        <Segment inverted textAlign="center" vertical className="masthead">
            <Container text>
                <Header as={'h1'} inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    Reactivities
                </Header>
                <Header as={'h2'} inverted content='Welcome' />
                <Button as={Link} to='/activities' size='huge' inverted content='Login'>
                    Take me to the activities!
                </Button>
            </Container>
        </Segment>
    )
}