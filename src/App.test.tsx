import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import CategoryItem from "./components/CategoryItem";
import { act } from "react-dom/test-utils";
import Joke from "./components/Joke";

test("renders CategoryItem", () => {
	act(() => {
		render(
			<CategoryItem category={"career"} onCategoryClicked={() => {}} />
		);
	});
	let listItem = screen.getByText(/career/i);
	expect(listItem).toBeInTheDocument();

	act(() => {
		render(
			<CategoryItem category={"explicit"} onCategoryClicked={() => {}} />
		);
	});
	listItem = screen.getByText(/career/i);
	expect(listItem).toBeInTheDocument();
});

test("renders Joke", () => {
	act(() => {
		render(<Joke joke={"Punchline."} open={true} handleClose={() => {}} />);
	});
	let jokeCard = screen.getByText(/Punchline./i);
	expect(jokeCard).toBeInTheDocument();
});

test("loading text before fetch", () => {
	render(<App />);
	const loadingText = screen.getByText(/Loading/i);
	expect(loadingText).toBeInTheDocument();
});

test("categories on screen after fetch", async () => {
	render(<App />);
	await waitFor(
		() => {
			const categoriesText = screen.getByText(/Categories/i);
			expect(categoriesText).toBeInTheDocument();
		},
		{ timeout: 500 }
	);
});
