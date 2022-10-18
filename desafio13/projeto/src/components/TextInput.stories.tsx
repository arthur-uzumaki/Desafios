import { Meta , StoryObj} from '@storybook/react'
import {TextInput, textInputProps , textInputRoot} from './TextInput'
import { Envelope} from 'phosphor-react'
export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args:{
       children:[
        
        <TextInput.Icon>
            <Envelope/>
        </TextInput.Icon>,
        <TextInput.Input placeholder='Type your e-email address' />
        
       ],
    },
    argTypes: {
        children:{
            table:{
                disable: true,
            }
        },
    }
} as Meta <textInputRoot>

export const Default: StoryObj<textInputProps> = {}
export const WithouIcon: StoryObj<textInputProps> = {
    args: {
        children: <TextInput.Input placeholder='Type your e-email address' />
    }
}
