import React from 'react'

class ExampleWorkBubble extends React.Component {
  render() {
    let workExample = this.props.work;

    return (
      <div className="section__exampleWrapper" onClick={ (evt) => this.props.openModal(evt, workExample) }>
        <div className="section__example">
          <img alt={ workExample.image.desc } className="section__exampleImage" src={ workExample.image.src } />

          <dl className="color--cloud">
            <dt className="section__exampleTitle section__text--centered">
              { workExample.title }
            </dt>

            <dd></dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default ExampleWorkBubble
