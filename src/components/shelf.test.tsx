import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Shelv } from "../types/shelf";
import Shelf from "./shelf-component";
import {store} from '../state/store';

describe("Shelf Component Test", () => {
  test("test rendering books", () => {
    const bookData = [
      {
        id: "nggnmAEACAAJ",
        authors: ["William E. Shotts, Jr."],
        shelf: "currentlyReading",
        title: "test title",
        imageLinks: { smallThumbnail: "test path" },
      },
    ];
     const shelf: Shelv = { key: 'read', name: 'Read' } ;
    render(
     <Provider store={store} ><Shelf books={bookData} key={shelf.key} shelf={shelf}/></Provider>
    );
    const renderElement = screen.getByText('Move To')
    expect(renderElement).toBeInTheDocument();
  });
});
