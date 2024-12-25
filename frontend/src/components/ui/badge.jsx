import { cn } from "../../lib/utils" // A utility function to merge classes (optional)

/**
 * Badge Component
 * @param {Object} props - Badge props
 * @param {string} props.variant - The style variant of the badge (e.g., "default", "success", "danger", etc.)
 * @param {string} props.className - Additional classes for custom styling
 * @param {React.ReactNode} props.children - Content inside the badge
 */
export function Badge({ variant = "default", className, children, ...props }) {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-800",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
