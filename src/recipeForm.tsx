import React, { useState } from "react";

interface RecipeFormProps {
  onSubmit: (recipe: {
    title: string;
    description: string;
    ingredients: string[];
    steps: string[];
    image?: string;
  }) => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [image, setImage] = useState<string | undefined>(undefined); // State for image URL

  const handleAddIngredient = () => setIngredients([...ingredients, ""]);
  const handleAddStep = () => setSteps([...steps, ""]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // Create a new FileReader object
      reader.onloadend = () => {
        // When file reading is completed
        if (typeof reader.result === "string") {
          setImage(reader.result); // Set the image URL in the state
        }
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, ingredients, steps, image });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Ingredients
        </label>
        {ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            value={ingredient}
            onChange={(e) => {
              const newIngredients = [...ingredients];
              newIngredients[index] = e.target.value;
              setIngredients(newIngredients);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        ))}
        <button
          type="button"
          onClick={handleAddIngredient}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
        >
          Add Ingredient
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Steps</label>
        {steps.map((step, index) => (
          <input
            key={index}
            type="text"
            value={step}
            onChange={(e) => {
              const newSteps = [...steps];
              newSteps[index] = e.target.value;
              setSteps(newSteps);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
          />
        ))}
        <button
          type="button"
          onClick={handleAddStep}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
        >
          Add Step
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          placeholder="Paste image URL here"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default RecipeForm;
