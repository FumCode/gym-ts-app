import React from 'react'

type ButtonProps = {
    backgroundColor: string;
    fontSize: number;
    pillShape: boolean;
}
function Button({
        backgroundColor,
        fontSize,
        pillShape
    }: ButtonProps )
{

    return (
        <button
            className='backgroundColor'
        >Button</button>
    )
}

export default Button
