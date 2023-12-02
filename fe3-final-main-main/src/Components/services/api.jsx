const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Error getting data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Network error:', error);
    throw error;
  }
};

export { fetchData };
