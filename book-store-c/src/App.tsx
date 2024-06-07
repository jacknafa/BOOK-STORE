import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { GlobalStyle } from './style/global';
import { ThemeProvider } from 'styled-components';
import { ThemeName, dark, getTheme, light } from './style/theme';
import ThemeSwitcher from './components/header/ThemeSwitcher';
import { useContext, useState } from 'react';
import { BookStroeThemeProcider, ThemeContext } from './context/themeContext';

function App() {
  // return <Layout children={<Home />} />; 아래와 동일
  return (
    <BookStroeThemeProcider>
        <ThemeSwitcher />
        <Layout>
          <Home />
        </Layout>
    </BookStroeThemeProcider>
  )
}

export default App;
