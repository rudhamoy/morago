import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { CREATE_TRANSLATOR, GET_TRANSLATOR_LIST } from '../../utils/api/translatorApi';
import FormContainer from '../../utils/form/FormContainer'

const TranslatorForm = () => {

    const navigate = useNavigate()

    // get the theme data by id OR
    // get the categories data list
    const translatorData = useLoaderData()
    const {themesData, languages } = translatorData
 
    // add categories to option lists
    // show in select options in form
    let themeOptions = []
    if ( themesData) {
        themesData.themesByPaging.objectList.map((i) => {
            themeOptions.push({ name: i.name, label: i.name })
        })
    }

    // add language to option lists
    // show in select options in form
    let languageOptions = []
    if ( themesData) {
        languages.LanguagesByPaging.objectList.map((i) => {
            languageOptions.push({ name: i.name, label: i.name })
        })
    }

    const topik = [
        {
           name: '1',
           label: "1 Level"
        },
        {
           name: '2',
           label: "2 Level"
        },
        {
           name: '3',
           label: "3 Level"
        },
        {
           name: '4',
           label: "4 Level"
        },
        {
           name: '5',
           label: "5 Level"
        },
        {
           name: '6',
           label: "6 Level" 
        },
    ]

    // state variables
    const [errorMsg, setErrorMsg] =useState()
    const [image, setImage] = useState()
    const [formState, setFormState] = useState(() => [

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
            // action: (e) => setFormState([...formState, formState[1].fieldValue = e])
        },
        {
            labelName: 'Email',
            fieldType: 'input',
            fieldValue: '',
            // action: (e) => setFormState([...formState, formState[2].fieldValue = e])
        },
        {
            labelName: 'Birth',
            fieldType: 'input',
            inputType: 'date',
            fieldValue: '',
            // action: (e) => setFormState([...formState, formState[3].fieldValue = e])
        },
        {
            labelName: 'TOPIK',
            placeholder: 'Level',
            fieldType: 'select',
            fieldValue: '',
            options: topik,
            defaultValue:  translatorData?.translatorData?.translatorProfile ? topik.filter((i) => i.name === translatorData?.translatorData?.translatorProfile?.levelOfKorean) : null,
            // action: (e) => setFormState([...formState, formState[4].fieldValue = e])
        },
        {
            labelName: 'Language',
            placeholder: 'Language',
            fieldType: 'select',
            fieldValue: [],
            options: languageOptions,
            defaultValue: translatorData?.translatorData?.translatorProfile.languages,
            // action: (e) => setFormState([...formState, formState[5].fieldValue = e])
        },
        {
            labelName: "Translation's topics",
            placeholder: 'Theme',
            fieldType: 'select',
            fieldValue: [],
            options: themeOptions,
            defaultValue: translatorData?.translatorData?.translatorProfile.themes,
            // action: (e) => {
            //     setFormState([...formState, formState[6].fieldValue = e ])
            // }
        },

    ])

    // auto-populate the component state & fromData -when edit mode
    // populate data according to the id of a theme
    useEffect(() => {
        if (translatorData?.translatorData?.translatorProfile?.id) {
            setFormState([
                ...formState,
                formState[2].fieldValue = translatorData?.translatorData?.translatorProfile?.email
            ])
        }
    }, [translatorData?.translatorData?.translatorProfile?.id])

    // variables for creating translator
    let dob = formState[3].fieldValue.split('-')
    const  variables = {
        firstName: formState[0].fieldValue[0].fieldValue,
        phone: formState[1].fieldValue,
        password: "Mypassword",
        lastName: formState[0].fieldValue[1].fieldValue,
        email: formState[2].fieldValue,
        dateOfBirth: `${dob[0] + dob[1] + dob[2]}` ,
        levelOfKorean: formState[4].fieldValue[0],
        languages: formState[5].fieldValue,
        themes: formState[6].fieldValue,
        file: image
    }

    // method to create theme
    // mutate theme || create theme
    const [createTranslator, { loading: createLoading}] = useMutation(CREATE_TRANSLATOR, {
        variables,
        onCompleted: () => {
            navigate('/')
        },
        onError: ({graphQLErrors}) => {
            setErrorMsg(graphQLErrors[0].message)
        },
        refetchQueries: [{query: GET_TRANSLATOR_LIST, variables: {pageNo: 0}}]
    });

    return (
        <>
            <FormContainer 
               formList={formState.slice(0, 7)}
               setFormState={setFormState}
                errorMsg={errorMsg}
                setImage={setImage}
                onSubmits={createTranslator}
            />
        </>
    )
}

export default TranslatorForm