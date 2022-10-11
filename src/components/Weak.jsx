import './styles/types.css'

const Weak = ({weakness}) => {
    
    return (
        <>
            <div className="mb-1">
                <div className='text-center m-1'>
                    <h1 className="text-2xl font-sans capitalize font-bold">Weakness</h1>
                    <div className='text-center m-1 grid grid-cols-2 gap-1'>{weakness.map(weak => (
                        <p
                        key={weak.name} 
                        className={`${weak.name} text-base font-sans capitalize font-bold my-1`}>
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