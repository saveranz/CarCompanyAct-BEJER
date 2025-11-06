//creating and nesting components
// 

import React from 'react';

/*function MyButton()
{
    return(


        <button>I'am a button</button>
    );
}


const user={
    name: 'Juan Dela Cruz',
    age:19,
}

/*export default function PrimaryButton()
{
    return(
    <div>

        <h1 className="avatar">Welcome to my App{user.name}</h1>
        <MyButton/>
        
    </div>
    );
}*/


const VARIANT_CLASSES = {
    primary: "bg-gradient-to-r from-red-600 to-red-400 text-white",
    secondary: "bg-gray-200 text-gray-800",
    outline: "bg-transparent border border-red-600 text-red-600",
};

const PrimaryButton = ({
    label,
    onClick,
    type = "button",
    variant = "primary",
    // alias for `variant` to match the image's `button style` prop name
    style,
    className = "",
}) => {
    const chosen = style || variant;
    const variantClass = VARIANT_CLASSES[chosen] || VARIANT_CLASSES.primary;

        return (
            <button
                type={type}
                onClick={onClick}
                className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${variantClass} ${className}`}
            >
                {label}
            </button>
        );
};

export default PrimaryButton;