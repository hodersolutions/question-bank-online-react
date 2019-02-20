import React from 'react'

const ShowQuestion = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container-fluid section question-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <div className="card-title">
                    Question title { id }
                </div>
                <p>Question option 1</p>
                <p>Question option 2</p>
                <p>Question option 3</p>
                <p>Question option 4</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <p>Posted by me</p>
            </div>
        </div>
    </div>
  )
}

export default ShowQuestion
