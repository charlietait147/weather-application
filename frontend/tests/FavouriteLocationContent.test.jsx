//1. Test
//Check if the localstorage is called when the component is rendered

import { render } from "@testing-library/react";
import FavouriteLocationContent from "../src/components/FavouriteLocationContent";
import { describe } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("FavouriteLocationContentTests", () => {
  describe("LocalStorage tests", () => {
    it("should call localStorage when the component is rendered", () => {
      // Arrange
      const mockLocalStorage = vi.spyOn(
        window.localStorage.__proto__,
        "getItem"
      );
      // Act
      render(
        <MemoryRouter>
          <FavouriteLocationContent />
        </MemoryRouter>
      );
      // Assert
      expect(mockLocalStorage).toHaveBeenCalled();
    });
  });
  describe("Filter function tests", () => {
    it("should filter out the favouriteToRemove from the favourites array", () => {
      // Arrange
      const favouriteToRemove = "Cardiff";
      const favourites = ["Dublin", "Cardiff", "London"];
      const expectedFavourites = ["Dublin", "London"];

      // Act
      const updatedFavourites = favourites.filter(
        (favourite) => favourite !== favouriteToRemove
      );

      // Assert
      expect(updatedFavourites).toEqual(expectedFavourites);
    });
    it("should set the updated favourites array to local storage", () => {
      // Arrange
      const updatedFavourites = ["Dublin", "London"];
      const mockLocalStorage = vi.spyOn(
        window.localStorage.__proto__,
        "setItem"
      );

      render(
        <MemoryRouter>
          <FavouriteLocationContent />
        </MemoryRouter>
      );
      // Act
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));

      // Assert
      expect(mockLocalStorage).toHaveBeenCalledWith(
        "favourites",
        JSON.stringify(updatedFavourites)
      );
    });
  });
});
