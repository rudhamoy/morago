import React, { useState } from 'react'
import FormContainer from '../../utils/form/FormContainer'

const Withdraw = () => {
    const [formState, setFormState] = useState([

        {
            labelName: 'User Name',
            fieldType: 'input',
            field: ''
        },
        {
            labelName: 'Bank Name',
            fieldType: 'input',
            field: ''
        },
        {
            labelName: 'Bank Account',
            fieldType: 'input',
            field: ''
        },
        {
            labelName: 'Withdraw Amount',
            fieldType: 'input',
            field: ''
        }

    ])

  return (
    <div>
        <FormContainer formList={formState} btnTitle="Transfer Completed" />
    </div>
  )
}

export default Withdraw