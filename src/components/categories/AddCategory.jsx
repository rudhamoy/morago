import { useState } from 'react'
import FormContainer from '../../utils/form/FormContainer'

const AddCategory = () => {
  const [formState, setFormState] = useState([

    {
      labelName: 'Category name',
      fieldType: 'input',
      fieldValue: ''
    },

  ])

  return (
    <>
      <FormContainer formList={formState} />
    </>
  )
}

export default AddCategory