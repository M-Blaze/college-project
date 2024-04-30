import React, { useMemo, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import VisitingCard from '../VisitingCard'
import EditableText from '../EditableText'
import EditableImage from '../EditableImage'
import TextEditorOptions from './components/TextEditorOptions'
import CardEditorOptions from './components/CardEditorOptions'

const DEFAULT_TEXT_DATA = { 
  type: "text",
  content: "your text",
  styles: {
    fontWeight: "400",
    fontStyle: "",
    textDecoration: "",
    fontSize: "18px",
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

const TemplateEditor = ({ cardData }) => {
  const imageInputRef = useRef()
  const [cardStyles, setCardStyles] = useState(cardData.cardStyles)
  const [cardElements, setCardElements] = useState(cardData.cardElements)
  const [visibleEditor, setVisibleEditor] = useState("")
  const [activeElement, setActiveElement] = useState(null)

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
      
      newElement.id = uuidv4()
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

  const removeElement = (index) => {
    const cloned__cardElements = structuredClone(cardElements)

    cloned__cardElements.splice(index, 1)
    setCardElements(cloned__cardElements)
    setActiveElementHandler("", "")
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
        
        newImageElement.id = uuidv4()
        newImageElement.styles.zIndex = highestZIndex + 1
        newImageElement.src = e.target.result
        elements.push(newImageElement)
        return elements
      })
    }

    reader.readAsDataURL(inputEvent.target.files[0])           
  }

  const updateCardStyle = (styles) => {
    const newCardStyles = { ...cardStyles, ...styles }

    setCardStyles(newCardStyles)
  }

  const activeCardElement = useMemo(() => {
    return cardElements.find(card => card.id === activeElement)
  }, [cardElements, activeElement])

  const updateElementStyle = (property, value) => {
    const elementToUpdate = structuredClone(activeCardElement)

    if (property === "bold") {
      if (elementToUpdate.styles.fontWeight) {
        elementToUpdate.styles.fontWeight = ""
      } else {
        elementToUpdate.styles.fontWeight = "800"
      }
    }

    if (property === "underline") {
      if (elementToUpdate.styles.textDecoration) {
        elementToUpdate.styles.textDecoration = ""
      } else {
        elementToUpdate.styles.textDecoration = "underline"
      }
    }

    if (property === "italic") {
      if (elementToUpdate.styles.fontStyle) {
        elementToUpdate.styles.fontStyle = ""
      } else {
        elementToUpdate.styles.fontStyle = "italic"
      }
    }

    if (property === "color") {
      elementToUpdate.styles.color = value
    }

    if (property === "content") {
      elementToUpdate.content = value
    }

    if (property === "fontSize") {
      elementToUpdate.styles.fontSize = value
    }

    const elements = structuredClone(cardElements)
    const targetIndex = elements.findIndex(element => element.id === elementToUpdate.id)

    elements[targetIndex] = elementToUpdate
    setCardElements(elements)
  }  

  const setActiveElementHandler = (elementId, type) => {
    if (activeElement === elementId) return

    setVisibleEditor(type)
    setActiveElement(elementId)
  }

  return (
    <div className='container'>
      <div className="block-header pt-5 mb-5">
        <h2>Template Editor</h2>
      </div>
      <div className="content-wrap flex flex-wrap justify-center relative">
        <div className='editor-bar w-full mb-10'>
          <ul className="editor-options-list flex items-center border-b-2 -mx-1 py-2">
            <CardEditorOptions addElement={addElement} backgroundColor={cardStyles.backgroundColor}  updateCardStyle={updateCardStyle} />
            {
              visibleEditor === 'text' && (<TextEditorOptions updateElementStyle={updateElementStyle} textData={activeCardElement} />)
            }
          </ul>
        </div>
        <VisitingCard classes="bg-red-500" style={cardData.cardStyles} clickHandler={() => setActiveElementHandler("", "")}>
          {
            cardElements.map((element, index) => {
              if (element.type === "text") {
                return <EditableText key={element.id} textData={element} removeElement={() => removeElement(index)} setActive={() => setActiveElementHandler(element.id, "text")} />
              }

              return <EditableImage key={element.id} removeElement={() => removeElement(index)} styles={element.styles} src={element.src} setActive={() => setActiveElementHandler(element.id)} />
            })
          }
        </VisitingCard>
        <input ref={imageInputRef} onChange={addImageElement} type="file" className="hidden" accept="image/*" />
      </div>
    </div>
  )
}

export default TemplateEditor