import React from 'react';
import { Friends } from 'data/Friends';

type PropsInputSearch = {
  firstName: string;
  name: string;
}

const ChatItem: React.FC<PropsInputSearch> = ({ firstName, name }) => {
  return (
    <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
      {Friends.map(item => (
        <button
          className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
        >
          <div
            className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
          >
            {item.firstletter}
          </div>
          <div className="ml-2 text-sm font-semibold" key={item.id}>{item.name}</div>
        </button>

      ))}
    </div>
  )
}

export default ChatItem;