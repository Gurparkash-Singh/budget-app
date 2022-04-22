import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./styles/style.scss"

const BudgetSnobHome = () => (
    <div>
        Budget Snob Home
    </div>
)

const BudgetAdd = () => (
    <div>
        Budget Add
    </div>
)

const BudgetEdit = () => (
    <div>
        Budget Edit
    </div>
)

const routes = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<BudgetSnobHome />} />
            <Route path="/add" element={<BudgetAdd />} />
            <Route path="/edit" element={<BudgetEdit />} />
        </Routes>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'))