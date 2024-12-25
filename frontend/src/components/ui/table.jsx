import React from 'react';

// Table component
export function Table({ children }) {
  return <table className="w-full border-collapse border border-gray-300">{children}</table>;
}

// TableHeader component
export function TableHeader({ children }) {
  return <thead className="bg-gray-200">{children}</thead>;
}

// TableRow component
export function TableRow({ children }) {
  return <tr className="border-b">{children}</tr>;
}

// TableHead component
export function TableHead({ children }) {
  return <th className="px-4 py-2 text-left">{children}</th>;
}

// TableBody component
export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

// TableCell component
export function TableCell({ children }) {
  return <td className="px-4 py-2">{children}</td>;
}
