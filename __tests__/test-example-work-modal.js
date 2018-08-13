import React from 'react'
import { shallow } from 'enzyme'
import ExampleWorkModal from '../js/example-work-modal'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const myWork = [
  {
    'title': "Work Example",
    'href': "https://github.com/LiavAvnaim/ServerlessPortfolio",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "example screenshot of a project invovling code",
      'src': "images/example1.png"
    }
  },
  {
    'title': "Portfolio Boilerplate",
    'href': "https://github.com/LiavAvnaim/DynamicFiltersClientSide",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "images/example2.png"
    }
  }
]

let mockCloseModalFn = jest.fn()

describe("ExampleWorkModal component", () => {
  let component = shallow(<ExampleWorkModal work={ myWork[1] } open={ false } closeModal={ mockCloseModalFn } />)
  let componentOpen = shallow(<ExampleWorkModal work={ myWork[1] } open={ true } closeModal={ mockCloseModalFn } />)
  let anchors = component.find("a")

  it("Should contain a single 'a' element", () => {
    expect(anchors.length).toEqual(1)
  })

  it("Should link to our project", () => {
    expect(anchors.prop('href')).toEqual(myWork[1].href)
  })

  it("Should have the modal class set correctly", () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true)
    expect(componentOpen.find(".background--skyBlue").hasClass("modal--open")).toBe(true)
  })

  it("Should call the close modal handler when clicked", () => {
    component.find(".modal__closeButton").simulate('click')

    expect(mockCloseModalFn).toHaveBeenCalled()
  })
})
