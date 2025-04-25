export default function Gridpage() {
  return (
    <div className="grid grid-rows-2 justify-center gap-4 p-4">
      <div className="grid grid-cols-2 gap-4 p-4  w-204">
        <div className="h-8 text-black border border-red-500">1</div>
        <div className="h-8   text-black border border-blue-500">2</div>
        <div className="h-8 text-black border border-green-500">3</div>
        <div className="h-8 border border-yellow-500">4</div>
        <div className="h-8 border border-purple-500">5</div>
        <div className="h-8 border border-pink-500">6</div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="h-8 grid items-center justify-center text-black border border-red-500">
          1
        </div>
        <div className="h-8 grid items-center justify-center col-start-2 col-span-2  text-black border border-blue-500">
          2
        </div>
        <div className="h-8 grid items-center col-span-3 justify-center text-black border border-green-500">
          3
        </div>
        <div className="h-8 grid items-center justify-center text-black border border-yellow-500">
          4
        </div>
        <div className="h-8 grid items-center justify-center text-black border border-purple-500">
          5
        </div>
        <div className="h-8 grid items-center justify-center text-black border border-pink-500">
          6
        </div>
      </div>
    </div>
  );
}
