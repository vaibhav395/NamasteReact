import {  fireEvent, render, screen , act} from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/RestaurantListData.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

//Here global is the object where component is being rendered, i am defining my own fetch function
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            
            return Promise.resolve(MOCK_DATA)
        }
    })
})

test("Should search the restaurants for pizza input", async ()=>{
    await act(async ()=> render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter> 
))

    
    const searchBtn = screen.getByRole("button", {name:"Search"});

    const searchInput = screen.getByTestId("searchInput");
    

    fireEvent.change(searchInput, {target: {value:"pizza"}})

    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(2);

})

test("Should Filter the top rated restaurants", async ()=>{
    await act(async ()=>{
        render(
            <BrowserRouter>
               <Body/>
            </BrowserRouter>
        )
    })

    const TopRatedBtn = screen.getByText("Top Rated Restaurants");

    fireEvent.click(TopRatedBtn);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(13);
})

