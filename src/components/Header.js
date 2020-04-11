import React from "react";
import { Layout, Radio } from 'antd';
import { useTranslation } from 'react-i18next';
import { languageController } from "./helpers/languageController";

const { Header } = Layout;

export function AppHeader() {
  const { t, i18n } = useTranslation();
  const onLangSelected = (e) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng, languageController.onLanguageChange);
  }

  return (
    <Header className="header">
      <div className="headerContent">
        <span className="title">{t('header.title')}</span>
        <a className="link" rel="noopener noreferrer" target="_blank" href="https://www.medrxiv.org/content/10.1101/2020.03.19.20037192v1">
          {t('header.article')}
        </a>
      </div>
      <Radio.Group defaultValue="en" size="small" onChange={onLangSelected}>
        <Radio.Button value="en">EN</Radio.Button>
        <Radio.Button value="pt">PT</Radio.Button>
      </Radio.Group>
    </Header>
  );
}