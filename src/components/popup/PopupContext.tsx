'use client'
import Popup from "~/components/popup/Popup";
import React from "react";

const PopupContext = () => {
    const [popupOpen,setPopupOpen] = React.useState(false);
    const popupClose = () => {
        setPopupOpen(false);
    }

    return <div>
        <button onClick={() => setPopupOpen(true)}>Open Popup</button>
        <Popup onClose={popupClose} open={popupOpen}>
            popup contentt
        </Popup>
    </div>
}

export default PopupContext;
