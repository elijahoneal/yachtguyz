import React from 'react'
import { Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './App.css';
import logo from './images/yachtguyz.svg'
import knottyLaneBG from './images/48aknottylane_1.jpg'
import BoatList from './BoatList'

const cardStyle = {
  backgroundColor:'yellow',
  display: 'none'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className='header-bg' src={knottyLaneBG} alt='Knotty Lane Yacht Background'></img>
        <section className='launch'>
        <img className='logo' src = {logo} alt = 'The YachtGuyz Gold Logo'></img>
        <Button color= 'warning'>Set Sail Today</Button>
        </section>
      </header>
      <main>
        <section className='intro'>
        <Jumbotron>
        <h1 className="display-3">Need A Yacht? Call Us, Why Not!</h1>
        <p className="lead">Book the perfect yacht for your event!</p>
        <hr className="my-2" />
        <p>Yacht rentals are as simple as ever thanks to The Yacht Guyz. An assortment of vessels are at your disposal. Each equipped for small or large capacities.</p>
        <p>Perfect for birthdays, anniversaries, fishing, or cruising on the water.</p>
        <p className="lead">
          <Button color="warning">Learn More</Button>
        </p>
      </Jumbotron>
        </section>
        <section className='yachts'>
          {BoatList.map( boat => {
            return(
              <Card style = {cardStyle}>
                <CardImg top width="100%" src={boat.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">{boat.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                  <CardText>
                      {boat.details.map( item =>{
                        return(
                          <ul>
                          <li>{item}</li>
                          {console.log(item)}
                          </ul>
                        )
                      })}
                    </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            )
          })}
        
        </section>
      </main>
    </div>
  );
}

export default App;
