import { Envelope, Lock, LockKey } from 'phosphor-react'
import { useState } from 'react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import './styles/global.css'

export function App() {

  return (
    <div className=' w-screen h-screen  bg-gray-900 flex flex-col items-center justify-center  text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo className='md:animate-spin' />
          <Heading size='lg' className='mt-4'>
            Ignite Lab
          </Heading>
          <Text size='lg' className=' text-gray-400 mt-1'>Faça login e comece a usar!
          </Text>
          </header>

          <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10 '>
                <label className='flex flex-col gap-3 w-full' htmlFor="email">
                  <Text className='font-semibold'> Endereço de-email</Text>
                  <TextInput.Root>
                        <TextInput.Icon>
                          <Envelope/>
                        </TextInput.Icon>

                        <TextInput.Input type='email' id='email' placeholder='Digite seu email'/>
                  </TextInput.Root>
                </label>

                <label className='flex flex-col gap-3' htmlFor="password">
                  <Text className='font-semibold'>Digite sua senha</Text>
                  <TextInput.Root>
                        <TextInput.Icon>
                          <Lock/>
                        </TextInput.Icon>

                        <TextInput.Input type='password' id='password' placeholder='********'/>
                  </TextInput.Root>
                </label>

                <label htmlFor="remember" className='flex gap-2 items-center'>
                    <Checkbox id='remember'/>
                    <Text size='sm' className='text-gray-200'>Lembra de mim  por 30 dias</Text>
                </label>
                <Button type='submit' className='mt-4'>Entrar na plataforma</Button>
          </form>

          <footer className='flex flex-col items-center gap-4 mt-8'>
            <Text asChild size='sm'>
              <a className='text-gray-400 underline hover:text-gray-200' href="">Esqueceu sua senha</a>
            </Text>
            <Text asChild size='sm'>
              <a className='text-gray-400 underline hover:text-gray-200 ' href="">Não possui conta? Crie uma agora!</a>
            </Text>
            
          </footer>

    </div>
  )
}


