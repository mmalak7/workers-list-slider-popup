import React, { useState, Component } from 'react';
import Card from '../models/CardModel';
import SwiperModal from '../models/SwiperModel';

import '../styles/members/Members.scss';

//static list used as substitute of connection between frontend and server
//it could be easly change to fetch data from database, and no matter how many exist its easy 
//to iterate throught them

//TODO: //check approach desribed above

const membersList = [
    {
        name: 'Basia Sołtysiak',
        role: 'Founder',
        location: 'Warsaw',
        image: 'https://source.unsplash.com/random/1200x700'
    },
    {
        name: 'Włas Chorowiec',
        role: 'Founder',
        location: 'Warsaw',
        image: 'https://source.unsplash.com/random/1200x700'
    },
    {
        name: 'Edyta Leśniewska',
        role: 'Head of Human Resources',
        location: 'Warsaw',
        image: 'https://source.unsplash.com/random/1200x700'
    },
    {
        name: 'Joanna Pawluk',
        role: 'Chef of growth Officer(CGO)',
        location: 'London',
        image: 'https://source.unsplash.com/random/1200x700'
    },
    {
        name: 'David Sunders',
        role: 'Business Development',
        location: 'London',
        image: 'https://source.unsplash.com/random/1200x700'
    },
    {
        name: 'Adam Eldringe',
        role: 'Business Developement Director US',
        location: 'Los Angles',
        image: 'https://source.unsplash.com/random/1200x700'
    },
    {
        name: 'Maha Mahda',
        role: 'Chef Business Developement Office (CBDO)',
        location: 'Warsaw',
        image: 'https://source.unsplash.com/random/1200x800'
    },
    {
        name: 'Elżbieta Kamińska',
        role: 'International Service Manager',
        location: 'Warsaw',
        image: 'https://source.unsplash.com/random/1200x800'
    },
    {
        name: 'Karolina Makuch',
        role: 'Creation Manager',
        location: 'Warsaw',
        image: 'https://source.unsplash.com/random/1200x800'
    },
    {
        name: 'Kamil Bolek',
        role: 'Head of communication',
        location: 'Warsaw',
        image: 'https://source.unsplash.com/random/1200x800'
    },

]

class Members extends Component {

    state = {
        show: false,
        selectedIndex: Number,
    };
    showModal = (idx) => {
        this.setState(() => ({
            show: true,
            selectedIndex: idx,
        }));
    };

    hideModal = () => this.setState({ show: false });

    render() {
        console.log(this.state.selectedIndex)

        return (
            < div >
                <div className='main-container'>
                    <div className='info-text'>
                        <h1>Meet our team</h1>
                    </div>
                    <div className='members-container'>
                        {membersList.map((value, index) => {
                            return (
                                <div onClick={() => this.showModal(index)} className='card' key={index} id={index}>
                                    <Card index={index} name={value.name} role={value.role} location={value.location} />
                                </div>

                            )
                        })}
                    </div>
                </div>
                <SwiperModal handleClose={this.hideModal} show={this.state.show} membersList={membersList} curr_idx={this.state.selectedIndex} >
                </SwiperModal>
            </div >
        );
    }
}

export default Members;
