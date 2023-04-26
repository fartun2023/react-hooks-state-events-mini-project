mport "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import TaskList from '../components/TaskList'; // Add this import statement

test("displays all tasks passed as props", () => {
  const TASKS = [
    { id: 1, text: "Buy milk", category: "Groceries" },
    { id: 2, text: "Do laundry", category: "Household" },
    // add more tasks as needed
  ];

  render(<TaskList tasks={TASKS} />);
  const tasks = screen.getAllByTestId("task");
  expect(tasks).toHaveLength(TASKS.length);

  tasks.forEach((task, index) => {
    expect(task).toHaveTextContent(TASKS[index].text);
    expect(task).toHaveTextContent(TASKS[index].category);
  });
});

test("is removed from the list when the delete button is clicked", () => {
  render(<App />);
  const task = screen.queryByText(/Buy rice/);
  if (task) {
    const deleteButton = task.parentNode.querySelector("button");
    if (deleteButton) {
      fireEvent.click(deleteButton);
      expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
    }
  }
});