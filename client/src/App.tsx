import React, { useEffect, useState} from 'react';
import './App.css';
import { fetchSheet } from './api';

function App() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchSheet().then(setData).catch(console.error);
  }, [])

  console.log(data ? data : "nope")

  if(!data){
    return(<p>Loading...</p>)
  }

  const sheet = data?.data;

  return (
    <div className="App">

      <h1>NBA Daily</h1>

      <h2>{sheet[0]}</h2>

      <table align='center'>
        <thead>
        <tr>
          {sheet[1]?.map((heading: string) => 
            
              <th>{heading}</th>
          
          )}
        </tr>
        </thead>

          
        <tbody>
         
            {sheet.map((place: string[], index: number) => {

              if(index === 0 || index === 1){
                return('')
              }


              return(
              <tr>
                {place?.map((stat: string, index: number) => {
                  if(index === 0){
                    return(<td></td>)
                  }
                  return(
                  <td key={index*Math.random()} style={{ padding:"5px" }}>
                    {stat}
                  </td>
                  )
            })}
              </tr>
            )})}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
