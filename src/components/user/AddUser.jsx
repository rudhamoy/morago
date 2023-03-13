import { useState } from 'react'
import FormContainer from '../../utils/form/FormContainer'

const AddUser = () => {

    const [formState, setFormState] = useState([

        {
            labelName: 'Full Name',
            fieldType: 'input',
            fieldValue: [
                {
                    fieldValue: "",
                    labelName: 'Name',
                    action: (e) =>
                        setFormState([
                            ...formState,
                            formState[0].fieldValue[0].fieldValue = e
                        ])
                },
                {
                    fieldValue: "",
                    labelName: 'Surname',
                    action: (e) =>
                        setFormState([
                            ...formState,
                            formState[0].fieldValue[1].fieldValue = e
                        ])
                }
            ]
        },
        {
            labelName: 'Phone',
            fieldType: 'input',
            fieldValue: '',
            action: (e) =>
                setFormState([
                    ...formState,
                    formState[1].fieldValue = e
                ])
        },
        {
            labelName: 'Coins',
            placeholder: 'Choose',
            fieldType: 'select',
            fieldValue: '',
            options: [
                {
                    option: '100'
                },
                {
                    option: '200'
                },
                {
                    option: '300'
                },
                {
                    option: '400'
                },
            ],
            action: (e) =>
                setFormState([
                    ...formState,
                    formState[2].fieldValue = e
                ])
        },

    ])

    return (
        <>
            <FormContainer formList={formState} setFormState={setFormState} />
        </>
    )
}

export default AddUser