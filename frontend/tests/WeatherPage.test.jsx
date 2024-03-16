import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import WeatherPage from "../src/components/WeatherPage";
import { act } from "react-dom/test-utils";

describe("WeatherPageTests", () => {
  it("should render the ID query parameter with the name of the location", async () => {
    //Arrange
    const testId = "Dublin";

    //Act
    render(
      <MemoryRouter initialEntries={[`/weather/${testId}`]}>
        <WeatherPage />
      </MemoryRouter>
    );

    //Assert
    await waitFor(() => {
      expect(screen.getByText(testId)).toBeInTheDocument();
    });
  });

  /* Attempted to test when a URL parameter is empty/invalid, but the test failed as 
there are no query parameters to control of the localhost:3000/dublin URL.
*/

  //   it("should not render the ID query parameter with the name of the location", async () => {
  //     //Arrange
  //     const testId = "";

  //     //Act
  //     render(
  //       <MemoryRouter initialEntries={[`/weather/${testId}`]}>
  //         <WeatherPage />
  //       </MemoryRouter>
  //     );

  //     //Assert
  //     await waitFor(() => {
  //       expect(screen.queryByText(testId)).not.toBeInTheDocument();
  //     });
  //   });


it("should render loading text when the page is loading", async () => {
    // Arrange
    const testId = "Dublin";

    // Act
    await act(async () => {
        render(
            <MemoryRouter initialEntries={[`/weather/${testId}`]}>
                <WeatherPage />
            </MemoryRouter>
        );
    });

    // Assert
    expect(screen.getByText("Loading...")).toBeInTheDocument();
});
});
