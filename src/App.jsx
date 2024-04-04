// Form and UseState

import { useState } from "react";
const App = () => {
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [graducated, setgraduate] = useState(true)
  const [gender, setgender] = useState("female")
  const [option, setoption] = useState(false)
  const [desc, setdecs] = useState("")
  const Submithandler = (e) =>{
    e.preventDefault()
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value)
    console.log(graducated);
    console.log(gender, option, desc);
  };
  return (
    <>
    <form onSubmit={Submithandler}>
      <input type="text" value={username} placeholder="username" onChange={(e)=> setusername(e.target.value) } /><br />
      <br />
      <input type="email" value={email} placeholder="email" onChange={(e)=> setemail(e.target.value) }/><br />
      <br />
      <input type="password" value={password} placeholder="*******"onChange={(e)=> setpassword(e.target.value) } /><br />
      <br />
      <input type="checkbox" onChange={(e)=> setgraduate(e.target.checked)} checked={graducated} />
      Graduated <br />
      <br />
      <input type="radio" name="gender" defaultValue= "male"  onChange={(e)=> setgender(e.target.value)} checked={gender === "male" ? true : false} />
      Male <br />
      <input type="radio" name="gender" defaultValue= "female"  onChange={(e)=> setgender(e.target.value)} checked={gender === "female" ? true : false} />
      Female <br />
      <br />
      <select value={option} onChange={(e)=> setoption(e.target.value)}  >
      <option value="option 1">Option 1</option>
      <option value="option 2">Option 2</option>
      <option value="option 3">Option 3</option>
      </select><br />
      <br />
      <textarea value={desc} onChange={(e)=> setdecs(e.target.value)}></textarea>
      <br />
      <button>Submit</button>
    </form>
    </>
  )
}

export default App