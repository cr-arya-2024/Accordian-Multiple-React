


export default function Modal({ id,header,footer,body,onClose }) {
    return <div id={id || 'Modal'} className="modal">
        <div className="modal-content">
            <div className="header">
<span onClick={onClose} className="close-modal-icon">&times;</span>
 <h2>
    {header?header:"header"}
 </h2>
            </div>
            <div className="body">
            {body?body:"body"}
            </div>
            <div className="footer">
           <h2>
           {footer?footer:"footer"}
           </h2>
            </div>
        </div>


    </div>
}