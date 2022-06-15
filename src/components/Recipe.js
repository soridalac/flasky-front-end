import './Recipe.css';
import PropTypes from "prop-types";

const Recipe = (props) => {
    return (
        <div>
          <h1 className="recipe___name">{props.name}</h1>
          <ul>
            <li>flour: {props.flour}</li>
            <li>Milk: {props.milk}</li>
            <li>Eggs: {props.eggs}</li>
            {/* <li>Delicious: {recipe.delicious.toString()}</li> */}
            <li>Delicious: {props.delicious ? "taste so good" : "Not for me"}</li>
          </ul>
        </div>
      );
    };

Recipe.protoTypes = {
    name: PropTypes.string.isRequired,
    flour: PropTypes.string.isRequired,
    milk: PropTypes.string.isRequired,
    delicious: PropTypes.bool,
    id: PropTypes.number.isRequired
}

export default Recipe;