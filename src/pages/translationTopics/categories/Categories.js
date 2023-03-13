import React from 'react'
import CategoryList from '../../../components/categories/CategoryList'
import {PageContainer} from '../../../components/layout/PageContainer'
import {  CHANGE_CATEGORY_STATUS, ALL_CATEGORY, DELETE_CATEGORY, CHANGE_CATEGORY_ACTION } from '../../../utils/api/categoryApi'

const Categories = () => {

  const categoriesApi = {
    query: ALL_CATEGORY,
    variables: {pageNo: 0},
    inactive: CHANGE_CATEGORY_STATUS,
    delete: DELETE_CATEGORY,
    action: CHANGE_CATEGORY_ACTION
  }

  return (
    <PageContainer title="Category" searchFilter={true} graphQlapi={categoriesApi} >
      <CategoryList />
    </PageContainer>
  )
}

export default Categories