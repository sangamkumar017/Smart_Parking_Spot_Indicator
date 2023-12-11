

// import React, { useState, useEffect } from 'react';
// import './App.css'
// import LoginPage from './LoginPage';

// function App() {
//   const [data, setData] = useState([]);
//   const [userType, setUserType] = useState();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  


//   useEffect(() => {

//     fetchData();

//     const interval = setInterval(() => {
//       fetchData();
//     }, 2000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://script.googleusercontent.com/a/macros/bmsce.ac.in/echo?user_content_key=33-ADh04ViO-hcObdDWbts6Cj1cKySofJXfYMHpuZNf19ZQS3ESSWRsSajxxybtH4IxrDW2aXuQEZJEKMiZPNaTnA_4ZYXEam5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP-8Grhzzosd2iPiHc-8WGXH6tyoh_dBqg0k9RBlUWscmGZUwO8kCcZJfFWCDPCGrNnO_ZqRGzh9_OMiKrD5dKAr7dsiUwCS0B08BcHjnIIabh2uKTJ35CdIvJsw0wqpxiI&lib=M2TMiZ4jYXstySW3_oLPauQG3_idoSzAv');
//       const jsonData = await response.json();

//       // console.log('API Response:', jsonData);

//       if (jsonData && Array.isArray(jsonData.data)) {
//         setData(jsonData.data);
//       }
//     } catch (error) {
//       console.log('Error fetching data:', error);
//     }
//   };

//   // const handleRefresh = () => {
//   //   fetchData();
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Email: ${email}, Password: ${password}`);
//     // Add code to submit login data to server here
//     if (email.includes ('@bmsce.ac.in') && password === 'eee123') {
//       setUserType ('ADMIN')
//     } else setUserType('')
//     setIsLoggedIn (true)
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn (false)
//   }

//   const reserveHandler = (e) => {
// console.log(e)
//   }

//   return (
//     <div >
//     {
//       !isLoggedIn &&
//     <LoginPage email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSubmit={handleSubmit} />
//     }

//     {
//       isLoggedIn && (
//         <>
//         <h1>BMSCE Parking Details</h1>
//       {/* <button onClick={handleRefresh}>Refresh</button> */}
//       {Array.isArray(data) && data.length > 0 ? (
//         <table>
//           {/* <thead>
//             <tr>
//               <th>ID</th>
//               <th>Space</th>
//               <th>Vacancy</th>
//               <th>Plate</th>
//             </tr>
//           </thead> */}
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.Id}</td>
//                 <td>{item.Space}</td>
//                 <td>{item.Vacancy}</td>
//                 {
//                   userType  === 'ADMIN' && (
//                 <td>{item.Plate}</td>
//                   )
//                 }
//                 {
//                   <td>
//                     <button onClick={reserveHandler}>Reserve</button>
//                   </td>
//                 }
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data available</p>
//       )}
//       </>
//       )
//     }
//     {
//       isLoggedIn &&
//       <button onClick={logoutHandler}>LOG OUT</button>
//     }

//     </div>
//   );
// }

// export default App;




// // https://script.google.com/macros/s/AKfycbxLvA5m8uFnDazW3y9CnxfeSiKGu07Jo9b0I-M4HgzTkuDbGaJDN0hhycC9EYXCotCy/exec



// // {"data":[{"Id":"Id","Space":"Space","Vacancy":"Vacancy","Plate":"Plate"},{"Id":1,"Space":"A1","Vacancy":0,"Plate":"NISHIT"},{"Id":2,"Space":"A2","Vacancy":0,"Plate":"ABYAN"},{"Id":3,"Space":"A3","Vacancy":1,"Plate":""},{"Id":4,"Space":"A4","Vacancy":0,"Plate":"SANGAM"},{"Id":5,"Space":"A5","Vacancy":1,"Plate":""}]}

//https://script.googleusercontent.com/a/macros/bmsce.ac.in/echo?user_content_key=33-ADh04ViO-hcObdDWbts6Cj1cKySofJXfYMHpuZNf19ZQS3ESSWRsSajxxybtH4IxrDW2aXuQEZJEKMiZPNaTnA_4ZYXEam5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP-8Grhzzosd2iPiHc-8WGXH6tyoh_dBqg0k9RBlUWscmGZUwO8kCcZJfFWCDPCGrNnO_ZqRGzh9_OMiKrD5dKAr7dsiUwCS0B08BcHjnIIabh2uKTJ35CdIvJsw0wqpxiI&lib=M2TMiZ4jYXstySW3_oLPauQG3_idoSzAv


import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import LoginPage from './LoginPage';

const ParkingManagement = ({ isLoggedIn, setIsLoggedIn }) => {
  const [data, setData] = useState([]);
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const baseURL =
    'https://script.google.com/macros/s/AKfycbwwXF0U7jKvpMSRwReZLTFPAOfz5kvIeI2MW4KAEMwHnadT2Vx1mEMaYpSgTWZlEZLk/exec';

    const fetchData = async () => {
      try {
        const response = await fetch(baseURL);
        const jsonData = await response.json();
    
        if (jsonData && Array.isArray(jsonData.data)) {
          const updatedData = jsonData.data.map(item => {
            const timestamp = item.Time; // Assuming the timestamp is in the 'Time' property
            const date = new Date(timestamp);
       let formattedTime = date.toLocaleString([], );
      //  { month: 'numeric', day: 'numeric', year: 'numeric', minute: 'numeric', second: 'numeric' }
        
        //     if (formattedTime === "") {
        //       formattedTime = "empty";
        //     }
        // else
            return {
              ...item,
              Time: formattedTime, // Update the 'Time' property with the formatted time or "empty"
            };
          });
          setData(updatedData);
        } else {
          setData([]); // Set an empty array to indicate no data
        }
        
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    
  console.log(data)

  const handleSubmit = event => {
    event.preventDefault();

    if (email.includes('admin@bmsce.ac.in') && password === 'adminparking') {
      setUserType('ADMIN');
    } else {
      setUserType('');
    }
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const reserveHandler = async item => {
    const updatedData = data.map(dataItem => {
      if (dataItem.ID === item.ID) {
        if (dataItem.Vacancy === 1) {
          dataItem.Vacancy = 0;
        }
      }
      return dataItem;
    });

    const response = await fetch(baseURL, {
      redirect: 'follow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });

    setData(updatedData);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginPage
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {isLoggedIn && (
              <button onClick={logoutHandler} style={{ borderRadius: 40 }}>
                LOG OUT
              </button>
            )}
          </div>
          {Array.isArray(data) && data.length > 0 ? (
            <Table dataSource={data}>
              <Table.Column title="ID" dataIndex="ID" key="ID" />
              <Table.Column title="Space" dataIndex="Space" key="Space" />
              <Table.Column
                title="Vacancy"
                dataIndex="Vacancy"
                key="Vacancy"
                render={(text, record) => (
                  <span
                    className={record.Vacancy === 0 ? 'Occupied' : 'available'}
                    style={{ color: record.Vacancy === 0 ? 'red' : 'green' }}
                  >
                    {record.Vacancy === 0 ? 'Occupied' : 'Available'}
                  </span>
                )}
              />

              {userType === 'ADMIN' && (
                <>
                  <Table.Column title="Number Plate" dataIndex="Plate" key="Plate" />
                  {/* <Table.Column title="Time" dataIndex="Time" key="Time" /> */}
                  <Table.Column
  title="Time"
  dataIndex="Time"
  key="Time"
  render={(text, record) => {
    const vacancy = record.Vacancy; // Assuming the Vacancy property is available in the record

    if (vacancy === 1) {
      return "";
    }

    return text;
  }}
/>


                  <Table.Column
                    title="Reservation"
                    key="Reservation"
                    render={(text, record) => (
                      <span>
                        {record.Vacancy === 0 ? (
                          <p disabled style={{ color: 'red' }}>
                            
                          </p>
                        ) : (
                          <Button
                            onClick={() => reserveHandler(record)}
                            className={record.Vacancy === 0 ? 'Occupied' : 'available'}
                            style={{ backgroundColor: record.Vacancy === 0 ? 'red' : '' }}
                          >
                            {record.Vacancy === 1 ? 'Available' : 'Occupied'}
                          </Button>
                        )}
                      </span>
                    )}
                  />
                </>
              )}
            </Table>
          ) : (
            <p>No data available</p>
          )}
        </>
      )}
    </div>
  );
}

export default ParkingManagement;
