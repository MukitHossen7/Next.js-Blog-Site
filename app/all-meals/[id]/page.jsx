import React from "react";

const MealsDetails = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const meal = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    return data.meals;
  };
  const [singleMeal] = await meal();
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto pt-10 pb-10">
      <div className="">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 text-gray-800">
          <img
            src={singleMeal?.strMealThumb}
            className="w-full h-96 object-cover rounded-lg"
          />

          <h1 className="text-4xl font-bold mt-6 mb-2">
            {singleMeal?.strMeal}
          </h1>

          <div className="flex space-x-4 text-gray-600 mb-4">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {singleMeal?.strCategory}
            </p>
            <p>
              <span className="font-semibold">Cuisine:</span>{" "}
              {singleMeal.strArea}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
            <div className="prose max-w-none">
              {singleMeal?.strInstructions.split("\n").map((step, index) => (
                <p key={index} className="mb-4">
                  {step}
                </p>
              ))}
            </div>
          </div>

          {singleMeal?.strYoutube && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Video Tutorial</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={singleMeal?.strYoutube.replace("watch?v=", "embed/")}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealsDetails;
