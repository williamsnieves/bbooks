import React from "react";
import { render } from "@testing-library/react";
import Books from "./Books";

test("Check if books are available", () => {
  const propsDummy = {
    books: [
      {
        id: 1,
        volumeInfo: {
          title: "test book",
          authors: "test author",
          description: "test description"
        }
      }
    ]
  };
  const { getByText } = render(<Books {...propsDummy} />);
  const containerElement = getByText("Books availables");
  expect(containerElement).toBeInTheDocument();
});

test("check length of book list", () => {
  const propsDummy = {
    books: [
      {
        id: 1,
        volumeInfo: {
          title: "test book",
          authors: "test author",
          description: "test description"
        }
      }
    ]
  };
  const { getAllByTestId } = render(<Books {...propsDummy} />);
  const containerElement = getAllByTestId("book-item");
  expect(containerElement).not.toHaveLength(0);
});
