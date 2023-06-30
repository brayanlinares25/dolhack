import React from 'react'
// importo la biblioteca Routes para almacenar rutas y la Route para asignarlas
import {Routes,Route} from 'react-router-dom'
import Login from '../page/MainPages/LoginPage.jsx'
import HomePage from '../page/MainPages/HomePage.jsx'
import Information from '../page/MainPages/InformationPage.jsx'
import Services from '../page/MainPages/ServicesPage.jsx'
import Contacts from '../page/MainPages/ContactsPage.jsx'
import NotFound from '../page/404.jsx'
import Error from '../page/Error.jsx'
import Main from '../page/User/Main.jsx'
import ClassInfo from '../page/User/ClassInfo.jsx'
import Class from '../page/User/UserClass.jsx'
import Profile from '../page/User/profile.jsx'
import AddClass from '../page/User/AddClass.jsx'
import RegisterPage from '../page/MainPages/RegisterPage.jsx'
import AccesClass from '../page/User/AccesClass.jsx'
import ClassSetting from '../page/User/ClassSetting.jsx'
import QuizClass from '../page/Class/QuizClass.jsx'
import QuizCreate from '../components/QuizCreate.jsx'
import QuizQuestion from '../components/QuizQuestion.jsx'
import AnwersQuiz from '../page/Class/anwersQuiz.jsx'
import QuizQuialification from '../page/Class/QuizQuialification.jsx'
import Respo from '../page/Class/Respo.jsx'
import Sustentacion from '../page/MainPages/Sustentacion.jsx'
import FromPost from '../components/FromPost.jsx'
import Mod from '../page/Class/ModEditorQuiz.jsx'
import QuizEditor from '../page/Class/QuizEditor.jsx'
import ProfileUP from '../page/User/upProfile.jsx'
import InfoUser from '../page/User/infUser.jsx'
import QuizMyCuialification from '../page/Class/QuizMyQuialification.jsx';

function Home(){
    return(
        // agrego el Routes como carpeta
        <Routes>
            // uso Route para agregarle rutas a las paginas
            <Route path='/sustentacion' element={<Sustentacion />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/information' element={<Information />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/error' element={<Error />} />
            <Route path="/main/user" element={<Main />} />
            <Route path='/details/:id' element={<ClassInfo />} />
            <Route path='/class' element={<AccesClass />} />
            <Route path='/class/main' element={<Class />} />
            <Route path='/class/main/quiz' element={<QuizClass />} />
            <Route path='/post/from' element={<FromPost />} />
            <Route path='/quiz/from' element={<QuizCreate />} />
            <Route path='/quiz/from/:id' element={<QuizQuestion />} />
            <Route path='/class/main/quiz/:id' element={<AnwersQuiz />} />
            <Route path='/editor/quiz' element={<Mod />} />
            <Route path='/editor/quiz/:id' element={<QuizEditor />} />
            <Route path='/class/main/qualification' element={<QuizQuialification />} />
            <Route path='/class/main/qualification/:student/:quiz' element={<Respo />} />
            <Route path='/class/main/setting' element={<ClassSetting />} />
            <Route path='/main/user/newclass' element={<AddClass />} />
            <Route path='/main/user/profile' element={<Profile />} />
            <Route path='/main/user/profile/update' element={<ProfileUP />} />
            <Route path='/studen/:id' element={<InfoUser />} />
            <Route path='/class/main/myqualification' element={<QuizMyCuialification />} />
        </Routes>
    )
}

export default Home
