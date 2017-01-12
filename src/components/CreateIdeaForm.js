import React from 'react';

class CreateIdeaForm extends React.Component {
  constructor() {
    super();
    this.state = { title: '', body: '' }
  }

  updateProperties(event){
    event.preventDefault()
    const fieldName = event.target.name
    const fieldValue = event.target.value

    this.setState( { [fieldName]: fieldValue } )
  }

  createIdea(event){
    event.preventDefault();

    const idea = { title: this.state.title, body: this.state.body, id: Date.now(), active: false }

    this.props.saveIdea( idea )
    //pass the idea to parent to create the new idea

    this.setState({title: '', body: ''})
  }

  render() {
    return (
      <div>
        <input className='CreateIdea-title' 
               type='text' 
               name='title'
               value={this.state.title}
               placeholder='Title' 
               onChange={ (event) => this.updateProperties(event) }/>
        <textarea className='CreateIdea-body' 
                  name='body' 
                  placeholder='Body' 
                  value={this.state.body}
                  onChange={ (event) => this.updateProperties(event) } />
        <button className='CreateIdea-submit' 
                onClick={ () => this.createIdea(event) }>Submit</button>
      </div>
    )
  }
}

export default CreateIdeaForm