import React, { Component } from 'react';
import Card from '../models/CardModel';
import '../styles/members/Members.scss';

class Members extends Component {
    render() {
        return (
            <div className='main-container'>
                <div className='info-text'>
                    <h1>Meet our team</h1>
                </div>
                <div className='members-container'>
                    <div className='card'>
                        <Card />
                    </div>
                    <div className='card'>
                        <Card />
                    </div>
                    <div className='card'>
                        <Card />
                    </div>
                    <div className='card'>
                        <Card />
                    </div>
                    <div className='card'>
                        <Card />
                    </div>
                    <div className='card'>
                        <Card />
                    </div>
                    <div className='card'>
                        <Card />
                    </div>
                    <div className='card'>
                        <Card />
                    </div>
                    <div className='card'>
                        <Card />
                    </div>
                    <div className='card'>
                        <Card />
                    </div>
                </div>
            </div>
        )
    }
}

export default Members;