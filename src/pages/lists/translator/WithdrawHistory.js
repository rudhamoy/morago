import React from 'react'
import {PageContainer} from '../../../components/layout/PageContainer'
import TranslatorWithdrawHistory from '../../../components/translator/TranslatorWithdrawHistory'

const WithdrawHistory = () => {
  return (
    <PageContainer 
    title="Withdraw history"
    searchFilter={true}
    >
    <TranslatorWithdrawHistory />
    </PageContainer>
  )
}

export default WithdrawHistory