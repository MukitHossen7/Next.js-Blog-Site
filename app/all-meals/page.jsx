import Link from "next/link";
import SearchComponent from "../components/SearchComponent";
import styles from "./style.module.css";

export const metadata = {
  title: "All Meals",
  description: "fetch all meals from the meals database",
};
const AllMeals = async ({ searchParams }) => {
  const query = await searchParams;
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query?.search}`
      );
      const data = await res.json();
      return data.meals;
    } catch (err) {
      console.log(err);
    }
  };
  const meals = await fetchMeals();

  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto pt-10 pb-10 flex flex-col items-center justify-center">
      <SearchComponent></SearchComponent>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7">
        {meals?.map((meal) => (
          <div key={meal?.idMeal} className="bg-gray-200 p-3 rounded-md">
            <Link href={`/all-meals/${meal.idMeal}`}>
              <div>
                <img
                  src={meal?.strMealThumb}
                  className="w-full h-32  object-cover rounded-lg"
                />
                <div className="flex items-center justify-between mt-2">
                  <h3 className={`font-semibold text-lg ${styles?.title}`}>
                    {meal?.strMeal}
                  </h3>
                  <span className="text-xs bg-green-100 text-green-600 px-2 rounded-full">
                    {meal?.strArea}
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  {meal?.strInstructions?.slice(0, 100)}...
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMeals;
