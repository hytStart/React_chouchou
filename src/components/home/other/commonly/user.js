import React from 'react';

// Note how the debugger below gets hit when *any* delete
// button is clicked. Why? Because the parent component
// uses an arrow function, which means this component
//
// class User extends React.PureComponent {
//     render() {
//         const { name, onDeleteClick } = this.props
//         console.log(`${name} just rendered`)
//         return (
//             <li>
//                 <input
//                     type="button"
//                     value="Delete"
//                     onClick={onDeleteClick}
//                 />
//                 {name}
//             </li>
//         )
//     }
// }

// export default User

class User extends React.PureComponent {
    onDeleteClick = () => {
      // No bind needed since we can compose the relevant data for this item here
      this.props.onClick(this.props.user.name);
    };
  
    render() {
      console.log(`${name} just rendered`);
      return (
        <li>
          <input 
            type="button" 
            value="Delete" 
            onClick={this.onDeleteClick} 
          />
          {this.props.user.name}
        </li>
      );
    }
  }
  
  
  export default User;