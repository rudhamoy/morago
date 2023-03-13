import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser ($phone: String!, $password: String!, $firstName: String!, $lastName: String!, $file: Upload) {
  registrationUser(input: { 
    phone: $phone, 
    password: $password,
    firstName: $firstName,
    lastName: $lastName,
    file: $file 
  }) {
    id
    phone
    firstName
    lastName
    balance
    fcmToken
    apnToken
    ratings
    totalRatings
    isActive
    isDebtor
    token
    on_boarding_status
    createdAt
    updatedAt
    image {
      id
      path
      type
      originalTitle
      createdAt
      updatedAt
    }
    profile {
      typeName
      id
      email
      isFreeCallMade
      dateOfBirth
      levelOfKorean
      isAvailable
      isOnline
      createdAt
      updatedAt
    }
  }
}
`

export const GET_USER_PROFILES = gql`
query userProfiles( $pageNo: Int!) {
  usersByPaging(input: {pageSize: 5, pageNo: $pageNo}) {
    currentPage
    totalPages
    totalElements
    objectList {
      id
      phone
      firstName
      lastName
      balance
    }
  }
}
`;

export const GET_USER_BY_ID = gql`
query ($id: ID) {
  user(id: $id) {
    id
    phone
    firstName
    lastName
    balance
    fcmToken
    apnToken
    ratings
    totalRatings
    isActive
    isDebtor
    token
    on_boarding_status
    createdAt
    updatedAt
    image {
      id
      path
      type
      originalTitle
      createdAt
      updatedAt
    }
    profile {
      typeName
      id
      email
      isFreeCallMade
      dateOfBirth
      levelOfKorean
      isAvailable
      isOnline
      createdAt
      updatedAt
    }
  }
}
`

export const LOGIN_MUTATION = gql`
mutation LoginMutation ($phone: String!, $password: String!) {
  login(input: { phone: $phone, password: $password}) {
    id
    phone
    firstName
    lastName
    token
  } 
}
`

export const CHANGE_PASSWORD_MUTATION = gql`
mutation ($originalPassword: String!, $newPassword: String!) {
  updatePassword(input: { originalPassword: $originalPassword, newPassword: $newPassword }) {
    id
    firstName
    lastName
    token
  }
}
`

export const GET_CALLS_BY_USERID =  gql`
query getCallsByUserId ( $userId: ID!, $pageNo: Int! ) {
  allOutAndIncomingCallsForAdmin(userId: $userId, input: {
    pageNo: $pageNo,
    pageSize: 5
  }) {
    currentPage
    totalPages
    totalElements
    objectList {
      id
      caller{
        phone
      }
      recipient {
        firstName
        lastName
      }
      theme {
        name
      }
      createdAt
      updatedAt
      duration
      status
      sum
      commission
      translatorHasRated
      userHasRated
      record {
        originalTitle
        path
        id
      }
    }
  }
}
`

export const GET_DEPOSITS_BY_USERID = gql`
query ($userId: ID!){
  depositsByUserId(userId: $userId, input: {}) {
    currentPage
    totalPages
    totalElements
    objectList {
      id
      accountHolder
      nameOfBank
      coin
      won
      status
      user{
        firstName
        lastName
        ratings
      }
      createdAt
      updatedAt
    }
  }
}
`

// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbm4iLCJpc3MiOiJjb20uaGFic2lkYS51dG93biIsImV4cCI6MTY3ODE4MjY3NCwiaWF0IjoxNjc2OTczMDc0fQ.HHi7zZlPHOLg6ujNWhhxsHYeSjq6JjCtpERk8qYmcXQ
// username: "adminn",
//     password: "admin"

// phone: "8787767321", password: "LetsDoIt"
