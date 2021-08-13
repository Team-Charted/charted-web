import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='z-50 px-4 md:px-16 h-14 w-full bg-primary text-white text-lg font-semibold flex justify-between items-center fixed'>
            <div>
                <Link to='/'>
                    <span className='font-bold text-2xl'>charted</span>
                </Link>
            </div>
            <div className='hidden md:block'>
                <Link to='/'>
                    <span className='mx-3 font-semibold hover:text-surface'>Home</span>
                </Link>
                <Link to='/auth'>
                    <span className='mx-3 font-semibold hover:text-surface'>Auth</span>
                </Link>
                <Link to='/charts'>
                    <span className='ml-3 font-semibold hover:text-surface'>Charts</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
