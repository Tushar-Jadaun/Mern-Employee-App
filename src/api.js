const Base_URL = 'http://localhost:5000';

export const GetAllEmployees = async (search = '', page = 1, limit = 5) => {
  const url = `${Base_URL}/api/employees?search=${search}&page=${page}&limit=${limit}`;

  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const result = await fetch(url, options);
    const data = await result.json();
    return data; // Expected structure: { Employees: [...], pagination: {...} }
  } catch (error) {
    console.error('Error fetching employees:', error);
    return error;
  }
};
