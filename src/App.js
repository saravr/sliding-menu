//import React from 'react'
//import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
import Menu from './Menu.js'

/*class AppFooter extends React.Component {
  render() {
      return(
          <div className="fixed-bottom">  
              <Navbar color="dark" dark>
                  <Container>
                      <NavbarBrand>Footer</NavbarBrand>
                  </Container>
              </Navbar>
          </div>
      )
  }
}*/

function App() {
  return (
    <div className="App">
        <Menu title='Hello, Inc.'/>
    </div>
  );
}

export default App;
