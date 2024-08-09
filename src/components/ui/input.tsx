import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rounded?: string; // Paso 1: Agregar la propiedad `rounded`
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, rounded = "md", ...props }, ref) => {
  const inputClasses = cn(
    `flex h-10 w-full border border-Border-TextFieldDefault bg-Surface-TextFieldDefault`,
    `px-3 py-2 text-sm text-Text-TextFieldDefault ring-offset-background`,
    `file:border-0 file:bg-transparent file:text-sm file:font-medium`,
    `placeholder:text-Text-TextFieldSecondary`,
    `focus-visible:outline-none focus-visible:border-Border-TextFieldFocus`,
    `disabled:opacity-50`,
    `rounded-${rounded}`, // Paso 2: Usar la propiedad `rounded` para ajustar la clase
    className
  );

  return (
    <input
      type={type}
      className={inputClasses}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }