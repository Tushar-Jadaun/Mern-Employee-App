import React, { useEffect, useState } from 'react'
import EmployeeTable from './EmployeeTable'
import { GetAllEmployees } from '../api'

function EmployeeManagementApp() {
  const [employeeData, setEmployeeData] = useState({
    "employees": [],
    "pagination": {
      totalEmployees: 0,
      currentPage: 1,
      totalPages: 1,
      pageSize: 5
    }
  });

  // const [search, setSearch] = useState('');

  const fetchEmployees = async (search ='', page = 1, limit = 5) => {
    try {
      const {data} = await GetAllEmployees(search, page, limit);
      setEmployeeData(data);
    } catch (error) {
      console.error('ERROR', error);
    }
  };
// console.log('---employeeData--',employeeData);

  useEffect(() => {
    fetchEmployees();
  }, []);

  

  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 p-3'>
      <h1>Employee Management App</h1>
      <div className='w-100 d-flex justify-content-center'>
        <div className='w-80 border bg-light p-3' style={{ width: '80%' }}>
          <div className='d-flex justify-content-between mb-3'>
            <button className='btn btn-primary'>
              Add
            </button>
            <input
              type='text'
              placeholder='Search Employees...'
              className='form-control w-50'
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <EmployeeTable 
            fetchEmployees = {fetchEmployees}
            employees = {employeeData.employees}
            pagination = {employeeData.pagination}
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeeManagementApp;
