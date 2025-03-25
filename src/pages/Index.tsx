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
          title="Lettuce know what it is !"
          description=" " />
        
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
          <h2 className="text-xl font-medium text-center mb-8">Give it a try !</h2>
<div className="grid grid-cols-4 gap-4">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFAaOkegOMXO_eKaOKeHx0tY6A-F9CPD-ZOg&s" alt="Image 1" className="w-full h-48 object-cover" />
  <img src="https://terrabacchus.fr/wp-content/uploads/sites/25/2017/05/Pomme-Fuji.jpg" alt="Image 2" className="w-full h-48 object-cover" />
  <img src="https://mapetiteassiette.com/wp-content/uploads/2021/06/AdobeStock_254635130-min-min.png" alt="Image 3" className="w-full h-48 object-cover" />
  <img src="https://www.aprifel.com/wp-content/uploads/2019/02/carotte.jpg" alt="Image 4" className="w-full h-48 object-cover" />
</div>
        </motion.section>
      </main>
      
      <footer className="py-6 border-t border-gray-100">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Smartichoke</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
