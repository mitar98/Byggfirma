package se.byggfirma.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record QuoteRequestCreateDto(
    @NotBlank(message = "Namn är obligatoriskt")
    @Size(max = 80, message = "Namn får vara max 80 tecken")
    String name,

    @NotBlank(message = "E-post är obligatoriskt")
    @Email(message = "Ogiltig e-postadress")
    @Size(max = 120, message = "E-post får vara max 120 tecken")
    String email,

    @Size(max = 30, message = "Telefon får vara max 30 tecken")
    String phone,

    @NotBlank(message = "Meddelande är obligatoriskt")
    @Size(max = 2000, message = "Meddelande får vara max 2000 tecken")
    String message
) {}
