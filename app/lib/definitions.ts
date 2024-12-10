export type Event = {
    EventId : number;
    GameId: number;
    Time: number;
    Type: string;
    Team: BinaryData;
    PlayerId: number; 
}