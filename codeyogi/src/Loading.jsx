import React from 'react'
import { ImSpinner9} from "react-icons/im";

function Loading() {
  return (
    <div className='grow text-indigo-700 text-3xl flex items-centre 
    justify-center'>
      <ImSpinner9 className='animate-spin text-6xl text-primary-dark'/>
    </div>
  );
}

export default Loading;