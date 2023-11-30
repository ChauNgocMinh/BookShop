using AutoMapper;
using BackEndWebShop.Data;
using BackEndWebShop.Model;
using Microsoft.EntityFrameworkCore;
using System.Text;
using System;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;

namespace BackEndWebShop.Repository
{

    public class CartRepository : ICartRepository
    {
        private readonly BookShopContext _context;
        private readonly IMapper _mapper;
        private Random _random = new Random();
        public CartRepository(BookShopContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public string RandomId()
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            StringBuilder idBuilder = new StringBuilder();
            for (int i = 0; i < 10; i++)
            {
                idBuilder.Append(chars[_random.Next(chars.Length)]);
            }
            return idBuilder.ToString();
        }
        public async Task<List<CartItemModel>> ShowCartAsync()
        {
            var ListItem = _context.CartItem!.Where(b => b.Status == true);
            return _mapper.Map<List<CartItemModel>>(ListItem);
          
        }

        public async Task AddItemAsync(CartItemModel model)
        {
            var item = await _context.CartItem.SingleOrDefaultAsync(x => x.Id == model.Id);
            
            if(item == null)
            {
                var NewItem = _mapper.Map<CartItem>(model);
                await _context.CartItem!.AddAsync(NewItem);
                await _context.SaveChangesAsync();
            }
            else
            {
                item.Number += model.Number;
                _context.SaveChanges();
            }
        }

        public async Task<BillModel> BuyAsync(string IdCart, BillModel model)
        {
            var Item = _context.CartItem!.SingleOrDefault(x => x.Id == IdCart);
            Item.Status = false;
            var History = _mapper.Map<Bill>(model);
            await _context.AddAsync(History);
            await _context.SaveChangesAsync();
            return model;
        }

        public async Task RemoveItenAsync(string IdItem)
        {
            var DeleteItem = _context.CartItem!.SingleOrDefault(x => x.Id == IdItem);
            if (DeleteItem != null)
            {
                _context.CartItem!.Remove(DeleteItem);
                _context.SaveChanges();
            }
        }

        public async Task<List<BillModel>> BillHistoryAsync()
        {
            var ListCart = await _context.Bills!.ToListAsync();
            return _mapper.Map<List<BillModel>>(ListCart);
        }
        
        public async Task<BillModel> GetCartByIdAsync(string Id)
        {
            var Bill = await _context.Bills!.SingleOrDefaultAsync(b=>b.Id == Id);
            return _mapper.Map<BillModel>(Bill);
        }

        public async Task EditNumberItemAsync(string IdItem, int Number)
        {
            var EditItem = _context.CartItem!.SingleOrDefault(x => x.Id == IdItem);
            if (EditItem != null)
            {
                EditItem.Number = Number;
                if (EditItem.Number == 0)
                {
                    await RemoveItenAsync(IdItem);
                }
                _context.SaveChanges();
            }
        }
    }
}
