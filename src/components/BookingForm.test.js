import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const availableTimes = ["16:00", "17:30", "18:50", "19:00", "20:00", "21:00"];
test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={availableTimes} />);
  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();
});

test("Check available times", () => {
  expect(availableTimes[0]).toBe("16:00");
});

test("check form inputs", () => {
  render(<BookingForm availableTimes={availableTimes} />);
  const submit = screen.getByTestId("submit");
  expect(submit).toBeInTheDocument();

  const occasion = screen.getByTestId("ocasion");
  expect(occasion).toBeInTheDocument();

  const guests = screen.getByTestId("guests");
  expect(guests).toBeInTheDocument();

  const time = screen.getByTestId("time");
  expect(time).toBeInTheDocument();
});
