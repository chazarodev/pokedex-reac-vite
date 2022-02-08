
const Stats = ({stat}) => { 


    return (
        <tr className="bg-white">
            <td className=" text-left w-1/2 pl-2">
                <p className="text-xl font-sans capitalize">{stat.stat.name}</p>
            </td>
            <td className='text-left mx-5 p-2' >
                <p className='rounded-md text-xl font-bold text-left'>{stat.base_stat}</p>
            </td>
        </tr>
    )
}

export default Stats
