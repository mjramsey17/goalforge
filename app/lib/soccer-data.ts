const Seasons = [
    {
        SeasonId: 1,
        Year: 2024,
        Wins: 8,
        Losses: 3,
        Ties: 6
    },
    {
        SeasonId: 2,
        Year: 2023,
        Wins: 7,
        Losses: 10,
        Ties: 1
    }
]

const Players = [
    {
        PlayerId:-2,
        Name:"Coach",
        Position:"Coach"
    },
    {
        PlayerId:-1,
        Name:'Opponent',
        Position:'All'
    },
    {
        PlayerId: 1,
        Name: 'Michael Ramsey',
        Position: 'Forward'
    },
    {
        PlayerId: 2,
        Name: 'Will Fatzinger',
        Position: 'Defense'
    },
    {
        PlayerId: 3,
        Name: 'Slate Danforth',
        Position: 'Midfield'
    },
    {
        PlayerId: 4,
        Name: 'Harrison Kraus',
        Position: 'Forward'
    },
    {
        PlayerId: 5,
        Name: 'Luca Gustafson',
        Position: 'Goalkeeper'
    },
    {
        PlayerId: 6,
        Name: 'Kyle Butcher',
        Position: 'Forward'
    },
    {
        PlayerId: 7,
        Name: 'Alex Lopacinski',
        Position: 'Defender'
    },
    {
        PlayerId: 8,
        Name: 'Jake Berecz',
        Position: 'Forward'
    },
    {
        PlayerId: 9,
        Name: 'Ryan Pidgeon',
        Position: 'Midfield'
    },
    {
        PlayerId: 10,
        Name: 'Pacific Ibanzi',
        Position: 'Midfield'
    },
    {
        PlayerId: 11,
        Name: 'Quinn Kunath',
        Position: 'Defender'
    },
    {
        PlayerId: 12,
        Name: 'Carter Laatsch',
        Position: 'Midfield'
    },
    {
        PlayerId: 13,
        Name: 'Carlos Lomena',
        Position: 'Forward'
    },
    {
        PlayerId: 14,
        Name: 'Girom Affolter',
        Position: 'Forward'
    },
    {
        PlayerId: 15,
        Name: 'Brian Manon',
        Position: 'Defense'
    },
    {
        PlayerId: 16,
        Name: 'Till Schumacher',
        Position: 'Midfield'
    },
    {
        PlayerId: 17,
        Name: 'Hugo Berg',
        Position: 'Midfield'
    },
    {
        PlayerId: 18,
        Name: 'Michael Pickens',
        Position: 'Forward'
    },
    {
        PlayerId: 19,
        Name: 'Peyton Mancini',
        Position: 'Defender'
    },
    {
        PlayerId: 20,
        Name: 'Lucas Pace',
        Position: 'Defense'
    },
    {
        PlayerId: 21,
        Name: 'Ludvig Werner',
        Position: 'Defense'
    }
]

const Games = [
    {
        GameId: 1,
        SeasonId: 1,
        Date: '2024-08-30',
        Opponent: 'Catholic University',
        Location: 'Home',
        Result: 'W',
        NokeGoals: 3,
        OpponentGoals: 2


    },
    {
        GameId: 2,
        SeasonId: 1,
        Date: '2024-09-06',
        Opponent: 'Oglethorpe University',
        Location: 'Away',
        Result: 'T',
        NokeGoals: 0,
        OpponentGoals: 0
    },
    {
        GameId: 3,
        SeasonId: 1,
        Date: '2024-09-08',
        Opponent: 'Emory University',
        Location: 'Away',
        Result: 'W',
        NokeGoals: 1,
        OpponentGoals: 0
    },
    {
        GameId: 4,
        SeasonId: 1,
        Date: '2024-09-14',
        Opponent: 'Marietta College',
        Location: 'Home',
        Result: 'T',
        NokeGoals: 0,
        OpponentGoals: 0
    },
    {
        GameId: 5,
        SeasonId: 1,
        Date: '2024-09-20',
        Opponent: 'Centre College',
        Location: 'Home',
        Result: 'W',
        NokeGoals: 4,
        OpponentGoals: 1
    },
    {
        GameId: 6,
        SeasonId: 1,
        Date: '2024-09-25',
        Opponent: 'University of Lynchburg',
        Location: 'Away',
        Result: 'L',
        NokeGoals: 1,
        OpponentGoals: 2
    },
    {
        GameId: 7,
        SeasonId: 1,
        Date: '2024-09-28',
        Opponent: 'Randolph-Macon College',
        Location: 'Home',
        Result: 'W',
        NokeGoals: 3,
        OpponentGoals: 0
    },
    {
        GameId: 8,
        SeasonId: 1,
        Date: '2024-10-02',
        Opponent: 'Ferrum College',
        Location: 'Home',
        Result: 'W',
        NokeGoals: 2,
        OpponentGoals: 0
    },
    {
        GameId: 9,
        SeasonId: 1,
        Date: '2024-10-05',
        Opponent: 'Hampden-Sydney College',
        Location: 'Away',
        Result: 'L',
        NokeGoals: 0,
        OpponentGoals: 2
    },
    {
        GameId: 10,
        SeasonId: 1,
        Date: '2024-10-09',
        Opponent: 'Guilford College',
        Location: 'Away',
        Result: 'W',
        NokeGoals: 1,
        OpponentGoals: 0
    },
    {
        GameId: 11,
        SeasonId: 1,
        Date: '2024-10-12',
        Opponent: 'Virginia Wesleyan University',
        Location: 'Home',
        Result: 'W',
        NokeGoals: 3,
        OpponentGoals: 2
    },
    {
        GameId: 12,
        SeasonId: 1,
        Date: '2024-10-16',
        Opponent: 'Averett University',
        Location: 'Home',
        Result: 'T',
        NokeGoals: 0,
        OpponentGoals: 0
    },
    {
        GameId: 13,
        SeasonId: 1,
        Date: '2024-10-19',
        Opponent: 'Penn State Abington',
        Location: 'Away',
        Result: 'T',
        NokeGoals: 0,
        OpponentGoals: 0
    },
    {
        GameId: 14,
        SeasonId: 1,
        Date: '2024-10-23',
        Opponent: 'Washington and Lee University',
        Location: 'Away',
        Result: 'T',
        NokeGoals: 2,
        OpponentGoals: 2
    },
    {
        GameId: 15,
        SeasonId: 1,
        Date: '2024-10-26',
        Opponent: 'Shenandoah University',
        Location: 'Away',
        Result: 'T',
        NokeGoals: 2,
        OpponentGoals: 2
    },
    {
        GameId: 16,
        SeasonId: 1,
        Date: '2024-10-30',
        Opponent: 'Bridgewater College',
        Location: 'Home',
        Result: 'W',
        NokeGoals: 4,
        OpponentGoals: 0
    },
    {
        GameId: 17,
        SeasonId: 1,
        Date: '2024-11-02',
        Opponent: 'Hampden-Sydney College',
        Location: 'Away',
        Result: 'L',
        NokeGoals: 1,
        OpponentGoals: 2
    }
]

const Events = [
    // Game 1 VS Catholic
    {
        EventId: 1,
        GameID: 1,
        Time: 38,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1 
    },
    {
        EventId: 2,
        GameID: 1,
        Time: 38,
        Type: 'Assist',
        Team: 1,
        PlayerId: 2
    },
    {
        EventId: 3,
        GameID: 1,
        Time: 46,
        Type: 'Goal',
        Team: 1,
        PlayerId: 3
    },
    {
        EventId: 4,
        GameID: 1,
        Time: 56,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 5,
        GameID: 1,
        Time: 73,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1
    },
    {
        EventId: 6,
        GameID: 1,
        Time: 78,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 7,
        GameID: 1,
        Time: 78,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 8,
        GameID: 1,
        Time: 23,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 4
    },
    {
        EventId: 9,
        GameID: 1,
        Time: 54,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 10,
        GameID: 1,
        Time: 56,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 11,
        GameID: 1,
        Time: 56,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 5
    },
    {
        EventId: 12,
        GameID: 1,
        Time: 80,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 6
    },
    {
        EventId: 13,
        GameID: 1,
        Time: 83,
        Type: 'Red',
        Team: 1,
        PlayerId: 6
    },
    // Game 2 VS Oglethorpe
    {
        EventId: 14,
        GameID: 2,
        Time: 33,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 3
    },
    {
        EventId: 15,
        GameID: 2,
        Time: 34,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 16,
        GameID: 2,
        Time: 41,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 17,
        GameID: 2,
        Time: 56,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 18,
        GameID: 2,
        Time: 62,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 7
    },
    {
        EventId: 19,
        GameID: 2,
        Time: 72,
        Type: 'Red',
        Team: 1,
        PlayerId: 7
    },
    // Game 3 VS Emory
    {
        EventId: 20,
        GameID: 3,
        Time: 65,
        Type: 'Goal',
        Team: 1,
        PlayerId: 4
    },
    {
        EventId: 21,
        GameID: 3,
        Time: 65,
        Type: 'Assist',
        Team: 1,
        PlayerId: 8
    },
    {
        EventId: 22,
        GameID: 3,
        Time: 65,
        Type: 'Assist',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 23,
        GameID: 3,
        Time: 20,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 4
    },
    {
        EventId: 24,
        GameID: 3,
        Time: 42,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 10
    },
    {
        EventId: 25,
        GameID: 3,
        Time: 68,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 26,
        GameID: 3,
        Time: 73,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 4 VS Marietta
    {
        EventId: 27,
        GameID: 4,
        Time: 40,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 28,
        GameID: 4,
        Time: 82,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 29,
        GameID: 4,
        Time: 89,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 5 VS Centre
    {
        EventId: 30,
        GameID: 5,
        Time: 43,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 31,
        GameID: 5,
        Time: 43,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 32,
        GameID: 5,
        Time: 48,
        Type: 'Goal',
        Team: 1,
        PlayerId: 11
    },
    {
        EventId: 33,
        GameID: 5,
        Time: 48,
        Type: 'Assist',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 34,
        GameID: 5,
        Time: 53,
        Type: 'Goal',
        Team: 1,
        PlayerId: 12
    },
    {
        EventId: 35,
        GameID: 5,
        Time: 53,
        Type: 'Assist',
        Team: 1,
        PlayerId: 13
    },
    {
        EventId: 36,
        GameID: 5,
        Time: 69,
        Type: 'Goal',
        Team: 1,
        PlayerId: 14
    },
    {
        EventId: 37,
        GameID: 5,
        Time: 69,
        Type: 'Assist',
        Team: 1,
        PlayerId: 12
    },
    {
        EventId: 38,
        GameID: 5,
        Time: 89,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1
    },
    {
        EventId: 38,
        GameID: 5,
        Time: 89,
        Type: 'Assist',
        Team: 1,
        PlayerId: 10
    },
    {
        EventId: 39,
        GameID: 5,
        Time: 21,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 40,
        GameID: 5,
        Time: 89,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 6 VS Lynchburg
    {
        EventId: 41,
        GameID: 6,
        Time: 17,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 42,
        GameID: 6,
        Time: 17,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 43,
        GameID: 6,
        Time: 55,
        Type: 'Goal',
        Team: 1,
        PlayerId: 3
    },
    {
        EventId: 44,
        GameID: 6,
        Time: 66,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 45,
        GameID: 6,
        Time: 31,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 12
    },
    {
        EventId: 46,
        GameID: 6,
        Time: 31,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 47,
        GameID: 6,
        Time: 44,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 15
    },
    {
        EventId: 48,
        GameID: 6,
        Time: 77,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 49,
        GameID: 6,
        Time: 89,
        Type: 'Red',
        Team: 1,
        PlayerId: 14
    },
    // Game 7 VS Radolph Macon
    {
        EventId: 50,
        GameID: 7,
        Time: 10,
        Type: 'Goal',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 51,
        GameID: 7,
        Time: 10,
        Type: 'Assist',
        Team: 1,
        PlayerId: 8
    },
    {
        EventId: 52,
        GameID: 7,
        Time: 20,
        Type: 'Goal',
        Team: 1,
        PlayerId: 7
    },
    {
        EventId: 53,
        GameID: 7,
        Time: 20,
        Type: 'Assist',
        Team: 1,
        PlayerId: 11
    },
    {
        EventId: 54,
        GameID: 7,
        Time: 82,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1
    },
    // Game 8 VS Ferrum
    {
        EventId: 55,
        GameID: 8,
        Time: 14,
        Type: 'Goal',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 56,
        GameID: 8,
        Time: 78,
        Type: 'Goal',
        Team: 1,
        PlayerId: 8
    },
    {
        EventId: 57,
        GameID: 8,
        Time: 78,
        Type: 'Assist',
        Team: 1,
        PlayerId: 10
    },
    {
        EventId: 58,
        GameID: 8,
        Time: 78,
        Type: 'Assist',
        Team: 1,
        PlayerId: 5
    },
    {
        EventId: 59,
        GameID: 8,
        Time: 29,
        Type: 'Yellow',
        Team: 1,
        PlayerId: -2
    },
    {
        EventId: 60,
        GameID: 8,
        Time: 72,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 61,
        GameID: 8,
        Time: 88,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 9 VS Hampden Sydney
    {
        EventId: 62,
        GameID: 9,
        Time: 34,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 63,
        GameID: 9,
        Time: 34,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 64,
        GameID: 9,
        Time: 52,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 65,
        GameID: 9,
        Time: 52,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 66,
        GameID: 9,
        Time: 30,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 67,
        GameID: 9,
        Time: 52,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 16
    },
    {
        EventId: 68,
        GameID: 9,
        Time: 86,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 10 VS Guilford
    {
        EventId: 69,
        GameID: 10,
        Time: 71,
        Type: 'Goal',
        Team: 1,
        PlayerId: 10
    },
    {
        EventId: 70,
        GameID: 10,
        Time: 71,
        Type: 'Assist',
        Team: 1,
        PlayerId: 17
    },
    {
        EventId: 71,
        GameID: 10,
        Time: 42,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 72,
        GameID: 10,
        Time: 47,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 73,
        GameID: 10,
        Time: 67,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 74,
        GameID: 10,
        Time: 71,
        Type: 'Red',
        Team: 0,
        PlayerId: -1
    },
    // Game 11 VS Virginia Wesleyan
    {
        EventId: 75,
        GameID: 11,
        Time: 20,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1
    },
    {
        EventId: 76,
        GameID: 11,
        Time: 22,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1
    },
    {
        EventId: 77,
        GameID: 11,
        Time: 22,
        Type: 'Assist',
        Team: 1,
        PlayerId: 16
    },
    {
        EventId: 78,
        GameID: 11,
        Time: 26,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 79,
        GameID: 11,
        Time: 26,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 80,
        GameID: 11,
        Time: 55,
        Type: 'Goal',
        Team: 1,
        PlayerId: 14
    },
    {
        EventId: 81,
        GameID: 11,
        Time: 65,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 82,
        GameID: 11,
        Time: 65,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 83,
        GameID: 11,
        Time: 13,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 2
    },
    {
        EventId: 84,
        GameID: 11,
        Time: 23,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 85,
        GameID: 11,
        Time: 28,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 86,
        GameID: 11,
        Time: 70,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 16
    },
    {
        EventId: 87,
        GameID: 11,
        Time: 75,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 15
    },
    {
        EventId: 88,
        GameID: 11,
        Time: 82,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 12 VS Averett
    {
        EventId: 89,
        GameID: 12,
        Time: 22,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 90,
        GameID: 12,
        Time: 63,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 91,
        GameID: 12,
        Time: 70,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 13 VS Penn State Abington
    {
        EventId: 92,
        GameID: 13,
        Time: 77,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 93,
        GameID: 13,
        Time: 77,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 94,
        GameID: 13,
        Time: 87,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 14 VS Washington & Lee
    {
        EventId: 95,
        GameID: 14,
        Time: 29,
        Type: 'Goal',
        Team: 1,
        PlayerId: 6
    },
    {
        EventId: 96,
        GameID: 14,
        Time: 29,
        Type: 'Assist',
        Team: 1,
        PlayerId: 8
    },
    {
        EventId: 97,
        GameID: 14,
        Time: 62,
        Type: 'Goal',
        Team: 1,
        PlayerId: 11
    },
    {
        EventId: 98,
        GameID: 14,
        Time: 65,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 99,
        GameID: 14,
        Time: 65,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 100,
        GameID: 14,
        Time: 65,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 101,
        GameID: 14,
        Time: 88,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 102,
        GameID: 14,
        Time: 24,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 12
    },
    {
        EventId: 103,
        GameID: 14,
        Time: 28,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 104,
        GameID: 14,
        Time: 44,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 2
    },
    {
        EventId: 105,
        GameID: 14,
        Time: 56,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 106,
        GameID: 14,
        Time: 76,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 15 VS Shenandoah
    {
        EventId: 107,
        GameID: 15,
        Time: 11,
        Type: 'Goal',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 108,
        GameID: 15,
        Time: 16,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1
    },
    {
        EventId: 109,
        GameID: 15,
        Time: 16,
        Type: 'Assist',
        Team: 1,
        PlayerId: 3
    },
    {
        EventId: 110,
        GameID: 15,
        Time: 61,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 111,
        GameID: 15,
        Time: 61,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 112,
        GameID: 15,
        Time: 88,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 113,
        GameID: 15,
        Time: 22,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 114,
        GameID: 15,
        Time: 67,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 115,
        GameID: 15,
        Time: 89,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 18
    },
    // Game 16 VS Bridgewater
    {
        EventId: 116,
        GameID: 16,
        Time: 20,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1
    },
    {
        EventId: 117,
        GameID: 16,
        Time: 20,
        Type: 'Assist',
        Team: 1,
        PlayerId: 19
    },
    {
        EventId: 118,
        GameID: 16,
        Time: 21,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1
    },
    {
        EventId: 119,
        GameID: 16,
        Time: 73,
        Type: 'Goal',
        Team: 1,
        PlayerId: 20
    },
    {
        EventId: 120,
        GameID: 16,
        Time: 73,
        Type: 'Assist',
        Team: 1,
        PlayerId: 17
    },
    {
        EventId: 121,
        GameID: 16,
        Time: 85,
        Type: 'Goal',
        Team: 1,
        PlayerId: 21
    },
    {
        EventId: 122,
        GameID: 16,
        Time: 85,
        Type: 'Assist',
        Team: 1,
        PlayerId: 17
    },
    {
        EventId: 123,
        GameID: 16,
        Time: 46,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 20
    },
    {
        EventId: 124,
        GameID: 16,
        Time: 70,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 10
    },
    {
        EventId: 125,
        GameID: 16,
        Time: 84,
        Type: 'Red',
        Team: 1,
        PlayerId: 15
    },
    // Game 17 VS Hampden Sydney
    {
        EventId: 126,
        GameID: 17,
        Time: 4,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 127,
        GameID: 17,
        Time: 4,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 128,
        GameID: 17,
        Time: 56,
        Type: 'Goal',
        Team: 1,
        PlayerId: 14
    },
    {
        EventId: 129,
        GameID: 17,
        Time: 56,
        Type: 'Assist',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 130,
        GameID: 17,
        Time: 89,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 131,
        GameID: 17,
        Time: 89    ,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 132,
        GameID: 17,
        Time: 55,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 133,
        GameID: 17,
        Time: 67,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 134,
        GameID: 17,
        Time: 75,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    }
]


export {Seasons, Players, Games, Events}