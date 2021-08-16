import { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { loginUser, registerUser } from '../actions/auth'

const Auth = (props) => {

    const [isLoginMode, setIsLoginMode] = useState(false)

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const nameRef = useRef(null)
    const usernameRef = useRef(null)
    const phoneNumberRef = useRef(null)

    const login = async (e) => {
        e.preventDefault()
        props.loginUser(emailRef.current.value, passwordRef.current.value)
    }

    const signUp = async (e) => {
        e.preventDefault()
        props.registerUser({
            name: nameRef.current.value,
            email: emailRef.current.value,
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            phoneNumber: phoneNumberRef.current.value
        })
    }

    if(props.isAuthenticated) {
        return <Redirect to='/charts' />
    }

    return (
        <div className='min-h-screen py-10 bg-surface text-white flex flex-col justify-center'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div className='h-full flex flex-row items-center'>
                    <div className='mx-auto w-3/4 md:w-1/2 py-7 px-5 border-2 border-text rounded-lg'>
                        <h1 className='text-2xl text-primary font-semibold text-center'>charted</h1>
                        {!isLoginMode ? <h1 className='text-2xs text-text'>Welcome!</h1> : <h1 className='text-2xs text-text'>Welcome back!</h1>}
                        {!isLoginMode ? <h4 className='text-xs my-1.5'>Dive right in and start playing.</h4> : <h4 className='text-xs my-1.5'>Let's sign you back in.</h4>}
                        <form onSubmit={isLoginMode ? login : signUp}>
                            <div className='my-3'>
                                <label htmlFor='email' className='text-2xs block mb-1.5 text-primary'>Email</label>
                                <input id='email' className='w-full block bg-transparent border-2 border-text rounded-full outline-none px-3 py-2 text-2xs' ref={emailRef} type='email' placeholder='johndoe@example.com'></input>
                            </div>
                            {!isLoginMode &&
                                <>
                                    <div className='my-3'>
                                        <label htmlFor='name' className='text-2xs block mb-1.5 text-primary'>Name</label>
                                        <input id='name' className='w-full block bg-transparent border-2 border-text rounded-full outline-none px-3 py-2 text-2xs' ref={nameRef} type='text' placeholder='John Doe'></input>
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor='username' className='text-2xs block mb-1.5 text-primary'>Username</label>
                                        <input id='username' className='w-full block bg-transparent border-2 border-text rounded-full outline-none px-3 py-2 text-2xs' ref={usernameRef} type='text' placeholder='johndoe'></input>
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor='phoneNumber' className='text-2xs block mb-1.5 text-primary'>Phone Number</label>
                                        <input id='phoneNumber' className='w-full block bg-transparent border-2 border-text rounded-full outline-none px-3 py-2 text-2xs' ref={phoneNumberRef} type='text' placeholder='9927xxxx50'></input>
                                    </div>
                                </>}
                            <div className='my-3'>
                                <label htmlFor='password' className='text-2xs block mb-1.5 text-primary'>Password</label>
                                <input id='password' className='w-full block bg-transparent border-2 border-text rounded-full outline-none px-3 py-2 text-2xs' ref={passwordRef} type='password' placeholder='john123'></input>
                            </div>
                            <input className='block mt-5 rounded-full px-3 py-2 text-2xs bg-primary w-full cursor-pointer' type='submit' value={!isLoginMode ? 'Sign Up' : 'Sign In'} />
                        </form>
                        <hr className='my-5' />
                        {!isLoginMode ?
                            <p className='text-2xs text-center'>Already a member? <span className='text-primary cursor-pointer' onClick={() => setIsLoginMode(true)}>Sign in instead.</span></p>
                            :
                            <p className='text-2xs text-center'>New user? <span className='text-primary cursor-pointer' onClick={() => setIsLoginMode(false)}>Sign up instead.</span></p>
                        }
                    </div>
                </div>
                <div className='h-full hidden md:flex items-center'>
                    <div className='h-4/5 mx-auto border-l-2 border-primary flex flex-col justify-center'>
                        <img className='w-1/2 mx-auto' src='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg' alt='Auth page illustration' />
                        <h1 className='text-xl font-semibold w-3/5 text-center mx-auto my-5'>Changing the way the world looks at music charts, one song at a time.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = {
    registerUser: registerUser,
    loginUser: loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)