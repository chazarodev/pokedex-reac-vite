import React from 'react';

const Stats = ({stat}) => {
    return (
        <tr className="bg-white">
            <td className=" text-left mx-5 p-2">
                <p className="text-xl font-sans capitalize">{stat.stat.name}</p>
            </td>
            <td className={`text-left mx-5 p-2`} >
                <p className="text-xl font-sans">{stat.base_stat}</p>
            </td>
        </tr>
    )
}

export default Stats
