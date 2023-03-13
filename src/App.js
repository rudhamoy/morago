import './App.css';
// import 'antd/dist/antd.css'
import { createBrowserRouter, createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Layout from './components/layout';
import Translator from './pages/lists/translator/Translator'
import User from './pages/lists/user/User'
import AddUser from './pages/lists/user/AddUser'
import Themes from './pages/translationTopics/theme/Themes';
import AddTheme, { addThemeLoader } from './pages/translationTopics/theme/AddTheme';
import Categories from './pages/translationTopics/categories/Categories';
import AddCategory from './pages/translationTopics/categories/AddCategory';
import AddTranslator, { addTranslatorLoader } from './pages/lists/translator/AddTranslator';
import Withdraw from './pages/lists/translator/Withdraw';
import Charge from './pages/lists/user/Charge';
import TranslatorCallHistory from './pages/lists/translator/TranslatorCallHistory';
import UserCallHistory from './pages/lists/user/UserCallHistory';
import DepositHistory from './pages/lists/user/DepositHistory';
import WithdrawHistory from './pages/lists/translator/WithdrawHistory';
import Login from './pages/auth/Login';
import PublicRoute from './components/layout/PublicRoute';
import EditTheme, { editThemeLoader } from './pages/translationTopics/theme/EditTheme';
import ProtectedRoutes from './components/layout/ProtectedRoutes';
import ChangePassword from './pages/auth/ChangePassword';
import { editCategoryLoader } from './pages/translationTopics/categories/EditCategory';
import EditTranslator, { editTranslatorLoader } from './pages/lists/translator/EditTranslator';
import EditUser, { editUserLoader } from './pages/lists/user/EditUser';

function App() {

  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Layout />}>
            {/* translator */}
            <Route index element={<Translator />} />
            <Route 
            path="/lists/translator/add_translator" 
            loader={addTranslatorLoader}
            element={<AddTranslator />}
            />
            <Route 
            path="/lists/translator/edit_translator/:id" 
            loader={editTranslatorLoader}
            element={<EditTranslator />}
            />
            <Route path="/lists/translator/withdraw" element={<Withdraw />} />
            <Route path="/lists/translator/call_history" element={<TranslatorCallHistory />} />
            <Route path="/lists/translator/withdraw_history" element={<WithdrawHistory />} />
            {/* user */}
            <Route path="/lists/user" element={<User />} />
            <Route path="/lists/user/add_user" element={<AddUser />} />
            <Route loader={editUserLoader} path="/lists/user/edit_user/:id" element={<EditUser />} />
            <Route path="/lists/user/call_history/:id" element={<UserCallHistory />} />
            <Route path="/lists/user/deposit_history/:id" element={<DepositHistory />} />
            <Route path="/lists/user/charge/:userId" element={<Charge />} />
            {/* themes */}
            <Route path="/translation_topics/themes" element={<Themes />} />
            <Route 
            path="/translation_topics/themes/add_theme"
            loader={addThemeLoader}
            element={<AddTheme />} 
            />
            <Route
              path="/translation_topics/themes/edit_theme/:id"
              loader={editThemeLoader}
              element={<EditTheme />}
            />
            {/* categories */}
            <Route path="/translation_topics/categories" element={<Categories />} />
            <Route path="/translation_topics/categories/add_category" element={<AddCategory />} />
            <Route 
            path="/translation_topics/categories/edit_category/:id"
            loader={editCategoryLoader}
            element={<AddCategory />} 
            />
          </Route>
            <Route path="/change_password" element={<ChangePassword />} />
        </Route>
        {/* auth */}
        <Route path="login" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
