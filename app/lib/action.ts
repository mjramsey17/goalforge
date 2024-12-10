'use server';
import {z} from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    EventId:z.coerce.number(),
    GameId: z.coerce.number(),
    Time: z.coerce.number(),
    Team: z.coerce.number(),
    Type: z.string(),
    PlayerId: z.coerce.number(),
  });
 
const CreateEvent = FormSchema.omit({ EventId: true});

export async function createEvent(formData: FormData) {
    console.log("bruh");
  const {GameId,Time, Type,Team,PlayerId}= CreateEvent.parse({
    //EventId: formData.get("eventId"),
    GameId: formData.get("gameID"), 
    Time:formData.get("time"), 
    Type: formData.get("eventType"), 
    Team: formData.get('team'), 
    PlayerId: formData.get("playerID")
  });
  console.log("here1")
  await sql`
  INSERT INTO Events (GameId, Time, Type, Team, PlayerId)
  VALUES (${GameId}, ${Time}, ${Type}, ${Team}, ${PlayerId})
  `;
    revalidatePath('/events');
    redirect('/events');
}











