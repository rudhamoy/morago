import { client } from '../../..';
import {PageContainer} from '../../../components/layout/PageContainer'
import ThemeForm from '../../../components/themes/ThemeForm'
import { ALL_CATEGORY } from '../../../utils/api/categoryApi';
import { GET_THEME_BY_ID } from '../../../utils/api/themeApi';


 export const editThemeLoader = async ({ params }) => {
  const { id } = params;

  const { data: themeData } = await client.query({
    query: GET_THEME_BY_ID,
    variables: {
      id
    },
  });

  const { data: categoriesData, loading: categoryLoading } = await client.query({
    query: ALL_CATEGORY,
    variables: {pageNo: 0, pageSize: 10}
  });


  return {themeData, categoriesData, categoryLoading}
}

const EditTheme = () => {
    
  return (
    <PageContainer 
    title="Edit Theme"
    >
    <ThemeForm  />
    </PageContainer>
  )
}

export default EditTheme