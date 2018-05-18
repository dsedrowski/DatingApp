using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage = "Nazwa użytkownika jest wymagana.")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Hasło jest wymagane.")]        
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Hasło musi zawierać od 4 do 8 znakow.")]
        public string Password { get; set; }
    }
}