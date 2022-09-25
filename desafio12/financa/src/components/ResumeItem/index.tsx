import * as C from './style'

type Props = {
    title: string
    value: number
    color?: string
}

export function ResumeItem({title , value , color}:Props) {
  return (

    <C.Conteiner>
        <C.Title>{title}</C.Title>
        <C.Info color={color}> R$ {value}</C.Info>
    </C.Conteiner>
  )

}

