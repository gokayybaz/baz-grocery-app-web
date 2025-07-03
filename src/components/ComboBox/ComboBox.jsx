"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const data = [
    {
        value: "aras",
        label: "Aras Kargo",
    },
    {
        value: "dhl",
        label: "DHL Kargo",
    },
    {
        value: "hepsijet",
        label: "HepsiJET",
    },
    {
        value: "kolaygelsin",
        label: "Kolay Gelsin",
    },
]

export function ComboBox() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {value
                        ? data.find((data) => data.value === value)?.label
                        : "Kargo Firması Seçiniz..."}
                    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0">
                <Command>
                    <CommandInput placeholder="Kargo Firması Arayın..." />
                    <CommandList>
                        <CommandEmpty>Kargo Firması Bulunamadı...</CommandEmpty>
                        <CommandGroup>
                            {data.map((data) => (
                                <CommandItem
                                    key={data.value}
                                    value={data.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <CheckIcon
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === data.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {data.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}