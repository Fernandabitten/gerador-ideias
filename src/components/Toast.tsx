import { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}

export default function Toast({ message, type = "info", onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Fecha sozinho depois de 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  const baseStyles =
    "fixed top-5 right-5 px-4 py-2 rounded shadow-lg text-white text-sm animate-fade-in";
  const typeStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return <div className={`${baseStyles} ${typeStyles[type]}`}>{message}</div>;
}
