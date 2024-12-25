import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ShoppingCart, Utensils, Plane } from 'lucide-react';

export function RecentExpenses({ expenses }) {
  // Function to calculate total expenses for each category
  const getCategoryTotal = (category) => {
    return expenses
      .filter(expense => expense.category === category)
      .reduce((total, expense) => total + parseFloat(expense.amount || 0), 0);
  };

  // Get totals for each category
  const suppliesTotal = getCategoryTotal("Supplies");
  const mealsTotal = getCategoryTotal("Meals");
  const travelTotal = getCategoryTotal("Travel");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Recent Expenses</CardTitle>
        <p className="text-sm text-muted-foreground">Last 30 days</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {/* Display the total for each category */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-4 w-4" />
              <span>Supplies</span>
            </div>
            <span className="font-medium">${suppliesTotal.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Utensils className="h-4 w-4" />
              <span>Meals</span>
            </div>
            <span className="font-medium">${mealsTotal.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Plane className="h-4 w-4" />
              <span>Travel</span>
            </div>
            <span className="font-medium">${travelTotal.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
