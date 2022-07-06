import { Logo } from "../../components/Header/Logo";

export function Subscribe() {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Bem vindo ao <strong className="text-green-300">Ignite Lab</strong>, site desenvolvido em <strong className="text-blue-500"> React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Faça o cadastro para começar a aprender!
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
    </div>
  )
}
