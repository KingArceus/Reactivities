import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { useState } from 'react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { useActivities } from '../../lib/hooks/useActivities';

function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const {activities, isPending} = useActivities();

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find(a => a.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleFormOpen = (id?: string) => {
    if (id) 
      handleSelectActivity(id);
    else
      setSelectedActivity(undefined);
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  return (
    <Box sx={{bgcolor: '#eeeeee', minHeight: '100vh'}}>
      <CssBaseline />
      <NavBar openForm={handleFormOpen}/>
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {!activities || isPending ? (
          <Typography>
            Loading...
          </Typography>
        ) : (
          <ActivityDashboard activities={activities} 
                           selectActivity={handleSelectActivity} 
                           cancelSelectActivity={handleCancelSelectActivity}
                           selectedActivity={selectedActivity}
                           editMode={editMode}
                           openForm={handleFormOpen}
                           closeForm={handleFormClose}/>
        )}
      </Container>
    </Box>
  )
}

export default App;
