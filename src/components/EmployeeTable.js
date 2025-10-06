import React from 'react'
import { Link } from 'react-router-dom'
function EmployeeTable() {
    const headers = ['Name','Email','Phone','Department','Actions'];
    const TableBody = (Employee)=>{
        return <tr>
            <td>
                <Link to={`/Employee/id`} className='text-decoration-none'>
                {"Tushar"}
                </Link>
                
            </td>
            <td>{"Tushar123@gmail.com"}</td>
            <td>{"963852741"}</td>
            <td>{"It"}</td>
            <td>
                <i
                className='bi bi-pencil-fill text-warning md-4 ' 
                role='button'
                data-bs-toggle = "tooltip"
                data-bs-placement = "top"
                onClick={()=>{}}
                ></i>
                <i
                className='bi bi-trash-fill text-danger md-4 ' 
                role='button'
                data-bs-toggle = "tooltip"
                data-bs-placement = "top"
                onClick={()=>{}}
                ></i>
            </td>
        </tr>
    }
  return (
    <>
       <table className='table table-striped'>
            <thead>
                <tr>
                    {
                        headers.map((headers,i)=>(
                            <th key={i}>
                                {headers}
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                    <TableBody/>
            </tbody>
       </table>
    </>
  )
}

export default EmployeeTable