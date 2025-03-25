import React, { useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ImageUploader from "@/components/ImageUploader";
import ResultDisplay from "@/components/ResultDisplay";
import LoadingSpinner from "@/components/LoadingSpinner";
import { recognizeFruitOrVegetable } from "@/utils/imageRecognition";
import { toast } from "sonner";

const Index = () => {
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelect = async (file: File) => {
    try {
      setIsLoading(true);
      setResult(null);
      
      // Process the image
      const recognizedFruit = await recognizeFruitOrVegetable(file);
      
      // Update the result
      setResult(recognizedFruit);
      toast.success("Image analysée avec succès !");
    } catch (error) {
      console.error("Error processing image:", error);
      toast.error("Une erreur s'est produite lors de l'analyse de l'image");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pb-16">
        <Hero 
          title="Lettuce know what it is!" 
          description="Upload your fruit&vegetable pictures"
        />
        
        <ImageUploader 
          onImageSelect={handleImageSelect} 
          isLoading={isLoading} 
        />
        
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ResultDisplay result={result} />
        )}
        
        {/* Sample Images Section */}
        <motion.section 
          className="w-full max-w-4xl mx-auto px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h2 className="text-xl font-medium text-center mb-8">Exemples à essayer</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["pomme", "banane", "fraise", "carotte"].map((fruit, index) => (
              <div 
                key={fruit} 
                className="image-container subtle-shadow aspect-square bg-muted/30 rounded-lg overflow-hidden"
              >
                <img 
                  src={`https://source.unsplash.com/featured/?${fruit}`} 
                  alt={fruit}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.section>
      </main>
      
      <footer className="py-6 border-t border-gray-100">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Reconnaissance de Fruits et Légumes</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
