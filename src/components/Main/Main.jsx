import React, { useContext } from 'react'
import "./Main.css"
import { LiaCompassSolid } from "react-icons/lia";
import { FaRegLightbulb } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { TfiGallery } from "react-icons/tfi";
import { IoMdMic } from "react-icons/io";
import { RiSendPlaneFill } from "react-icons/ri";
import { Context } from '../../context/Context';
import profile from "../../assets/profile.gif";




const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setinput, input } = useContext(Context)


    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={profile} alt="" />
            </div>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautifule place to see on an upcoming road trip</p>
                                <LiaCompassSolid className="img" size={35} />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <FaRegLightbulb className="img" size={35} />
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <FiMessageSquare className="img" size={35} />
                            </div>
                            <div className="card">
                                <p>Improve the readablity of the following code</p>
                                <FaCode className="img" size={35} />
                            </div>
                        </div>
                    </> : <div className='result'>
                        <div className="result-title">
                            <img src={profile} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src="https://preview.redd.it/tried-to-make-google-gemini-skeuomorphic-v0-yfo4q08geo5e1.jpg?width=250&format=pjpg&auto=webp&s=bac2f9a4612c660000884275d4a34b0484f4f1a8" alt="" />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}

                        </div>
                    </div>}


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setinput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div >
                            <TfiGallery size={24} />
                            <IoMdMic size={24} />
                            {input? <RiSendPlaneFill size={24} onClick={() => onSent()} />: null}
                           
                        </div>
                    </div>
                    <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. your privacy and Gemini Apps</p>
                </div>
            </div>
        </div>

    )
}

export default Main