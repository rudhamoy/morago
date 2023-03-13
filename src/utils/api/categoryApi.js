

import { gql } from "@apollo/client";

export const ALL_CATEGORY = gql`
query ( $pageNo: Int!) {
  categories(input: {pageSize: 10, pageNo: $pageNo}) {
    currentPage
    totalPages
    totalElements
    objectList {
      id
      name
      isActive
      themes{
        name
      }
      createdAt
      updatedAt
    }
  }
}
`

export const CREATE_CATEGORY = gql`
mutation createCategory ($name: String!) {
  createCategory(input: {
    name: $name,
    isActive: false
  }) {
    id
    name
    isActive
    createdAt
    updatedAt
  }
}
`

export const GET_CATEGORY_BY_ID = gql`
query ($id: ID!){
  category(id: $id) {
    id
    name
    isActive
  }
}
`

export const UPDATE_CATEGORY = gql`
mutation ( $name: String!, $id: ID!){
  updateCategory(id: $id, input: {
    name: $name
  }) {
    id
    name
    isActive
  }
}
`

export const CHANGE_CATEGORY_ACTION = gql`
mutation ($ids: [ID], $action: EAction) {
  changeActionCategory(ids: $ids, action: $action)
}
`

export const CHANGE_CATEGORY_STATUS = gql`
mutation ($isActive: Boolean!, $id: ID!){
  updateCategory(id: $id, input: {
    isActive: $isActive
  }) {
    id
    name
    isActive
  }
}
`

export const DELETE_CATEGORY = gql`
mutation deleteCategory ($id: ID!) {
  deleteCategoryById(id: $id)
}
`