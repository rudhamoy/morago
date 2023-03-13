import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom'


import FormContainer from '../../utils/form/FormContainer'
import { CREATE_THEME, GET_THEMES_BY_PAGING, UPDATE_THEME } from '../../utils/api/themeApi';

const ThemeForm = () => {
    const navigate = useNavigate()

    // get the current page location
    // add or edit mode
    // pass the button title props & button function based on the page location
    const location = useLocation()
    const pageLocation = location.pathname.split('/')[3]

    // get the theme data by id OR
    // get the categories data list
    const theme = useLoaderData()

    // add categories to option lists
    // show in select options in form
    let options = []
    if ( theme?.categoriesData) {
        theme?.categoriesData.categories.objectList.map((i) => {
            options.push({ name: i.name, label: i.name })
        })
    }

    // states varibales
    const [updated, setUpdated] = useState(false)
    const [imageIcon, setImageIcon] = useState()
    const [formState, setFormState] = useState([

        {
            labelName: 'Themes name',
            fieldType: 'input',
            fieldValue: undefined,
        },
        {
            labelName: 'Categories',
            fieldType: 'select',
            placeholder: 'Choose',
            fieldValue: [],
            error: '',
            options,
        },

    ])
    const [errorMsg, setErrorMsg] = useState()
    const [disable, setDisable] = useState(true)

    // auto-populate the component state & fromData -when edit mode
    // populate data according to the id of a theme
    useEffect(() => {
        if (theme?.themeData?.theme?.id) {
            setFormState([
                ...formState,
                formState[0].fieldValue = theme?.themeData?.theme?.name,
                // formState[1].fieldValue = theme?.themeData?.theme?.category
            ])
        }
    }, [theme?.themeData?.theme?.id])

    const variables = {
        name: formState[0].fieldValue,
        categoryName: formState[1].fieldValue[0],
        icon: imageIcon,
        isPopular: false
    }

    // method to create theme
    // mutate theme || create theme
    const [createTheme, { loading: createLoading}] = useMutation(CREATE_THEME, {
        variables,
        onCompleted: () => {
            navigate('/translation_topics/themes')
        },
        onError: ({graphQLErrors}) => {
            setErrorMsg(graphQLErrors[0].message)
        },
        refetchQueries: [{query: GET_THEMES_BY_PAGING, variables: {pageNo: 0}}]
    });
    

    // method to update theme
    // update theme 
    const [updateTheme, { loading: updateLoading}] = useMutation(UPDATE_THEME, {
        variables: {
            id: theme?.themeData?.theme?.id,
            name: formState[0].fieldValue,
            category: formState[1].fieldValue[0],
        },
        onCompleted: () => {
            // navigate('/translation_topics/themes')
            setUpdated(true)
        }
    });

    // ERROR HANDLER
   useEffect(() => {
    if( errorMsg?.includes("categoryName")){
        setFormState([
            ...formState,
            formState[1].error = 'select category',
            
        ])
    }
   }, [errorMsg])

    // form button title
    // based on page location - update || create
    const updateBtnTitle = updateLoading ? "Updating..." : (updated === true ? "Updated" : "Update");

    const btnTitle = pageLocation === "add_theme" ? (createLoading ? "Submitting..." : "Save") : updateBtnTitle
    // cancel button title
    const cancelBtnTitle = pageLocation === "edit_theme" && ( updated === true && "Back")

    // loading condition - based on create or update
    const pageLoading = pageLocation === "add_theme" ? createLoading : updateLoading

    useEffect(() => {
        if(formState[0].fieldValue !== undefined || formState[0].fieldValue === '') {
            setDisable(false)
        }
    })


    return (
        <>
            <FormContainer
                formList={formState.slice(0, 2)}
                setFormState={setFormState}
                onSubmits={pageLocation === "add_theme" ? createTheme : updateTheme}
                btnTitle={btnTitle}
                cancelBtnTitle={cancelBtnTitle}
                cancelBtn={() => navigate('/translation_topics/themes')}
                setImage={setImageIcon}
                errorMsg={errorMsg}
                loading={pageLoading}
                update={updated}
                disable={disable}
            />
        </>
    )
}

export default ThemeForm