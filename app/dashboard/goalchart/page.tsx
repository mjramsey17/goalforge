import GoalChart from "../goalchart/GoalChart";
import {fetchRCGoals} from '../../lib/data'
export default async function(){
    const RCGoals = await fetchRCGoals();

    return(
        <GoalChart goals = {RCGoals}></GoalChart>
    );
}