import './App.css';
import profile from './60111.jpg'
import linkedin from './Linkedin.png'
import github from './GitHub Colored.png'
import x from './Twitter X Icon.png'
import Card from './Card';
import { useEffect, useState } from 'react';
function App() {
  const [data,setdata]=useState([])
  let fetchData=async()=>{
    fetch('https://portfolioserver-6bnm.onrender.com/data',
   {
       method:'get',
}).then(res=>res.json())
.then(result=>{
   setdata(result)
})



}
useEffect(()=>{
 fetchData()

},[])
  return (
    <div className='body flex flex-col lg:flex-row '>
      <div className='bg-slate-900 lg:w-1/3 w-full'>
        <div id='first conainer' className="flex flex-col lg:sticky lg:top-3 overflow-hidden    w-full  items-center">
          <div className="w-1/2 mt-10">
            <img
              className="rounded-full"
              src={profile}
              alt="profile"
            />
          </div>
          <div>
            <div className='bg-slate-950   rounded-lg m-3 p-3 text-gray-400'>
              <ul className="text-center text-white m-5 lg:text-lg">
                <li className='name'>Mohar Singh Rawat</li>
                <li>Bachelor of Technology <em>(2020-2024)</em></li>
                <li>Information Technology</li>
                <li>VII Semester</li>
                <li>Engineering College Ajmer</li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-4 bg-slate-950   rounded-lg m-3">
              <div className="cursor-pointer shadow-2xl hover:scale-90 flex flex-col justify-center items-center" onClick={() => window.open("https://www.linkedin.com/in/mohar-singh-rawat-8aa438210/")}>
                <img className="w-1/2" src={linkedin} alt="linkedin" />
              </div>
              <div className="cursor-pointer shadow-2xl hover:scale-90 flex flex-col justify-center items-center" onClick={() => window.open("https://twitter.com/MSRAWATZXZ")}>
                <img className="w-1/2" src={x} alt="x" />
              </div>
              <div className="cursor-pointer shadow-2xl hover:scale-90 flex flex-col justify-center items-center" onClick={() => window.open("https://github.com/ms-rawat")}>
                <img className="w-1/2" src={github} alt="github" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id='second container' className='bg-slate-800 w-full h-fit text-gray-100 '>
        <div className="m-9 grid grid-rows-none gap-4">
          {/* FIRSST BOX */}
          <div className="projects bg-slate-700 hover:bg-slate-900 p-4 rounded-lg shadow-lg">
            <h2 className="heading-2 text-3xl font-mono mb-4 ">Projects</h2>

      

            
             
            <div className='flex flex-col gap-3' >
          {
            data.map((item,index)=>(
             <Card key={index} data={item}/>
            ))
          }
             
             </div>
            
              
             
          

          </div>
          {/* SECOND BOX */}

          <div className="  skills bg-slate-700 ps-4 hover:bg-slate-900   rounded-lg shadow-lg">
            <h2 className="heading-2 text-3xl font-mono mb-4 ">Skills</h2>
            <ul className="list-disc list-outside ml-4">
              <li>
                <dt className='heading-3 text-xl text-slate-300 underline'>Front-end</dt>
                <ul>
                  <li>
                    <dd className='ml-4'>React.js</dd>
                  </li>
                </ul>
              </li>
              <li>
                <dt className='heading-3 text-xl text-slate-300 underline'>Backend</dt>
                <ul>
                  <li>
                    <dd className='ml-4'>Node.js</dd>
                  </li>
                </ul>
              </li>
              <li>
                <dt className='heading-3 text-xl text-slate-300 underline'>Database</dt>
                <ul>
                  <li>
                    <dd className='ml-4'>MongoDB</dd>
                    <dd className='ml-4'>MySQL</dd>
                  </li>
                </ul>
              </li>
              <li>
                <dt className="heading-3  text-xl text-slate-300 underline">Programming Languages</dt>
                <ul>
                  <li>
                    <dd className='ml-4'>JavaScript</dd>
                    <dd className='ml-4'>Java</dd>
                    <dd className='ml-4'>C++</dd>
                  </li>
                </ul>
              </li>
              <li>
                <dt className='heading-3  text-xl text-slate-300 underline'>JS Libraries</dt>
                <ul>
                  <li>
                    <dd className='ml-4'>React Router Dom</dd>
                    <dd className='ml-4'>Express.js</dd>
                    <dd className='ml-4'>React Hot Toast</dd>
                    <dd className='ml-4'>Mongoose</dd>
                    <dd className='ml-4'>Multer</dd>
                    <dd className='ml-4'>Body Parser</dd>
                    <dd className='ml-4'>etc ...</dd>
                  </li>
                </ul>
              </li>
              <li>
                <dt className='heading-3 text-xl text-slate-300 underline'>Tools</dt>
                <ul>
                  <li>
                    <dd className='ml-4'>VS Code</dd>
                    <dd className='ml-4'>Postman</dd>
                    <dd className='ml-4'>GitHub</dd>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* THIRD BOX */}
          <div className="education  p-4 bg-slate-700 hover:bg-slate-900 rounded-lg shadow-lg">
            <h2 className="heading-2 text-3xl font-mono mb-4">Education</h2>
            <ul>
              <li className='list-disc  ml-4'>
                <dt className=' heading-3 text-slate-300 text-xl underline'>Graduatation</dt>
                <ul>
                  <li  >
                    <dd className='ml-4'>Engineering College Ajmer, Rajasthan</dd>
                    <dd className='ml-4'>Information Technology</dd>
                    <dd className='ml-4'>2020-2024</dd>
                  </li>
                </ul>
              </li>
              <li className='list-disc ml-4'>
                <dt className='heading-3  text-slate-300 text-xl underline'>Higher Education</dt>
                <ul>
                  <li>
                    <dd className='ml-4'>Rama Memorial Sr. Sec. School</dd>
                    <dd className='ml-4'>Math, Physics, Chemistry</dd>
                    <dd className='ml-4'>2018-2020</dd>
                    <dd className='ml-4'>Grade - 92%</dd>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
