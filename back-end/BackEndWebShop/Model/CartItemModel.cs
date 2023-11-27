using BackEndWebShop.Data;

namespace BackEndWebShop.Model
{
    public class CartItemModel
    {
        public string Id { get; set; } = null!;

        public string? IdBill { get; set; }

        public string Email { get; set; } = null!;

        public string IdBook { get; set; } = null!;

        public int Number { get; set; }

        public bool Status { get; set; }

        public virtual Bill? Bill { get; set; }

        public virtual Book IdBookNavigation { get; set; } = null!;
    }
}
