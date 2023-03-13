import { useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom'
import { CREATE_USER, GET_USER_PROFILES } from '../../utils/api/userApi'
import FormContainer from '../../utils/form/FormContainer'

const UserForm = () => {
    const navigate = useNavigate()

     // get the current page location
    // add or edit mode
    // pass the button title props & button function based on the page location
    const location = useLocation()
    const pageLocation = location.pathname.split('/')[3]

    // get the theme data by id OR
    // get the categories data list
    const userData = useLoaderData()

    // state variables
    const [file, setFile] = useState()
    const [formState, setFormState] = useState([

        {
            labelName: 'Full Name',
            fieldType: 'input',
            fieldValue: [
                {
                    labelName: 'Name',
                    fieldValue: "",
                    action: (e) =>
                        setFormState([
                            ...formState,
                            formState[0].fieldValue[0].fieldValue = e
                        ])
                },
                {
                    labelName: 'Surname',
                    fieldValue: "",
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
        },
        {
            labelName: 'Coins',
            placeholder: 'Choose',
            fieldType: 'select',
            fieldValue: '',
            options: [
                {
                    name: '100',
                    label: '100'
                },
                {
                    name: '200',
                    label: '200'
                },
                {
                    name: '300',
                    label: '300'
                },
                {
                    name: '400',
                    label: '400'
                },
            ],
        },

    ])
    const [errorMsg, setErrorMsg] = useState()


    // auto-populate the component state & fromData -when edit mode
    // populate data according to the id of a user
    useEffect(() => {
        if (userData?.userData?.user?.id) {
            setFormState([
                ...formState,
                formState[0].fieldValue[0].fieldValue = userData.userData.user.firstName,
                formState[0].fieldValue[1].fieldValue = userData.userData.user.lastName,
                formState[1].fieldValue = userData.userData.user.phone
            ])
        }
    }, [userData?.userData?.user?.id])



     // method to create user
    // mutate user || create user
    const [createUser, { loading: createLoading}] = useMutation(CREATE_USER, {
        variables: {
            file,
            password: "moragoUser",
            phone: formState[1].fieldValue,
            firstName:  formState[0].fieldValue[0].fieldValue,
            lastName:  formState[0].fieldValue[1].fieldValue
        },
        onCompleted: () => {
            navigate('/lists/user')
        },
        onError: ({graphQLErrors}) => {
            setErrorMsg(graphQLErrors[0].message)
        },
        refetchQueries: [{query: GET_USER_PROFILES, variables: {pageNo: 0}}]
    });


    return (
        <>
            <FormContainer 
            formList={formState}
            setFormState={setFormState}
            setImage={setFile}
            onSubmits={createUser}
            errorMsg={errorMsg}
            loading={createLoading}
            />
        </>
    )
}

export default UserForm