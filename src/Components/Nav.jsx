import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";
import "./nav.css";

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    document.body.classList.add("menu--open");
    setMobileOpen(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("menu--open");
    setMobileOpen(false);
    setMobileSubOpen(null);
  };

  const toggleSubmenu = (key) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key], // toggle the submenu open/closed
    }));
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <nav>
      <div className="nav__container">
        <div className="title__wrapper">
          <img src="./primary-logo-full-color-dark-orange.svg" alt="Logo" className="logo" />
          <Link to="/">
            <h1 className="title__name">LALA Performance Arts</h1>
          </Link>
        </div>

        <ul className="nav__links">
          <li className="dropdown">
            <Link to="#" className="dropdown__toggle">
              Portfolio <span className="chevron">^</span>
            </Link>

            <ul className="dropdown__menu">
              <li className="dropdown-sub">
                <Link to="#" className="dropdown__toggle">
                  Voice <span className="chevron">^</span>
                </Link>
                <ul className="dropdown__submenu">
                  <li>
                    <Link to="/voice/demo" className="dropdown__link">
                      Narration/audiobooks
                    </Link>
                  </li>
                  <li>
                    <Link to="/voice/clients" className="dropdown__link">
                      All genres - specializing in poetry, characters
                    </Link>
                  </li>
                  <li>
                    <Link to="/voice/contact" className="dropdown__link">
                      Bookings
                    </Link>
                  </li>
                  <li>
                    <Link to="/voice/demo" className="dropdown__link">
                      Corporate
                    </Link>
                  </li>
                  <li>
                    <Link to="/voice/demo" className="dropdown__link">
                      Commercial
                    </Link>
                  </li>
                  <li>
                    <Link to="/voice/demo" className="dropdown__link">
                      Industrial
                    </Link>
                  </li>
                  <li>
                    <Link to="/voice/demo" className="dropdown__link">
                      Sales/training
                    </Link>
                  </li>
                  <li>
                    <Link to="/voice/demo" className="dropdown__link">
                      Medical
                    </Link>
                  </li>
                  <li>
                    <Link to="/voice/demo" className="dropdown__link">
                      Textbooks
                    </Link>
                  </li>
                  <li>
                    <Link to="/voice/demo" className="dropdown__link">
                      ESL
                    </Link>
                  </li>
                  <li>
                    <Link to="/voice/demo" className="dropdown__link">
                      Periodicals/Mags and Rags
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown-sub">
                <Link to="#" className="dropdown__link--submenu">
                  R&R / TV <span className="chevron">^</span>
                </Link>

                <ul className="dropdown__submenu">
                  <li>
                    <Link to="/rrtv/national-radio" className="dropdown__link">
                      National Radio Records Promoter
                    </Link>
                  </li>
                  <li>
                    <Link to="/rrtv/national-retail" className="dropdown__link">
                      National Retail Records Promoter
                    </Link>
                  </li>
                  <li>
                    <Link to="/rrtv/national-retail" className="dropdown__link">
                      Audio Promos Voice/Writer/Producer
                    </Link>
                  </li>

                  <li className="dropdown__sub">
                    <Link to="#" className="dropdown__link--submenu">
                      On-Camera Appearances <span className="chevron">^</span>
                    </Link>

                    <ul className="dropdown__submenu--below">
                      <li>
                        <Link to="/rrtv/fundraising" className="dropdown__link">
                          Fundraising Schpeels
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/rrtv/childrens-tv"
                          className="dropdown__link"
                        >
                          Children’s TV Host
                        </Link>
                      </li>
                      <li>
                        <Link to="/rrtv/gma" className="dropdown__link">
                          Good Morning America Guest
                        </Link>
                      </li>
                      <li>
                        <Link to="/rrtv/christmas" className="dropdown__link">
                          Christmas Specials
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="dropdown-sub">
                <Link to="#" className="dropdown__toggle">
                  Demo/Clips <span className="chevron">^</span>
                </Link>
                <ul className="dropdown__submenu">
                  <li>
                    <Link to="/photography/nature" className="dropdown__link">
                      Commercial Clip
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      Audio Theater
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      GBH Audio Promos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      4th Thing
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown-sub">
                <Link to="#" className="dropdown__toggle">
                  Audio Writing And Production{" "}
                  <span className="chevron">^</span>
                </Link>
                <ul className="dropdown__submenu">
                  <li>
                    <Link to="/photography/nature" className="dropdown__link">
                      Specials
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      Grants
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown-sub">
                <Link to="#" className="dropdown__link--submenu">
                  Events <span className="chevron">^</span>
                </Link>

                <ul className="dropdown__submenu">
                  <li>
                    <Link to="/rrtv/national-radio" className="dropdown__link">
                      Kitchen Jam Productions
                    </Link>
                  </li>

                  <li className="dropdown__sub">
                    <Link to="#" className="dropdown__link--submenu">
                      Thematic Parties
                    </Link>
                  </li>

                  <li className="dropdown__sub">
                    <Link to="#" className="dropdown__link--submenu">
                      Dance Parties
                    </Link>
                  </li>

                  <li className="dropdown__sub">
                    <Link to="#" className="dropdown__link--submenu">
                      Art Gallery Parties
                    </Link>
                  </li>

                  <li className="dropdown__sub">
                    <Link to="#" className="dropdown__link--submenu">
                      Dance Parties
                    </Link>
                  </li>

                  <li className="dropdown__sub">
                    <Link to="#" className="dropdown__link--submenu">
                      Fashion Shows
                    </Link>
                  </li>

                  <li className="dropdown__sub">
                    <Link to="#" className="dropdown__link--submenu">
                      Benefits <span className="chevron">^</span>
                    </Link>

                    <ul className="dropdown__submenu--below">
                      <li>
                        <Link to="/rrtv/fundraising" className="dropdown__link">
                          Jane Doe Society
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/rrtv/childrens-tv"
                          className="dropdown__link"
                        >
                          Various Musicians
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="dropdown-sub">
                <Link to="#" className="dropdown__toggle">
                  Teacher/Mentor <span className="chevron">^</span>
                </Link>
                <ul className="dropdown__submenu">
                  <li>
                    <Link
                      to="/photography/nature"
                      className="dropdown__link"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      Audio Curriculum Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      Audio/Broadcast Production{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      Audio Theater Production
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      The Art of Narration{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      Writing for Audio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      Art of Articulation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      Poetry
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      Dance & Choreography
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      Aerobics
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown-sub">
                <Link to="#" className="dropdown__toggle">
                  Improv <span className="chevron">^</span>
                </Link>
                <ul className="dropdown__submenu">
                  <li>
                    <Link to="/photography/nature" className="dropdown__link">
                      Dance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      Characters
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      Poetry
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      Humor
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown-sub">
                <Link to="#" className="dropdown__toggle">
                  Percussion <span className="chevron">^</span>
                </Link>
                <ul className="dropdown__submenu">
                  <li>
                    <Link to="/photography/nature" className="dropdown__link">
                      Congos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      Bongos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      Tamborines
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      A myriad of Hand Instruments
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/photography/portraits"
                      className="dropdown__link"
                    >
                      Piano
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown-sub">
                <Link to="#" className="dropdown__link--submenu">
                  Dance <span className="chevron">^</span>
                </Link>

                <ul className="dropdown__submenu">
                  <li className="dropdown__sub">
                    <Link to="#" className="dropdown__link--submenu">
                      Choreography Based On: <span className="chevron">^</span>
                    </Link>

                    <ul className="dropdown__submenu--below">
                      <li>
                        <Link to="/rrtv/fundraising" className="dropdown__link">
                          Ballet
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/rrtv/childrens-tv"
                          className="dropdown__link"
                        >
                          Modern
                        </Link>
                      </li>
                      <li>
                        <Link to="/rrtv/gma" className="dropdown__link">
                          Competitive Figure Skating
                        </Link>
                      </li>
                      <li>
                        <Link to="/rrtv/christmas" className="dropdown__link">
                          Cuban
                        </Link>
                      </li>

                      <li>
                        <Link to="/rrtv/christmas" className="dropdown__link">
                          Irish
                        </Link>
                      </li>

                      <li>
                        <Link to="/rrtv/christmas" className="dropdown__link">
                          Country
                        </Link>
                      </li>

                      <li>
                        <Link to="/rrtv/christmas" className="dropdown__link">
                          Other
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="#" className="dropdown__toggle">
              About <span className="chevron">^</span>
            </Link>{" "}
            <ul className="dropdown__menu">
              <li>
                <Link to="/" className="dropdown__link">
                  Mission Statement
                </Link>
              </li>
              <li>
                <Link to="/" className="dropdown__link">
                  Goals
                </Link>
              </li>
              <li>
                <Link to="/" className="dropdown__link">
                  Bio
                </Link>
              </li>
              <li>
                <Link to="/" className="dropdown__link">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/" className="dropdown__link">
                  Partners
                </Link>
              </li>
            </ul>
          </li>

          <Link to="#" className="dropdown__toggle">
            Upcoming
          </Link>
          <Link to="/Contact" className="dropdown__toggle">
            Contact
          </Link>
        </ul>

        <button className="btn__menu" onClick={openMenu}>
          <GiHamburgerMenu />
        </button>

        <div className="menu__backdrop" aria-hidden={!mobileOpen}>
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FaRegWindowClose />
          </button>

          <ul className="menu__links">
           
            <li
              className={
                openSubmenus["portfolio"] ? "menu__item open" : "menu__item"
              }
            >
              <button 
                className="menu__link-btn"
                onClick={() => toggleSubmenu("portfolio")}
              >
                Portfolio <span className="chevron">^</span>
              </button>
              {openSubmenus["portfolio"] && (
                <ul className="mobile-flyout">
                 
                  <li
                    className={
                      openSubmenus["voice"] ? "menu__item open" : "menu__item"
                    }
                  >
                    <button
                      className="menu__link-btn"
                      onClick={() => toggleSubmenu("voice")}
                    >
                      Voice <span className="chevron">^</span>
                    </button>
                    {openSubmenus["voice"] && (
                      <ul className="mobile-flyout">
                        <li>
                          <Link
                            to="/voice/demo"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Narration/audiobooks
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/voice/clients"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            All genres - specializing in poetry, characters
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/voice/contact"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Bookings
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/voice/demo"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Corporate
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/voice/demo"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Commercial
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/voice/demo"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Industrial
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/voice/demo"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Sales/training
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/voice/demo"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Medical
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/voice/demo"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Textbooks
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/voice/demo"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            ESL
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/voice/demo"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Periodicals/Mags and Rags
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* R&R / TV */}
                  <li
                    className={
                      openSubmenus["rrtv"] ? "menu__item open" : "menu__item"
                    }
                  >
                    <button
                      className="menu__link-btn"
                      onClick={() => toggleSubmenu("rrtv")}
                    >
                      R&R / TV <span className="chevron">^</span>
                    </button>
                    {openSubmenus["rrtv"] && (
                      <ul className="mobile-flyout">
                        <li>
                          <Link
                            to="/rrtv/national-radio"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            National Radio Records Promoter
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/rrtv/national-retail"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            National Retail Records Promoter
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/rrtv/national-retail"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Audio Promos Voice/Writer/Producer
                          </Link>
                        </li>

                        {/* On-Camera */}
                        <li
                          className={
                            openSubmenus["oncamera"]
                              ? "menu__item open"
                              : "menu__item"
                          }
                        >
                          <button
                            className="menu__link-btn"
                            onClick={() => toggleSubmenu("oncamera")}
                          >
                            On-Camera Appearances{" "}
                            <span className="chevron">^</span>
                          </button>
                          {openSubmenus["oncamera"] && (
                            <ul className="mobile-flyout">
                              <li>
                                <Link
                                  to="/rrtv/fundraising"
                                  className="menu__link"
                                  onClick={handleLinkClick}
                                >
                                  Fundraising Schpeels
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/rrtv/childrens-tv"
                                  className="menu__link"
                                  onClick={handleLinkClick}
                                >
                                  Children’s TV Host
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/rrtv/gma"
                                  className="menu__link"
                                  onClick={handleLinkClick}
                                >
                                  Good Morning America Guest
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/rrtv/christmas"
                                  className="menu__link"
                                  onClick={handleLinkClick}
                                >
                                  Christmas Specials
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Demo/Clips */}
                  <li
                    className={
                      openSubmenus["demo"] ? "menu__item open" : "menu__item"
                    }
                  >
                    <button
                      className="menu__link-btn"
                      onClick={() => toggleSubmenu("demo")}
                    >
                      Demo/Clips <span className="chevron">^</span>
                    </button>
                    {openSubmenus["demo"] && (
                      <ul className="mobile-flyout">
                        <li>
                          <Link
                            to="/photography/nature"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Commercial Clip
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Audio Theater
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            GBH Audio Promos
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            4th Thing
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Audio Writing And Production */}
                  <li
                    className={
                      openSubmenus["audio"] ? "menu__item open" : "menu__item"
                    }
                  >
                    <button
                      className="menu__link-btn"
                      onClick={() => toggleSubmenu("audio")}
                    >
                      Audio Writing And Production{" "}
                      <span className="chevron">^</span>
                    </button>
                    {openSubmenus["audio"] && (
                      <ul className="mobile-flyout">
                        <li>
                          <Link
                            to="/photography/nature"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Specials
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Grants
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Events */}
                  <li
                    className={
                      openSubmenus["events"] ? "menu__item open" : "menu__item"
                    }
                  >
                    <button
                      className="menu__link-btn"
                      onClick={() => toggleSubmenu("events")}
                    >
                      Events <span className="chevron">^</span>
                    </button>
                    {openSubmenus["events"] && (
                      <ul className="mobile-flyout">
                        <li>
                          <Link
                            to="/rrtv/national-radio"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Kitchen Jam Productions
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Thematic Parties
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Dance Parties
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Art Gallery Parties
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Fashion Shows
                          </Link>
                        </li>
                        <li
                          className={
                            openSubmenus["benefits"]
                              ? "menu__item open"
                              : "menu__item"
                          }
                        >
                          <button
                            className="menu__link-btn"
                            onClick={() => toggleSubmenu("benefits")}
                          >
                            Benefits <span className="chevron">^</span>
                          </button>
                          {openSubmenus["benefits"] && (
                            <ul className="mobile-flyout">
                              <li>
                                <Link
                                  to="/rrtv/fundraising"
                                  className="menu__link"
                                  onClick={handleLinkClick}
                                >
                                  Jane Doe Society
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/rrtv/childrens-tv"
                                  className="menu__link"
                                  onClick={handleLinkClick}
                                >
                                  Various Musicians
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Teacher/Mentor */}
                  <li
                    className={
                      openSubmenus["teacher"] ? "menu__item open" : "menu__item"
                    }
                  >
                    <button
                      className="menu__link-btn"
                      onClick={() => toggleSubmenu("teacher")}
                    >
                      Teacher/Mentor <span className="chevron">^</span>
                    </button>
                    {openSubmenus["teacher"] && (
                      <ul className="mobile-flyout">
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Audio Curriculum Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Audio/Broadcast Production
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Audio Theater Production
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            The Art of Narration
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Writing for Audio
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Art of Articulation
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Poetry
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Dance & Choreography
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Aerobics
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Improv */}
                  <li
                    className={
                      openSubmenus["improv"] ? "menu__item open" : "menu__item"
                    }
                  >
                    <button
                      className="menu__link-btn"
                      onClick={() => toggleSubmenu("improv")}
                    >
                      Improv <span className="chevron">^</span>
                    </button>
                    {openSubmenus["improv"] && (
                      <ul className="mobile-flyout">
                        <li>
                          <Link
                            to="/photography/nature"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Dance
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Characters
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Poetry
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Humor
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Percussion */}
                  <li
                    className={
                      openSubmenus["percussion"]
                        ? "menu__item open"
                        : "menu__item"
                    }
                  >
                    <button
                      className="menu__link-btn"
                      onClick={() => toggleSubmenu("percussion")}
                    >
                      Percussion <span className="chevron">^</span>
                    </button>
                    {openSubmenus["percussion"] && (
                      <ul className="mobile-flyout">
                        <li>
                          <Link
                            to="/photography/nature"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Congos
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Bongos
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Tamborines
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            A myriad of Hand Instruments
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/photography/portraits"
                            className="menu__link"
                            onClick={handleLinkClick}
                          >
                            Piano
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Dance */}
                  <li
                    className={
                      openSubmenus["dance"] ? "menu__item open" : "menu__item"
                    }
                  >
                    <button
                      className="menu__link-btn"
                      onClick={() => toggleSubmenu("dance")}
                    >
                      Dance <span className="chevron">^</span>
                    </button>
                    {openSubmenus["dance"] && (
                      <ul className="mobile-flyout">
                        <li
                          className={
                            openSubmenus["choreo"]
                              ? "menu__item open"
                              : "menu__item"
                          }
                        >
                          <button
                            className="menu__link-btn"
                            onClick={() => toggleSubmenu("choreo")}
                          >
                            Choreography Based On:{" "}
                            <span className="chevron">^</span>
                          </button>
                          {openSubmenus["choreo"] && (
                            <ul className="mobile-flyout">
                              <li>
                                <Link
                                  to="/rrtv/fundraising"
                                  className="menu__link"
                                  onClick={handleLinkClick}
                                >
                                  Ballet
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/rrtv/childrens-tv"
                                  className="menu__link"
                                  onClick={handleLinkClick}
                                >
                                  Modern
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/rrtv/gma"
                                  className="menu__link"
                                  onClick={handleLinkClick}
                                >
                                  Competitive Figure Skating
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/rrtv/christmas"
                                  className="menu__link"
                                  onClick={handleLinkClick}
                                >
                                  Cuban
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/rrtv/christmas"
                                  className="menu__link"
                                  onClick={handleLinkClick}
                                >
                                  Irish
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/rrtv/christmas"
                                  className="menu__link"
                                  onClick={handleLinkClick}
                                >
                                  Country
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/rrtv/christmas"
                                  className="menu__link"
                                  onClick={handleLinkClick}
                                >
                                  Other
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            {/* About */}
            <li
              className={
                openSubmenus["about"] ? "menu__item open" : "menu__item"
              }
            >
              <button
                className="menu__link-btn"
                onClick={() => toggleSubmenu("about")}
              >
                About <span className="chevron">^</span>
              </button>
              {openSubmenus["about"] && (
                <ul className="mobile-flyout">
                  <li>
                    <Link
                      to="/"
                      className="menu__link"
                      onClick={handleLinkClick}
                    >
                      Mission Statement
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="menu__link"
                      onClick={handleLinkClick}
                    >
                      Goals
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="menu__link"
                      onClick={handleLinkClick}
                    >
                      Bio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="menu__link"
                      onClick={handleLinkClick}
                    >
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="menu__link"
                      onClick={handleLinkClick}
                    >
                      Teams
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Upcoming */}
            <li className="menu__item">
              <Link to="#" className="menu__link" onClick={handleLinkClick}>
                Upcoming
              </Link>
            </li>

            {/* Contact */}
            <li className="menu__item">
              <Link
                to="/Contact"
                className="menu__link"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
