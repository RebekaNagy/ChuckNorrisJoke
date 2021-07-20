import { makeStyles, Modal, Typography } from "@material-ui/core";

interface IJokeProps {
	joke: string;
	open: boolean;
	handleClose: () => void;
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)",
	},
}));

const Joke: React.FC<IJokeProps> = (props: IJokeProps) => {
	const classes = useStyles();
	return (
		<Modal open={props.open} onClose={props.handleClose}>
			<Typography className={classes.paper} variant="body2" component="p">
				{props.joke || "Loading..."}
			</Typography>
		</Modal>
		/*<Card>
			<CardContent>
				<Typography component="h4">Joke</Typography>
				<br />
				<Typography variant="body2" component="p">
					{props.joke || "Choose a category..."}
				</Typography>
			</CardContent>
		</Card>*/
	);
};

export default Joke;
