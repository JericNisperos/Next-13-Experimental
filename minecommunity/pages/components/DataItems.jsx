import React from 'react'

function DataItems({ icon, title, value }) {
    return (
      <div className="flex justify-between text-lg md:text-2xl mx-2 md:mx-8 my-4 text-gray-700 items-center">
        <div className="flex justify-normal items-center">
          <span className="w-[30px]">{icon}</span>
          {title}
        </div>
        <div className="md:text-xl text-sm items-center">{value}</div>
      </div>
    );
  }

export default React.memo(DataItems)