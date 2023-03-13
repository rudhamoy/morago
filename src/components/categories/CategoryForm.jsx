import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useState } from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { ALL_CATEGORY, CREATE_CATEGORY, UPDATE_CATEGORY } from '../../utils/api/categoryApi';
import FormContainer from '../../utils/form/FormContainer'

const CategoryForm = () => {

  const navigate = useNavigate()

  // get the current page location
  // add or edit mode
  // pass the button title props & button function based on the page location
  const location = useLocation()
  const pageLocation = location.pathname.split('/')[3]

  // get the category data by id
  const category = useLoaderData()

  // satte varaibles
  const [errorMsg, setErrorMsg] = useState()
  const [updated, setUpdated] = useState(false)
  const [formState, setFormState] = useState([

    {
      labelName: 'Category name',
      fieldType: 'input',
      fieldValue: '',
    },
  ])

  // auto-populate the component state & fromData -when edit mode
  // populate data according to the id of a category
  useEffect(() => {
    if (category?.categoryData.category?.id) {
      setFormState([
        ...formState,
        formState[0].fieldValue = category?.categoryData.category.name,
      ])
    }
  }, [category?.categoryData.category.id])


  // create category mutation
  const [createCategory, { loading: createLoading }] = useMutation(CREATE_CATEGORY, {
    variables: {
      name: formState[0].fieldValue
    },
    onCompleted: () => {
      navigate('/translation_topics/categories')
    },
    onError: ({ graphQLErrors }) => {
      setErrorMsg(graphQLErrors[0].message)
    },
    refetchQueries: [{ query: ALL_CATEGORY, variables: { pageNo: 0 } }]
  });

  // update category mutation
  const [updateCategory, { loading: updateLoading }] = useMutation(UPDATE_CATEGORY, {
    variables: {
      id: category?.categoryData.category.id,
      name: formState[0].fieldValue,
    },
    onCompleted: () => {
      setUpdated(true)
    }
  });

  // form button title
  // based on page location - update || create
  const updateBtnTitle = updateLoading ? "Updating..." : (updated === true ? "Updated" : "Update")
  const btnTitle = pageLocation === "add_category" ? (createLoading ? "Submitting..." : "Save") : updateBtnTitle
  // cancel button title
  const cancelBtnTitle = pageLocation === "edit_category" && (updated === true && "Back")

  // loading condition - based on create or update
  const pageLoading = pageLocation === "add_category" ? createLoading : updateLoading


  return (
    <>
      <FormContainer
        formList={formState.slice(0, 1)}
        setFormState={setFormState}
        btnTitle={btnTitle}
        onSubmits={pageLocation === "add_category" ? createCategory : updateCategory}
        cancelBtnTitle={cancelBtnTitle}
        cancelBtn={() => navigate('/translation_topics/categories')}
        loading={pageLoading}
        update={updated}
      />
    </>
  )
}

export default CategoryForm