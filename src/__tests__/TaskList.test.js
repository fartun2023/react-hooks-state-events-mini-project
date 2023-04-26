import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";

const TASKS = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    completed: true,
  },
];

describe("TaskList", () => {
  it("displays all tasks passed as props", () => {
    render(<TaskList tasks={TASKS} />);
    const tasks = screen.getAllByTestId("task");
    expect(tasks).toHaveLength(TASKS.length);
  });
});