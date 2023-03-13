import React from 'react'
import {PageContainer} from '../../../components/layout/PageContainer'
import UserCallHistoryList from '../../../components/user/UserCallHistoryList'

const UserCallHistory = () => {
  return (
    <PageContainer 
    title="Call History"
    searchFilter={true}
    >
    <UserCallHistoryList />
    </PageContainer>
  )
}

export default UserCallHistory