
const Types = ({type}) => {

    const {type: {name}} = type

    return (
        <>
            <tr className="bg-white">
                <td className=" text-center mx-5 p-2">
                    <p className="text-xl font-sans capitalize">{name}</p>
                </td>
            </tr>
        </>
    )
}

export default Types
