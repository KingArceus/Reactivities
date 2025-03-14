import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/stores/store"
import { Box, Button, ButtonGroup, List, ListItem, Paper, Typography } from "@mui/material";

const Counter = observer(function Counter() {
    const { counterStore } = useStore();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'space-between' }}>
            <Box sx={{ width: '60%' }}>
                <Typography variant="h4">{counterStore.title}</Typography>
                <Typography variant="h6">The count is: {counterStore.count}</Typography>
                <ButtonGroup sx={{ marginTop: 3 }}>
                    <Button variant="contained" onClick={() => counterStore.decrement()} color="error">Decrement</Button>
                    <Button variant="contained" onClick={() => counterStore.increment()} color="success">Increment</Button>
                    <Button variant="contained" onClick={() => counterStore.decrement(5)} color="primary">Decrement by 5</Button>
                </ButtonGroup>
            </Box>
            <Paper sx={{ width: '40%', p: 4 }}>
                <Typography variant="h5">Counter envents ({counterStore.eventCount})</Typography>
                <List>
                    {counterStore.event.map((event, index) => (
                        <ListItem key={index}>{event}</ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    )
})

export default Counter;