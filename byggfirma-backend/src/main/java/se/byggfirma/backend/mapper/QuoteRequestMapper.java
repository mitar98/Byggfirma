package se.byggfirma.backend.mapper;

import org.springframework.stereotype.Component;
import se.byggfirma.backend.dto.QuoteRequestCreateDto;
import se.byggfirma.backend.dto.QuoteRequestResponseDto;
import se.byggfirma.backend.model.QuoteRequest;

import java.time.Instant;

@Component
public class QuoteRequestMapper {

    public QuoteRequest toEntity(QuoteRequestCreateDto dto) {
        return QuoteRequest.builder()
                .name(dto.name().trim())
                .email(dto.email().trim().toLowerCase())
                .phone(dto.phone() == null ? null : dto.phone().trim())
                .message(dto.message().trim())
                .createdAt(Instant.now())
                .handled(false)
                .build();
    }

    public QuoteRequestResponseDto toDto(QuoteRequest entity) {
        return new QuoteRequestResponseDto(
                entity.getId(),
                entity.getName(),
                entity.getEmail(),
                entity.getPhone(),
                entity.getMessage(),
                entity.getCreatedAt(),
                entity.isHandled()
        );
    }
}