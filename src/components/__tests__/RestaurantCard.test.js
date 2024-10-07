import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import { withpromotedlabel } from "../RestaurantCard"
import MOCK_DATA from "../mocks/ResCardMock.json"
import "@testing-library/jest-dom"

test("Should render Restaurant Card component with props Data", ()=>{
    render(<RestaurantCard resData = {MOCK_DATA}/>)

    const name = screen.getByText("KFC")

    expect(name).toBeInTheDocument();
})

test("Should render Restaurant Card component with prommoted label", ()=>{

    const PromotedRestaurantCard = withpromotedlabel(RestaurantCard);
    
    render(<PromotedRestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Promoted")

    expect(name).toBeInTheDocument();
})