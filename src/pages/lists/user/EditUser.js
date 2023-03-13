import React from 'react'
import { client } from '../../..'
import {PageContainer} from '../../../components/layout/PageContainer'
import UserForm from '../../../components/user/UserForm'
import { GET_USER_BY_ID } from '../../../utils/api/userApi'

export const editUserLoader = async ({params}) => {
    const { id } = params

    const { data: userData } = await client.query({
        query: GET_USER_BY_ID,
        variables: {
          id
        },
      });
    
      return {userData}

}

const EditUser = () => {
  return (
    <PageContainer 
    title="Edit User"
    >
    <UserForm />
    </PageContainer>
  )
}

export default EditUser