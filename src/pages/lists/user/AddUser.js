import React from 'react'
import {PageContainer} from '../../../components/layout/PageContainer'
import UserForm from '../../../components/user/UserForm'

const AddUser = () => {
  return (
    <PageContainer 
    title="Add User"
    >
    <UserForm />
    </PageContainer>
  )
}

export default AddUser