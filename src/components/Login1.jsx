import { useState } from 'react'
import logo from '../assets/logo.png'
import bg from '../assets/bg1.jpg'
import { Link, useNavigate } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { VisibilityOffOutlined } from '@mui/icons-material';

const Login1 = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const Navigate = useNavigate()
    const handleLoginSubmit = (e) => {
        e.preventDefault()
        if (userName === "" || password === "") {
            alert("User Name and Password is required!!")
        } else if (userName === "farmer" && password === "farmer") {
            setUserName("")
            setPassword("")
            console.log(userName, password);
            Navigate('/farmer')
        } else if (userName === "fpo" && password === "fpo") {
            setUserName("")
            setPassword("")
            console.log(userName, password);
            Navigate('/fpo')
        } else if (userName === "samunnati" && password === "samunnati") {
            setUserName("")
            setPassword("")
            console.log(userName, password);
            Navigate('/samunnati')
        } else if (userName === "corporate-client" && password === "corporate-client") {
            setUserName("")
            setPassword("")
            console.log(userName, password);
            Navigate('/corporate-client')
        } else if (userName === "input-supplier" && password === "input-supplier") {
            setUserName("")
            setPassword("")
            console.log(userName, password);
            Navigate('/input-supplier')
        } else if (userName === "federation" && password === "federation") {
            setUserName("")
            setPassword("")
            console.log(userName, password);
            Navigate('/federation')
        } else if (userName === "cluster" && password === "cluster") {
            setUserName("")
            setPassword("")
            console.log(userName, password);
            Navigate('/cluster')
        }
    }
    return (
        <>
            <div className="h-screen w-full overflow-x-hidden flex flex-col items-center justify-center" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <div className="font-medium self-center text-xl sm:text-2xl text-gray-800">
                        <img className='m-auto' height={120} width={200} src={logo} alt='logo' />
                        <h3 className="text-2xl text-center text-bg__color font-bold ">MEITY</h3>
                    </div>
                    <div className="mt-10">
                        <form>
                            <div className="flex flex-col mb-6">
                                <label
                                    htmlFor="email"
                                    className="mb-1 text-xs sm:text-sm tracking-wide text-hover__color"
                                >
                                    Username:
                                </label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <AccountCircleOutlinedIcon />
                                    </div>
                                    <input
                                        id="username"
                                        type="text"
                                        name="username"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-bg__color"
                                        placeholder="Username"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <label
                                    htmlFor="password"
                                    className="mb-1 text-xs sm:text-sm tracking-wide text-hover__color"
                                >
                                    Password:
                                </label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <LockOutlinedIcon />
                                    </div>
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        security={showPassword}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-bg__color"
                                        placeholder="Password"
                                        required
                                    />
                                    <div onClick={() => setShowPassword(!showPassword)} className="inline-flex items-center justify-center absolute right-0 top-0 h-full w-10 text-gray-400">
                                        {
                                            showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlined />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center mb-6 -mt-4">
                                <div className="flex ml-auto">
                                    <span
                                        className="inline-flex text-sm sm:text-sm text-bg__color hover:text-silver__color cursor-pointer"
                                    >
                                        Forgot Your Password?
                                    </span>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <button
                                    onClick={handleLoginSubmit}
                                    type="submit"
                                    className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base hover:bg-hover__color rounded-md bg-bg__color py-2 w-full
                                    hover:bg-gradient-to-l 
                                    transition duration-150 ease-in"
                                >
                                    <span className="mr-2 uppercase">Login</span>
                                    <LoginOutlinedIcon />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <div className="inline-flex items-center font-bold text-hover__color hover:text-bg__color text-xs text-center">
                            <span>
                                <PersonAddOutlinedIcon />
                            </span>
                            <Link to='/register'>
                                <span className="ml-2 text-sm">You don't have an account?</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login1