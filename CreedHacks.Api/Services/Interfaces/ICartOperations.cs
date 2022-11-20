﻿using CreedHacks.Api.Controllers;
using CreedHacks.Api.Data;
using CreedHacks.Api.Models;

namespace CreedHacks.Api.Services.Interfaces
{
    public interface ICartOperations
    {
        public void AddItemToMemoryDb();
        Task AddToCart(CartItemDto product);
        Task RemoveProductFromCart(CartProductRemove product);
        Task<List<CartProduct>>  GetCart(int userId);
    }
}
