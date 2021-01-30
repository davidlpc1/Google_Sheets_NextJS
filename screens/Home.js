import React from 'react';

export default function Home({ games }){
    return(
        <main>
            <h1>🎮 Top Jogos Da Vida - Davidlpc1 🎮</h1>

            <ol>
                {games.map((game,index) => {
                    const position = index + 1;
                    const medals = ["🥇","🥈","🥉"]

                    return (
                        <li key={game.name}>
                            <span>
                                <span className="indice">
                                    {position}
                                </span>

                                <span className="name">
                                    {medals[index]}
                                    {'   '}
                                    {game.name}
                                </span>
                            </span>
                            
                            <img src={game.image} alt={`Capa de ${game.name}`}/>
                        </li>
                    )
                })}
            </ol>
        </main>
    )
}