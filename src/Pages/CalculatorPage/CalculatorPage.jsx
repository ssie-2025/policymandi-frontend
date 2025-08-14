import React from 'react'
import PremiumCalculator from '../../Components/Calculator/PremiumCalculator'
import CoverageCalculator from '../../Components/Calculator/CoverageCalculator'
import MaturityCalculator from '../../Components/Calculator/MaturityCalculator'

function CalculatorPage() {
  return (
    <>
    <PremiumCalculator/>
    <CoverageCalculator/>
    <MaturityCalculator/>
    </>
  )
}

export default CalculatorPage
