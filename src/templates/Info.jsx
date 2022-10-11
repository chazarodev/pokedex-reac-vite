import { useState, useEffect } from "react"
import Stats from "../components/Stats"
import Types from '../components/Types'
import Weak from '../components/Weak'

const Info = ({pokemon}) => {

    const [weakness, setWeakness] = useState([]);
    const {id, abilities, name, stats, types} = pokemon
       
    useEffect(() => {
      const getSecondUrl = async () => {
        try {
            //Fetch para obtener debilidades
            const url = types[0].type.url
            const response = await fetch(url)
            const result = await response.json()  
            const weaks = result.damage_relations.double_damage_from
            setWeakness(weaks);    
        } catch (error) {
            console.log(error);
        }     
      }
      getSecondUrl()
    }, [pokemon]);

    return (
        <>
            <section>
                <table className="w-full table-auto mx-auto shadow-lg border-none">
                    <thead className="bg-marco text-white">
                        <tr>
                            <th className="p-1 text-xl font-sans">
                                <h1>ID</h1>
                            </th>
                            <th className="p-1 text-xl font-sans">
                                <h1>Name</h1>
                            </th>
                            <th className="p-1 text-xl font-sans">
                                <h1>Abilities</h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="text-center">
                                <p className="text-base font-sans">{id}</p>
                            </td>
                            <td className="text-center">
                            <p className="text-base font-sans font-bold capitalize">{name}</p>
                            </td>
                            <td className="text-center">
                                {abilities.map(abilitie => (
                                    <p key={abilitie.ability.name} className="text-texto capitalize text-base">{abilitie.ability.name}</p>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mt-5">
                <table className="w-full mx-auto table-auto shadow-lg bg-white mt-5 laptop:mt-0">
                    <thead className="bg-marco text-left text-white">
                        <tr>
                            <th className="p-2 text-xl font-sans mx-5">
                                <h1>Stats</h1>
                            </th>
                            <th className="p-2 text-xl font-sans mx-5">
                                <h1>Level</h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {stats.map(stat => (
                            <Stats 
                                key={stat.stat.name}
                                stat={stat}
                            />
                        ))}
                    </tbody>            
                </table>
            </section>
            <section className="my-2">
                <h1 className="font-sans mb-2 capitalize text-2xl font-bold text-center">Type</h1>
                <div>
                    {types.map(type => (
                        <Types
                            key={type.type.name} 
                            type={type}
                        />
                    ))}
                </div>
            </section>
            <section className="my-2">
                <Weak 
                    weakness={weakness}
                />
            </section>
        </>
    )
}

export default Info
