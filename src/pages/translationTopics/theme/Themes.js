import React from 'react'
import {PageContainer} from '../../../components/layout/PageContainer'
import ThemeList from '../../../components/themes/ThemeList'
import { CHANGE_THEME_ACTION, DELETE_THEME, FILTER_THEME_BY_CATEGORY, GET_THEMES_BY_PAGING } from '../../../utils/api/themeApi'

const Themes = () => {

  const themeApi = {
    delete : DELETE_THEME,
    query: GET_THEMES_BY_PAGING,
    filter: FILTER_THEME_BY_CATEGORY,
    variables: {pageNo: 0},
    action: CHANGE_THEME_ACTION
  }

  return (
    <PageContainer title="Themes" searchFilter={true} graphQlapi={themeApi}>
     <ThemeList />
    </PageContainer>
  )
}

export default Themes