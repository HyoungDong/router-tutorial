import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/profiles/Dong">Dong</Link>
        </li>
        <li>
          <NavLink to="/profiles/Dong" activeStyle={{ background: 'pink' }}>
            Dong
          </NavLink>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
        <li>
          <NavLink to="/profiles/gildong" activeStyle={{ background: 'pink' }}>
            gildong
          </NavLink>
        </li>
      </ul>
      <Route path="/profiles" render={() => <div>사용자를 선택해 주세요!</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
