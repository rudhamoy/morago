import React from 'react'
import {PageContainer} from '../../../components/layout/PageContainer'
import TranslatorList from '../../../components/translator/TranslatorList'
import { DELETE_TRANSLATOR, GET_TRANSLATOR_LIST } from '../../../utils/api/translatorApi'

const Translator = () => {

  const translatorApi = {
    delete : DELETE_TRANSLATOR,
    query: GET_TRANSLATOR_LIST,
    variables: {pageNo: 0}
  }

  return (
    <PageContainer 
    title="Translators list"
    searchFilter={true}
    graphQlapi={translatorApi}
    >
     <TranslatorList />
    </PageContainer>
  )
}

export default Translator