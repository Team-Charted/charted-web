import { useRef } from "react"

const Auth = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const nameRef = useRef(null)
    const usernameRef = useRef(null)
    const phoneNumberRef = useRef(null)

    const loginUser = async (e) => {
        e.preventDefault()
        console.log(emailRef.current.value)
    }

    return (
        <div className='h-screen bg-surface text-white'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div className='h-full flex flex-row items-center'>
                    <div className='mx-auto w-3/4 md:w-1/2 py-7 px-5 border-2 border-text rounded-lg'>
                        <h1 className='text-2xs text-text'>Welcome!</h1>
                        <h4 className='text-xs my-1.5'>Dive right in and start playing.</h4>
                        <form onSubmit={loginUser}>
                            <div className='my-3'>
                                <label htmlFor='email' className='text-2xs block mb-1.5 text-primary'>Email</label>
                                <input id='email' className='w-full block bg-transparent border-2 border-text rounded-full outline-none px-3 py-2 text-2xs' ref={emailRef} type='email' placeholder='johndoe@example.com'></input>
                            </div>
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
                            <div className='my-3'>
                                <label htmlFor='password' className='text-2xs block mb-1.5 text-primary'>Password</label>
                                <input id='password' className='w-full block bg-transparent border-2 border-text rounded-full outline-none px-3 py-2 text-2xs' ref={passwordRef} type='password' placeholder='john123'></input>
                            </div>
                            <input className='block mt-5 rounded-full px-3 py-2 text-2xs bg-primary w-full cursor-pointer' type='submit' value='Sign Up' />
                        </form>
                        <hr className='my-5' />
                        <p className='text-2xs text-center'>Already a member? <span className='text-primary'>Login instead.</span></p>
                    </div>
                </div>
                <div className='h-full flex flex-row items-center'>
                    <div className='mx-auto'>
                        <img src='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
