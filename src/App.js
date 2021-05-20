import './App.css'
import { MainPage } from './components/views/MainPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AboutPage } from './components/views/AboutPage/AboutPage'
import { ContactPage } from './components/views/ContactPage/ContactPage'
import { FAQPage } from './components/views/FAQPage/FAQPage'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/faq" component={FAQPage} />
            </Switch>
        </Router>
    )
}

export default App
