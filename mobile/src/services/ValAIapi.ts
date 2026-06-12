import api from './api';

export async function askAI(
message:string
){

const response =
await api.post(
'/ai/chat',
{
message
}
);

return response.data;

}