import Nav from './components/Nav';
import ShowCase from './components/ShowCase';
import Slides from './components/Slides'

import './App.css';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <div className="App">
        <Nav />
        <ShowCase />
      </div>
      <div className='slider'>
        <h1>Now Showing</h1> <span>Explore all</span>
        <Slides />
      </div>
    </Fragment>
  );
}

export default App;
