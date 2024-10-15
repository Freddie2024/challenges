import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
    render(<Player name="Anna" score={0} />);

    const playerName = screen.getByText("Anna");
    const playerScore = screen.getByText("0");

    expect (playerName).toBeInTheDocument();
    expect (playerScore).toBeInTheDocument();

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });


  test("should call event-handler functions", async () => {
    
    const handleDecrease = jest.fn();
    const handleIncrease = jest.fn();
  
    render(<Player name="Anna" score={0} onDecreasePlayerScore={handleDecrease} onIncreasePlayerScore={handleIncrease} />);
  
    const decreaseButton = screen.getByRole("button", {
      name: /decrease/i,
    });
    const increaseButton = screen.getByRole("button", {
      name: /increase/i,
    });
  
    const user = userEvent.setup();
    await user.click(increaseButton);
    await user.click(decreaseButton);
    await user.click(increaseButton);
  
    expect(handleDecrease).toHaveBeenCalledTimes(1);
    expect(handleIncrease).toHaveBeenCalledTimes(2);
  });