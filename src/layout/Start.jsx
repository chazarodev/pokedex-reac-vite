import { useState } from 'react'
import Search from '../components/Search'
import Info from '../templates/Info';

const Start = () => {

    const [pokemon, setPokemon] = useState({});
    const [error, setError] = useState(false);

    const handleSubmit = async ({pokemonsNumber}) => {
        try {
            if (pokemonsNumber > 0) {
                const url = `https://pokeapi.co/api/v2/pokemon/${pokemonsNumber}`
                const response = await fetch(url)
                if (response.status === 404) {
                    setError(!error)
                    setTimeout(() => {
                        setError(false)
                    }, 3000);
                    return
                }
                const result = await response.json()
                setPokemon(result)   
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    
    const {id} = pokemon

    return (
        <>
            <div className='m-5 laptop:p-5 grid laptop:grid-cols-2 gap-10 container mx-auto'>
                <div>
                    {id > 0 ? (
                        <img 
                            className='bg-white mx-auto lapto:m-5 rounded shadow-lg shadow-sombra laptop:w-[475px] movilsm:w-[250px]'
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} 
                            alt="imagen pokemon" 
                        />
                    ) : (
                        <img 
                            className='bg-white lapto:m-5 rounded shadow-lg shadow-sombra laptop:w-[475px] movilsm:w-[250px] mx-auto'
                            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
                            alt="imagen pokemon" 
                        />
                    )}
                    <Search 
                        handleSubmit={handleSubmit}
                    />
                </div>
                {error && (
                    <div>
                        <p 
                            className='text-error bg-white p-2 rounded text-2xl mt-2 w-full text-center laptop:text-left laptop:w-1/2 font-sans font-bold shadow-md transition-all'>
                            Pokemon not found
                        </p>
                    </div>
                )}
                <div>
                    {Object.keys(pokemon).length > 0 && (
                        <Info 
                            pokemon={pokemon}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default Start
