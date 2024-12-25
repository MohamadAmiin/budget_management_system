import { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";

export function ExpenseHistory() {
  const [expenses, setExpenses] = useState([
    { id: 1, date: "2024-12-01", description: "Office Supplies", category: "Office", amount: 150.0, status: "Pending" },
    { id: 2, date: "2024-12-05", description: "Travel Expenses", category: "Travel", amount: 320.0, status: "Approved" },
    { id: 3, date: "2024-12-10", description: "Client Dinner", category: "Food", amount: 85.0, status: "Rejected" },
    { id: 4, date: "2024-12-15", description: "Software License", category: "Software", amount: 250.0, status: "Pending" },
    { id: 5, date: "2024-12-20", description: "Employee Benefits", category: "Benefits", amount: 500.0, status: "Approved" },
  ]);
  const [filter, setFilter] = useState("All"); // Track the selected filter (All, Approved, Pending)

  // Filter expenses based on the selected filter state
  const filteredExpenses = expenses.filter((expense) => {
    if (filter === "All") return true;
    return expense.status === filter;
  });

  // Handle approval/rejection of an expense
  const handleApproval = (expenseId, status) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === expenseId ? { ...expense, status } : expense
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Expense History</h2>
        <div className="space-x-2">
          <Button
            variant={filter === "All" ? "secondary" : "outline"}
            onClick={() => setFilter("All")}
            className="bg-black text-white"
          >
            All
          </Button>
          <Button
            variant={filter === "Pending" ? "secondary" : "outline"}
            onClick={() => setFilter("Pending")}
          >
            Pending
          </Button>
          <Button
            variant={filter === "Approved" ? "secondary" : "outline"}
            onClick={() => setFilter("Approved")}
          >
            Approved
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredExpenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.date}</TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell>${expense.amount.toFixed(2)}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    expense.status === "Approved"
                      ? "success"
                      : expense.status === "Rejected"
                      ? "danger"
                      : "warning"
                  }
                >
                  {expense.status}
                </Badge>
              </TableCell>
              <TableCell>
                {expense.status === "Pending" && (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => handleApproval(expense.id, "Approved")}
                      className="mr-2"
                    >
                      Approve
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleApproval(expense.id, "Rejected")}
                    >
                      Reject
                    </Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
