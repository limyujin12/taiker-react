import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from '../../utils/ActiveLink';
import SidebarModal from '../SidebarModal/SidebarModal';
import NavbarInner from "./NavbarInner";
import * as gtag from "../../utils/gtag";

class Navbar extends Component {

    // Sidebar Modal
    state = {
        sidebarModal: false
    };
    toggleModal = () => {gtag.event({
      action: "링크 클릭",
      category: "Sidebar",
      label: "사이드바",
    });
        this.setState({
            sidebarModal: !this.state.sidebarModal
        });
    }

    // Search Form
    state = {
        searchForm: false,
    };
    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    // Navbar
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
          <>
            <div id="navbar" className="navbar-area">
              <div className="adani-nav">
                <div className="container">
                  <nav className="navbar navbar-expand-md navbar-light">
                    <Link href="/">
                      <a
                        className="navbar-brand"
                        onClick={() =>
                          gtag.event({
                            action: "링크 클릭",
                            category: "header",
                            label: "logo",
                          })
                        }
                      >
                        <img src="/images/logo.png" alt="logo" />
                      </a>
                    </Link>

                    <button
                      onClick={this.toggleNavbar}
                      className={classTwo}
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="icon-bar top-bar"></span>
                      <span className="icon-bar middle-bar"></span>
                      <span className="icon-bar bottom-bar"></span>
                    </button>

                    <NavbarInner
                      classOne={classOne}
                      toggleModal={this.toggleModal}
                    />
                  </nav>
                </div>
              </div>
            </div>

            {/* Right Sidebar Modal */}
            <SidebarModal
              onClick={this.toggleModal}
              active={this.state.sidebarModal ? "active" : ""}
            />
          </>
        );
    }
}

export default Navbar;

// export default Navbar;
