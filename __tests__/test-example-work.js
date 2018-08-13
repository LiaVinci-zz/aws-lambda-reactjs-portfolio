import React from 'react'
import { shallow } from 'enzyme'
import ExampleWork from '../js/example-work'

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

describe("ExampleWork Component", () => {
  let component = shallow(<ExampleWork work={ myWork } />)

  it("Should be a 'section' element", () => {
    expect(component.type()).toEqual('section')
  })

  it("Should contain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length)
  })
})
