import React, { useEffect, useState } from "react";
import CategoryItem from "./components/CategoryItem";
import Joke from "./components/Joke";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles({
	root: {
		width: "80%",
		maxWidth: 500,
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
					console.log(jokeCategories);
				}
			);
		}
	}, [jokeCategories, loading]);

	const categoryClickHandler = (categoryName: string) => {
		console.log("clicked " + categoryName);
		fetcher(
			"https://api.chucknorris.io/jokes/random?category=" + categoryName
		).then((data) => {
			setJoke(data.value);
			console.log(joke);
		});
	};

	const categoryItems = jokeCategories.map((c) => (
		<ListItem key={jokeCategories.indexOf(c)}>
			<CategoryItem
				category={c}
				onCategoryClicked={categoryClickHandler}
			/>
		</ListItem>
	));

	return (
		<div className={classes.root}>
			<h3>Categories</h3>
			{loading ? <div>Loading...</div> : <List>{categoryItems}</List>}
			<Joke joke={joke} />
		</div>
	);
}

export default App;
