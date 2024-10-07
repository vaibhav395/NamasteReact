import { render, act, screen, fireEvent } from "@testing-library/react";
import MenuRestaurant from "../MenuRestaurant";
import MOCK_DATA from "../../components/mocks/RestaurantMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
test("Should load restaurant menu component", async () => {
  await act(async () => {
    render(
        <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
        <MenuRestaurant />
        <Cart/>
      </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("Tandoor Se (31)");

  fireEvent.click(accordianHeader);

  const addbtn = screen.getAllByText("Add to Cart");

  fireEvent.click(addbtn[0]);

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();

  expect (screen.getAllByTestId("fooditems").length).toBe(32)

  fireEvent.click(screen.getByText("Clear Cart"));

  expect (screen.getAllByTestId("fooditems").length).toBe(31)

  expect(screen.getByText("Cart is empty!!!")).toBeInTheDocument();
});
