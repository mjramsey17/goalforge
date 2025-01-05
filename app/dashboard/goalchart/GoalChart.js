'use client';

import { sql } from '@vercel/postgres';
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto"; // Ensure that chart.js is correctly imported
import { Button } from '../../ui/button'; // Importing th
import {fetchRCGoals} from '../../lib/data'
import { useState } from 'react'


export default function GoalChart(props){
  

    //const RCGoals = await fetchRCGoals();
  //console.log(RCGoals);
    
    //setChartData(RCGoals);
  
 
 
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
  
  const ChartData = {
      labels: intervals.map((interval) => interval.label),
      datasets: [
        {
          label: "Roanoke Goals",
          data: props.goals,
          backgroundColor: 'maroon',
          borderWidth: 1,
          borderRadius: 10
        }
      ]
    }
  return (
    <div style={{ width: '700px', height: '700px' }}>
      {ChartData ? (
        <Bar data={ChartData} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
}

