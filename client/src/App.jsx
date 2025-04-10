import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://testingportfolio-axcraxbqeyhqawgr.centralus-01.azurewebsites.net/getFood', {
          withCredentials: true,
        });
        console.log('Fetched data:', response.data); // Log the fetched data
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {data.length > 0 ? (
        <>
          <h1 className='header'>Food Data</h1>
          <div className="food-container">
            {data.map((item, index) => (
              <div className="food-box" key={index}>
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Calories:</strong> {item.calories}</p>
                <p><strong>Carbs:</strong> {item.carbs}</p>
                <p><strong>Proteins:</strong> {item.proteins}</p>
                <p><strong>Fats:</strong> {item.fats}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default App;
