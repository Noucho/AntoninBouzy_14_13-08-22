import { Link } from 'react-router-dom'
import Form from '../Components/Form/Form'
import './Index.css'

export default function Index() {
  return (
    <main>
      <h1 className="indexTitle">HRnet</h1>
      <Link className="indexLink" to="/employee-list">
        View Current Employee
      </Link>
      <Form />
    </main>
  )
}
