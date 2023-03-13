import React, { useState } from 'react'
import FormContainer from '../../utils/form/FormContainer'

const Charge = () => {
    const [formState, setFormState] = useState([

        {
            labelName: 'User',
            fieldType: 'input',
            field: ''
        },
        {
            labelName: 'Phone',
            fieldType: 'input',
            field: ''
        },
        {
            labelName: 'Label',
            fieldType: 'input',
            field: ''
        },

    ])

  return (
    <>
        <FormContainer 
        formList={formState} 
        btnTitle="Deposit Confirm"
        showImageInput
        />
    </>
  )
}

export default Charge