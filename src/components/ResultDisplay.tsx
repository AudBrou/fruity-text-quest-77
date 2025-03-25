
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ResultDisplayProps {
  result: string | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return (
    <div className="w-full max-w-lg mx-auto mb-16">
      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            className="glass-morphism subtle-shadow rounded-xl overflow-hidden p-8 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
  <motion.div
    className="inline-block mb-4 px-3 py-1 text-gray-500"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    Result
  </motion.div>
            
            <motion.h2
              className="text-2xl md:text-3xl font-display font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {result}
            </motion.h2>
            
            <motion.div
              className="h-1 w-24 bg-primary/50 mx-auto my-6 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ delay: 0.4, duration: 0.4 }}
            />
            
            <motion.div
              className="inline-block mb-4 px-3 py-1 text-gray-500 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Accuracy is <span className="font-medium text-foreground">{result}</span>.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResultDisplay;
