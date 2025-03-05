import { Box, Container, CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, []);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find(a => a.id === id));
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

  const handleSubmitForm = (activity: Activity) => {
    if (activity.id) {
      setActivities(activities.map(a => a.id === activity.id ? activity : a));
    } 
    else {
      const newActivity = {...activity, id: activities.length.toString()};
      setSelectedActivity(newActivity);
      setActivities([...activities, newActivity]);
    }
    setEditMode(false);
  }

  const handleDeleteActivity = (id: string) => {
    setActivities(activities.filter(a => a.id !== id));
  }

  return (
    <Box sx={{bgcolor: '#eeeeee'}}>
      <CssBaseline />
      <NavBar openForm={handleFormOpen}/>
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard activities={activities} 
                           selectActivity={handleSelectActivity} 
                           cancelSelectActivity={handleCancelSelectActivity}
                           selectedActivity={selectedActivity}
                           editMode={editMode}
                           openForm={handleFormOpen}
                           closeForm={handleFormClose}
                           submitForm={handleSubmitForm}
                           deleteActivity={handleDeleteActivity}/>
      </Container>
    </Box>
  )
}

export default App;
