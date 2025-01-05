import GoalChart from "C:/Users/micha/goalforge/app/dashboard/goalchart/GoalChart.js";
import {fetchRCGoals} from '../../lib/data'
export default async function(){
    const RCGoals = await fetchRCGoals();

    return(
        <GoalChart goals = {RCGoals}></GoalChart>
    );
}