import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeTable({ employees = [], pagination, onPageChange,fetchEmployees }) {
  const headers = ['Name', 'Email', 'Phone', 'Department', 'Actions'];
  const { currentPage, totalPages } = pagination;
  
  const TableBody = ({ employee }) => (
    <tr>
      <td>
        <Link to={`/employee/${employee._id}`} className='text-decoration-none'>
          {employee.name}
        </Link>
      </td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
      <td>{employee.department}</td>
      <td>
        <i
          className='bi bi-pencil-fill text-warning me-3'
          role='button'
          onClick={() => {}}
        ></i>
        <i
          className='bi bi-trash-fill text-danger'
          role='button'
          onClick={() => {}}
        ></i>
      </td>
    </tr>
  );

  const pageNumber = Array.from({ length: totalPages }, (_, index) => index + 1);
  const handleNextPage = ()=>{
    if(currentPage<totalPages){
        handlepagination(currentPage + 1);
    }
  }
  const handlepagination = (currPage)=>{
        fetchEmployees('',currPage,5)
  }
  const handlePreviousPage=()=>{
    if(currentPage>1){
        handlepagination(currentPage -1)
    }
  }

  
  return (
    <>
      <table className='table table-striped'>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((emp) => <TableBody key={emp._id} employee={emp} />)
          ) : (
            <tr>
              <td colSpan='5' className='text-center'>
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className='d-flex justify-content-between align-items-center my-3'>
        <span className='badge bg-primary'>
          Page {currentPage} of {totalPages}
        </span>
        <div>
          <button
            className='btn btn-outline-primary me-2'
            onClick={() => handlePreviousPage()}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {pageNumber.map((page) => (
            <button
              key={page}
              className={`btn btn-outline-primary me-1 ${
                currentPage === page ? 'active' : ''
              }`}
              onClick={() => handlepagination(page)}
            >
              {page}
            </button>
          ))}

          <button
            className='btn btn-outline-primary me-2'
            onClick={() => handleNextPage()}
            disabled={totalPages === currentPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default EmployeeTable;
