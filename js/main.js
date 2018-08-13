import React from 'react'
import ReactDOM from 'react-dom'
import ExampleWork from './example-work'

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
  },
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/example3.png"
    }
  }
]


ReactDOM.render(<ExampleWork work={ myWork } />, document.getElementById('example-work'))
