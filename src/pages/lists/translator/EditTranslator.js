import React from 'react'
import { client } from '../../..';
import {PageContainer} from '../../../components/layout/PageContainer'
import TranslatorForm from '../../../components/translator/TranslatorForm'
import { GET_THEMES_BY_PAGING } from '../../../utils/api/themeApi';
import { GET_LANGUAGES, GET_TRANSLATOR_BY_ID } from '../../../utils/api/translatorApi';

export const editTranslatorLoader = async ({params}) => {

    const { id } = params;
  
    const { data: translatorData } = await client.query({
      query: GET_TRANSLATOR_BY_ID,
      variables: {
        id
      },
    });

  const { data: themesData, loading: translatorLoading } = await client.query({
    query: GET_THEMES_BY_PAGING,
    variables:{ pageNo: 0}
  });

  const { data: languages } = await client.query({
    query: GET_LANGUAGES,
  });


  return {translatorData, themesData, translatorLoading, languages}
}

const EditTranslator = () => {

  return (
    <PageContainer 
    title="Edit Translator"
    >
    <TranslatorForm />
    </PageContainer>
  )
}

export default EditTranslator