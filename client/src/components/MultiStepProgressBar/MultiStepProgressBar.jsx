import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./MultiStepProgressBar.css";

const QUARTER_STEP = 16.665
const steps = new Array(4).fill(null)
const MultiStepProgressBar = ({ activeStep, stepHandler }) => {
  let stepPercentage = activeStep * QUARTER_STEP

  const stepChanger = (index) => {
    const newStep = (2*index) + 1

    if (newStep > activeStep) return 
    
    stepHandler((2*index) + 1)
  }

  return (
    <ProgressBar percent={stepPercentage}>
      {
        steps.map((_, index) => {
          return (<Step key={index}>
            {({ accomplished }) => (
              <div className={`indexedStep ${accomplished ? "accomplished" : null}`} onClick={() => stepChanger(index)}>
                {index + 1}
              </div>
            )}
          </Step>)
        })
      }
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
