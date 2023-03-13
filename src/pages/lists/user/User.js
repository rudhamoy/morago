import React from 'react'
import {PageContainer} from '../../../components/layout/PageContainer'
import UserList from '../../../components/user/UserList'

const User = () => {
  return (
    <PageContainer 
    title="User"
    searchFilter={true}
    >
     <UserList />
    </PageContainer>
  )
}

export default User