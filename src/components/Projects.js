import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'


const Projects = () => {
  const myProjects = [
    {name:"Ruby Treasure Hunt", description:"Find the treasure with this awesome game!"},
    {name:"Tic Tac Toe", description:"Beat your friend with this classic game!"},
    {name:"Wild Bird TrackerAPI", description:"Checkout this awesome API!"}
  ]

  return (
    <div className='projects'>
    {/* map over projects array */}
    {myProjects.map((project, index) => {
      return(
        <Card
  style={{
    width: '18rem'
  }}
  key={index}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      {project.name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
     {project.description}
    </CardText>
  </CardBody>
</Card>
      )
    })}
   </div>
  )
}

export default Projects