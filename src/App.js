import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Header from './components/Header';
import Form from './components/Form';
import ShowData from './components/ShowData';
import {useRef} from 'react'
function App() {
  const [allData,setallData]= useState([]);
  const [added,setadded] = useState(false)
  const [deleted,setDeleted] = useState(false)
  const [edited,setEdited] = useState(false)


  // ==================== for edit model =================================\
  const [open, setOpen] = useState(false);
  const [editid,seteditid] = useState('');
  const editModel = (id) => {
    seteditid(id)
    console.log(id)
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const handleDelete = () => {
    setOpen(false)
  };
  const clearInputVal = useRef('')

  useEffect(() => {
    allstudentData()
    
  },[added,edited,deleted]);


  const allstudentData = async()=>{
    const data = await axios.get('http://localhost:9000/read')

    setallData(data.data)
  }

 








      
const [studentsData,setStudentData] = useState({
  first_name:'',
  last_name:'',
  field_of_study:'',
  age:undefined,
})

const handleChange = (e)=>{
setStudentData({...studentsData,[e.target.name]:e.target.value})
}

const addStudent = ()=>{
  
  axios.post('http://localhost:9000/create',studentsData).then((res)=>{
    console.log('sucess')
  }).catch(err=>console.log(err))
  
  // clearInputVal.current.value = ''
setadded(!added)
}

const updateStudent = ()=>{
  studentsData.id = editid
  console.log(studentsData)
  axios.put('http://localhost:9000/update',studentsData);
  setEdited(!edited)
  handleClose();

}

const deleteStudent = (id)=>{
  try {
  
  
    axios.delete('http://localhost:9000/delete',{data:{id:id}}).then((data)=>{
      // console.log(data)
      setDeleted(!deleted)
    }).catch((err)=>{
      console.log(err)
    })

    
  } catch (error) {
    
  }
} 

  return (
    <>
      <Header />

      <Form handleChange={handleChange} addStudent={addStudent} clearInputVal={clearInputVal}/>
      
      <ShowData allData={allData} handleChange={handleChange} clearInputVal={clearInputVal} editModel={editModel} open={open} updateStudent={updateStudent} handleDelete={handleDelete} deleteStudent={deleteStudent}/>
      
    </>
  );
}

export default App;
