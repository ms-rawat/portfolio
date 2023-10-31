import './App.css';
import profile from './60111.jpg'
import linkedin from './Linkedin.png'
import github from './GitHub Colored.png'
import x from './Twitter X Icon.png'
import linkicon from './link.png'
function App() {
  return (
    <div className='flex flex-col lg:flex-row '>
      <div className="flex flex-col lg:w-1/2 overflow-hidden sm:overflow-auto lg:h-screen sm:w-auto md:w-auto sm:h-auto bg-slate-900 items-center">
        <div className="w-1/2 mt-10">
          <img
            className="rounded-full"
            src={profile}
            alt="profile"
          />
        </div>
        <div>
          <div className='bg-slate-950 rounded-lg m-3 p-3 text-gray-100'>
            <ul className="text-center text-white m-5 lg:text-lg">
              <li>Mohar Singh Rawat</li>
              <li>Bachelor of Technology <em>(2020-2024)</em></li>
              <li>Information Technology</li>
              <li>VII Semester</li>
              <li>Engineering College Ajmer</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-4 bg-slate-950 rounded-lg m-3">
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
      <div className='bg-slate-800 w-full h-screen text-gray-100 overflow-auto'>
        <div className="m-9 grid grid-rows-none gap-4">
          {/* FIRSST BOX */}
          <div className="projects bg-slate-700 hover:-rotate-1 p-4 rounded-lg shadow-lg">
            <h2 className="text-3xl mb-4">Projects</h2>
            <ul className="list-disc list-outside ml-4">
              <li>
                <h2 onClick={()=>window.open("https://btup-8c583.web.app/")} className="cursor-pointer hover:text-blue-600 hover:underline" >Question Paper Provider <img className='h-5 inline' src={linkicon} alt="link" /></h2>
                <ul>
                  <li>
                    <dt className='ml-4'>-Implemented a dynamic system that allows users to select their course, branch, and semester preferences.</dt>
                  </li>
                  <li>
                    <dt className='ml-4'>-Utilized a Node.js backend with a REST API to retrieve question paper links from a MongoDB database.</dt>
                  </li>
                  <li>
                    <dt className='ml-4'>-Provided users with tailored question papers based on their selections.</dt>
                  </li>
                </ul>
              </li>
              <li>
                <h2 onClick={()=>window.open("https://quizbymohar.netlify.app/")} className="hover:text-blue-600 hover:underline"  >Quiz Application <img className='h-5 inline' src={linkicon} alt="link" /></h2>
                <ul>
                  <li>
                    <dt className='ml-4'>-Implemented a user-friendly interface with single-question visibility.</dt>
                  </li>
                  <li>
                    <dt className='ml-4'>-Enabled easy navigation through "Previous" and "Next" buttons.</dt>
                  </li>
                  <li>
                    <dt className='ml-4'>-Added functionality for users to submit their answers for immediate evaluation.</dt>
                  </li>
                  <li>
                    <dt className='ml-4'>-Displayed results, including the number of correct and incorrect answers, and the overall score.</dt>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* SECOND BOX */}

          <div className="skills bg-slate-700 p-4 hover:rotate-1 rounded-lg shadow-lg">
            <h2 className="text-3xl mb-4">Skills</h2>
            <ul className="list-disc list-outside ml-4">
              <li>
                <dt className='text-xl text-slate-950'>Front-end</dt>
                <ul>
                  <li>
                    <dd className='ml-4'>React.js</dd>
                  </li>
                </ul>
              </li>
              <li>
                <dt className='text-xl text-slate-950'>Backend</dt>
                <ul>
                  <li>
                    <dd className='ml-4'>Node.js</dd>
                  </li>
                </ul>
              </li>
              <li>
                <dt className='text-xl text-slate-950 underline'>Database</dt>
                <ul>
                  <li>
                    <dd className='ml-4'>MongoDB</dd>
                    <dd className='ml-4'>MySQL</dd>
                  </li>
                </ul>
              </li>
              <li>
                <dt className="text-xl text-slate-950 underline">Programming Languages</dt>
                <ul>
                  <li>
                    <dd className='ml-4'>JavaScript</dd>
                    <dd className='ml-4'>Java</dd>
                    <dd className='ml-4'>C++</dd>
                  </li>
                </ul>
              </li>
              <li>
                <dt className='text-xl text-slate-950 underline'>JS Libraries</dt>
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
                <dt className='text-xl text-slate-950 underline'>Tools</dt>
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
          <div className="education bg-slate-700 p-4  hover:-rotate-1 rounded-lg shadow-lg">
            <h2 className="text-3xl mb-4">Education</h2>
            <ul>
              <li>
                <dt className='text-slate-950 text-xl underline'>Postgraduate Education</dt>
                <ul>
                  <li  className='list-disc ml-4'>
                    <dd className='ml-4'>Engineering College Ajmer, Rajasthan</dd>
                    <dd className='ml-4'>Information Technology</dd>
                    <dd className='ml-4'>2020-2024</dd>
                  </li>
                </ul>
              </li>
              <li className='list-disc ml-4'>
                <dt className='text-slate-950 text-xl underline'>Higher Education</dt>
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
