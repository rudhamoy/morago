import React from 'react'
import {PageContainer} from '../../../components/layout/PageContainer'
import CategoryForm from '../../..../../../components/categories/CategoryForm'

const AddCategory = () => {
  return (
    <PageContainer 
    title="Add Category"
    >
    <CategoryForm />
    </PageContainer>
  )
}

export default AddCategory