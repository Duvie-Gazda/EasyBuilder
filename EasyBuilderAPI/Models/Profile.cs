using System.ComponentModel.DataAnnotations.Schema;
namespace EasyBuilderAPI.Models
{
    [Table("profile")]
    public class Profile
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("name")]
        public string Name { get; set; }
        [Column("email")]
        public string Email { get; set; }
        [Column("password")]
        public string Password { get; set; }
    }
}