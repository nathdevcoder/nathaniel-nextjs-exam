type variantType = {
    name: string
    isAvailable: string
    options: {[key:string]: string}
    price: number
}

type variantsType = variantType []

type optionType =  {
    name: string 
    values: string[]
}

type optionsType = optionType []


type activeType =  {
    active: string
    availables: string[]
    name: string
    values: string[] 
}

type activesType = activeType[]