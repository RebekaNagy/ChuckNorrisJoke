import ListItem from "@material-ui/core/ListItem";

interface ICategoryProps {
	category: string;
	onCategoryClicked: (cat: string) => void;
}

const CategoryItem: React.FC<ICategoryProps> = (props: ICategoryProps) => {
	return (
		<ListItem
			button
			onClick={() => props.onCategoryClicked(props.category)}
		>
			{props.category}
		</ListItem>
	);
};

export default CategoryItem;
