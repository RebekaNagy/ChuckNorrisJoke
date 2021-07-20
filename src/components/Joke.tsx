interface IJokeProps {
	joke: string;
}

const Joke: React.FC<IJokeProps> = (props: IJokeProps) => {
	return <div>{props.joke}</div>;
};

export default Joke;
