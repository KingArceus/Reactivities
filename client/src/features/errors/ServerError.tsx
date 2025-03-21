import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/stores/store";
import { Container, Header, Segment } from "semantic-ui-react";

function ServerError() {
    const {commonStore} = useStore();

    return (
        <Container>
            <Header as={'h1'} content='Server Error'></Header>
            <Header sub as={'h5'} color='red' content={commonStore.error?.message}></Header>
            {commonStore.error?.details && (
                <Segment>
                    <Header as={'h4'} content='Stack Trace' color="teal"></Header>
                    <code style={{marginTop: '10px'}}>{commonStore.error.details}</code>
                </Segment>
            )}
        </Container>
    )
}

export default observer(ServerError);