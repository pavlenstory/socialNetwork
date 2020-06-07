import React from "react"
import s from "./Dialogs.module.css"
import DialogsUsers from "./DialogUser/DialogsUsers"
import DialogsMessages from "./DialogMessages/DialogsMessages"
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let dialogsElements = props.users.map((u) => <DialogsUsers name={u.name} id={u.id} key={u.id}/>)
    let dialogsMessages = props.messages.map((m) => <DialogsMessages message={m.message} id={m.id}
                                                                                       key={m.id}/>)

    let sendMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let newText = e.target.value;
        props.updateNewMessageText(newText);
    }

    if(!props.isAuth) return  <Redirect to={"/login"}/>

    return (
        <>
            <div className={s.DialogsUsers}>
                {dialogsElements}
            </div>
            <div className={s.DialogsMessages}>
                {dialogsMessages}
            </div>
            <textarea onChange={onMessageChange} value={props.newMessageText}></textarea>
            <button onClick={sendMessage}>Send message</button>
        </>
    )
}

export default Dialogs;
