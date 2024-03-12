import React from "react";
import "./style.css";
import avatar from "../../assets/images/avatar.jpg";
import myPicture from "../../assets/images/myPicture.jpg"
import './style.css'


function AboutMe() {
    return (

      <main>
        <section class="aboutMe" id="aboutMe">
          <h2>About Me</h2>
        
        <div class="container">
          <article>
             <img src={myPicture} alt="myPicture" className="image" />
             <h3>Hello, and welcome to my portfolio!</h3>
              <p className="writtenContent"> 
                  <br></br>
                  <p>
                  Hey there, I'm Paulo Oliveira, a 25-year-old web developer. I'm passionate about creating beautiful and functional websites that help businesses and individuals achieve their goals online as I’m also now getting into mobile development..
                  </p>
                  <br></br>
                  <p>
                  I'm a self-proclaimed introvert, but don't let that fool you - I love connecting with people and helping them solve problems through technology.
                  </p>
                  <br></br>
                  <p>I graduated from Rutgers University's web development bootcamp in August 2022 and I’m currently a software engineer intern at a company called Grads,  a company focused on promoting an e-commerce ecosystem for college students aiming to make their school journey more practical.  For the time being, I’ve been working on the Grads website, as well as working on a variety of exciting personal projects. One of my proudest achievements was recreating this landing page for Grads.</p>
                  <br></br>
                  <p>
                  My core values of honesty, hard work, and creativity are at the heart of everything I do. I believe in building strong, long-lasting relationships with my clients and delivering top-notch work every time.
                  </p>
                  <br></br>
                  <p>Thanks for stopping by my portfolio, and I can't wait to connect with you!"</p>
              </p>
          </article>
        </div>
      </section>

      </main>
    )
}


export default AboutMe;