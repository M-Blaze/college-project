import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

import VisitingCard from '../components/VisitingCard';
import Image from '../components/Image';
import Text from '../components/Text';

const CardDisplay = () => {
  const [cardData, setCardData] = useState()
  const { cardId } = useParams()

  const fetchCardData = async () => {
    try {
      const response = await axios.get(`/card/${cardId}`);
      
      setCardData(response.data.card);
    } catch (error) {
      console.error('Error fetching digiCards:', error);
    }
  };

  const getElementComponent = (element) => {
    if (element.isQr) {
      return (
          <div className="qr-code absolute" style={element.styles}>
              <QRCodeSVG id="qr-svg" value={`${process.env.REACT_APP_CLIENT_DOMAIN}/card/${cardData._id}`} width="100%" height="100%" />
          </div>
      )
  }
    if (element.type === 'image') {
        return <Image key={element.id} imageData={element} />
    }

    return <Text key={element.id} textData={element} />
}

  
  useEffect(() => {
    fetchCardData()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='card-display flex h-screen items-center justify-center'>
      {
        cardData ? (
          <VisitingCard style={cardData.cardStyles}>
            { cardData.cardElements.map(element => getElementComponent(element)) }
          </VisitingCard>
        ) : <span>loading</span>
      }
    </div>
  )
}

export default CardDisplay