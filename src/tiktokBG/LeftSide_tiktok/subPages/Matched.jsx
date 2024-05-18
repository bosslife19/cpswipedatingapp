// // MatchedPage.js
//  import peopled from "../../../assets/pack.jpg"
// import peoples from "../../../assets/depositPhotos.webp"
// import { Link } from 'react-router-dom';
//  import { Nav } from '../../tiktok_Navbar/Nav';
// import { Leftside } from '../Leftside';
// const MatchedPage = () => {
//   const matchedUsers = [
//     { id: 1, name: 'John Doe', imageUrl: peopled, matchReason: 'Similar interests in hiking and photography' },
//     { id: 2, name: 'Jane Smith', imageUrl: peoples, matchReason: 'Both love cooking and traveling' },
//     { id: 3, name: 'Janes Smith', imageUrl: peoples, matchReason: 'Both love cooking and traveling' },
//     { id: 4, name: 'Janes Smith', imageUrl: peoples, matchReason: 'Both love cooking and traveling' },

//   ];

//   const handleMingle = (userId) => {
//     console.log(`Mingle with user ${userId}`);
//   };

//   const handleRemove = (userId) => {
//     console.log(`Remove user ${userId}`);
//   };

//   return (
//     <>
   
//     <div className="display_sideways">
//        <Leftside/>
//     <div className="matched-page">
//     <Nav/>
//       <h1>Matched</h1>
//       <div className="matched-users">
//         {matchedUsers.map(user => (
//           <div key={user.id} className="user-card">
//              <Link to={`/profile-page/:id`}>
//             <img src={user.imageUrl} alt={user.name} />
//             </Link>
//             <h3>{user.name}</h3>
//             <p>{user.matchReason}</p>
//             <div className="action-buttons">
//               <button onClick={() => handleMingle(user.id)}>Mingle</button>
//               <button onClick={() => handleRemove(user.id)}>Remove</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default MatchedPage;
