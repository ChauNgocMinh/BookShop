using BackEndWebShop.Model;

namespace BackEndWebShop.Repository
{
    public interface ICartRepository 
    {
        public Task<List<CartItemModel>> ShowCartAsync();
        public Task<List<BillModel>> BillHistoryAsync();
        public Task<BillModel> GetCartByIdAsync(string Id);
        public Task AddItemAsync(CartItemModel model);
        public Task EditNumberItemAsync(string IdItem, int Number);
        public Task RemoveItenAsync(string IdItem);
        public Task<BillModel> BuyAsync(string IdCart, BillModel model);

    }
}
