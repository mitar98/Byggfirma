package se.byggfirma.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import se.byggfirma.backend.dto.QuoteRequestCreateDto;
import se.byggfirma.backend.dto.QuoteRequestResponseDto;
import se.byggfirma.backend.mapper.QuoteRequestMapper;
import se.byggfirma.backend.model.QuoteRequest;
import se.byggfirma.backend.repository.QuoteRequestRepository;

import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class QuoteRequestService {

  private final QuoteRequestRepository repository;
  private final QuoteRequestMapper mapper;

  @Transactional
  public QuoteRequestResponseDto create(QuoteRequestCreateDto dto) {
    QuoteRequest entity = mapper.toEntity(dto);
    QuoteRequest saved = repository.save(entity);
    return mapper.toDto(saved);
  }

  @Transactional(readOnly = true)
  public List<QuoteRequestResponseDto> getAll() {
    return repository.findAll().stream()
            .sorted(Comparator.comparing(QuoteRequest::getCreatedAt).reversed())
            .map(mapper::toDto)
            .toList();
  }

  @Transactional
  public QuoteRequestResponseDto markHandled(Long id) {
    QuoteRequest entity = repository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("QuoteRequest med id " + id + " hittades inte"));

    entity.setHandled(true);
    QuoteRequest saved = repository.save(entity);
    return mapper.toDto(saved);
  }

  @Transactional
  public void deleteById(Long id) {
    if (!repository.existsById(id)) {
      throw new IllegalArgumentException("QuoteRequest med id " + id + " hittades inte");
    }
    repository.deleteById(id);
  }
}