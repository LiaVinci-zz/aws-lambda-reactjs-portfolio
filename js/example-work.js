import React from 'react'
import ExampleWorkBubble from './example-work-bubble'

class ExampleWork extends React.Component {
  render() {
    return (
      <section className="section section--alignCentered section--description">

        { this.props.work.map((workExample, id) => {
            return (
              <ExampleWorkBubble work={ workExample } key={ id } />
            )
        }) }
      </section>
    )
  }
}

export default ExampleWork
