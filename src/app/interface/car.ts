export interface Car {
    entities:entities[]
    metadata:MetaData
}
export interface entities
{
    id:number,
    codeVehicle:string,
    name:string,
    lowPrice:number,
    airExtra: number,
    timesRented: number,
    rents:Rents[]
}
export interface Rents
{
    Id:number,
    CodeVehicle:string,
    DateJoin:Date,
    DateQuir:Date,
    SeasonName:string,
    DaysRented:number,

}
export interface MetaData
{
    [key: string]: string
}
export interface createcar
{
    Name: string,
    CodeVehicle: string,
    LowPrice: number,
    AirExtra: number,
    TimesRented:number
}

