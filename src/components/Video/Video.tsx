import { DefaultUi, Player, Youtube } from '@vime/react'
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react'
import '@vime/core/themes/default.css'

interface VideoProps {
  lessonSlug: string;
}

const Video = (props: VideoProps) => {
  return (
    <div className='flex-1'>
      <div className='bg-black flex justify-center'>
        <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
          <Player >
            <Youtube videoId='lyxeNsaVZlM' />
            <DefaultUi/>
          </Player>
        </div>
      </div>

      <div className='p-8 max-w-[1100px] mx-auto'>
        <div className='flex items-start gap-16'>
          <div className='flex-1'>
            <h1 className='text-2xl font-bold'>
              Aula 01 - test

            </h1>
            <p className='mt-4 text-gray-200 leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec elementum dui. Nulla imperdiet nisi eget tellus consectetur, vel pellentesque tortor scelerisque. Aenean sed mauris et ipsum tempor tempus et hendrerit neque. Aliquam non mauris pulvinar, cursus nibh ut, euismod diam. Mauris sit amet dolor ac tortor tempus ullamcorper. Ut vitae luctus elit. Sed feugiat interdum auctor. Aenean varius elit vel maximus lacinia. Fusce sit amet neque purus. Nunc viverra, libero ut interdum sodales, felis purus convallis magna, imperdiet venenatis mauris nunc tincidunt magna.
            </p>
            <div className=' flex items-center gap-4 mt-6'>
              <img
                src="https://github.com/nathangoncalvesleon.png"
                alt=""
                className='h-16 w-16 rounded-full border-2 border-blue-500'

              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block"> Nathan Gonçalves</strong>
                <span className="text-gray-200 text-sm block">Eng. de Software</span>

              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase  justify-center gap-2 hover:bg-green-700 transition-colors">
              <DiscordLogo size={24} />
              Comunidade do discord
            </a>
            <a href="" className="p-4 text-sm flex border-blue-500 text-blue-500 items-center rounded 
            font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
              <Lightning size={24} />
              Comunidade do discord
            </a>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <a href="" className="bg-gray-700 rounded 
            overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className='text-2xl'>Material Complementar</strong>
              <p className='text-gray-200 text-sm mt-2'>
                Acesse o material complementar
              </p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />

            </div>
          </a>

          <a href="" className="bg-gray-700 rounded 
            overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className='text-2xl'>Wallpapers exclusivo</strong>
              <p className='text-gray-200 text-sm mt-2'>
                Acesse o material complementar
              </p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />

            </div>
          </a>


        </div>

      </div>
    </div>
  )
}

export default Video