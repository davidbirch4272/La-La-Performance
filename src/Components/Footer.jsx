import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        
        <div className="footer__logo--container">
          <Link to="/">
            <img
              src="./primary-logo-full-color-dark-orange.svg"
              className="footer__logo--img"
              alt="Lindsay Ellison Logo"
            />
          </Link>
        </div>

        
        <div className="footer__sitemap">
        
          <div className="footer__column">
            <span className="footer__title">Portfolio</span>

        
            <div>
              <span className="footer__title">Voice</span>
              <ul className="footer__sublinks">
                <li><Link to="/voice/demo" className="footer__dropdown-link">Narration / Audiobooks</Link></li>
                <li><Link to="/voice/clients" className="footer__dropdown-link">All genres — specializing in poetry, characters</Link></li>
                <li><Link to="/voice/description" className="footer__dropdown-link">Audio description — theatre and national TV</Link></li>
                <li><Link to="/voice/corporate" className="footer__dropdown-link">Corporate</Link></li>
                <li><Link to="/voice/commercial" className="footer__dropdown-link">Commercial</Link></li>
                <li><Link to="/voice/industrial" className="footer__dropdown-link">Industrial</Link></li>
                <li><Link to="/voice/sales-training" className="footer__dropdown-link">Sales / Training</Link></li>
                <li><Link to="/voice/medical" className="footer__dropdown-link">Medical</Link></li>
                <li><Link to="/voice/textbooks" className="footer__dropdown-link">Textbooks</Link></li>
                <li><Link to="/voice/esl" className="footer__dropdown-link">ESL</Link></li>
                <li><Link to="/voice/periodicals" className="footer__dropdown-link">Periodicals / Mags and Rags</Link></li>
                <li><Link to="/voice/contact" className="footer__dropdown-link">Bookings</Link></li>
              </ul>
            </div>

        
            <div>
              <span className="footer__title">R&amp;R / TV</span>
              <ul className="footer__sublinks">
                <li><Link to="/rrtv/national-radio" className="footer__dropdown-link">National Radio Records Promoter</Link></li>
                <li><Link to="/rrtv/national-retail" className="footer__dropdown-link">National Retail Records Promoter</Link></li>
                <li><Link to="/rrtv/audio-promos" className="footer__dropdown-link">Audio Promos — Voice / Writer / Producer</Link></li>

        
                <li>
                  <span className="footer__title">On-Camera Appearances</span>
                  <ul className="footer__sublinks">
                    <li><Link to="/rrtv/fundraising" className="footer__dropdown-link">Fundraising Schpeels</Link></li>
                    <li><Link to="/rrtv/childrens-tv" className="footer__dropdown-link">Children’s TV Host</Link></li>
                    <li><Link to="/rrtv/gma" className="footer__dropdown-link">Good Morning America Guest</Link></li>
                    <li><Link to="/rrtv/christmas" className="footer__dropdown-link">Christmas Specials</Link></li>
                  </ul>
                </li>
              </ul>
            </div>

        
            <div>
              <span className="footer__title">Demo / Clips</span>
              <ul className="footer__sublinks">
                <li><Link to="/photography/nature" className="footer__dropdown-link">Commercial Clip</Link></li>
                <li><Link to="/photography/portraits" className="footer__dropdown-link">Audio Theater</Link></li>
                <li><Link to="/photography/portraits" className="footer__dropdown-link">GBH Audio Promos</Link></li>
                <li><Link to="/photography/portraits" className="footer__dropdown-link">4th Thing</Link></li>
              </ul>
            </div>

        
            <div>
              <span className="footer__title">Audio Writing &amp; Production</span>
              <ul className="footer__sublinks">
                <li><Link to="/production/specials" className="footer__dropdown-link">Specials</Link></li>
                <li><Link to="/production/grants" className="footer__dropdown-link">Grants</Link></li>
              </ul>
            </div>

        
            <div>
              <span className="footer__title">Events</span>
              <ul className="footer__sublinks">
                <li><Link to="/events/kitchen-jam" className="footer__dropdown-link">Kitchen Jam Productions</Link></li>
                <li><Link to="/events/thematic" className="footer__dropdown-link">Thematic Parties</Link></li>
                <li><Link to="/events/dance" className="footer__dropdown-link">Dance Parties</Link></li>
                <li><Link to="/events/gallery" className="footer__dropdown-link">Art Gallery Parties</Link></li>
                <li><Link to="/events/fashion" className="footer__dropdown-link">Fashion Shows</Link></li>

        
                <li>
                  <span className="footer__title">Benefits</span>
                  <ul className="footer__sublinks">
                    <li><Link to="/events/benefits/jane-doe" className="footer__dropdown-link">Jane Doe Society</Link></li>
                    <li><Link to="/events/benefits/musicians" className="footer__dropdown-link">Various Musicians</Link></li>
                  </ul>
                </li>

                <li><Link to="/events/childrens" className="footer__dropdown-link">Children’s Parties</Link></li>
              </ul>
            </div>

        
            <div>
              <span className="footer__title">Teacher / Mentor</span>
              <ul className="footer__sublinks">
                <li><Link to="/teaching/curriculum" className="footer__dropdown-link">Audio Curriculum Design</Link></li>
                <li><Link to="/teaching/production" className="footer__dropdown-link">Audio / Broadcast Production</Link></li>
                <li><Link to="/teaching/theater" className="footer__dropdown-link">Audio Theater Production</Link></li>
                <li><Link to="/teaching/narration" className="footer__dropdown-link">The Art of Narration</Link></li>
                <li><Link to="/teaching/writing" className="footer__dropdown-link">Writing for Audio</Link></li>
                <li><Link to="/teaching/articulation" className="footer__dropdown-link">Art of Articulation</Link></li>
                <li><Link to="/teaching/poetry" className="footer__dropdown-link">Poetry</Link></li>
                <li><Link to="/teaching/dance" className="footer__dropdown-link">Dance &amp; Choreography</Link></li>
                <li><Link to="/teaching/aerobics" className="footer__dropdown-link">Aerobics</Link></li>
              </ul>
            </div>

        
            <div>
              <span className="footer__title">Improv</span>
              <ul className="footer__sublinks">
                <li><Link to="/improv/dance" className="footer__dropdown-link">Dance</Link></li>
                <li><Link to="/improv/characters" className="footer__dropdown-link">Characters</Link></li>
                <li><Link to="/improv/poetry" className="footer__dropdown-link">Poetry</Link></li>
                <li><Link to="/improv/humor" className="footer__dropdown-link">Humor</Link></li>
              </ul>
            </div>

        
            <div>
              <span className="footer__title">Percussion</span>
              <ul className="footer__sublinks">
                <li><Link to="/percussion/congos" className="footer__dropdown-link">Congos</Link></li>
                <li><Link to="/percussion/bongos" className="footer__dropdown-link">Bongos</Link></li>
                <li><Link to="/percussion/tambourines" className="footer__dropdown-link">Tambourines</Link></li>
                <li><Link to="/percussion/hand-instruments" className="footer__dropdown-link">A myriad of Hand Instruments</Link></li>
                <li><Link to="/percussion/piano" className="footer__dropdown-link">Piano</Link></li>
              </ul>
            </div>

        
            <div>
              <span className="footer__title">Dance</span>
              <ul className="footer__sublinks">
          
                <li>
                  <span className="footer__title">Choreography Improv Based on:</span>
                  <ul className="footer__sublinks">
                    <li><Link to="/dance/choreography/ballet" className="footer__dropdown-link">Ballet</Link></li>
                    <li><Link to="/dance/choreography/modern" className="footer__dropdown-link">Modern</Link></li>
                    <li><Link to="/dance/choreography/figure-skating" className="footer__dropdown-link">Competitive Figure Skating</Link></li>
                    <li><Link to="/dance/choreography/cuban" className="footer__dropdown-link">Cuban</Link></li>
                    <li><Link to="/dance/choreography/irish" className="footer__dropdown-link">Irish</Link></li>
                    <li><Link to="/dance/choreography/country" className="footer__dropdown-link">Country</Link></li>
                    <li><Link to="/dance/choreography/other" className="footer__dropdown-link">Other</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          
          <div className="footer__column">
            <Link to="/about" className="footer__title footer__main-link">About</Link>
            <ul className="footer__sublinks">
              <li><Link to="/about/mission" className="footer__dropdown-link">Mission Statement</Link></li>
              <li><Link to="/about/goals" className="footer__dropdown-link">Goals</Link></li>
              <li><Link to="/about/bio" className="footer__dropdown-link">Bio</Link></li>
              <li><Link to="/about/resume" className="footer__dropdown-link">Resume</Link></li>
              <li><Link to="/about/teams" className="footer__dropdown-link">Teams</Link></li>
            </ul>
          </div>

          <div className="footer__column">
            <Link to="/upcoming" className="footer__title footer__main-link">Upcoming</Link>
            <ul className="footer__sublinks">
              
            </ul>
          </div>

          <div className="footer__column">
            <Link to="/contact" className="footer__title footer__main-link">Contact</Link>
          </div>
        </div>

        
        <div className="footer__copyright">
          Copyright &copy; 2025 Lindsay Ellison. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
