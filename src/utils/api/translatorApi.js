import { gql } from "@apollo/client";

export const GET_TRANSLATOR_LIST = gql`
query getTranslatorList($pageNo: Int!) {
        translatorProfiles(input: {pageSize: 5, pageNo: $pageNo}) {
          currentPage
          totalPages
          totalElements
          objectList {
            id
            email
            dateOfBirth
            levelOfKorean
            isAvailable
            isOnline
            languages{
              name
            }
            themes{
              name
            }
          }
        } 
}
`

export const CREATE_TRANSLATOR = gql`
mutation createTranslator(
  $phone: String!,
  $password: String!
  $firstName: String!,
  $lastName: String!,
  $email: String!,
  $dateOfBirth: String! ,
  $levelOfKorean: String!,
  $languages: [String!],
  $themes: [String!],
  $file: Upload!
  ){
    registrationTranslatorForAdmin(
      input: { 
        phone: $phone, 
        password: $password,
        firstName: $firstName,
        lastName: $lastName,
        email: $email,
        dateOfBirth: $dateOfBirth,
        levelOfKorean: $levelOfKorean,
        languages: $languages,
        themes: $themes,
        file: $file
      }
    ) {
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
      
    }
  }
`

export const DELETE_TRANSLATOR = gql`
mutation deleteTranslator ($id: ID!){
  deleteUser(id: $id)
}
`

export const GET_TRANSLATOR_BY_ID = gql`
query ($id: ID!){
  translatorProfile(id: $id) {
    id
    email
    dateOfBirth
    levelOfKorean
    isAvailable
    isOnline
    createdAt
    updatedAt
    languages {
      id
      name
      createdAt
      updatedAt
    }
    themes {
      id
      name
      koreanTitle
      price
      nightPrice
      description
      isPopular
      createdAt
      updatedAt
    }
  }
}

`

export const UPDATE_TRANSLATOR = gql`
mutation(
  $email: String!,
  $firstName: String!,
  $lastName: String!,
  $dateOfBirth: String!,
  $levelOfKorean: String!,
  $languages: [String!],
  $themes: [String!],
  $file: Upload!
) {
  updateTranslator(input: {
    email: $email,
    firstName: $firstName,
    lastName: $lastName,
    dateOfBirth: $dateOfBirth,
    levelOfKorean: $levelOfKorean,
    languages: $languages,
    themes: $themes,
    file: $file
    
  }) {
    id
    email
    dateOfBirth
    levelOfKorean
    isAvailable
    isOnline
    createdAt
    updatedAt
    languages {
      id
      name
      createdAt
      updatedAt
    }
    themes {
      id
      name
      koreanTitle
      price
      nightPrice
      description
      isPopular
      createdAt
      updatedAt
    }
  }
}

`

export const GET_LANGUAGES = gql`
query {
  LanguagesByPaging(input: {}) {
    currentPage
    totalPages
    totalElements
    objectList {
      id
      name
      createdAt
      updatedAt
    }
  }
}

`
