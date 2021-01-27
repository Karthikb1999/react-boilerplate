import { DashBoardPage } from "../../components/DashBoardPage"
import React from "react"
import { shallow } from "enzyme"

test("should render DashBoard Page", () => {
    const wrapper = shallow(<DashBoardPage />)
    expect(wrapper).toMatchSnapshot()
})