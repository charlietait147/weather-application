import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginForm from "../src/components/LoginForm";
import { MemoryRouter } from "react-router-dom";
import { describe, expect } from "vitest";

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

describe("LoginFormTests", () => {
  describe("Form input tests", () => {
    it("should not call the login function with the user data if no user input has been entered", () => {
      //Arrange
      //1. Set some test data - testSearchText
      const testSearchText = "";

      //2. Render the component pass in the testData and identify the search input and submit button
      render(
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      );

      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: testSearchText } });

      const submitButton = screen.getByRole("button", { name: "Login" });

      //Act
      //3. Simulate the user hitting the login button without entering any data
      fireEvent.click(submitButton);

      //Assert
      //4. Check that an error message is displayed
      expect(screen.getByText("Please enter all fields")).toBeInTheDocument();
    });
  });
});
