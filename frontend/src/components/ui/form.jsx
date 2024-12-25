// form.jsx
import React from "react";

// Reusable Form Component
export function Form({ children, onSubmit, className }) {
  return (
    <form onSubmit={onSubmit} className={`space-y-4 ${className}`}>
      {children}
    </form>
  );
}

// Form Field Component
export function FormField({ label, children }) {
  return (
    <div className="form-item">
      <label className="form-label">{label}</label>
      {children}
    </div>
  );
}

// Form Item Component
export function FormItem({ children }) {
  return <div className="form-item">{children}</div>;
}

// Form Control Component
export function FormControl({ children }) {
  return <div className="form-control">{children}</div>;
}

// Form Message Component
export function FormMessage({ children }) {
  return <p className="form-message">{children}</p>;
}

// Form Label Component (this is what was missing)
export function FormLabel({ children }) {
  return <label className="form-label">{children}</label>;
}
