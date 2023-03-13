import React from 'react'
import { client } from '../../..';
import {PageContainer} from '../../../components/layout/PageContainer'
import TranslatorForm from '../../../components/translator/TranslatorForm'
import { GET_THEMES_BY_PAGING } from '../../../utils/api/themeApi';
import { GET_LANGUAGES } from '../../../utils/api/translatorApi';

export const addTranslatorLoader = async () => {
  const { data: themesData, loading: translatorLoading } = await client.query({
    query: GET_THEMES_BY_PAGING,
    variables:{ pageNo: 0}
  });

  const { data: languages } = await client.query({
    query: GET_LANGUAGES,
  });


  return {themesData, translatorLoading, languages}
}

const AddTranslator = () => {

  return (
    <PageContainer 
    title="Add Translator"
    >
    <TranslatorForm />
    </PageContainer>
  )
}

export default AddTranslator