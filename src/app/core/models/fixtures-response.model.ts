export interface FixtureResponse{
    response: [{
        teams:{
            home:{
                name:string,
                logo:string,
            },
            away:{
                name:string,
                logo:string
            }
        },
        goals:{
            home:number,
            away:number
        }
    }]
}