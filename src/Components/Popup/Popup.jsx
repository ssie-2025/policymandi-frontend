import React,{ useState, useEffect} from 'react'
import './Popup.css'

function Popup() {
    const [showPopup, setShowPopup] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

    const handleClose = () => {
        setShowPopup(false);
    };
  return (
       <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button className="close-btn" onClick={handleClose}>
              ✖
            </button>
            {isLogin ? (
              <div>
                <form>
                <h2>Login</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="btn">Login</button>
                <p>
                  Don’t have an account?{" "}
                  <span onClick={() => setIsLogin(false)}>Sign up</span>
                </p>
                </form>
              </div>
              
            ) : (
              <div>
                <h2>Sign Up</h2>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="btn">Sign Up</button>
                <p>
                  Already have an account?{" "}
                  <span onClick={() => setIsLogin(true)}>Login</span>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Popup
