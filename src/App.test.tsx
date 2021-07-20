import React from "react";
import { render, screen } from "@testing-library/react";
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
