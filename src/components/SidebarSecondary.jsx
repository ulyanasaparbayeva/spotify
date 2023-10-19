import User from "../images/User.svg"
import Users from "../images/Users.svg"
import message from "../images/message.svg"
import {FiX} from 'react-icons/fi';
import 'tailwindcss/tailwind.css';

const SidebarSecondary = () => {
  return (
    <div className="bg-primary-2 w-sidebar-secondary">
      <div className="pl-5">
        <div className="flex  pt-custom-top items-center pr-custom-top-2">
          <div className="text-secondary-2 w-sidebar-secondary">
            Friend Activity</div>
          <div className="flex items-center">
            <img src={User} className="cursor-pointer" alt="message"/>
            <FiX className="text-[#B3B3B3]  w-14 h-14 cursor-pointer"/>
          </div>
        </div>
        <div className="text-secondary-2 text-lg font-custom-weight leading-6">
          Let friends and followers on Spotify see what you’re listening to.</div>
        <div className="pt-custom-top-2 flex items-center gap-custom-gap">
          <img src={Users} alt="message"/>
          <img src={message} alt="message"/>
        </div>
        <div className="pt-5 flex items-center gap-custom-gap">
          <img src={Users} alt="message"/>
          <img src={message} alt="message"/>
        </div>
        <div className="pt-5 flex items-center gap-custom-gap">
          <img src={Users} alt="message"/>
          <img src={message} alt="message"/>
        </div>
        <div className="text-secondary-2 pt-custom-top-3 text-lg leading-6 font-custom-weight">
          Go to Settings > Social and enable  <br/>
          “Share my listening activity on <br/>
          Spotify.’ You can turn this off at any <br/>
          time.</div>
        <div className="text-center justify-center flex pt-custom-top-2">
          <button className="bg-secondary w-custom-width text-lg  font-bold tracking-[2.52px]
          h-custom-height rounded-[40px] text-secondary-3">
            SETTINGS
          </button>
        </div>
      </div>
      </div>
  )
}
export default SidebarSecondary