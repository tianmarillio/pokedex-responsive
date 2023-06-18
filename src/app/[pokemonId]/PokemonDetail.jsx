"use client";

import { useState } from "react";
import About from "./About";
import BaseStats from "./BaseStats";
import Moves from "./Moves";
import Evolution from "./Evolution";
import DetailBackground from "@/assets/detail-background.svg";
import formatWeight from "@/helpers/formatWeight";
import formatHeight from "@/helpers/formatHeight";

const DETAIL_ABOUT = "About";
const DETAIL_BASE_STATS = "Base Stats";
const DETAIL_EVOLUTON = "Evolution";
const DETAIL_MOVES = "Moves";

export default function PokemonDetail({ pokemonDetail = null }) {
  const [menu, setMenu] = useState(DETAIL_ABOUT);

  if (!pokemonDetail) return <div>Loading...</div>;

  return (
    <main className="container mx-auto grid h-screen max-w-md grid-rows-2 bg-[#009473]">
      <div
        className="relative row-span-1 grid grid-cols-6 bg-emerald-400 bg-cover px-6 pt-6"
        style={{ backgroundImage: `url(${DetailBackground.src})` }}>
        <div className="col-span-5">
          <div className="mb-4 text-3xl font-bold capitalize text-white">
            {pokemonDetail.name}
          </div>
          <div className="grid max-w-md grid-cols-12 gap-2">
            {pokemonDetail.types.map((item, i) => {
              return (
                <div
                  key={i}
                  className="col-span-4 rounded-full bg-emerald-500 px-2 py-1 text-center font-bold capitalize text-white">
                  {item.type.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-1 ml-2 flex flex-col pt-6">
          <div className="text-xl font-bold text-white">
            &#35;{String(pokemonDetail.id).padStart(3, "0")}
          </div>
        </div>
        <div className="absolute -bottom-6 left-1/2 w-full -translate-x-1/2">
          <img
            src={pokemonDetail.imageUrl}
            alt="pokemon"
            className="h-64 w-full object-contain"
          />
        </div>
      </div>
      <div className="row-span-1 grid grid-rows-6 rounded-t-3xl bg-white px-6 pt-12">
        <nav className="row-span-1 flex h-12 max-w-md justify-between border-b-2">
          <PokemonDetailNavItem
            menuName={DETAIL_ABOUT}
            setMenu={setMenu}
            selectedMenu={menu}></PokemonDetailNavItem>
          <PokemonDetailNavItem
            menuName={DETAIL_BASE_STATS}
            setMenu={setMenu}
            selectedMenu={menu}></PokemonDetailNavItem>
          <PokemonDetailNavItem
            menuName={DETAIL_EVOLUTON}
            setMenu={setMenu}
            selectedMenu={menu}></PokemonDetailNavItem>
          <PokemonDetailNavItem
            menuName={DETAIL_MOVES}
            setMenu={setMenu}
            selectedMenu={menu}></PokemonDetailNavItem>
        </nav>

        <div className="row-span-5 pt-8">
          {menu === DETAIL_ABOUT && (
            <About
              species={pokemonDetail.species.name}
              height={formatHeight(pokemonDetail.height)}
              weight={formatWeight(pokemonDetail.weight)}
              abilities={pokemonDetail.abilities
                .map((item) => {
                  return item.ability.name;
                })
                .join(", ")}></About>
          )}

          {menu === DETAIL_BASE_STATS && (
            <BaseStats
              stats={pokemonDetail.stats.map((item) => {
                return {
                  attribute: item.stat.name,
                  value: item.base_stat,
                };
              })}></BaseStats>
          )}

          {/* FIXME: fix GET evolution chain */}
          {/* {menu === DETAIL_EVOLUTON && (
            <Evolution evolutions={pokemonDetail.evolutions}></Evolution>
          )} */}

          {menu === DETAIL_MOVES && <Moves moves={pokemonDetail.moves}></Moves>}
        </div>
      </div>
    </main>
  );
}

function PokemonDetailNavItem({ menuName, setMenu, selectedMenu = null }) {
  const isActive = menuName === selectedMenu;

  return (
    <div
      type="button"
      className={`${
        isActive
          ? "border-b-2 border-b-blue-500 text-gray-800"
          : "text-gray-400"
      } h-full`} // FIXME: border must overlap
      onClick={() => setMenu(menuName)}>
      {menuName}
    </div>
  );
}
