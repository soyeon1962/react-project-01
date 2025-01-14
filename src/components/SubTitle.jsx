import React from 'react'

const SubTitle = ({ menu, isActive }) => {
  return isActive === true ? (
    <div>
      <h3>{menu.name}</h3>
    </div>
  ) : (
    <div>
      
    </div>
  )
}

export default SubTitle