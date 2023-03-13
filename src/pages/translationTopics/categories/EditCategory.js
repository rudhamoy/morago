import React from 'react'
import {PageContainer} from '../../../components/layout/PageContainer'
import CategoryForm from '../../..../../../components/categories/CategoryForm'
import { GET_CATEGORY_BY_ID } from '../../../utils/api/categoryApi';
import { client } from '../../..';

export const editCategoryLoader = async ({ params }) => {
    const { id } = params;
  
    const { data: categoryData } = await client.query({
      query: GET_CATEGORY_BY_ID,
      variables: {
        id
      },
    });
  
    return {categoryData}
  }

const EditCategory = () => {
  return (
    <PageContainer 
    title="Edit Category"
    >
    <CategoryForm />
    </PageContainer>
  )
}

export default EditCategory