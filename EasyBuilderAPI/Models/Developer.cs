using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
namespace EasyBuilderAPI.Models
{
    [Table("developer")]
    public class Developer
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("profile_id")]
        public int ProfileId { get; set; }
        [Column("rating")]
        public int Rating { get; set; }
        [Column("components")]
        public List<Component> Components { get; set; }
    }
}