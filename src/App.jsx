import React, { useState } from 'react'

function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChangeIdHandler = (event) =>{
    setId(event.target.value);
  };
  const onChangePwHandler = (event) =>{
    setPw(event.target.value);
  };
  
  console.log(id,pw)

  const onChilckButtonHandler =  () =>{
    alert(`고객님이 입력하신 아이디는 ${id}이며 비밀번호는 ${pw}입니다.`);
    setId("");
    setPw("");
  }
  return (
    <div>
      <div>
        아이디: {" "}
        <input
        value={id}
        type='text'
        onChange={onChangeIdHandler}
        ></input>
      </div>
      <div>
        비밀번호: {" "}
        <input
        value={pw}
        type='password'
        onChange={onChangePwHandler}
        ></input>
      </div>
      <button
      onClick={
        onChilckButtonHandler
      }>로그인</button>
    </div>
  )
}

export default App