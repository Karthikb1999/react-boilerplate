import React from "react"
import { startLogin } from "../actions/auth"
import { connect } from "react-redux"


export const LoginPage = ({ startLogin }) => {
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__box__title">Boilerplate for app</h1>
                <p>-tag line</p>
                <button className="button" onClick={startLogin}>Login with Google</button>
            </div>
        </div>
    )
}

const mapDispatchtoProps = (dispatch) => ({
    startLogin: () => {
        dispatch(startLogin())
    }
})

export default connect(undefined, mapDispatchtoProps)(LoginPage)