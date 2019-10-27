import React, { Component } from 'react';
import Card from '../models/CardModel';
import '../styles/members/Members.scss';

//static list used as substitute of connection between frontend and server
//it could be easly change to fetch data from database, and no matter how many exist its easy 
//to iterate throught them

//TODO: //check approach desribed above

const membersList = [
    {
        name: 'Basia Sołtysiak',
        role: 'Founder',
        location: 'Warsaw'
    },
    {
        name: 'Włas Chorowiec',
        role: 'Founder',
        location: 'Warsaw',
    },
    {
        name: 'Edyta Leśniewska',
        role: 'Head of Human Resources',
        location: 'Warsaw',
    },
    {
        name: 'Joanna Pawluk',
        role: 'Chef of growth Officer(CGO)',
        location: 'London',
    },
    {
        name: 'David Sunders',
        role: 'Business Development',
        location: 'London',
    },
    {
        name: 'Adam Eldringe',
        role: 'Business Developement Director US',
        location: 'Los Angles',
    },
    {
        name: 'Maha Mahda',
        role: 'Chef Business Developement Office (CBDO)',
        location: 'Warsaw',
    },
    {
        name: 'Elżbieta Kamińska',
        role: 'International Service Manager',
        location: 'Warsaw',
    },
    {
        name: 'Karolina Makuch',
        role: 'Creation Manager',
        location: 'Warsaw',
    },
    {
        name: 'Kamil Bolek',
        role: 'Head of communication',
        location: 'Warsaw',
    },
]

class Members extends Component {
    render() {
        return (
            <div className='main-container'>
                <div className='info-text'>
                    <h1>Meet our team</h1>
                </div>
                <div className='members-container'>
                    {membersList.map((value, index) => {
                        return (
                            <div className='card'>
                                <Card name={value.name} role={value.role} location={value.location} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Members;