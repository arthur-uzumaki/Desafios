import { Meta , StoryObj} from '@storybook/react'
import {Text , textProps} from  './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args:{
    children: 'Arthur',
    size: 'md',
    },
    argTypes: {
        size:{
            options:['sm ' , 'md' , 'lg'],
            control:{
                type: 'inline-radio'
            }
        }
    }
} as Meta <textProps>

export const Default: StoryObj<textProps> = {}
export const Small: StoryObj<textProps> = {
    args: {
        size: 'sm'
    }
}
export const Large: StoryObj<textProps> = {
    args: {
        size: 'lg'
    }
    
}

export const CustomComponent: StoryObj<textProps> = {
    args: {
        asChild: true,
        children:(
            <p>Hello World</p>
        )
    },
    argTypes:{
        children:{
            table:{
                disable: true,
            }
        },
        asChild:{
            table:{
                disable: true,
            }
        },
    }

}