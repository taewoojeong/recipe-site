import Recipe from '../components/Recipe';
import useRecipe from '../hooks/useRecipes';

export default function Japanese() {
	const recipes = useRecipe();

	return (
		<div>
			<div>
				{recipes
					.filter((recipe) => recipe.id.slice(0, 2) === 'jp')
					.map((recipe) => (
						<Recipe
							key={recipe.id}
							id={recipe.id}
							title={recipe.title}
							subtitle={recipe.subtitle}
							desc={recipe.desc}
							coverImg={recipe.coverImg}
							totalTime={recipe.totalTime}
						/>
					))}
			</div>
		</div>
	);
}
