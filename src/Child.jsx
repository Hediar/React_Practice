import React from 'react'



function Child({age, name, children}) {
    console.log(age,name,children);
  return (
    <div>Child</div>
  )
}
Child.defaultProps={
    age:'기본 나이',
}

export default Child