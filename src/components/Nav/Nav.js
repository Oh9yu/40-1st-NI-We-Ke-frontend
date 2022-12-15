import React from 'react';
import Category from './Category/Category';
import Snkrs from './Category/Snkrs';
import Sideoption from './Sideoption/Sideoption';
import CATEGORY_DATA from './categoryData';
import './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO:  상수데이터 => 서버데이터로 변경 예정

  return (
    <div className="navBar">
      <img src="/images/nike_logo.png" alt="logo" />
      <section className="category">
        <ul className="navList">
          {CATEGORY_DATA.map(category => {
            return (
              <Category
                key={category.id}
                name={category.name}
                carousel={category.carousel}
                url={category.url}
              />
            );
          })}
          <Snkrs />
        </ul>
      </section>
      <Sideoption />
    </div>
  );
};

export default Nav;
