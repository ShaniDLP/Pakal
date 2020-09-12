import React from 'react';

const filters = ({onClickAll, all, onClick, filters}) =>
  <form>
    <ul>
      <li onClick={onClickAll}>
        <input 
          type="checkbox"
          checked={all}
        />
        <label htmlFor="all">הכל</label>
      </li>
       {filters.map(
        (filter, i)=>
          <li  key={i} data-index={i} onClick={onClick} >
            <input 
              id={filter.name} 
              type="checkbox" 
              checked={filter.status}
            />
            <label htmlFor={filter.name}>{filter.name}</label>
          </li>)}
    </ul>
  </form>

  export default filters;