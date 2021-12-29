import React from 'react';
import './Quiz.css';
import {  BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Result from '../../pages/Result/Result';
import Quizz from '../../pages/Quizz/Quizz';
import Home from '../../pages/Home/Home';

const Quiz = () => {
    // const [name, setName] = useState(" ");

    // const fetchQuestions = () => {};
    return (
        <> 
        <Router>
        <div className="main" style={{backgroundImage:'url(./quiz2.jpg)'}} >
            <Header />
            <Switch>
                <Route path='/' exact>
                    <Home  />
                    </Route>
                <Route path='/Quizz' exact><Quizz/></Route>
                <Route path='/Result' exact><Result/></Route>
            </Switch>
        </div>
        <Footer/>
        </Router>
        </>
    );
}

export default Quiz;
