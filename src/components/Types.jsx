import './styles/types.css'

const Types = ({type}) => {

    const {type: {name}} = type

    return (
        <>
            <div className="mb-2">
                <div className={`text-center mx-5 p-2 ${name}`}>
                    <p className="text-2xl font-sans capitalize font-bold">{name}</p>
                </div>
            </div>
        </>
    )
}

export default Types
