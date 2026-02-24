package se.byggfirma.backend.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import se.byggfirma.backend.dto.QuoteRequestCreateDto;
import se.byggfirma.backend.dto.QuoteRequestResponseDto;
import se.byggfirma.backend.service.QuoteRequestService;

@RestController
@RequestMapping("/api/quotes")
@RequiredArgsConstructor
public class PublicQuoteController {

  private final QuoteRequestService service;

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public QuoteRequestResponseDto create(@Valid @RequestBody QuoteRequestCreateDto dto) {
    return service.create(dto);
  }
}
