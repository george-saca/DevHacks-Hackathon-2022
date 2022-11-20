using Microsoft.AspNetCore.SignalR;

namespace CreedHacks.Api.Hubs
{
    public class CartHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
