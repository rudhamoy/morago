import React from 'react'
import {PageContainer} from '../../../components/layout/PageContainer'
import UserDepositHistory from '../../../components/user/UserDepositHistory'

const DepositHistory = () => {
  return (
    <PageContainer 
    title="Deposit history"
    searchFilter={true}
    >
    <UserDepositHistory />
    </PageContainer>
  )
}

export default DepositHistory