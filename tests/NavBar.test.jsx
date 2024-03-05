import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "../src/components/NavBar";
import { Router, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";


const setSearchInput = vi.fn();

describe("NavBarTests", () => {

 // Attempted to test that the useNavigate hook was called with the correct parameter

//   it("should navigate to the Weather Page when the search button is clicked", async () => {
//     // Arrange
//     const testSearchText = "Dublin";
//     const history = createMemoryHistory();


//     render(
//       <Router history={history}>
//         <NavBar setSearchInput={setSearchInput} />
//       </Router>
//     );
//     const searchBar = screen.getByRole("searchbox");
//     const submitButton = screen.getByRole("button", { name: /search/i });

//     // Act
//     userEvent.type(searchBar, testSearchText);
//     userEvent.click(submitButton);

//     // Assert

//     await waitFor(() => {
//          expect(history.location.pathname).toBe('/weather/Dublin');
//         })
//   });

  it('should not call the searchBar with the searchText if no user input has been entered', () => {
    //Testing to see if the country name is displayed when I search Dublin in the search bar
    //Arrange
    //1. Set some test data - testSearchText
    const testSearchText = "";

    //2. Render the component pass in the testData and identify the search input and submit button
    render(<MemoryRouter><NavBar setSearchInput={setSearchInput} /></MemoryRouter>);
    const searchBar = screen.getByRole('searchbox');
    const submitButton = screen.getByRole('button', { name: /search/i });

    //Act
    //3. Simulate the user typing Dublin into the search box and clicking the submit button
    userEvent.click(submitButton);

    //Assert
    //4. Check that the country name is displayed
    expect(setSearchInput).not.toHaveBeenCalledWith(testSearchText); // Check if setSearchBarText was called
})
});
