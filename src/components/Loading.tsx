import { Circle } from "phosphor-react";

export function Loading() {
  return (
    <div className="flex flex-1 justify-center items-center gap-4">
      <span className="text-md text-gray-200">Carregando...</span>
      <Circle
        className="animate-ping"
        size={24}
      />
    </div>
  )
}