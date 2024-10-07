import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render the header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name:"Login"});  //Way to find a specific button among many buttons

  expect(loginButton).toBeInTheDocument();
});

test("Should render the header component with cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText("Cart (0)");
  
    expect(cartItems).toBeInTheDocument();
});


test("Should render the header component with cart items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText(/Cart/); //we can also pass regex here
  
    expect(cartItems).toBeInTheDocument();
});

test("Should change the login button to logout in header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button", {name:"Login"})

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"Logout"})
  
    expect(logoutButton).toBeInTheDocument();
  });