import React from 'react'
import { Container } from 'reactstrap'
import HeaderNavbar from './HeaderNavbar'
import HeaderTop from './HeaderTop'

export default function Header() {
  return (
    <Container fluid={true} className="p-0">
      <HeaderTop></HeaderTop>
      <HeaderNavbar></HeaderNavbar>
    </Container>
  )
}
