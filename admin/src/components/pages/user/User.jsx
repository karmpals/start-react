import { FaEnvelope, FaMapMarkerAlt, FaMobileAlt, FaRegCalendarAlt, FaRegUser, FaUpload } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./user.css";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Anna Becker</span>
                    <span className="userShowUserTitle">Software Engineer</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                <FaRegUser className="userShowIcon"/>
                <span className="userShowInfoTitle">annabeck99</span>
                </div>
                <div className="userShowInfo">
                <FaRegCalendarAlt className="userShowIcon"/>
                <span className="userShowInfoTitle">10.12.1999</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                <FaMobileAlt className="userShowIcon"/>
                <span className="userShowInfoTitle">+91 123 456 789</span>
                </div>
                <div className="userShowInfo">
                <FaEnvelope className="userShowIcon"/>
                <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                </div>
                <div className="userShowInfo">
                <FaMapMarkerAlt className="userShowIcon"/>
                <span className="userShowInfoTitle">Haryana | India</span>
                </div>
            </div>
        </div>
        <div className="userUpdate">
             <span className="userUpdateTitle">Edit</span>
             <form className="userUpdateForm">
                <div className="userUpdateLeft">
                     <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" placeholder="annabeck99" className="userUpdateInput" />
                     </div>
                     <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input type="text" placeholder="Anna Becker" className="userUpdateInput" />
                     </div>
                     <div className="userUpdateItem">
                        <label>Email</label>
                        <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput" />
                     </div>
                     <div className="userUpdateItem">
                        <label>Phone</label>
                        <input type="text" placeholder="+91 123 456 789" className="userUpdateInput" />
                     </div>
                     <div className="userUpdateItem">
                        <label>Address</label>
                        <input type="text" placeholder="Haryana | India" className="userUpdateInput" />
                     </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userUpdateImg" />
                        <label htmlFor="file"><FaUpload className="userUpdateIcon"/></label>
                        <input type="file" id="file"  style={{display:"none"}}/>
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
             </form>
        </div>
      </div>
    </div>
  )
}

export default User
