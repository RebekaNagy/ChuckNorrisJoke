interface ICategoryProps {
	category: string;
	onCategoryClicked: (cat: string) => void;
}

const CategoryItem: React.FC<ICategoryProps> = (props: ICategoryProps) => {
	return (
		<div onClick={() => props.onCategoryClicked(props.category)}>
			{props.category}
		</div>
	);
};

export default CategoryItem;
