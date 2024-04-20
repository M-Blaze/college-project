import React, { useRef, useState } from 'react'

import VisitingCard from './VisitingCard'
import EditorOptions from './EditorOptions'
import Text from './Text'
import Image from './Image'

const DEFAULT_TEXT_DATA = { 
  type: "text",
  content: "your text",
  styles: {
    left: '50%',
    top: '50%',
    transform: "translate(-50%, -50%)",
    zIndex: 0
  }
}

const DEFAULT_IMAGE_DATA = { 
  type: "image",
  src: "",
  styles: {
    left: '50%',
    top: '50%',
    transform: "translate(-50%, -50%)",
    zIndex: 0
  }
}

const TemplateEditor = () => {
  const imageInputRef = useRef()
  const [cardStyles, setCardStyles] = useState({ })
  const [cardElements, setCardElements] = useState([])

  const getHighestZIndex = () => {
    const highestZIndex = cardElements.reduce((max, element) => {
      if (element.styles.zIndex > max) {
        max = element.styles.zIndex
      }

      return max
    }, 0)

    return highestZIndex
  }

  const addTextElement = () => {
    setCardElements(previousElements => {
      const elements = structuredClone(previousElements)
      const highestZIndex = getHighestZIndex()
      const newElement = structuredClone(DEFAULT_TEXT_DATA)

      newElement.styles.zIndex = highestZIndex + 1
      elements.push(newElement)
      return elements
    })
  }

  const addElement = (elementType) => {
    if (elementType === "text") {
      return addTextElement()
    }

    showImageInput()
  }

  const showImageInput = () => {
    imageInputRef.current.click()
  }

  const addImageElement = (inputEvent) => {
    const reader = new FileReader()

    reader.onload = (e) => {
      setCardElements(previousElements => {
        const elements = structuredClone(previousElements)
        const highestZIndex = getHighestZIndex()
        const newImageElement = structuredClone(DEFAULT_IMAGE_DATA)
  
        newImageElement.styles.zIndex = highestZIndex + 1
        newImageElement.src = e.target.result
        elements.push(newImageElement)
        return elements
      })
    }

    reader.readAsDataURL(inputEvent.target.files[0])           
  }
  
  return (
    <div className='container'>
      <div className="block-header pt-5 mb-5">
        <h2>Template Editor</h2>
      </div>
      <div className="content-wrap flex justify-center pt-10 relative">
        <EditorOptions addElement={addElement} />
        <VisitingCard classes="bg-red-500" style={cardStyles}>
          {
            cardElements.map((element, index) => {
              if (element.type === "text") {
                return <Text key={index} styles={element.styles} content={element.content} />
              }

              return <Image key={index} styles={element.styles} src={element.src} />
            })
          }
        </VisitingCard>
        <input ref={imageInputRef} onChange={addImageElement} type="file" className="hidden" accept="image/*" />
      </div>
    </div>
  )
}

export default TemplateEditor