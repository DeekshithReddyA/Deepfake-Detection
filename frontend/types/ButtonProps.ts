import { ReactElement } from "react"

export interface ButtonProps {
    variant : "primary" | "secondary"
    startIcon ?: ReactElement
    placeholder: string
    onClick ?: (e: any) => void;
}