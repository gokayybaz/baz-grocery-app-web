import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const InputWithLabel = ({ labelText, inputId, inputType, inputPlaceHolder, value, setValue }) => {
    return (
        <div className="grid w-full items-center gap-3">
            <Label htmlFor={inputId}>{labelText}</Label>
            <Input value={value} onChange={(e) => { setValue(e.target.value) }} className={"border border-primary--border--color"} type={inputType} id={inputId} placeholder={inputPlaceHolder} />
        </div>
    )
}

export default InputWithLabel