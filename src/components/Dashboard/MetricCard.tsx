import type { Component } from "solid-js";

type Props = {
  name: string;
  value: string | number;
};

const MetricCard: Component<Props> = ({ value, name }) => {
  return (
    <div class="py-7 hover:scale-105 transition-all ease-in-out h-full px-5 grid place-items-center w-full bg-neutral-950 rounded-xl">
      <h2 class="text-gray-1 font-extrabold text-4xl">{value}</h2>
      <div class="w-[90%] my-2 block mx-auto h-1 bg-gradient-to-r from-blue-6 via-30% via-purple-6 to-pink-5 rounded-2xl"></div>
      <h3 class="text-gray-3 font-semibold tracking-wide text-xl">{name}</h3>
    </div>
  );
};

export default MetricCard;
