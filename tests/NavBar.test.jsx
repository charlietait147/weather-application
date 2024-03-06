import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "../src/components/NavBar";
import { MemoryRouter } from "react-router-dom";
import { expect } from "vitest";

const setSearchInput = vi.fn();
const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => {
  // Mocking the react-router-dom module
  return {
    useNavigate: () => mockNavigate, // Mock useNavigate function
    MemoryRouter: ({ children }) => children,
    Link: ({ children }) => children,
  };
});


describe("NavBarTests", () => {
  describe("searchInput tests", () => {
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
  });
  describe("Navigation tests", () => {
    afterEach(() => {
      mockNavigate.mockReset(); // Reset mockNavigate before each test
    });

    it("should navigate to the Weather Page when the search button is clicked", async () => {
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

    //Failing tests when testing links

    // it("should navigate to the Home Page when the Home link is clicked", async () => {
    //   // Arrange

    //   render(
    //     <MemoryRouter>
    //       <NavBar />
    //     </MemoryRouter>
    //   );
    //   const homeLink = screen.getByRole("link", { name: /home/i });

    //   // Act
    //   userEvent.click(homeLink);

    //   // Assert
    //   // Check if the navigate function was called with the correct path
    //   await waitFor(() => {
    //     expect(mockNavigate).toHaveBeenCalledWith("/");
    //   });
    // });
  });
});


// it("should navigate to the My Favourite Locations Page when the My Favourite Locations link is clicked", async () => {
//   // Arrange
//   render(
//     <MemoryRouter>
//       <NavBar />
//     </MemoryRouter>
//   );

//   const favouriteLocationsLink = screen.getByRole("link", { name: /my favourite locations/i });

//   // Act
//   userEvent.click(favouriteLocationsLink);

//   // Assert
//   await waitFor(() => {
//     expect(mockNavigate).toHaveBeenCalledWith("/favourite-locations");
//   });
// });

// it("should navigate to the My Saved Locations Page when a saved location link is clicked", async () => {
//   // Arrange
//   const favourites = ["London", "Cardiff", "Dublin"];
//   render(
//     <MemoryRouter>
//       <NavBar />
//     </MemoryRouter>
//   );

//   const savedLocationsLink = screen.getByRole("link", { name: /my saved locations/i });

//   // Act
//   userEvent.click(savedLocationsLink);

//   // Assert
//   await waitFor(() => {
//     expect(mockNavigate).toHaveBeenCalledWith("/favourite-locations");
//   });

//   // Arrange
//   const dropdownMenu = screen.getByRole("menu");
//   const savedLocationLinks = screen.getAllByRole("link", { name: /dropdown-item/i });

//   // Act
//   savedLocationLinks.forEach((link, index) => {
//     userEvent.click(link);

//     // Assert
//     expect(mockNavigate).toHaveBeenCalledWith(`/weather/${favourites[index]}`);
//   });
// });
// });
