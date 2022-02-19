import './styles/types.css'

const Weak = ({weakness}) => {
    
    return (
        <>
            <div className="mb-2">
                <div className='text-center m-2'>
                    <h1 className="text-2xl font-sans capitalize font-bold">Weakness</h1>
                    <div className='text-center m-2 grid grid-cols-2 gap-2'>{weakness.map(weak => (
                        <p
                        key={weak.name} 
                        className={`${weak.name} text-2xl font-sans capitalize font-bold my-2`}>
                            {weak.name}
                        </p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weak