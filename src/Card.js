import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './App.css'
function Card({ data }) {
  const [toggl,setToggl]=useState(false)


  return (

    <div className='relative'>
      <div className='title heading-3 font-bold   flex flex-row gap-2' >  <div>👉{data.title}</div> <div className={`${toggl ? 'rotate-180':'rotate-0 ' } hover:cursor-pointer`} onClick={()=>setToggl(!toggl)}><KeyboardArrowDownIcon/></div> </div>
  
    { toggl?(<div className=' flex flex-col ms-4  justify-start  '>

        <div className=' hover:cursor-pointer hover:text-orange-600 flex flex-row gap-2' onClick={() => window.open(data.dlink)}>   <div> 🚀 deployement link: <em>{data.dlink}</em> </div></div>
        <div className='  hover:cursor-pointer hover:text-orange-600 flex flex-row gap-2' onClick={() => window.open(data.glink)}>   <div> 🚀 github link: <em>{data.glink}</em></div></div>

        <div className='font-semibold '>Description:</div>
        <div>
          <ul className='list-disc'>
         { data.d1 && <li>{data.d1}</li>}
         { data.d2 && <li>{data.d2}</li>}
         { data.d3 && <li>{data.d3}</li>}
         { data.d4 && <li>{data.d4}</li>}
         { data.d5 && <li>{data.d5}</li>}
         { data.d6 && <li>{data.d6}</li>}
         { data.d7 && <li>{data.d7}</li>}
         { data.d8 && <li>{data.d8}</li>}
         </ul>

        
        </div>
      </div>
    ):( <div></div>) 
}
    </div>
  );
}

export default Card;
