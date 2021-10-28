// import React from "react";
// import styles from "../styles/MyMain.module.css";

// export default  ({children}) => (
//     <div className={styles.myMain}>
//         <ul> {children} </ul>

//     </div>
// )

import React, { Component } from "react";
import styles from "../styles/MyMain.module.css";

class MyMain extends Component {
  render() {
    return (
      <div className={styles.myMain}>
            {this.props.children}         
      </div>
    );
  }
}
export default MyMain;
