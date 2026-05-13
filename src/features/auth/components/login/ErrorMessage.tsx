import { motion, type Variants } from "framer-motion";

interface ErrorMessageProps {
  message: string;
}

const ERROR_VARIANTS: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={ERROR_VARIANTS}
      className="flex items-center justify-center w-full h-12 rounded-xl px-4 bg-red-50 border border-red-200">
      <p className="text-[14px] font-semibold text-red-600 "> {message}</p>
    </motion.div>
  );
};

export default ErrorMessage;