import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "../src/components/NavBar";
import { describe } from "vitest";
import { MemoryRouter } from "react-router-dom";

const setSearchBarText = vi.fn();

describe("NavBarTests", () => {
  describe("searchBarText tests", () => {
    it("should call the searchBar with the searchText", async () => {
      //Testing to see if the country name is displayed when I search Dublin in the search bar
      //Arrange
      //1. Set some test data - testSearchText
      const testSearchText = "Dublin";

      //2. Render the component pass in the testData and identify the search input and submit button
      render(
        <MemoryRouter>
          <NavBar setSearchBarText={setSearchBarText} />{" "}
        </MemoryRouter>
      );
      const searchBar = screen.getByRole("searchbox");
      const submitButton = screen.getByRole("img", { name: /search icon/i });

      //Act
      //3. Simulate the user typing Dublin into the search box and clicking the submit button
      await userEvent.type(searchBar, testSearchText);
      userEvent.click(submitButton);

      //Assert
      //4. Check that the country name is displayed
      await waitFor(() => {
        expect(setSearchBarText).toHaveBeenCalledWith(testSearchText); // Check if setSearchBarText was called
      });
    });
  });
});
