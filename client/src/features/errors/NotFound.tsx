import { SearchOff } from "@mui/icons-material";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

export default function NotFound() {
    return (
        <Paper sx={{height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 6}}>
            <SearchOff sx={{fontSize: 100}} color="primary"></SearchOff>
            <Typography gutterBottom variant="h3">
                Oops - not found
            </Typography>
            <Button fullWidth component={Link} to='/'>
                Go back to home page
            </Button>
        </Paper>
    )
}