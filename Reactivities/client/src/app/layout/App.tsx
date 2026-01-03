import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState} from "react";
import NavBar from "./NavBar";
import AcitivityDashboard from "../../features/activities/dashboard/AcitivityDashboard";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {

  const [selectedActivity,setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode,setEditMode] = useState(false);
  const {activities, isPending} = useActivities();
    
  

  const handleSelectActivity = (id: string) => {
    
    setSelectedActivity(activities!.find(a => a.id === id));
  } 

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

 


  return (
    <Box sx={{bgcolor: '#eeeeee', minHeight: '100vh'}}>
    <CssBaseline />
    <NavBar openForm={handleOpenForm}/>
    <Container maxWidth='xl' sx={{mt: 3}}>
      {!activities || isPending ? 
      (
        <Typography >Loading...</Typography>
      ) : (
        <AcitivityDashboard 
        activities={activities}
        selectActivity={handleSelectActivity}
        cancelSelectActivity={handleCancelSelectActivity}
        selectedActivity={selectedActivity}
        editMode={editMode}
        openForm={handleOpenForm}
        closeForm={handleFormClose}
        
        />
      )}

    </Container>
    
      
    </Box>

  )
}

export default App
