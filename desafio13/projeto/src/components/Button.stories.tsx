import { Meta , StoryObj} from '@storybook/react'
import {Button, buttonProps} from  './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args:{
        children: 'Create account',
    },
    argTypes: {
       
    }
} as Meta <buttonProps>

export const Default: StoryObj<buttonProps> = {}
