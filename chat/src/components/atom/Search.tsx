import React from 'react';

type PropsInputSearch = {
    search: string;
}

const InputSearch: React.FC<PropsInputSearch> = ({ search }) => {
    return (
        <div className="border-b-2 py-4 px-2">
            <input
                type="text"
                placeholder="search chatting"
                className="py-2 px-4 border-2 border-gray-200 rounded-2xl w-full"
            >{search}</input>
        </div>
    )
}

export default InputSearch;
