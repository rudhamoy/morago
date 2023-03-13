import React, { useState } from 'react'
import FormContainer from '../../utils/form/FormContainer'

const AddTranslator = () => {

    const [formState, setFormState] = useState([

        {
            labelName: 'Full Name',
            fieldType: 'input',
            fieldValue: [
                {
                    fieldValue: "",
                    labelName: 'Name',
                    action: (e) => setFormState([...formState, formState[0].fieldValue[0].fieldValue = e])
                },
                {
                    fieldValue: "",
                    labelName: 'Surname',
                    action: (e) => setFormState([...formState, formState[0].fieldValue[1].fieldValue = e])
                }
            ]
        },
        {
            labelName: 'Phone',
            fieldType: 'input',
            fieldValue: '',
            action: (e) => setFormState([...formState, formState[1].fieldValue = e])
        },
        {
            labelName: 'Email',
            fieldType: 'input',
            fieldValue: '',
            action: (e) => setFormState([...formState, formState[2].fieldValue = e])
        },
        {
            labelName: 'Birth',
            fieldType: 'input',
            inputType: 'date',
            fieldValue: '',
            action: (e) => setFormState([...formState, formState[3].fieldValue = e])
        },
        {
            labelName: 'TOPIK',
            placeholder: 'Level',
            fieldType: 'select',
            fieldValue: '',
            options: [
                {
                   option: '1 level' 
                },
                {
                   option: '2 level' 
                },
                {
                   option: '3 level' 
                },
            ],
            action: (e) => setFormState([...formState, formState[4].fieldValue = e])
        },
        {
            labelName: 'Language',
            placeholder: 'Language',
            fieldType: 'select',
            fieldValue: '',
            options: [
                {
                   option: 'Ru' 
                },
                {
                   option: 'En' 
                },
                {
                   option: 'Ko' 
                },
                {
                   option: 'Uz' 
                },
            ],
            action: (e) => setFormState([...formState, formState[5].fieldValue = e])
        },
        {
            labelName: "Translation's topics",
            placeholder: 'Theme',
            fieldType: 'select',
            fieldValue: '',
            options: [
                {
                   option: 'Theme 1' 
                },
                {
                   option: 'Theme 2' 
                },
                {
                   option: 'Theme 3' 
                },
                {
                   option: 'Theme 4' 
                },
            ],
            action: (e) => setFormState([...formState, formState[6].fieldValue = e])
        },

    ])

    return (
        <>
            <FormContainer formList={formState} />
        </>
    )
}

export default AddTranslator