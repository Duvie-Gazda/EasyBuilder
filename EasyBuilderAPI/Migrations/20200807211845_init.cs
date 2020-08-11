using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace EasyBuilderAPI.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "developer",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    profile_id = table.Column<int>(nullable: false),
                    rating = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_developer", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "profile",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: true),
                    password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_profile", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "component",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    developer_id = table.Column<int>(nullable: false),
                    component_name = table.Column<string>(nullable: true),
                    source_to_json = table.Column<string>(nullable: true),
                    stars = table.Column<int>(nullable: false),
                    downloads = table.Column<int>(nullable: false),
                    created_at = table.Column<DateTime>(nullable: false),
                    updated_at = table.Column<DateTime>(nullable: false),
                    price = table.Column<int>(nullable: false),
                    about_component = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_component", x => x.id);
                    table.ForeignKey(
                        name: "FK_component_developer_developer_id",
                        column: x => x.developer_id,
                        principalTable: "developer",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_component_developer_id",
                table: "component",
                column: "developer_id");

            migrationBuilder.CreateIndex(
                name: "IX_profile_email",
                table: "profile",
                column: "email",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "component");

            migrationBuilder.DropTable(
                name: "profile");

            migrationBuilder.DropTable(
                name: "developer");
        }
    }
}
