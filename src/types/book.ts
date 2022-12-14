export interface ABook {
    id?: string;
    shelf: string
    imageLinks: { smallThumbnail: string };
    title: string;
    authors: string[]
}