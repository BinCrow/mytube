import React from 'react'
import Header from "./Header";
import Footer from "./Footer";

const Main = (props) => {
  return (
    <>
      <Header />
      <nain id='main' role='main'>
        {props.children}
      </nain>
      <Footer />
    </>
  )
}

export default Main