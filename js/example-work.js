import React from 'react'
import ExampleWorkBubble from './example-work-bubble'
import ExampleWorkModal from './example-work-modal'

class ExampleWork extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      'modalOpen': false,
      'selectedWorkExample': this.props.work[0]
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal(evt, work) {
    this.setState({
      'modalOpen': true,
      'selectedWorkExample': work
    })
  }

  closeModal(evt) {
    this.setState({
      'modalOpen': false
    })
  }

  render() {
    return (
      <span>
        <section className="section section--alignCentered section--description">

          { this.props.work.map((workExample, id) => {
              return (
                <ExampleWorkBubble work={ workExample } key={ id } openModal={ this.openModal } />
              )
          }) }
        </section>

        <ExampleWorkModal work={ this.state.selectedWorkExample } open={ this.state.modalOpen } closeModal={ this.closeModal } />
      </span>
    )
  }
}

export default ExampleWork
