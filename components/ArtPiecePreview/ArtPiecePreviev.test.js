import { render, screen, fireEvent } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

it("renders art piece with title, artist", () => {
  render(
    <ArtPiecePreview artist="Steve Johnson" title="Orange Red and Green" />
  );
  const artPieceArtist = screen.getByText("Steve Johnson");
  expect(artPieceArtist).toBeInTheDocument();

  const artPieceTitle = screen.getByText("Orange Red and Green");
  expect(artPieceTitle).toBeInTheDocument();
});
