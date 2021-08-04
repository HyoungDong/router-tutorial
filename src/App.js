import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
import Profiles from './Profiles';
import WithRouterSample from './WithRouterSample';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />
      <WithRouterSample />
    </div>
  );
}

export default App;
