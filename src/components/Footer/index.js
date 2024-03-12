import React from "react";
import "./style.css";


function Footer() {
    return (
        <footer>
  
          <div className="socialMedia">
            <h3>Social Media</h3>
              <ul>
                <li><a href="https://www.linkedin.com/in/paulo-de-lacerda-oliveira-552677b7/" target="__blank"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="https://github.com/paulooliveira152012" target="__blank"><i class="fab fa-github"></i></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100005004306012" target="__blank"><i class="fab fa-facebook"></i></a></li>
              </ul>
          </div>

          <div className="contactInfo">
            <h3>Contact Me</h3>
            <ul>
            <li><a href="mailto:paulooliveira152012@gmail.com"> <i class="fas fa-envelope"></i> </a></li>
              <li><a href="tel:9086308458"> <i class="fas fa-phone"></i> </a></li>
            </ul>
          </div>
        </footer>
    )
};

export default Footer;