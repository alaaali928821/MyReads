import { render, screen } from "@testing-library/react";
import FindABook from "./find_A_book-component";
import { MemoryRouter } from 'react-router-dom';
describe("Shelf Component Test", () => {
  test("test rendering books", () => {
    render(<FindABook />, {wrapper: MemoryRouter});
    const renderElement = screen.getByText('Add a book')
    expect(renderElement).toBeInTheDocument();
  });
});
