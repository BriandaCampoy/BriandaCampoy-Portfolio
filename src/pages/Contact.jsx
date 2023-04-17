import React from 'react'
import Nav from '@components/Nav'
import Header from '@components/Header'
import ElementHeader from '../Components/ElementHeader'
import ContactInfo from '../Components/ContactInfo'
import '@styles/contact.css'

const Contact = () => {
  return (
    <div>
      <Header>
        <ElementHeader/>
      </Header>
      <Nav/>
      <ContactInfo/>
    </div>
  )
}

export default Contact