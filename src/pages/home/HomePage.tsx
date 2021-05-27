import React, { Component } from 'react';
import { OutlineBtn } from '../../core/components/outline-btn/OutlineBtn';
import './HomePage.scss';

export class HomePage extends Component {
  render() {
    return (
      <div className="home_page__container">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <h1>Hello, I'm <span className="name">Rodrigo Bosarreyes</span>.</h1>
              <h1>I'm a full-stack web developer.</h1>
              <div className="btn-container">
                <OutlineBtn text="View my work"/>
              </div>
            </div>
          </div>
        </div>
        <div className='light x1'></div>
        <div className='light x2'></div>
        <div className='light x3'></div>
        <div className='light x4'></div>
        <div className='light x5'></div>
        <div className='light x6'></div>
        <div className='light x7'></div>
        <div className='light x8'></div>
        <div className='light x9'></div>
      </div>
    )
  }
}

export default HomePage;
