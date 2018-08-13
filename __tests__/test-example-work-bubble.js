import React from 'react'
import { shallow } from 'enzyme'
import ExampleWorkBubble from '../js/example-work-bubble'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const myWork = [
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot of a project invovling code",
      'src': "images/example1.png"
    }
  },
  {
    'title': "Portfolio Boilerplate",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "images/example2.png"
    }
  }
]

let mockOpenModalFn = jest.fn()

describe("ExampleWorkBubble component", () => {
  let component = shallow(<ExampleWorkBubble work={ myWork[0] } openModal={ mockOpenModalFn } />)
  let images = component.find("img")

  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1)
  })

  it("Should have the image source set correctly", () => {
    expect(images.prop('src')).toEqual(myWork[0].image.src)
  })

  it("Should call the open modal handler when clicked", () => {
    component.find(".section__exampleWrapper").simulate('click')

    expect(mockOpenModalFn).toHaveBeenCalled()
  })
})
