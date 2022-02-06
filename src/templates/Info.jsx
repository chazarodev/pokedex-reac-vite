import Stats from "../components/Stats"
import Types from '../components/Types'

const Info = ({pokemon}) => {

    const {id, abilities, name, stats, types} = pokemon

    return (
        <>
            <section>
                <table className="w-full table-auto mt-1 mx-auto shadow-lg border-none">
                    <thead className="bg-marco text-white">
                        <tr>
                            <th className="p-2 text-2xl font-sans">
                                <h1>ID</h1>
                            </th>
                            <th className="p-2 text-2xl font-sans">
                                <h1>Name</h1>
                            </th>
                            <th className="p-2 text-2xl font-sans">
                                <h1>Abilities</h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="text-center">
                                <p className="text-xl font-sans">{id}</p>
                            </td>
                            <td className="text-center">
                            <p className="text-xl font-sans font-bold capitalize">{name}</p>
                            </td>
                            <td className="text-center">
                                {abilities.map(abilitie => (
                                    <p key={abilitie.ability.name} className="text-texto capitalize text-xl">{abilitie.ability.name}</p>
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
                            <th className="p-2 text-2xl font-sans mx-5">
                                <h1>Stats</h1>
                            </th>
                            <th className="p-2 text-2xl font-sans mx-5">
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
            <section className="mt-5">
                <h1 className="font-sans capitalize text-2xl font-bold text-center">Type</h1>
                <div>
                    {types.map(type => (
                        <Types
                            key={type.type.name} 
                            type={type}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Info
