import RecipeList from "./components/RecipeList";

function App() {
  const recipes = [
    {
      id: 0,
      name: "Pancake",
      flour: "all-purpose",
      milk: "3/4 cup",
      eggs: "2",
      delicious: true
      
    },
    {
      id: 1,
      name: "waffle",
      flour: "all-purpose",
      milk: "3/4 cup",
      eggs: "2",
      delicious: true
    }
  ];
  return (
  <div>
    {/* <h1>Drivers</h1> */}
    <RecipeList recipes={recipes}/>
    {/* <Driver /> */}
  </div>
  );
  }
  

export default App;
