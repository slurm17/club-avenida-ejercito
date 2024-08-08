import React from 'react'
import { Route, Routes as Routs } from 'react-router-dom'
import * as ROUTES from 'constants/routes'
import Layout from 'pages/Layout'
import Home from 'pages/Home'

const Routes = () => {
    return (
    <Routs>
        <Route path={ROUTES.LANDING} element={
            <React.Suspense fallback={<></>}>
                <Layout/>
            </React.Suspense>
        } >
            <Route index element={
                <React.Suspense fallback={<></>}>
                    <Home/>
                </React.Suspense>
            } />
        </Route>
    </Routs>
    )
}

export default Routes