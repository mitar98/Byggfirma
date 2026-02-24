package se.byggfirma.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import se.byggfirma.backend.dto.QuoteRequestResponseDto;
import se.byggfirma.backend.service.QuoteRequestService;

import java.util.List;

@RestController
@RequestMapping("/api/admin/quotes")
@RequiredArgsConstructor
public class AdminQuoteController {

  private final QuoteRequestService service;

  @GetMapping
  public List<QuoteRequestResponseDto> getAll() {
    return service.getAll();
  }

  @PatchMapping("/{id}/handled")
  public QuoteRequestResponseDto markHandled(@PathVariable Long id) {
    return service.markHandled(id);
  }

  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void delete(@PathVariable Long id) {
    service.deleteById(id);
  }


}

