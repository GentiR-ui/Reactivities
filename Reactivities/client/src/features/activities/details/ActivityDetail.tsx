import {Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
	selectedActivity: Activity;
	cancelSelectActivity: () => void;
	openForm: (id: string) => void;
}

export default function ActivityDetail({selectedActivity, cancelSelectActivity, openForm}: Props){
	const activities = useActivities().activities!;

	const activity = activities.find(a => a.id === selectedActivity.id)!;
	
	return (
	<Card>
		<CardMedia
			component='img'
			src={`/images/categoryImages/${activity.category}.jpg`}
		>
		</CardMedia>
		<CardContent>
			<Typography variant="h5">{activity.title}</Typography>
			<Typography variant="subtitle1" fontWeight='light'>{new Date(activity.date).toLocaleDateString()}</Typography>
			<Typography variant="body1">{activity.description}</Typography>
			
		</CardContent>
		<CardActions>
			<Button onClick={() => openForm(activity.id)} color="primary">Edit</Button>
			<Button onClick={cancelSelectActivity} color="inherit">Cancel</Button>
		</CardActions>
	</Card>
  );
}