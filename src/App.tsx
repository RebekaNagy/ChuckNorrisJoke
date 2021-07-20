import React, { useEffect, useState } from "react";
import CategoryItem from "./components/CategoryItem";
import Joke from "./components/Joke";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Container } from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles({
	root: {
		width: "80%",
		display: "flex",
		flexDirection: "row",
		margin: "2%",
	},
	card: {
		float: "right",
		alignItems: "center",
	},
	list: {
		width: "100px",
		height: "10px",
		position: "absolute",
		display: "none",
	},
});

function App() {
	const classes = useStyles();

	const [loading, setLoading] = useState(true);
	const [jokeCategories, setJokeCategories] = useState([]);
	const [joke, setJoke] = useState("");

	async function fetcher(url: string) {
		return await fetch(url).then((response) => response.json());
	}

	useEffect(() => {
		if (loading) {
			fetcher("https://api.chucknorris.io/jokes/categories").then(
				(data) => {
					setJokeCategories(data);
					setLoading(false);
				}
			);
		}
	}, [jokeCategories, loading]);

	const categoryClickHandler = (categoryName: string) => {
		fetcher(
			"https://api.chucknorris.io/jokes/random?category=" + categoryName
		).then((data) => {
			setJoke(data.value);
		});
	};

	const categoryItems = jokeCategories.map((c) => (
		<CategoryItem
			key={jokeCategories.indexOf(c)}
			category={c}
			onCategoryClicked={categoryClickHandler}
		/>
	));

	return (
		<div className={classes.root}>
			<Container maxWidth="xs">
				{loading ? (
					<div>Loading...</div>
				) : (
					<List>
						<ListSubheader>Categories</ListSubheader>
						{categoryItems}
					</List>
				)}
			</Container>
			<Container maxWidth="xs">
				<Joke joke={joke} />
			</Container>
		</div>
	);
}

export default App;
