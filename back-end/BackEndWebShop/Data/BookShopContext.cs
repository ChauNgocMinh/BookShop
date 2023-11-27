using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace BackEndWebShop.Data;

public partial class BookShopContext : IdentityDbContext<ApplicationUser>
{
    public BookShopContext()
    {
    }

    public BookShopContext(DbContextOptions<BookShopContext> options)
        : base(options)
    {
    }
    public virtual DbSet<Bill> Bills { get; set; }

    public virtual DbSet<Book> Books { get; set; }

    public virtual DbSet<CartItem> CartItem { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Data Source=192.168.0.106,1436;Initial Catalog=BookShop;Integrated Security=True; TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Bill>(entity =>
        {
            entity.HasKey(e => new { e.Id, e.Email }).HasName("PK_CART_BUY");

            entity.ToTable("BILL");

            entity.Property(e => e.Id)
                .HasMaxLength(10)
                .HasColumnName("ID");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasColumnName("EMAIL");
            entity.Property(e => e.Address)
                .HasMaxLength(100)
                .HasColumnName("ADDRESS");
            entity.Property(e => e.BuyingDate)
                .HasColumnType("datetime")
                .HasColumnName("BUYING_DATE");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .HasColumnName("NAME");
            entity.Property(e => e.Note).HasColumnName("NOTE");
            entity.Property(e => e.Pay).HasColumnName("PAY");
            entity.Property(e => e.PaymentMethods)
                .HasMaxLength(20)
                .HasColumnName("PAYMENT_METHODS");
            entity.Property(e => e.Phone)
                .HasMaxLength(10)
                .HasColumnName("PHONE");
            entity.Property(e => e.Status).HasColumnName("STATUS");
            entity.Property(e => e.Total).HasColumnName("TOTAL");
        });

        modelBuilder.Entity<Book>(entity =>
        {
            entity.ToTable("BOOK");

            entity.Property(e => e.Id)
                .HasMaxLength(10)
                .HasColumnName("ID");
            entity.Property(e => e.Category)
                .HasMaxLength(50)
                .HasColumnName("CATEGORY");
            entity.Property(e => e.Namebook)
                .HasMaxLength(50)
                .HasColumnName("NAMEBOOK");
            entity.Property(e => e.Picture).HasColumnName("PICTURE");
            entity.Property(e => e.Price).HasColumnName("PRICE");
            entity.Property(e => e.PublishingCompany)
                .HasMaxLength(50)
                .HasColumnName("PUBLISHING_COMPANY");
            entity.Property(e => e.Review).HasColumnName("REVIEW");
            entity.Property(e => e.Sales).HasColumnName("SALES");
            entity.Property(e => e.Status).HasColumnName("STATUS");
        });

        modelBuilder.Entity<CartItem>(entity =>
        {
            entity.HasKey(e => new { e.Id, e.Email }).HasName("PK_CART_ITEM_1");

            entity.ToTable("CART_ITEM");

            entity.Property(e => e.Id)
                .HasMaxLength(10)
                .HasColumnName("ID");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasColumnName("EMAIL");
            entity.Property(e => e.IdBill)
                .HasMaxLength(10)
                .HasColumnName("ID_BILL");
            entity.Property(e => e.IdBook)
                .HasMaxLength(10)
                .HasColumnName("ID_BOOK");
            entity.Property(e => e.Number).HasColumnName("NUMBER");
            entity.Property(e => e.Status).HasColumnName("STATUS");

            entity.HasOne(d => d.IdBookNavigation).WithMany(p => p.CartItems)
                .HasForeignKey(d => d.IdBook)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CART_ITEM_BOOK");

            entity.HasOne(d => d.Bill).WithMany(p => p.CartItems)
                .HasForeignKey(d => new { d.IdBill, d.Email })
                .HasConstraintName("FK_CART_ITEM_BILL");
        });
        this.SeedRoles(modelBuilder);
        OnModelCreatingPartial(modelBuilder);
    }

    private void SeedRoles(ModelBuilder builder)
    {
        builder.Entity<IdentityRole>().HasData
        (
            new IdentityRole() { Name = "Admin", ConcurrencyStamp = "1", NormalizedName = "Admin" },
            new IdentityRole() { Name = "User", ConcurrencyStamp = "2", NormalizedName = "User" }
        );

    }
    protected void OnModelCreatingPartial(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
