import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomeContent from "../src/components/HomeContent";
import { describe } from "vitest";
import { MemoryRouter } from "react-router-dom";


const setSearchInput = vi.fn();


describe("HomeContentTests", () => {
    describe("searchInput tests", () => {
       it('should not call the searchBar with the searchText if no user input has been entered', () => {
            //Testing to see if the country name is displayed when I search Dublin in the search bar
            //Arrange
            //1. Set some test data - testSearchText
            const testSearchText = "";

            //2. Render the component pass in the testData and identify the search input and submit button
            render(<MemoryRouter><HomeContent setSearchInput={setSearchInput} /></MemoryRouter>);
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

        // Attempted to test that the useNavigate hook was called with the correct parameter

    //     it('navigates to the correct page on submit', async () => {
    //         const history = createMemoryHistory();
    //         render(
    //           <Router history={history}>
    //             <HomeContent />
    //           </Router>
    //         );
        
    //         // Simulate user typing 'Dublin' into the search input
    //         userEvent.type(screen.getByRole('searchbox'), 'Dublin');
        
    //         // Simulate user clicking the submit button
    //         userEvent.click(screen.getByRole('button', { name: /search/i }));
        
    //         // Wait for the component to update
    //         await waitFor(() => {
    //           // Check if the user has been redirected to the correct page
    //           expect(history.location.pathname).toBe('/weather/Dublin');
    //         });
    // });
})



