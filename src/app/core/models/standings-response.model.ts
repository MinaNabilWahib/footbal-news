import { Standings } from "./standings.model"

export interface StandingsResponse{
    response:[{
        league:{
            standings:[Standings[]]
        }
    }]
}