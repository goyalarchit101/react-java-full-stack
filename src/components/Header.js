import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

function Header() {
  return (
    <Card className='text-center my-3 bg-warning'>
      <CardBody>
        <h1>Welcome to Course Application</h1>
      </CardBody>
    </Card>
  )
}

export default Header
