
/**
 * This is a mock image recognition service that simulates fruit and vegetable recognition.
 * In a real application, this would be replaced with an actual ML model or API call.
 */

// Sample fruits and vegetables for the mock recognition
const fruitsAndVegetables = [
  "Pomme", "Banane", "Orange", "Fraise", "Raisin",
  "Ananas", "Mangue", "Kiwi", "Pêche", "Abricot",
  "Tomate", "Concombre", "Carotte", "Poivron", "Aubergine",
  "Brocoli", "Chou-fleur", "Laitue", "Épinard", "Courgette"
];

// Simulate recognition delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Mock function to recognize fruits and vegetables from an image
 * @param image The image file to be analyzed
 * @returns A promise that resolves to the recognized fruit or vegetable
 */
export const recognizeFruitOrVegetable = async (image: File): Promise<string> => {
  // Log for debugging
  console.log("Analyzing image:", image.name, "Size:", Math.round(image.size / 1024), "KB");
  
  // Simulate API processing time
  const processingTime = 1500 + Math.random() * 1000;
  await delay(processingTime);
  
  // For demo purposes, generate a deterministic result based on the image file size
  // In a real app, this would be replaced with actual ML model inference
  const index = Math.floor((image.size % 1000) / 50) % fruitsAndVegetables.length;
  return fruitsAndVegetables[index];
};
