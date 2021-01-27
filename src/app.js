import React from "react"
import AppRouter, { history } from "./routers/AppRouter"
import ReactDOM from "react-dom"
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css"
import "./styles/styles.scss"
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'
import { firebase } from "./firebase/firebase";
import { login, logout } from "./actions/auth";
import LoadingPage from "./components/LoadingPage"

let hasRendered = false

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, rootEl)
        hasRendered = true
    }
}


const store = configureStore()


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


const rootEl = document.getElementById("app")

ReactDOM.render(<LoadingPage />, rootEl)



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        renderApp()
        if (history.location.pathname === '/') {
            history.push('/dashboard')
        }
    } else {
        store.dispatch(logout())
        renderApp()
        history.push("/")
    }
})



