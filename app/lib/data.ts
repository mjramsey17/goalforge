'use server';

import {sql} from '@vercel/postgres';
import {Event} from './definitions';

export async function fetchRCGoals(){
    const results_rc = [];

        // Define the intervals
    const intervals = [
        { label: '0-10 Minutes', min: 0, max: 10 },
        { label: '10-20 Minutes', min: 10, max: 20 },
        { label: '20-30 Minutes', min: 20, max: 30 },
        { label: '30-40 Minutes', min: 30, max: 40 },
        { label: '40-45 Minutes', min: 40, max: 45 },
        { label: '45-50 Minutes', min: 45, max: 50 },
        { label: '50-60 Minutes', min: 50, max: 60 },
        { label: '60-70 Minutes', min: 60, max: 70 },
        { label: '70-80 Minutes', min: 70, max: 80 },
        { label: '80-90 Minutes', min: 80, max: 90 }
    ];
    for (const interval of intervals){
        const data = await sql`
            SELECT COUNT(*) FROM Events 
            WHERE time >= ${interval.min} AND time < ${interval.max}
            AND type LIKE 'Goal' AND playerid != -1
        `;
        const sequence = data.rows[0];
        const num = parseInt(sequence.count,10);
        //console.log(num);
        results_rc.push(num);
    }


    return results_rc;
}