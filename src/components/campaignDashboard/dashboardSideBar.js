import { Link, useHistory } from "react-router-dom"
import logo from "../../images/logo.png"

export const DashboardSidebar = () => {
    const history = useHistory();  


    return (
  <div className="flex flex-col ">

      

        <div className="bg-yellow-100 shadow-xl h-16 fixed bottom-0 md:relative md:h-screen z-10 w-full md:w-48 justify-center">
        
        <div className=" mt-2">
        <Link to="/campaign">
                    
                      <img className=" " src={logo} alt="tell em why you mad logo" />
                
                  </Link>
                  </div>

            <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-30 content-center md:content-start text-left justify-between">
                <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                    {/* <li className="mr-3 flex-1">
                        <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                            <i className="fas fa-tasks pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Tasks</span>
                        </a>
                    </li> */}
                    <li className="mr-3 flex-1">
                        <Link to="/" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-yellow-400 ">
                            <i className="fa fa-envelope pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Campaigns</span></Link>
                      
                    </li>
                    <li className="mr-3 flex-1">
                        <Link to="/emails" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-yellow-400 ">
                            <i className="fa fa-envelope pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Emails Sent</span></Link>
                      
                    </li>

                    <li className="mr-3 flex-1">
          <button className="inline-flex  py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-10 ml-12 " onClick={() => {
            sessionStorage.removeItem("organizer_user");
            history.push("/login")
        }}>Logout</button>
        </li>
               
              
                </ul>
                </div>
            </div>


        </div>

        )
        
        }