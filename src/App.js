import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import 'antd/dist/antd.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {useEffect , useState} from 'react'
import axios from 'axios'
import ContentChild from './Components/ContentChild';
import Cards from './Components/Cards';

function App() {

  const [data, setData] = useState([])
  const [ID, setID] = useState(-1)
  const [dataactive, setDataactive] = useState([])
  

  const [datauser, setDatauser] = useState([])
  const [datalogin, setDatalogin] = useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(function(value){
      console.log(value.data);
      setData(value.data)
    })
    .catch(function(err){
      console.log(err);
    })
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home dataactive={dataactive} setID={setID} datalogin={datalogin} datauser={datauser} data={data}></Home>}></Route>
        <Route path='/home/giohang' element={<Cards dataactive={dataactive} setID={setID} datalogin={datalogin} datauser={datauser} data={data}></Cards>}></Route>
        <Route path='/home/:card' element={<ContentChild  dataactive={dataactive} setDataactive={setDataactive} setID={setID} datalogin={datalogin} datauser={datauser} data={data} id={ID} ></ContentChild>}></Route>
        <Route path='/login' element={<Login data={data} datauser={datauser} setDatalogin={setDatalogin}></Login>}></Route>
        <Route path='/signup' element={<Signup setDatauser={setDatauser}  setDatalogin={setDatalogin}  datauser={datauser}></Signup>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
