import { Meta , StoryObj} from '@storybook/react'
import { Heading, headingProps } from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
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
} as Meta <headingProps>

export const Default: StoryObj<headingProps> = {}
export const Small: StoryObj<headingProps> = {
    args: {
        size: 'sm'
    }
}
export const Large: StoryObj<headingProps> = {
    args: {
        size: 'lg'
    }
    
}

export const CustomComponent: StoryObj<headingProps> = {
    args: {
        asChild: true,
        children:(
            <h1>Testando com h1</h1>
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