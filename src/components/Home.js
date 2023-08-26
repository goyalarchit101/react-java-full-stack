import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

function Home() {
  return (
    <Card className='text-center my-3 bg-warning'>
      <CardBody>
        <h1>This is Home content</h1>
      </CardBody>
    </Card>
  )
}

export default Home