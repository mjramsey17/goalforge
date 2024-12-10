/*
'use client'
import { useState, useEffect } from 'react';
import { sql } from '@vercel/postgres';
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto"; // Ensure that chart.js is correctly imported
import dotenv from 'dotenv';

export default function GoalChart() {
  // State for storing the chart data
  require('dotenv').config();
  const [chartData, setChartData] = useState(null);
    console.log(process.env.POSTGRESS_URL);
  // Function to fetch data and set the chart data
  const fetchData = async () => {
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

    // Store results
    const results_rc = [];
    const results_opps = [];

    // Fetch data for each interval
    for (const interval of intervals) {
      const rc_goals= await sql`
        SELECT COUNT(*) FROM Events 
        WHERE time >= ${interval.min} AND time < ${interval.max} 
        AND type LIKE 'Goal' AND playerid != -1
      `;
      const opps_goals = await sql`
        SELECT COUNT(*) FROM Events 
        WHERE time >= ${interval.min} AND time < ${interval.max} 
        AND type LIKE 'Goal' AND playerid = -1
      `;

      // Store the results in arrays
      results_rc.push(rc_goals.rows[0].count); // Push count of Roanoke goals
      results_opps.push(opps_goals.rows[0].count); // Push count of Opponent goals
    }

    // Prepare the chart data object
    const newChartData = {
      labels: intervals.map((interval) => interval.label),
      datasets: [
        {
          label: "Roanoke Goals",
          data: results_rc,
          backgroundColor: 'red',
          borderWidth: 1,
        },
        {
          label: "Opponent Goals",
          data: results_opps,
          backgroundColor: 'blue',
          borderWidth: 1,
        }
      ]
    };

    // Set the chart data in state
    setChartData(newChartData);
  };

  // useEffect to call fetchData when the component is mounted
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <div style={{ width: '700px', height: '700px' }}>
      <h1>Bar Chart</h1>
      {chartData ? (
        <Bar data={chartData} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
}
*/

'use client'
import { useState, useEffect } from 'react';
import { sql } from '@vercel/postgres';
import { Bar } from "react-chartjs-2";
//import Chart from "chart.js/auto"; // Ensure that chart.js is correctly imported
//import dotenv from 'dotenv';

export default function GoalChart() {
  // State for storing the chart data
  //require('dotenv').config();
  const [chartData, setChartData] = useState(null);
    //console.log(process.env.POSTGRES_URL);
  // Function to fetch data and set the chart data
  const fetchData = async () => {
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

    // Store results
    const results_rc = [];

    // Fetch data for each interval
    for (const interval of intervals) {
      const rc_goals= await sql`
        SELECT COUNT(*) FROM Events 
        WHERE time >= ${interval.min} AND time < ${interval.max} 
        AND type LIKE 'Goal' AND playerid != -1
      `;
        console.log(rc_goals)

      // Store the results in arrays
      results_rc.push(rc_goals.rows[0].count); // Push count of Roanoke goals
// Push count of Opponent goals
    }

    // Prepare the chart data object
    const newChartData = {
      labels: intervals.map((interval) => interval.label),
      datasets: [
        {
          label: "Roanoke Goals",
          data: results_rc,
          backgroundColor: 'red',
          borderWidth: 1,
        }
      ]
    };

    // Set the chart data in state
    setChartData(newChartData);
  };

  // useEffect to call fetchData when the component is mounted
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <div style={{ width: '700px', height: '700px' }}>
      <h1>Bar Chart</h1>
      {chartData ? (
        <Bar data={chartData} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
}
