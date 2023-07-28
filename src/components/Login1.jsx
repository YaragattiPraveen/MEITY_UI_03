import { useState } from 'react'
import logo from '../assets/logo.png'
import bg from '../assets/bg1.jpg'
import { Link, useNavigate } from 'react-router-dom'
const Login1 = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const Navigate = useNavigate()
    const handleLoginSubmit = (e) => {
        e.preventDefault()
        if (userName === "" || password === "") {
            alert("User Name and Password is required!!")
        } else if(userName === "farmer" && password === "farmer") {
            setUserName("")
            setPassword("")
            console.log(userName, password);
            Navigate('/farmer')
        }else if(userName === "fpo" && password === "fpo") {
            setUserName("")
            setPassword("")
            console.log(userName, password);
            Navigate('/fpo')
        }else if(userName === "samunnati" && password === "samunnati") {
            setUserName("")
            setPassword("")
            console.log(userName, password);
            Navigate('/samunnati')
        }else if(userName === "corporate-client" && password === "corporate-client") {
            setUserName("")
            setPassword("")
            console.log(userName, password);
            Navigate('/corporate-client')
        }else if(userName === "input-supplier" && password === "input-supplier") {
            setUserName("")
            setPassword("")
            console.log(userName, password);
            Navigate('/input-supplier')
        }
    }
    return (
        <>
            <div className="h-screen w-full overflow-x-hidden flex flex-col items-center justify-center" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <div className="font-medium self-center text-xl sm:text-2xl text-gray-800">
                        <img className='m-auto' height={100} width={100} src={logo} alt='logo' />
                        <h3 className="text-2xl text-center text-indigo-400 font-bold ">MEITY</h3>
                    </div>
                    <div className="mt-10">
                        <form>
                            <div className="flex flex-col mb-6">
                                <label
                                    htmlFor="email"
                                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                                >
                                    Username:
                                </label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>
                                    <input
                                        id="username"
                                        type="text"
                                        name="username"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                        placeholder="Username"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <label
                                    htmlFor="password"
                                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                                >
                                    Password:
                                </label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <span>
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex items-center mb-6 -mt-4">
                                <div className="flex ml-auto">
                                    <span
                                        className="inline-flex text-sm sm:text-sm text-blue-500 hover:text-blue-700"
                                    >
                                        Forgot Your Password?
                                    </span>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <button
                                    onClick={handleLoginSubmit}
                                    type="submit"
                                    className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-gradient-to-r to-green-400 from-blue-500 py-2 w-full
                                    hover:bg-gradient-to-l 
                                    transition duration-150 ease-in"
                                >
                                    <span className="mr-2 uppercase">Login</span>
                                    <span>
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <div className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
                            <span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
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