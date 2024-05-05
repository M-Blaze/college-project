import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import VisitingCard from './VisitingCard'
import Image from './Image';
import Text from './Text';

const DEFAULT_CARD_TEMPLATE = {
  id: uuidv4(),
  cardStyles: {
    backgroundColor: "#ccc"
  },
  cardElements: [
    {
      id: uuidv4(),
      type: "image",
      isQr: true,
      src: "/assets/images/qrcode.png",
      styles: {
        left: 'calc(50% - 172px)',
        top: 'calc(50% + -16px)',
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        width: "80px",
        height: "80px"
      }
    }
  ]
}

const CARDS = [
  {
    id: uuidv4(),
    cardStyles: {
      backgroundImage: "url('/assets/templates/template1.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%"
    },
    cardElements: [
      {
        id: uuidv4(),
        type: "image",
        isQr: true,
        src: "/assets/images/qrcode.png",
        styles: {
          left: 'calc(50% + 222px)',
          top: 'calc(50% + 92px)',
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: "80px",
          height: "80px"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        contentType: "full name",
        content: "Your Name",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% - 175px)',
          top: 'calc(50% - 45px)',
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          color: "rgb(255, 255, 255)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        contentType: "phone",
        content: "Phone number",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% - 161px)',
          top: 'calc(50% - 15px)',
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          color: "rgb(255, 255, 255)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        contentType: "email",
        content: "Your Email",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% - 177px)',
          top: 'calc(50% - -15px)',
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          color: "rgb(255, 255, 255)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        content: "Your Address",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% - 166px)',
          top: 'calc(50% - -45px)',
          transform: "translate(-50%, -50%)",
          zIndex: 4,
          color: "rgb(255, 255, 255)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        content: "Image Here",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% - -130px)',
          top: 'calc(50% - 80px)',
          transform: "translate(-50%, -50%)",
          zIndex: 4,
          color: "rgb(0, 0, 0)"
        }
      }
    ]
  },
  {
    id: uuidv4(),
    cardStyles: {
      backgroundImage: "url('/assets/templates/template2.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%"
    },
    cardElements: [
      {
        id: uuidv4(),
        type: "image",
        isQr: true,
        src: "/assets/images/qrcode.png",
        styles: {
          left: 'calc(50% - 172px)',
          top: 'calc(50% + -16px)',
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: "80px",
          height: "80px"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        contentType: "full name",
        content: "Your Name",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% - 180px)',
          top: 'calc(50% + 72px)',
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          color: "rgb(255, 255, 255)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        contentType: "phone",
        content: "Phone number",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% + 110px)',
          top: 'calc(50% - 50px)',
          transform: "translate(-50%, -50%)",
          zIndex: 5,
          color: "rgb(255, 255, 255)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        contentType: "email",
        content: "Your Email",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% + 110px)',
          top: 'calc(50% + 15px)',
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          color: "rgb(255, 255, 255)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        content: "Your Address",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% + 110px)',
          top: 'calc(50% - 20px)',
          transform: "translate(-50%, -50%)",
          zIndex: 4,
          color: "rgb(255, 255, 255)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        content: "Website LInk",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% + 110px)',
          top: 'calc(50% + 50px)',
          transform: "translate(-50%, -50%)",
          zIndex: 7,
          color: "rgb(255, 255, 255)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        content: "Image Here",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% - 170px)',
          top: 'calc(50% - 95px)',
          transform: "translate(-50%, -50%)",
          zIndex: 4,
          color: "rgb(0, 0, 0)"
        }
      }
    ]
  },
  {
    id: uuidv4(),
    cardStyles: {
      backgroundImage: "url('/assets/templates/template3.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%"
    },
    cardElements: [
      {
        id: uuidv4(),
        type: "image",
        isQr: true,
        src: "/assets/images/qrcode.png",
        styles: {
          left: 'calc(50% - 175px)',
          top: 'calc(50% - 70px)',
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: "80px",
          height: "80px"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        contentType: "full name",
        content: "Your Name",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% + 130px)',
          top: 'calc(50% - 85px)',
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          color: "rgb(255, 255, 255)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        contentType: "phone",
        content: "Phone number",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% + 145px)',
          top: 'calc(50% - 50px)',
          transform: "translate(-50%, -50%)",
          zIndex: 5,
          color: "rgb(255, 255, 255)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        contentType: "email",
        content: "Your Email",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% + 130px)',
          top: 'calc(50% + 10px)',
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          color: "rgb(255, 255, 255)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        content: "Your Address",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% + 140px)',
          top: 'calc(50% - 20px)',
          transform: "translate(-50%, -50%)",
          zIndex: 4,
          color: "rgb(255, 255, 255)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        content: "Website LInk",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% + 140px)',
          top: 'calc(50% + 40px)',
          transform: "translate(-50%, -50%)",
          zIndex: 7,
          color: "rgb(255, 255, 255)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        content: "Image Here",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% - 175px)',
          top: 'calc(50% - 0px)',
          transform: "translate(-50%, -50%)",
          zIndex: 4,
          color: "rgb(0, 0, 0)"
        }
      }
    ]
  },
  {
    id: uuidv4(),
    cardStyles: {
      backgroundImage: "url('/assets/templates/template4.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%"
    },
    cardElements: [
      {
        id: uuidv4(),
        type: "image",
        isQr: true,
        src: "/assets/images/qrcode.png",
        styles: {
          left: 'calc(50% + 80px)',
          top: 'calc(50% + 17px)',
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: "80px",
          height: "80px"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        contentType: "full name",
        content: "Your Name",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% - 170px)',
          top: 'calc(50% - 40px)',
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          color: "rgb(0, 0, 0)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        contentType: "phone",
        content: "Phone number",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% - 155px)',
          top: 'calc(50% - 5px)',
          transform: "translate(-50%, -50%)",
          zIndex: 5,
          color: "rgb(0, 0, 0)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        contentType: "email",
        content: "Your Email",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% - 170px)',
          top: 'calc(50% + 60px)',
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          color: "rgb(0, 0, 0)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        content: "Your Address",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% - 160px)',
          top: 'calc(50% + 30px)',
          transform: "translate(-50%, -50%)",
          zIndex: 4,
          color: "rgb(0, 0, 0)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        content: "Website LInk",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% - 160px)',
          top: 'calc(50% + 90px)',
          transform: "translate(-50%, -50%)",
          zIndex: 7,
          color: "rgb(0, 0, 0)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        content: "Image Here",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% + 80px)',
          top: 'calc(50% - 60px)',
          transform: "translate(-50%, -50%)",
          zIndex: 4,
          color: "rgb(0, 0, 0)"
        }
      }
    ]
  },
  {
    id: uuidv4(),
    cardStyles: {
      backgroundImage: "url('/assets/templates/template5.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%"
    },
    cardElements: [
      {
        id: uuidv4(),
        type: "image",
        isQr: true,
        src: "/assets/images/qrcode.png",
        styles: {
          left: 'calc(50% - 166px)',
          top: 'calc(50% - 60px)',
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: "80px",
          height: "80px"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        contentType: "full name",
        content: "Your Name",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% + 130px)',
          top: 'calc(50% - 85px)',
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          color: "rgb(0, 0, 0)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        contentType: "phone",
        content: "Phone number",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% + 145px)',
          top: 'calc(50% - 50px)',
          transform: "translate(-50%, -50%)",
          zIndex: 5,
          color: "rgb(0, 0, 0)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        contentType: "email",
        content: "Your Email",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% + 130px)',
          top: 'calc(50% + 10px)',
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          color: "rgb(0, 0, 0)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        content: "Your Address",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% + 140px)',
          top: 'calc(50% - 20px)',
          transform: "translate(-50%, -50%)",
          zIndex: 4,
          color: "rgb(0, 0, 0)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        content: "Website LInk",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% + 140px)',
          top: 'calc(50% + 40px)',
          transform: "translate(-50%, -50%)",
          zIndex: 7,
          color: "rgb(0, 0, 0)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
        content: "Image Here",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% - 165px)',
          top: 'calc(50% - 0px)',
          transform: "translate(-50%, -50%)",
          zIndex: 4,
          color: "rgb(0, 0, 0)"
        }
      }
    ]
  }
]

const getElementComponent = (element) => {
  if (element.type === 'image') {
    return <Image key={element.id} imageData={element} />
  }

  return <Text key={element.id} textData={element} />
}

const TemplatePicker = ({ goNext, selectCardToEdit }) => {
  const selectCard = (card) => {
    let cardToEdit = { ...DEFAULT_CARD_TEMPLATE }
    
    if (card) {
      cardToEdit = card
    }

    selectCardToEdit(cardToEdit)
    goNext()
  }

  return (
    <div className='container'>
      <div className="block-header pt-5">
        <h2>Choose your template</h2>
      </div>
      <ul className="cards-list flex justify-center flex-wrap -mx-5">
        {
          CARDS.map(card => (
            <li className='px-5 mb-10' key={card.id}>
              <VisitingCard classes="hover:scale-105 hover:-rotate-2 duration-150 cursor-pointer" style={card.cardStyles} clickHandler={() => selectCard(card)}>
                {
                  card.cardElements.map(element => getElementComponent(element))
                }
              </VisitingCard>
            </li>
          ))
        }
        <li className='px-5 mb-10'>
          <VisitingCard classes="hover:scale-105 hover:-rotate-2 duration-150 cursor-pointer" style={{ backgroundColor: '#ccc' }} clickHandler={() => selectCard()}>
            <h2 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Create your own template</h2>
          </VisitingCard>
        </li>
      </ul>
    </div>
  )
}

export default TemplatePicker