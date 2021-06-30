import './App.css'
import { MainPage } from './components/views/MainPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AboutPage } from './components/views/AboutPage/AboutPage'
import { ContactPage } from './components/views/ContactPage/ContactPage'
import { FAQPage } from './components/views/FAQPage/FAQPage'
import { BlogPage } from './components/views/BlogPage/BlogPage'
import { BlogArticlePage } from './components/views/BlogPage/BlogArticlePage'
import { WorkWithUs } from './components/views/WorkWithUsPage/WorkWithUs'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/blog/:id" component={BlogArticlePage} />
                <Route path="/blog" component={BlogPage} />
                <Route path="/faq" component={FAQPage} />
                <Route path="/contact" component={ContactPage} /> 
                <Route path="/workwithus" component={WorkWithUs}/>
            </Switch>
        </Router>
    )
}

export default App
