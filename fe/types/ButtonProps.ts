import { ReactElement } from "react"

export interface ButtonProps {
    variant : "primary" | "secondary"
    startIcon ?: ReactElement
    placeholder: string
}