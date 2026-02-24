package se.byggfirma.backend.dto;

import java.time.Instant;

public record QuoteRequestResponseDto(
    Long id,
    String name,
    String email,
    String phone,
    String message,
    Instant createdAt,
    boolean handled
) {}
