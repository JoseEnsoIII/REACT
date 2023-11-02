import React,{useState} from 'react'
import './sidebar.css'
import logo from '/images/logo.png'
import { IoMdSpeedometer } from 'react-icons/io'
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md'
import { BsTrophy, BsCreditCard2Front, BsQuestionCircle } from 'react-icons/bs'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BiTrendingUp, BiLogOutCircle } from 'react-icons/bi'
//
import DashboardContent from '../BodySection/DashboardContent/Roles'
import RolesContent from '../BodySection/DashboardContent/Roles'

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={logo} alt="Logo" />
        <h2>ReactFlix</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          MENU
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a onClick={() => setActiveTab('dashboard')} href="#" className="menuLink flex ${activeTab === 'dashboard' ? 'active' : ''}`">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">
                Dashboard
              </span>
            </a>
          </li>

          <li className="listItem">
            <a onClick={() => setActiveTab('roles')} href="#" className="menuLink flex ${activeTab === 'roles' ? 'active' : ''}`">
              <MdDeliveryDining className="icon" />
              <span className="smallText">
                Roles
              </span>
            </a>
          </li>

          <li className="listItem">
            <a onClick={() => setActiveTab('ads')} href="#" className="menuLink flex ${activeTab === 'ads' ? 'active' : ''}`">
              <MdOutlineExplore className="icon" />
              <span className="smallText">
                Advertisement
              </span>
            </a>
          </li>

          <li className="listItem">
            <a onClick={() => setActiveTab('upload')} href="#" className="menuLink flex ${activeTab === 'upload' ? 'active' : ''}`">
              <BsTrophy className="icon" />
              <span className="smallText">
               Upload 
              </span>
            </a>
          </li>
        </ul>
      </div>


      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuLists grid">

        <li className="listItem">
            <a  onClick={() => setActiveTab('charts')} href="#" className="menuLink flex ${activeTab === 'charts' ? 'active' : ''}`">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">
                Charts
              </span>
            </a>
          </li>

          <li className="listItem">
            <a onClick={() => setActiveTab('users-visits')} href="#" className="menuLink flex ${activeTab === 'users-visits' ? 'active' : ''}`">
              <BiTrendingUp className="icon" />
              <span className="smallText">
                User Visits
              </span>
            </a>
          </li>

          <li className="listItem">
            <a onClick={() => setActiveTab('trends')} href="#" className="menuLink flex ${activeTab === 'trends' ? 'active' : ''}`">
              <BiTrendingUp className="icon" />
              <span className="smallText">
                Trends
              </span>
            </a>
          </li>

          <li className="listItem">
            <a onClick={() => setActiveTab('contact')} href="#" className="menuLink flex ${activeTab === 'contact' ? 'active' : ''}`">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">
                Contact
              </span>
            </a>
          </li>

          <li className="listItem">
            <a onClick={() => setActiveTab('billing')} href="#" className="menuLink flex ${activeTab === 'billing' ? 'active' : ''}`">
              <BsCreditCard2Front className="icon" />
              <span className="smallText">
                Billing
              </span>
            </a>
          </li>

          <li className="listItem">
            <a onClick={() => setActiveTab('logout')} href="/" className="menuLink flex ${activeTab === 'logout' ? 'active' : ''}`">
              <BiLogOutCircle className="icon" />
              <span className="smallText">
                Log Out
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>Having trouble in ReactFlix, please contact us from for more questions.</p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    
    </div>
  )
}

export default Sidebar