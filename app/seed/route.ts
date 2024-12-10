import { db } from '@vercel/postgres'
import { Players, Events, Games, Seasons } from '../lib/soccer-data'

const player = await db.connect();

async function seedPlayers() {
    await player.sql`
        CREATE TABLE IF NOT EXISTS Players (
            PlayerId INT PRIMARY KEY,
            Name TEXT,
            Position TEXT
        );
    `;

    const insertedPlayers = await Promise.all(
        Players.map(async (individual) => {
            return player.sql`
                INSERT INTO Players (PlayerId,Name,Position)
                VALUES (${individual.PlayerId}, ${individual.Name},  ${individual.Position})
                ON CONFLICT (PlayerId) DO NOTHING;  -- Conflict on Player ID
            `;
        }),
    );
    return insertedPlayers;
}
async function seedSeasons() {
    await player.sql`
        CREATE TABLE IF NOT EXISTS Seasons (
            SeasonId INT PRIMARY KEY,
            Year INT,
            Wins INT,
            Losses INT,
            Ties INT
        );
    `;

    const insertedSeasons = await Promise.all(
        Seasons.map((season) => player.sql`
            INSERT INTO Seasons(SeasonId,Year,Wins,Losses,Ties)
            VALUES (${season.SeasonId}, ${season.Year}, ${season.Wins}, ${season.Losses}, ${season.Ties})
            ON CONFLICT (SeasonId) DO NOTHING;  -- Conflict on GameId
        `)
    );
    return insertedSeasons;
}
async function seedGames() {
    await player.sql`
        CREATE TABLE IF NOT EXISTS Games (
            GameId INT PRIMARY KEY,
            SeasonId INT,
            Date TEXT,
            Opponent TEXT,
            Location TEXT,
            Result CHAR,
            NokeGoals INT,
            OpponentGoals INT
        );
    `;

    const insertedGames = await Promise.all(
        Games.map((game) => player.sql`
            INSERT INTO Games (GameId,SeasonId,Date,Opponent,Location,Result,NokeGoals,OpponentGoals)
            VALUES (${game.GameId}, ${game.SeasonId}, ${game.Date}, ${game.Opponent}, ${game.Location},  ${game.Result}, ${game.NokeGoals},  ${game.OpponentGoals})
            ON CONFLICT (GameId) DO NOTHING;  -- Conflict on GameId
        `)
    );
    return insertedGames;
}
async function seedEvents() {
    await player.sql`
        CREATE TABLE IF NOT EXISTS Events (
            EventID SERIAL PRIMARY KEY,
            GameID INT NOT NULL,
            Time INT NOT NULL,
            Type TEXT,
            Team INT,
            PlayerId INT,
            FOREIGN KEY (PlayerId) REFERENCES Players(PlayerId) ON DELETE CASCADE
            );
    `;

    const insertedEvents = await Promise.all(
        Events.map((event) => player.sql`
            INSERT INTO Events (EventId,GameID,Time,Type,Team,PlayerId)
                VALUES (${event.EventId}, ${event.GameID}, ${event.Time}, ${event.Type}, ${event.Team},${event.PlayerId})
                ON CONFLICT (EventID) DO NOTHING;
        `)
    );
    return insertedEvents;
}





export async function GET() {
    try {
        await player.sql`BEGIN`;
        await seedPlayers(); 
        await seedSeasons();
        await seedGames();
        await seedEvents(); 
        
        
          // Seed positions first
           // Seed records last
        await player.sql`COMMIT`;

        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
        console.error(error);  // Log the error details
        await player.sql`ROLLBACK`;
        return Response.json({ error: error.message }, { status: 500 });
    }
}


