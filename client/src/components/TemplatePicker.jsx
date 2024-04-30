import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import VisitingCard from './VisitingCard'
import Image from './Image';
import Text from './Text';

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
        type: "text",
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
        type: "text",
        content: "Your Name",
        styles: {
          fontWeight: 400,
          fontSize: "18px",
          left: 'calc(50% - 180px)',
          top: 'calc(50% + 63px)',
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          color: "rgb(255, 255, 255)"
        }
      },
      {
        id: uuidv4(),
        type: "text",
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
        type: "text",
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
          left: 'calc(50% - 165px)',
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
    selectCardToEdit(card)
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
              <VisitingCard classes="hover:scale-105 hover:-rotate-2 duration-150" style={card.cardStyles} clickHandler={() => selectCard(card)}>
                {
                  card.cardElements.map(element => getElementComponent(element))
                }
              </VisitingCard>
            </li>
          ))
        }
        <li className='px-5 mb-10'>
          <VisitingCard classes="hover:scale-105 hover:-rotate-2 duration-150" style={{ backgroundColor: '#ccc' }} clickHandler={goNext} />
        </li>
      </ul>
    </div>
  )
}

export default TemplatePicker