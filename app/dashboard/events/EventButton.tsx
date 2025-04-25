
import { Button } from '../../ui/button'; // Importing the Button component
import { createEvent } from '../../lib/action'; // Assuming this function sends the data

type Event = {
        EventId : number;
        GameId: number;
        Time: number;
        Type: string;
        Team: BinaryType;
        PlayerId: number; 
    }

const EventButton: React.FC<Event>=({GameId,Time,Type,Team,PlayerId})=>{
    
    async function handleSubmit() {
        const formData = new FormData();
        formData.append('gameID', String(GameId));
        formData.append('time', String(Time));
        formData.append('eventType', Type);
        formData.append('team', Team);
        formData.append('playerID',String(PlayerId));
        // Example: Call the createEvent function to send form data to your backend
        try {
          await createEvent(formData);  // This function could make a POST request to your API
        } catch (error) {
          console.error('Error while creating event:', error);
        }
      }
    return(
        <Button onClick = {handleSubmit}>Submit</Button>
    );

}