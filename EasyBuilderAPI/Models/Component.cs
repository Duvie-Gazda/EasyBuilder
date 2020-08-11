using System;
using System.ComponentModel.DataAnnotations.Schema;
namespace EasyBuilderAPI.Models
{
    [Table("component")]
    public class Component
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("developer_id")]
        public int DeveloperId { get; set; }
        [Column("component_name")]
        public string ComponentName { get; set; }
        [Column("source_to_json")]
        public string SourceToJSON { get; set; }
        [Column("stars")]
        public int Stars { get; set; }
        [Column("downloads")]
        public int Downloads { get; set; }
        [Column("created_at")]
        public DateTime CreatedAt { get; set; }
        [Column("updated_at")]
        public DateTime UpdatedAt { get; set; }
        [Column("price")]
        public int Price { get; set; }
        [Column("about_component")]
        #nullable enable
        public string? AboutComponent { get; set; }
        #nullable disable
        [Column("developer")]
        public Developer Developer { get; set; }
    }


}