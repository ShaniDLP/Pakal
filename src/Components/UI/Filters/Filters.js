import React from 'react';

const filters = ({ name, onChange, checked, filters }) =>
<ul >
<li>
<input
  id="quiteplace" name={"מקום שקט"}
  type="checkbox"
  checked={this.checked("מקום שקט")}
  onChange={onChange}
  />
  <label for="quiteplace">מקום שקט</label>
  </li>
// 
</ul>

export default filters;



/////////////
// <li>
// //   <input
//   id="families" name="מתאים למשפחות"
//   type="checkbox"
//   checked={checked}
//   onChange={onChange}
//   />
//   <label for="families">משפחות</label>
//   </li>
//   <li>
//   <input
//   id="walking" name="מסלול הליכה"
//   type="checkbox"
//   checked={checked}
//   onChange={onChange}
//   />
//   <label for="walking">מסלול הליכה</label>
//   </li>
//   <li>
//   <input
//   id="disabilites" name="נגיש לנכים"
//   type="checkbox"
//   checked={checked}
//   onChange={onChange}
// />
// <label for="disabilites">נגיש לנכים</label>
// </li>


////////////////////////////////////////////////////


//   <form>
//     <ul ref="tags">
//       <li onClick={onClickAll}>
//         <input 
//           type="checkbox"
//           checked={all}
//         />
//         <label htmlFor="all">הכל</label>
//       </li>
//        {filters.map(
//         (filter, i)=>
//           <li key={i} data-index={i} onClick={() => filtersites(filter.name)} >
//             <input 
//               id={filter.name} 
//               type="checkbox" 
//               checked={filter.status}
//             />
//             <label htmtlFor={filter.name}>{filter.name}</label>
//           </li>)}
//     </ul>
//   </form>

