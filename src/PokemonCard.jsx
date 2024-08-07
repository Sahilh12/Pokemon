import React from "react";
import "./index.css";

const PokemonCard = ({data}) => { 

    const name = data.name
    const imgSrc = data.sprites.other.dream_world.front_default
    const typePikachu = data.types
    const realType = typePikachu.map((currType) => currType.type.name).join(', ')
    const ability = data.abilities.map((currAbility) =>  currAbility.ability.name).slice(0,1).join(', ') 
    
  return (
    <>
      <div className="text-center w-[380px] flex flex-col justify-center items-center bg-slate-300 pb-6 rounded-xl">
        <div className="flex flex-col gap-3 mb-1 items-center p-6">
          <img
            src={imgSrc}
            alt=""
            width={130}
          />
          <h1 className="font-semibold text-2xl uppercase">{name}</h1>
          <p className="bg-pink-100 rounded-3xl px-5 py-0.5"> {realType}</p>
        </div>
        <div className="flex items-center justify-around text-xs gap-4">
          <div className="flex flex-col justify-around items-center gap-5">
            <p>
              Height :<span>{data.height}</span> 
            </p>
            <p>
              Experience :<span>{data.base_experience}</span> 
            </p>
          </div>
          <div className="flex flex-col  justify-around items-center gap-5">
            <p>
              Weight :<span>{data.weight}</span> 
            </p>
            <p>
              Attack :<span>{data.stats[1].base_stat}</span> 
            </p>
          </div>
          <div className="flex flex-col justify-around items-center gap-5">
            <p>
              Speed :<span>{data.stats[5].base_stat}</span> 
            </p>
            <p>
            Abilities : <span>{ability}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
