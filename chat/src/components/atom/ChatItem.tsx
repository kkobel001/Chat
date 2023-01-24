import React from 'react';
import { Friends } from 'data/Friends';

type PropsInputSearch = {
  firstName: string;
  name: string;
  chatArt: [number];

}

const ChatItem: React.FC<PropsInputSearch> = ({ firstName, name }) => {

  // const findletter = () =>{
  //   let letterName= name;
  //   const findLetters=letterName.chatArt(0);
  // }



  return (
    <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
      {Friends.map(item => (
        <button
          className="flex flex-row items-center hover:bg-gray-100 rounded-xl  p-2"
        >
          <div
            className="flex items-center justify-center h-full w-8 bg-indigo-200 rounded-full"
          >
            {item.name}
          </div>
          <div className="ml-2 text-sm font-semibold" key={item.id}>{item.name}</div>
        </button>

      ))}
    </div>
  )
}

export default ChatItem;