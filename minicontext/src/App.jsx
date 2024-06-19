import './App.css'
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
function App(){
  return(
    <UserContextProvider>
      <h1>react context api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}
export default App