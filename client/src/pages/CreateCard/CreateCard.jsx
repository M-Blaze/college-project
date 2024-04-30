import React, { useState, useMemo } from 'react';

import Navbar from "../../components/Navbar"
import MultiStepProgressBar from '../../components/MultiStepProgressBar';
import TemplatePicker from '../../components/TemplatePicker';
import TemplateEditor from '../../components/TemplateEditor';

function CreateCard() {
    const [activeStep, setActiveStep] = useState(1)
    const [cardToEdit, setCardToEdit] = useState({})
    const ActiveCard = useMemo(() => {
        if (activeStep === 1) return TemplatePicker

        return TemplateEditor
    }, [activeStep])
    
    const goNext = () => {
        setActiveStep(prev => prev+2)
    }

    const selectCardToEdit = (card) => {
        setCardToEdit(card)
    }

    return (
        <>
            <Navbar />
            <MultiStepProgressBar activeStep={activeStep} stepHandler={(step) => setActiveStep(step)} />
            <ActiveCard goNext={goNext} selectCardToEdit={selectCardToEdit} stepHandler={(step) => setActiveStep(step)} cardData={cardToEdit} />
        </>
    );
}

export default CreateCard;