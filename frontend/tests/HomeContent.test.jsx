import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomeContent from "../src/components/HomeContent";
import { describe } from "vitest";
import { MemoryRouter } from "react-router-dom";

const setSearchInput = vi.fn();
const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => {
  // Mocking the react-router-dom module
  return {
    useNavigate: () => mockNavigate, // Mock useNavigate function
    MemoryRouter: ({ children }) => children,
    Link: ({ children }) => children,
    NavLink: ({ children }) => children,
  };
});

describe("HomeContentTests", () => {
  describe("searchInput tests", () => {
    it("should not call the searchBar with the searchText if no user input has been entered", () => {
      //Testing to see if the country name is displayed when I search Dublin in the search bar
      //Arrange
      //1. Set some test data - testSearchText
      const testSearchText = "";

      //2. Render the component pass in the testData and identify the search input and submit button
      render(
        <MemoryRouter>
          <HomeContent setSearchInput={setSearchInput} />
        </MemoryRouter>
      );
      const searchBar = screen.getByTestId("home-content-search-bar");
      const submitButton = screen.getByTestId("home-content-search-button");

      //Act
      //3. Simulate the user typing Dublin into the search box and clicking the submit button
      userEvent.click(submitButton);

      //Assert
      //4. Check that the country name is displayed
      expect(setSearchInput).not.toHaveBeenCalledWith(testSearchText); // Check if setSearchBarText was called
    });
  });
  it("submits the form with user data", () => {
    // Arrange
    const testSearchText = "Dublin";

    render(
      <MemoryRouter>
        <HomeContent setSearchInput={setSearchInput} />
      </MemoryRouter>
    );

    //Simulate User Input
    const input = screen.getByTestId("home-content-search-bar");
    fireEvent.change(input, { target: { value: testSearchText } });

    //Act
    //Simulate form submission
    const submitButton = screen.getByTestId("home-content-search-button");
    fireEvent.click(submitButton);

    //Assert
    expect(input.value).toBe(testSearchText);
  });
  describe("navigate tests", () => {
    it("should call useNavigate with the correct path when the submit button is clicked", async () => {
      // Arrange
      render(
        <MemoryRouter>
          <HomeContent />
        </MemoryRouter>
      );

      const searchBar = screen.getByTestId("home-content-search-bar");
      const submitButton = screen.getByTestId("home-content-search-button");
      const searchText = "Dublin";
      const expectedPath = `/weather/${searchText}`;

      // Act
      userEvent.type(searchBar, searchText);
      userEvent.click(submitButton);

      // Assert
      expect(mockNavigate).toHaveBeenCalledWith(expectedPath);
    });
    it("should navigate back to the home screen when there is no user in local storage", async () => {
      // Arrange
      localStorage.removeItem("user");

      render(
        <MemoryRouter>
          <HomeContent />
        </MemoryRouter>
      );

      // Act
      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith("/");
      });
    });
  });
});
