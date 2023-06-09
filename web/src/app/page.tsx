import { User } from 'lucide-react'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-700 opacity-50 blur-full"></div>
        <div className="absolute bottom-0 right-1 top-0 w-2 bg-stripes"></div>
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Create an account</span> and save your
            memories!
          </p>
        </a>
        <div className="absolute left-40 top-40">
          <h1 className=" text-6xl font-bold text-gray-300">Spacetime</h1>
          <h1 className=" text-3xl font-bold text-gray-300">
            Your time machine
          </h1>
          <p className="font-semibold text-gray-300">
            Colect your moments of your journey and share it!
          </p>
        </div>
        <a
          className="text-small inline-block rounded-full bg-cyan-300 px-5 py-3 text-center font-alt leading-none text-black duration-200 hover:bg-emerald-500"
          href=""
        >
          REGISTER A MEMORIE
        </a>
      </div>
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            You have not registered any memories yet, start{' '}
            <a href="" className="underline hover:text-gray-50">
              creating now
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
