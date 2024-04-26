import React, { useRef, useState } from 'react'
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

  const removeElement = (index) => {
    const cloned__cardElements = structuredClone(cardElements)

    cloned__cardElements.splice(index, 1)
    setCardElements(cloned__cardElements)
  }

  const getActiveEditor = () => {
    if (visibleEditor === 'text-editor') return (<TextEditorOptions />)

    return (<CardEditorOptions addElement={addElement}  />)
  }
  

  const setActiveElementHandler = (elementId) => {
    if (activeElement === elementId) return

    setActiveElement(elementId)
  }

  return (
    <div className='container'>
      <div className="block-header pt-5 mb-5">
        <h2>Template Editor</h2>
      </div>
      <div className="content-wrap flex flex-wrap justify-center relative">
        { getActiveEditor() }
        <VisitingCard classes="bg-red-500" style={cardStyles}>
          {
            cardElements.map((element) => {
              if (element.type === "text") {
                return <EditableText key={element.id} textData={element} setActive={() => setActiveElementHandler(element.id)}/>
              }

              return <EditableImage key={element.id} styles={element.styles} src={element.src} setActive={() => setActiveElementHandler(element.id)} />
            })
          }
        </VisitingCard>
        <input ref={imageInputRef} onChange={addImageElement} type="file" className="hidden" accept="image/*" />
      </div>
    </div>
  )
}

export default TemplateEditor