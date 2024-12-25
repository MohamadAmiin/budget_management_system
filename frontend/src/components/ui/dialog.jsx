import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Main Dialog Component
export function Dialog({ open, onOpenChange, children, title }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <div className="absolute top-0 left-0 right-0 bg-gray-100 p-4">
              <h2 className="text-xl font-semibold">{title}</h2>
            </div>
            {children}
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-black"
              onClick={() => onOpenChange(false)}
              aria-label="Close Dialog"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Trigger Component
export function DialogTrigger({ asChild, children }) {
  return React.cloneElement(children, {
    onClick: (e) => {
      e.preventDefault();
      if (typeof children.props.onClick === "function") {
        children.props.onClick(e);
      }
    },
  });
}

// Content Wrapper
export function DialogContent({ children, className }) {
  return <div className={`space-y-4 ${className}`}>{children}</div>;
}

// Header Wrapper (No longer needed since the title is now part of Dialog)
export function DialogHeader({ children }) {
  return <div className="border-b pb-2">{children}</div>;
}

// Title Component (No longer needed since the title is now part of Dialog)
export function DialogTitle({ children }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}

// DialogDescription Component
export function DialogDescription({ children }) {
  return <p className="text-sm text-gray-500">{children}</p>;
}

// DialogFooter Component
export function DialogFooter({ children }) {
  return (
    <div className="flex justify-end space-x-2 border-t pt-4">
      {children}
    </div>
  );
}
