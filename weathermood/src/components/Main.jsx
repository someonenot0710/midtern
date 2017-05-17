import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    Button
} from 'reactstrap';
import {connect} from 'react-redux';

import Today from 'components/Today.jsx';
import PostForm from 'components/PostForm.jsx';
import Tell from 'components/tell.jsx'
import './Main.css';

class Main extends React.Component {
    static propTypes = {
        store: PropTypes.object,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className='main'>
                    <div className='bg-faded'>
                        <div className='container'>
                            <Navbar color='faded' light toggleable>
                                <NavbarToggler right onClick={this.handleNavbarToggle}/>
                                <NavbarBrand className='text-info' href="/">WeatherMood</NavbarBrand>
                                  <Collapse isOpen={this.props.navbarToggle} navbar>
                                      <Nav navbar>
                                          <NavItem>
                                              <NavLink tag={Link} to='/tell'>Tell</NavLink>
                                          </NavItem>
                                      </Nav>
                                  </Collapse>

                            </Navbar>
                        </div>
                    </div>

                    <Route exact path="/" render={() => (
                        <Today />
                    )}/>
                  <Route exact path="/tell" render={() => (
                        <Tell />
                    )}/>

                    <div className='footer'>
                        Carelife
                    </div>
                </div>
            </Router>
        );
    }
}

export default connect(state => ({
    ...state.main,
}))(Main);
