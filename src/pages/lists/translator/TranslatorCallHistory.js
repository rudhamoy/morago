import React from 'react'
import {PageContainer} from '../../../components/layout/PageContainer'
import TranslatorCallHistoryComponent from '../../../components/translator/TranslatorCallHistory'

const TranslatorCallHistory = () => {
  return (
    <PageContainer 
    title="Call History"
    searchFilter={true}
    >
    <TranslatorCallHistoryComponent />
    </PageContainer>
  )
}

export default TranslatorCallHistory