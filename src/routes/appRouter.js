import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Hero from '../components/Sections/Hero'
import Main from '../components/Sections/Main'
import About from '../components/Sections/About'
import Resume from '../components/Sections/Resume';
import Portfolio from '../components/Sections/Portfolio';
import Contact from '../components/Sections/Contact';
import Skills from '../components/Sections/Skills';
import ScrollToTop from '../components/ScrollToTop';

const routes = (
  <Router>
    <React.Fragment>
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={()=><Home content={ <Hero />} />} />
        <Route exact path='/about' component={()=><Home content={ <Main><About /></Main>} />} />
        <Route exact path='/skills' component={()=><Home content={ <Main><Skills /></Main>} />} />
        <Route exact path='/resume' component={()=><Home content={ <Main><Resume /></Main>} />} />
        <Route exact path='/portfolio' component={()=><Home content={ <Main><Portfolio /></Main>} />} />
        <Route exact path='/contact' component={()=><Home content={ <Main><Contact /></Main>} />} />
      </Switch>
    </React.Fragment>
  </Router>
);
export default routes;
