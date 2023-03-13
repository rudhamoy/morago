import { gql } from "@apollo/client";

export const GET_THEMES_BY_PAGING = gql`query getThemes ( $pageNo: Int!) {
        themesByPaging(input: {pageNo: $pageNo, pageSize: 5}) {
          currentPage
          totalPages
          objectList {
            id
            name
            koreanTitle
            isPopular
            icon {
              path,
              originalTitle
            }
          }
        }      
}
`;

export const GET_THEME_BY_ID = gql`query getThemeById ($id: ID!){
    theme(id: $id) {
      id
      name
      koreanTitle
      icon {
        path
        originalTitle
      }
    }      
}
`;

// description: "hello"
//  price: 12.0
// nightPrice: 12.0
// koreanTitle: "title"

export const CREATE_THEME = gql`
mutation ($name: String!, $isPopular: Boolean!, $categoryName: String!, $icon: Upload!) {
  createTheme(input: {
    name: $name,
    icon: $icon,
    categoryName: $categoryName
    isPopular: $isPopular
  }) {
    id
    name
    koreanTitle
    price
    nightPrice
    description
    isPopular
    createdAt
    updatedAt
    icon {
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
// $category: ECategory!  categoryName: $category
export const UPDATE_THEME = gql`
mutation ($id: ID!, $name: String!, ) {
  updateTheme(id: $id, input: {name: $name}) {
    id
    name
    koreanTitle
    price
    nightPrice
    description
    isPopular
    createdAt
    updatedAt
    icon {
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

export const CHANGE_THEME_ACTION = gql`
mutation ($ids: [ID], $action: EAction) {
  changeActionTheme(ids: $ids, action: $action)
}
`

export const DELETE_THEME = gql`
mutation deleteTheme ($id: ID!){
  deleteThemeById(id: $id)
}
`

export const FILTER_THEME_BY_CATEGORY = gql`
query filterThemeByCategory($category: ECategory!){
  themesByCategory(category: $category, input: {}) {
    currentPage
    totalPages
    totalElements
    objectList {
      id
      name
      koreanTitle
      category
      price
      nightPrice
      description
      isPopular
      createdAt
      updatedAt
      icon {
        originalTitle
        path
      }
    }
  }
}
`