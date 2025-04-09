export const getTest = async ()=> {
    try {
        const response = await fetch('http://localhost:8080/test', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
        }
    catch (error) {
        console.error('Error fetching test data:', error);
    }
};