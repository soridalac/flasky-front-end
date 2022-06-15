import Recipe from "./Recipe.js";
import PropTypes from "prop-types";

const RecipeList = (props) => {
    const recipeComponents = props.recipes.map(
        (recipe) => {
            return (
                <Recipe
                id= {recipe.id}
                name= {recipe.name}
                flour= {recipe.flour}
                milk= {recipe.mik}
                eggs= {recipe.eggs}
                delicious= {recipe.delicious}
                />
            )
        }
    );
    return (
        <div>
            <h1>Recipes</h1>
            {recipeComponents}
        </div>
    )
};

RecipeList.propTypes = {
    recipes: PropTypes.array.isRequired
};


export default RecipeList;