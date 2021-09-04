import React from 'react'
import { connect } from 'react-redux'
import { MdAccountCircle, MdEmail, MdPhone } from 'react-icons/md'
import { HiOutlineAtSymbol } from 'react-icons/hi'
import { FiArrowDownLeft, FiArrowUpRight } from 'react-icons/fi'
import { RiHistoryFill } from 'react-icons/ri'

import Navbar from '../components/common/Navbar'
import { logoutUser } from '../actions/auth'
import axios from '../util/axios'

const Account = (props) => {
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const body = JSON.stringify({
            amount: 100
        });

        try {
            const result = await axios.post('/api/transactions/add', body);

            // Getting the order details back
            const { amount, id: order_id, currency } = result.data;

            const options = {
                key: "rzp_test_QmzLview4RmIzC", // Enter the Key ID generated from the Dashboard
                amount: amount.toString(),
                currency: currency,
                name: "Charted",
                order_id: order_id,
                handler: async function (response) {
                    const data = {
                        amount: amount,
                        orderCreationId: order_id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                    };

                    const result = await axios.post('/api/transactions/add/success', data);

                    if (result.status == 200) {
                        alert('Successfully added ₹100!')
                        window.location.reload()
                    }
                },
                prefill: {
                    name: props.user.name,
                    email: props.user.email,
                    contact: props.user.phoneNumber,
                },
                theme: {
                    color: "#7F5AF0",
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();

        } catch (err) {
            const errors = err.response.data.errors

            if (errors) {
                console.log(errors)
            }
        }


    }

    async function withdrawMoney() {

        const body = JSON.stringify({
            amount: 100
        });

        try {
            const result = await axios.post('/api/transactions/withdraw', body);
            if (result.status == 200) {
                alert("Successfully withdrew ₹100!")
                window.location.reload()
            }

        } catch (err) {
            const errors = err.response.data.errors

            if (errors) {
                console.log(errors)
            }
        }
    }

    return (
        <div className='h-screen'>
            <Navbar />
            {props.user &&
                <div className='h-full py-14 md:py-20 mx-4 md:mx-16'>
                    <div className='py-4 md:py-6 h-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-36'>
                        <div className='h-full grid grid-rows-2 gap-4'>
                            <div className='flex flex-col justify-around bg-surface md:w-4/5 md:mx-auto p-4 rounded-xl'>
                                <h3 className='text-3xs md:text-base font-semibold text-text'><MdAccountCircle className='inline text-2xl mr-1' /> {props.user.name}</h3>
                                <h3 className='text-3xs md:text-base font-semibold text-text'><HiOutlineAtSymbol className='inline text-2xl mr-1' /> {props.user.username}</h3>
                                <h3 className='text-3xs md:text-base font-semibold text-text'><MdEmail className='inline text-2xl mr-1' /> {props.user.email}</h3>
                                <h3 className='text-3xs md:text-base font-semibold text-text'><MdPhone className='inline text-2xl mr-1' /> {props.user.phoneNumber}</h3>
                                <div className='text-center'>
                                    <button onClick={props.logoutUser} className='p-2 mx-auto w-1/2 bg-text text-3xs md:text-base text-white rounded-xl'>Sign Out</button>
                                </div>
                            </div>
                            <div className='flex flex-col justify-around items-center bg-primary md:w-4/5 md:mx-auto p-4 rounded-xl'>
                                <h3 className='text-white text-base md:text-2xl'>My Wallet</h3>
                                <h1 className='text-2xl md:text-4xl font-medium'>₹{(props.user.coins).toFixed(2)}</h1>
                                <div className='w-full flex justify-around'>
                                    <div onClick={displayRazorpay} className='cursor-pointer flex flex-col items-center'>
                                        <div className='bg-surface rounded-full flex flex-col justify-center items-center w-12 h-12'><FiArrowDownLeft className='font-bold text-lg md:text-3xl' /></div>
                                        <h6 className='text-3xs md:text-base'>Add</h6>
                                    </div>
                                    {props.user.fundAccountID &&
                                        <div onClick={withdrawMoney} className='cursor-pointer flex flex-col items-center'>
                                            <div className='bg-surface rounded-full flex flex-col justify-center items-center w-12 h-12'><FiArrowUpRight className='font-bold text-lg md:text-3xl' /></div>
                                            <h6 className='text-3xs md:text-base'>Withdraw</h6>
                                        </div>}
                                    <div className='cursor-pointer flex flex-col items-center'>
                                        <div className='bg-surface rounded-full flex flex-col justify-center items-center w-12 h-12'><RiHistoryFill className='font-bold text-lg md:text-3xl' /></div>
                                        <h6 className='text-3xs md:text-base'>History</h6>
                                    </div>
                                </div>
                                {!props.user.fundAccountID &&
                                    <p className='text-center text-warning text-3xs md:text-sm'>Link your bank account to withdraw money from your Charted wallet.</p>}
                            </div>
                        </div>
                        <div className='h-full hidden md:flex items-center'>
                            <div className='h-full mx-auto border-l-2 border-primary flex flex-col justify-center'>
                                <img className='w-1/2 mx-auto' src='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg' alt='Auth page illustration' />
                                <h1 className='text-xl font-semibold w-3/5 text-center mx-auto my-5'>Changing the way the world looks at music charts, one song at a time.</h1>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = {
    logoutUser: logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
