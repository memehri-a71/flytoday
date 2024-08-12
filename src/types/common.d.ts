
 export interface OperatingAirline{
    flightNumber:number|string
    baggage:string
    equipmentName:string
    equipment:string
 }

export interface OriginDestinationOptions{
    isCharter:boolean
    cabinClassNameFa: string
    seatsRemaining: string |number
    flightNumber:string
    baggageFa: string
    planeType:string
    cabinClassCode: string
    isReturn: boolean
}

export interface FeatureType extends OriginDestinationOptions {           
  isSystem: boolean
}

export interface TimeInfoType {
    journeyDurationPerMinute: string
    arrivalDateTime: string,
    departureDateTime: string,
}

export  interface AirportsInfoType {
    arrivalAirportLocationCode: string
    departureAirportLocationCode: string
}