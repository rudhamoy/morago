import React from 'react'
import { client } from '../../..';
import {PageContainer} from '../../../components/layout/PageContainer'
import ThemeForm from '../../../components/themes/ThemeForm'
import { ALL_CATEGORY } from '../../../utils/api/categoryApi';

export const addThemeLoader = async () => {
  const { data: categoriesData, loading: categoryLoading, error: categoriesError } = await client.query({
    query: ALL_CATEGORY,
    variables: {pageNo: 0, pageSize: 10},
  });


  return {categoriesData, categoryLoading, categoriesError}
}

const AddTheme = () => {

  return (
    <PageContainer 
    title="Add Theme"
    >
    <ThemeForm />
    </PageContainer>
  )
}

export default AddTheme