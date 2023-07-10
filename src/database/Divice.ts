export interface Divice{
    name?: string;
    id?: string
    addressIP?:string
    type?:string,
    username?:string,
    password?:string,
    useSrever?:string,
    statusActive?:boolean
    statusConnect?:boolean
}

export interface ResBodyDevice extends Divice{
    
}