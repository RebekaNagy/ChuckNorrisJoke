import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

interface IJokeProps {
	joke: string;
}

const Joke: React.FC<IJokeProps> = (props: IJokeProps) => {
	return (
		<Card>
			<CardContent>
				<Typography component="h4">Joke</Typography>
				<br />
				<Typography variant="body2" component="p">
					{props.joke || "Choose a category..."}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Joke;
