import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./AddToCartModalButton.css";

// const modal = (props) => {
//   return (
//     <div>
//       <div
//         className="modal-wrapper"
//         style={{
//           transform: props.show ? "translateY(-15vh)" : "translateY(-400vh)",
//           opacity: props.show ? "1" : "0",
//         }}
//       >
//         <div className="modal-header">
//           <span className="close-modal-btn" onClick={props.close}>
//             ×
//           </span>
//         </div>
//         <div className="modal-body">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6 my-2">
//                 <div
//                   style={{ cursor: "pointer" }}
//                   onClick={() => props.history.goBack()}
//                   className="btn btn-md continue-btn "
//                 >
//                   Continue Shopping
//                 </div>
//               </div>
//               <div className="col-md-6 my-2">
//                 <Link className="btn btn-md shopping-btn-modal" to="/cart">
//                   Proceed To Cart
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Modal = (props) => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-header">
          <span className="close-modal-btn" onClick={props.handleClose}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col-md-6 my-2">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => props.history.goBack()}
                  className="btn btn-md continue-btn "
                >
                  Continue Shopping
                </div>
              </div>
              <div className="col-md-6 my-2">
                <Link className="btn btn-md shopping-btn-modal" to="/cart">
                  Proceed To Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <button onClick={handleClose}>close</button> */}
      </section>
    </div>
  );
};
export default withRouter(Modal);
