import React from 'react';
import { Friends } from 'data/Friends';

type PropsInputSearch = {
  firstName: string;
  name: string;
  image: string;

}

const ChatItem: React.FC<PropsInputSearch> = ({ firstName, name }) => {


  return (
    <div className="flex flex-col space-y-1 mt-4 -mx-2 h-full overflow-y-auto">
      {Friends.map(item => (

        <button
          className="flex flex-row items-center h-67 hover:bg-gray-100 rounded-xl  p-2"
          key={item.id} >
          <div
            className="flex items-center justify-center h-full w-8 bg-indigo-200 rounded-full"
          >
            <img
              className="flex items-center justify-center  bg-indigo-200 rounded-full"
              src={item.image}
              alt="avatar"
            />
            {/* <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span> */}
            {/* <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none"
            >
              2
            </div> */}
          </div>
          <div className="justify-items-start">
            <div className="justify-items-startml-2 text-sm font-semibold" >{item.name}</div>
            <span className="flex-initial text-gray-400">Pick me at 9:00 Am</span>
          </div>

        </button>

      ))}
    </div>
  )
}

export default ChatItem;