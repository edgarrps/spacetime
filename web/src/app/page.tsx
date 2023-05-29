export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="flex flex-col p-16">
        <p>Local do spacetime</p>
      </div>
      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, começe a{' '}
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
