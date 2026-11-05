type Recipe = {
  id: number;
  name: string;
  cuisine: string;
  cookTimeMinutes: number;
  rating: number;
  image: string;
};

export default async function Home() {
  const res = await fetch("https://dummyjson.com/recipes?limit=9");
  const data = await res.json();
  const recipes: Recipe[] = data.recipes;
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Easy recipes for every day</h2>
      <p className="text-gray-600 mb-6">
        Find a simple recipe and cook something tasty today.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className=" bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{recipe.name}</h3>
              <p className="text-sm text-gray-500">
                {recipe.cuisine} - {recipe.cookTimeMinutes} min
              </p>
              <p className="text-sm text-green-700 mt-2">
                Rating: {recipe.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
