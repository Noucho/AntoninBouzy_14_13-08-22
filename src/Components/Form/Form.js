import './Form.css'
import states from '../../data/states'
import { useState } from 'react'
import { useGlobalState } from '../../state'
import React from 'react'
import { Modal } from '@noucho/react-modal/dist'

export default function Form() {
  const [employees, setEmployees] = useGlobalState('employee')

  const [addFromData, setAddFormData] = useState({
    firstname: '',
    lastname: '',
    startDate: '',
    department: '',
    dateOfBirth: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  })

  const handleAddFormChange = (e) => {
    e.preventDefault()

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value

    const newFormData = { ...addFromData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  const [isValid, setIsValid] = useState(false)

  const handleModalResponse = () => {
    setIsValid(false)
  }

  const handleAddFormSubmit = (e) => {
    e.preventDefault()

    const newEmployee = {
      firstname: addFromData.firstname,
      lastname: addFromData.lastname,
      startDate: addFromData.startDate,
      department: addFromData.department,
      dateOfBirth: addFromData.dateOfBirth,
      street: addFromData.street,
      city: addFromData.city,
      state: addFromData.state,
      zipCode: addFromData.zipCode,
    }

    const newEmployees = [...employees, newEmployee]
    setEmployees(newEmployees)
    setIsValid(true)

    const form = e.target
    form.reset()
  }

  return (
    <section className="formContent">
      <h2 className="formTitle">Create Employee</h2>
      <form className="form" onSubmit={handleAddFormSubmit}>
        <div className="formUpperPart">
          <label className="formLabel">
            First Name
            <input
              className="formInput"
              type="text"
              name="firstname"
              onChange={handleAddFormChange}
              required
            />
          </label>
          <label className="formLabel">
            Last Name
            <input
              className="formInput"
              type="text"
              name="lastname"
              onChange={handleAddFormChange}
              required
            />
          </label>
          <label className="formLabel">
            Date of Birth
            <input
              className="formInput"
              type="date"
              name="dateOfBirth"
              onChange={handleAddFormChange}
              required
            />
          </label>
          <label className="formLabel">
            Start Date
            <input
              className="formInput"
              type="date"
              name="startDate"
              onChange={handleAddFormChange}
              required
            />
          </label>
        </div>
        <div className="fieldset">
          <label className="formLabel">
            Street
            <input
              className="formInput"
              type="text"
              name="street"
              onChange={handleAddFormChange}
              required
            />
          </label>
          <label className="formLabel">
            City
            <input
              className="formInput"
              type="text"
              name="city"
              onChange={handleAddFormChange}
              required
            />
          </label>
          <label className="formLabel">
            State
            <select
              className="formSelect"
              name="state"
              onChange={handleAddFormChange}
              required
            >
              <option value=""></option>
              {states.map((state, index) => {
                return (
                  <option key={index} value={state.abbreviation}>
                    {state.name}
                  </option>
                )
              })}
            </select>
          </label>
          <label className="formLabel">
            Zip Code
            <input
              className="formInput"
              type="text"
              name="zipCode"
              onChange={handleAddFormChange}
              required
            />
          </label>
        </div>
        <label className="formLabel">
          Department
          <select
            className="formSelect"
            name="department"
            onChange={handleAddFormChange}
            required
          >
            <option value=""></option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>
        </label>
        <button type="submit" className="btn-modal">
          Save
        </button>
        {isValid ? (
          <Modal
            text="Employee Created !"
            handleResponse={handleModalResponse}
          />
        ) : (
          ''
        )}
      </form>
    </section>
  )
}
