import { useState } from 'react'
import FormContainer from '../../utils/form/FormContainer'

const AddTheme = () => {
    const [formState, setFormState] = useState([

        {
            labelName: 'Themes name',
            fieldType: 'input',
            field: [
                {
                    field: "",
                    labelName: 'Name'
                },
                {
                    field: "",
                    labelName: 'Surname'
                }
            ]
        },
        {
            labelName: 'Categories',
            placeholder: 'Choose',
            fieldType: 'select',
            field: '',
            options: [
                {
                   option: 'Name Category 1' 
                },
                {
                   option: 'Name Category 2' 
                },
                {
                   option: 'Name Category 3' 
                },
                {
                   option: 'Name Category 4' 
                },
            ]
        },
       
    ])

  return (
    <>
        <FormContainer formList={formState} />
    </>
  )
}

export default AddTheme