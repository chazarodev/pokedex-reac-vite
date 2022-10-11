
const Stats = ({stat}) => {     

    return (
        <tr className="bg-white">
            <td className=" text-center w-1/2 pl-2">
                <p className="text-lg font-sans capitalize">{stat.stat.name}</p>
            </td>
            <td className='text-left mx-1 p-1' >
                <p 
                    className='rounded-md text-sm text-center text-white bg-stats'
                    style={{
                        opacity: 1,
                        width: `${stat.base_stat >= 255 ? 200/2 : stat.base_stat / 1.6}%`
                    }}
                    onAnimationStart
                >
                    {stat.base_stat}%
                </p>
            </td>
        </tr>
    )
}

export default Stats
