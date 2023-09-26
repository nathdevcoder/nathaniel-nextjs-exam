

export function filterProducts(options: optionsType, variants: variantsType, actives: activesType | null, ind: number , value: string ): [activesType, variantType] {
    let data = []  as activesType

    let reff: variantsType | null = null

    if(actives == null) {
        options.forEach((opt, i)=> { 
            const def = reff != null ? reff[0].options[opt.name] : opt.values[0] 
            reff = reff == null ? variants.filter(vars=> vars.options[opt.name] == def) : reff.filter(ref=> ref.options[opt.name])
            const avails = i == 0 ? opt.values : reff.filter(f=>f.isAvailable).map(r=> r.options[opt.name])
            data.push({...opt, active: def, availables: avails })
        })
    } else {
        actives.forEach((opt, i)=> { 
            const def = ind == i ? value : reff == null ? opt.active :  reff[0].options[opt.name]
            reff = reff == null ? variants.filter(vars=> vars.options[opt.name] == def) : reff.filter(ref=> ref.options[opt.name])
            const avails = i ==0 ? opt.values : reff.filter(f=>f.isAvailable).map(r=> r.options[opt.name])
            data.push({...opt, active: def, availables: avails})
        })
    } 
     
    return [data, reff? reff[0] : { name: '', isAvailable: 'false',options: {}, price: 0 }] 
    
}