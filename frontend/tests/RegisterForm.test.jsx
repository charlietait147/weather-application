import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RegisterForm from "../src/components/RegisterForm";
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

describe("RegisterFormTests", () => {
  describe("Form input tests", () => {
    it("should not call the register function with the user data if no user input has been entered", () => {
      //Arrange
      //1. Set some test data - testSearchText
      const testSearchText = "";

      //2. Render the component pass in the testData and identify the search input and submit button
      render(
        <MemoryRouter>
          <RegisterForm />
        </MemoryRouter>
      );

      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: testSearchText } });

      const submitButton = screen.getByRole("button", { name: "Register" });

      //Act
      //3. Simulate the user hitting the register button without entering any data
      fireEvent.click(submitButton);

      //Assert
      //4. Check that an error message is displayed
      expect(screen.getByText("Please enter all fields")).toBeInTheDocument();
    });
  });
  it("should register the user with the right data", async () => {
    // Arrange
    const testUsername = "Charlie";
    const testPassword = "9954";

    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    );

    //Simulate User Input
    const usernameInput = screen.getByRole("textbox", { name: "Username" });
    fireEvent.change(usernameInput, { target: { value: testUsername } });

    const passwordInput = screen.getByLabelText("Password");
    fireEvent.change(passwordInput, { target: { value: testPassword } });

    //Act
    //Simulate form submission
    const submitButton = screen.getByRole("button", { name: "Register" });
    fireEvent.click(submitButton);

    //Assert
    await waitFor(() =>
      expect(
        screen.getByText("User registered successfully")
      ).toBeInTheDocument()
    );
  });
  it("should not register the user with a short password", async () => {
    // Arrange
    const testUsername = "Charlie";
    const testPassword = "123";

    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    );

    //Simulate User Input
    const usernameInput = screen.getByRole("textbox", { name: "Username" });
    fireEvent.change(usernameInput, { target: { value: testUsername } });

    const passwordInput = screen.getByLabelText("Password");
    fireEvent.change(passwordInput, { target: { value: testPassword } });

    //Act
    //Simulate form submission
    const submitButton = screen.getByRole("button", { name: "Register" });
    fireEvent.click(submitButton);

    //Assert
    //Assert
    await waitFor(() =>
      expect(
        screen.getByText("Password must be between 4 and 10 characters")
      ).toBeInTheDocument()
    );
  });
  it("should not register the user with a password that contains letters", async () => {
    // Arrange
    const testUsername = "Charlie";
    const testPassword = "abc123";

    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    );

    //Simulate User Input
    const usernameInput = screen.getByRole("textbox", { name: "Username" });
    fireEvent.change(usernameInput, { target: { value: testUsername } });

    const passwordInput = screen.getByLabelText("Password");
    fireEvent.change(passwordInput, { target: { value: testPassword } });

    //Act
    //Simulate form submission
    const submitButton = screen.getByRole("button", { name: "Register" });
    fireEvent.click(submitButton);

    //Assert
    await waitFor(() =>
      expect(
        screen.getByText("Password must only contain numbers")
      ).toBeInTheDocument()
    );
  });
  describe("Navigation tests", () => {
    it("should navigate to the user dashboard page when the go back button is clicked", async () => {
      // Arrange
      render(
        <MemoryRouter>
          <RegisterForm />
        </MemoryRouter>
      );

      const loginLink = screen.getByRole("button", { name: "Go back" });

      // Act
      fireEvent.click(loginLink);

      // Assert
      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith(`/`);
      });
    });
  });
});
