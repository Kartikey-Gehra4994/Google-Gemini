import React, { useContext } from 'react'
import "./Sidebar.css"
import { useState } from 'react';
import { RiMenu2Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { Context } from '../../context/Context';

const Sidebar = () => {
    const [extended, setextended] = useState(false)
    const { onSent, prevPrompts, setrecentPrompt,newChat } = useContext(Context)
const loadPrompt = async (prompt) => {
    setrecentPrompt(prompt)
    await onSent(prompt)
}

    return (
        <div className='sidebar'>
            <div className="top">
                <div className='img menu' onClick={() => { setextended(prev => !prev) }}><RiMenu2Line size={20} /></div>

                <div onClick={()=>newChat()} className="new-chat">
                    <div className='img'><FaPlus size={20} /></div>
                    {extended ? <p>New Chat</p> : null}
                </div>

                {extended ? <div className="recent">
                    <p className='recent-title'>Recent</p>
                    {prevPrompts.map((item, index) => {
                        return (
                            <div onClick={()=>loadPrompt(item)} className="recent-entry">
                                <div className='img'><FaRegMessage size={20} /></div>

                                <p>{item.slice(0,18)}...</p>
                            </div>
                        )
                    })}

                </div> : null}

            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <div className="img"><AiOutlineQuestionCircle size={20} /></div>
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <div className="img"><FaClockRotateLeft size={20} /></div>
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <div className='img'><MdOutlineSettings size={20} /></div>
                    {extended ? <p>Settings</p> : null}
                </div>

            </div>
        </div>
    )
}

export default Sidebar