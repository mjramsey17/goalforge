import React from 'react';

// Define the ButtonProps to extend the default HTML button attributes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button  style = {{backgroundColor: '#800000', // Button background color
            color: 'white', // Text color
            padding: '5px', // Padding inside the button
            border: 'none', // Remove default border
            borderRadius: '5px', // Rounded corners
            cursor: 'pointer', // Change cursor to pointer on hover
            fontSize: '14px', // Text size
            fontWeight: 'bold', // Make the text bold
            transition: 'background-color 0.3s', // Smooth background transition
            width: '30%',
        }}
      {...rest} // Spread the rest of the props
      className={className}
    >
      {children}
    </button>
  );
}
