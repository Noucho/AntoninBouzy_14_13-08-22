import { Link } from 'react-router-dom'
import Form from '../Components/Form/Form'
import './Index.css'
import React from "react";

export default function Index() {
  return (
    <main>
            <h1 className="indexTitle">HRnet</h1>
            <div className="indexLinkBackground">
                <Link className="indexLink" to="/employee-list">
                    View Current Employee
                </Link>
            </div>
            <div class="formBG">
                <Form/>
            </div>
            <footer>
                HRnet - Wealth Health © 2022
            </footer>
    </main>
  )
}
