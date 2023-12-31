import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searchbar = ({ searchText }) => {
  const [text, setText] = useState('');
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
          return navigate(`/search?tag=${text}`)
  }

  return (
    <div className='max-w-sm rounded overflow-hidden basis-3/4 order-last sm:order-none md:basis-full self-center'>
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Tag..." />
        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" onSubmit={() =>   onSubmit()  }>
      Search
      </button>
      </div>
      </form>
		</div>
  )
}

export default Searchbar;