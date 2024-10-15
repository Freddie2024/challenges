import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
    render(<Input labelText="Your name" placeholder="Enter your name" name="username"/>);

    const inputElement = screen.getByPlaceholderText("Enter your name");
    expect(inputElement).toBeInTheDocument();

    const inputLabel = screen.getByLabelText("Your name");
    expect(inputLabel).toBeInTheDocument();

    expect(inputElement).toHaveAttribute("name", "username")
});

test("calls callback on every user input", async () => {

    const handleChange = jest.fn();
    const user = userEvent.setup();
   
    render(<Input labelText="Your name" name="username" onChange={handleChange} />);

    const inputElement = screen.getByRole("textbox");

    await user.type(inputElement, "Frida");

    expect(handleChange).toHaveBeenCalledTimes(5);
});
