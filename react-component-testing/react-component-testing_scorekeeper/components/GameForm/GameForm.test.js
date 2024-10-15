import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />)
  const textboxes = screen.getAllByRole("textbox");
  expect(textboxes).toHaveLength(2);
  const button = screen.getByRole("button");
  expect (button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm onCreateGame={jest.fn()} />);
  const form = screen.getByRole("form", { name: /create a new game/i });
  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const handleCreateGame = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={handleCreateGame} />);

  const submittedDataObject = {
    nameOfGame: "Dodelido",
    playerNames: ["John Doe", "Jane Doe"],
  };

  const nameOfGameInput = screen.getByLabelText(/name of game/i);
  const playerNamesInput = screen.getByLabelText(/player names, separated by comma/i)
 
  await user.type(nameOfGameInput, "Dodelido");
  await user.type(playerNamesInput, "John Doe, Jane Doe");

  const submitButton = screen.getByRole("button", { name: /create game/i });
  await user.click(submitButton);

  expect(handleCreateGame).toHaveBeenCalledTimes(1);
  expect(handleCreateGame).toHaveBeenCalledWith(submittedDataObject);
});

test("does not submit form if one input field is left empty", async () => {
  const handleCreateGame = jest.fn();
  const user = userEvent.setup();
  
  render(<GameForm onCreateGame={handleCreateGame} />);
  
  const nameOfGameInput = screen.getByLabelText(/name of game/i);
  await user.type(nameOfGameInput, "Dodelido");
  
  const submitButton = screen.getByRole("button", { name: /create game/i });
  await user.click(submitButton);
  
  expect(handleCreateGame).not.toHaveBeenCalled();
  });
