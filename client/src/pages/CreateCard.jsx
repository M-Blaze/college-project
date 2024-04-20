import React, { useState, useMemo } from 'react';

import Navbar from "../components/Navbar"
import MultiStepProgressBar from '../components/MultiStepProgressBar';
import TemplatePicker from '../components/TemplatePicker';
import TemplateEditor from '../components/TemplateEditor';

function CreateCard() {
    const [activeStep, setActiveStep] = useState(1)
    const ActiveCard = useMemo(() => {
        if (activeStep === 1) return TemplatePicker

        return TemplateEditor
    }, [activeStep])

    const goNext = () => {
        setActiveStep(prev => prev+2)
    }

    return (
        <>
            <Navbar />
            <MultiStepProgressBar activeStep={activeStep} stepHandler={(step) => setActiveStep(step)} />
            <ActiveCard goNext={goNext} />
        </>
    );
}

export default CreateCard;