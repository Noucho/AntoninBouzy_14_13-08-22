import './DataTable.css'
import EukaDataTable from 'euka-datatables'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../../state'

export default function DataTable() {
  const [employees] = useGlobalState('employee')

  let columns = [
    {
      name: 'firstname',
      label: 'First Name',
    },
    {
      name: 'lastname',
      label: 'Last Name',
    },
    {
      name: 'startDate',
      label: 'Start Date',
    },
    {
      name: 'department',
      label: 'Department',
    },
    {
      name: 'dateOfBirth',
      label: 'Date of Birth',
    },
    {
      name: 'street',
      label: 'Street',
    },
    {
      name: 'city',
      label: 'City',
    },
    {
      name: 'state',
      label: 'State',
    },
    {
      name: 'zipCode',
      label: 'Zip Code',
    },
  ]

  let options = {
    responsive: 'collapse',
    recordsPerPageOptions: { 10: 10, 25: 25, 50: 50, 100: 100 },
  }

  return (
    <>
      <section className="dataTable">
        <h1 className="employeeTitle">Current Employees</h1>
        <EukaDataTable
          key={'table-1'}
          columns={columns}
          data={employees}
          options={options}
        />
      </section>
      <Link className="homeBtn" to="/">
        Home
      </Link>
    </>
  )
}
