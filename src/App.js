import React from 'react'
import { Jumbotron, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './App.css';
import logo from './images/yachtguyz.svg'
import knottyLaneBG from './images/48aknottylane_1.jpg'
import BoatList from './BoatList'
import insta from './images/instagram.svg'
import phone from './images/phone-icon.svg'
import Carousel from './Carousel';
import { gsap } from "gsap";
function App() {
  gsap.from('.App-header', {duration: 2, opacity: 0 });

const fadeIn = (e) => {
  gsap.from('.jumbotron', {duration: 2, opacity: 0 });

}
  return (
    <div className="App">
      <header className="App-header">
        <img className='header-bg' src={knottyLaneBG} alt='Knotty Lane Yacht Background'></img>

        <section className='launch'>
          <img className='logo' src = {logo} alt = 'The YachtGuyz Gold Logo'></img>
         <a href = '#Jumbrotron' onClick={fadeIn}><button>Set Sail Today</button> </a>
        </section>

      </header>
      <main>
        <section className='intro'>
          <Jumbotron id='Jumbrotron'>
          <h1 className="display-3">Need A Yacht? Call Us, Why Not!</h1>
          <p className="lead">Book the perfect yacht for your event!</p>
          <hr className="my-2" />
          <p>Yacht rentals are as simple as ever thanks to The Yacht Guyz. An assortment of vessels are at your disposal. Each equipped for small or large capacities.</p>
          <p>Perfect for birthdays, anniversaries, fishing, or cruising on the water.</p>
          <Carousel></Carousel>
      </Jumbotron>
   
        </section>
        <section className='yachts'>
          {BoatList.map( boat => {
            return(
              <Card>
                <CardImg top width="100%" src={boat.image} alt="Card image cap" />

                <CardBody>
                  <CardTitle tag="h5">{boat.title}</CardTitle>  
                  <CardText tag="ul">
                      {boat.details.map( item =>{
                        return(
                          <li alt='Anchor by Aina from the Noun Project'>{item}</li>
                        )
                      })}
                    </CardText>
                </CardBody>
              </Card>
            )
          })}
        
        </section>
        <article className='booking'>
            <h2>Book the perfect yacht</h2>
            <p>Contact us today via email or phone to plan your next event.</p>
            <form name="contact" method="POST" netlify-honeypot="bot-field" ata-netlify="true"  >
                    <label className = "hidden">Don’t fill this out if you’re human: <input name="bot-field" /></label>
                    <input type="hidden" name="form-name" value="contact" />
                    <label htmlFor="name">Name</label>
                    <input name="name" id= "name" type="text" placeholder="Your Name"/>
                    <label htmlFor="email">Email</label>
                    <input name="email" id= "email" type="text" placeholder="Your emailname@business.com"/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message"></textarea>
                    <button className='contact-button' type = "submit">Submit</button>
                </form>
               
        </article>
      </main>
      <footer>
        <a href= 'https://www.instagram.com/theyachtguyz/' target='_blank' rel="noreferrer">
        <div className='insta'>
            <img src = {insta} alt="https://www.instagram.com/theyachtguyz/"></img><span>@theyachtguyz</span>
        </div>
        </a>
        <div className ='phone'>
            <img src = {phone} alt='Phone by Iconographer from the Noun Project'></img><span>954-591-8389</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
