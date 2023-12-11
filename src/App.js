import React, { useState } from 'react';
import './App.css';
import { Menu } from 'antd';
import img1 from './images/bmsce.png';
import { CarOutlined, ContactsOutlined, EnvironmentOutlined, InfoCircleOutlined } from '@ant-design/icons';
import ParkingManagement from './ParkingManagement';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('parking');

  const handleMenuClick = (e) => {
    setActiveMenuItem(e.key);
  };

  const renderContent = () => {
    if (activeMenuItem === 'parking') {
      return <ParkingManagement setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />;
    } else if (activeMenuItem === 'map') {
      return (
        <div className="image-container">
          <img src={img1} alt="" className="img1" />
        </div>
      );
    } else if (activeMenuItem === 'contact') {
      return (
        <div className="contact-content">
          <h2>Contact Us</h2>
          <h4>Electrical and Electronics Department</h4>
          <h6>BMS College of Engineering</h6>
          <p>Phone: 8743211234</p>
          <p>Email: admin@bmsce.ac.in</p>
          <p>Address: Bull Temple Rd, Basavanagudi, Bengaluru, Karnataka 560019</p>
          {!isLoggedIn && <button className="login-button">Login</button>} {/* Add the login button */}
        </div>
      );
    } else if (activeMenuItem === 'about') {
      return (
        <div className="about-content">
          <img src="https://www.comedk.org/uploads/bmsce-img-1.jpg" alt="" className="about-image" />
          <p style={{ textTransform: 'lowercase', fontStyle: 'italic', margin: '30px' }}>
            OUR MOTIVE IS TO SOLVE PARKING RELATED ISSUES BOTH IN THE CURRENT ERA AND IN THE FUTURE.
            WE IMPLEMENT SEVERAL ALTERNATIVES TO THE MECHANISM OF MODERNIZING THE SETUP OF PARKING LOTS
            AND TO THE IMPLEMENTATION OF SMART FUNCTIONALITY. DRIVERS LOOKING TO PARK THEIR VEHICLES DO
            NOT HAVE AN EFFICIENT WAY TO GET NOTIFIED OF ANY AVAILABLE SPOT. IT HAS IMPLEMENTATION THAT
            ALLOWS DRIVERS TO ACQUIRE ACTUAL INFORMATION ON PARKING ONLINE AND ON THE REMAINING PARKING SPACES.
          </p>
          {!isLoggedIn && <button className="login-button">Login</button>} {/* Add the login button */}
        </div>
      );
    }
    return null;
  };
  

  return (
    <div>
      {isLoggedIn && (
        <>
          <h1 className='tittle'>BMSCE Parking Management</h1>

          <Menu mode="horizontal" onClick={handleMenuClick} selectedKeys={[activeMenuItem]}>
            <Menu.Item key="parking" icon={<CarOutlined />}>
              Parking Management
            </Menu.Item>
            <Menu.Item key="map" icon={<EnvironmentOutlined />}>
              Map
            </Menu.Item>
            <Menu.Item key="contact" icon={<ContactsOutlined />}>
              Contact Us
            </Menu.Item>
            <Menu.Item key="about" icon={<InfoCircleOutlined />}>
              About Us
            </Menu.Item>
          </Menu>
        </>
      )}

      {renderContent()}
    </div>
  );
};

export default App;
