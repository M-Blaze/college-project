import React from 'react';
import './dashboard.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import CardInDashboard from '../components/CardInDashboard';


function DashBoard() {
    const navigate = useNavigate()
    const [digiCards, setDigiCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const fetchDigiCards = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }

            const response = await axios.get(`/digiCardsByUser/${userInfo.data._id}`, config);

            setDigiCards(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching digiCards:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userInfo) {
            fetchDigiCards();
        } else {
            navigate('/login')
        }
    // eslint-disable-next-line
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const deleteCard = (index, id) => {
        const cards = structuredClone(digiCards)
        
        cards.splice(index, 1)
        setDigiCards(cards)
        axios.delete(`/digicard/${id}`);
    }

    return (
        <div className='dashBoard pb-5'>
            <Navbar />
            <h2 className='text-black'>My Cards</h2>
            <div className="container">
                <div className="cards-list -mx-2 flex flex-wrap">
                    {
                        digiCards.map((card, index) => <CardInDashboard key={card._id} cardData={card} deleteCard={() => deleteCard(index, card._id)} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default DashBoard;
