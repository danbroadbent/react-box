import React from 'react'

const ActiveIdea = ({idea, updateIdea}) => {
if(!idea) {
  return <p className='ActivateIdeaStatement'>Please select an idea</p>
}

return (
<div>
  <input className='ActiveIdea-title'
          name='title'
          value={ idea.title }
          onChange={ (event) => updateIdea(event, idea.id) }
  />
  <textarea className='ActiveIdea-body'
            name='body'
            value={idea.body}
            onChange={ (event) => updateIdea(event, idea.id) }
  />
</div>
)}

export default ActiveIdea;