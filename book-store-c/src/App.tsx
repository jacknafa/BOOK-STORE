import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BookStoreThemeProvider } from './context/themeContext';
import Error from './components/common/Error';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Error />,
  },
  {
    path: "/books",
    element: <Layout><div>도서 목록</div></Layout>,
  },
  {
    path: "/signup",
    element: <Layout><Signup /></Layout>,
  },


]);

function App() {
  // return <Layout children={<Home />} />; 아래와 동일
  return (
    <BookStoreThemeProvider>
          <RouterProvider router={router} />
    </BookStoreThemeProvider>
  )
}

export default App;
