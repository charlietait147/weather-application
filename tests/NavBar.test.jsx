import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "../src/components/NavBar";
import { MemoryRouter} from "react-router-dom";
import { expect } from "vitest";

const setSearchInput = vi.fn();
const mockNavigate = vi.fn();


vi.mock("react-router-dom", () => { // Mocking the react-router-dom module
    return {
      useNavigate: () => mockNavigate, // Mock useNavigate function
      MemoryRouter: ({ children}) => children,
      Link: ({ children }) => children 
    };
  });

describe("NavBarTests", () => {
  it("should not call the searchBar with the searchText if no user input has been entered", () => {
    //Testing to see if the country name is displayed when I search Dublin in the search bar
    //Arrange
    //1. Set some test data - testSearchText
    const testSearchText = "";

    //2. Render the component pass in the testData and identify the search input and submit button
    render(
      <MemoryRouter>
        <NavBar setSearchInput={setSearchInput} />
      </MemoryRouter>
    );
    const searchBar = screen.getByRole("searchbox");
    const submitButton = screen.getByRole("button", { name: /search/i });

    //Act
    //3. Simulate the user typing Dublin into the search box and clicking the submit button
    userEvent.click(submitButton);

    //Assert
    //4. Check that the country name is displayed
    expect(setSearchInput).not.toHaveBeenCalledWith(testSearchText); // Check if setSearchBarText was called
  });
  it("submits the form with user data", () => {
    // Arrange
    const testSearchText = "Dublin";
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    //Simulate User Input
    const input = screen.getByRole("searchbox");
    fireEvent.change(input, { target: { value: testSearchText } });

    //Act
    //Simulate form submission
    const submitButton = screen.getByRole("button", { name: /search/i });
    fireEvent.click(submitButton);

    //Assert
    expect(input.value).toBe(testSearchText);
  });
  it ("should navigate to the Weather Page when the search button is clicked", async () => {
    // Arrange
    const testSearchText = "Dublin";
    
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const searchBar = screen.getByRole("searchbox");
    const submitButton = screen.getByRole("button", { name: /search/i });

    // Act
    userEvent.type(searchBar, testSearchText);
    userEvent.click(submitButton);

    // Assert 
    // Check if the navigate function was called with the correct path
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(`/weather/${testSearchText}`);
    });
  });
});
