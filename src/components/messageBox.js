import React from "react";

const MessageBox = (props) => (
    <div className={`alert alert-${props.variant || 'info'}`}>
        {props.children}
    </div>
);

export default MessageBox;