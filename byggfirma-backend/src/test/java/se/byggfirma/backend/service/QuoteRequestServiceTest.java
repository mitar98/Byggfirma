package se.byggfirma.backend.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import se.byggfirma.backend.dto.QuoteRequestCreateDto;
import se.byggfirma.backend.dto.QuoteRequestResponseDto;
import se.byggfirma.backend.mapper.QuoteRequestMapper;
import se.byggfirma.backend.model.QuoteRequest;
import se.byggfirma.backend.repository.QuoteRequestRepository;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class QuoteRequestServiceTest {

    @Mock QuoteRequestRepository repository;
    @Mock QuoteRequestMapper mapper;

    @InjectMocks QuoteRequestService service;

    QuoteRequestCreateDto createDto;
    QuoteRequest entityFromMapper;
    QuoteRequest savedEntity;
    QuoteRequestResponseDto responseDto;

    @BeforeEach
    void setup() {
        createDto = mock(QuoteRequestCreateDto.class);

        entityFromMapper = QuoteRequest.builder()
                .name("Mitar")
                .email("mitar@omegapoint.se")
                .phone("0703524349")
                .message("Hej jag behöver hjälp med badrummet!")
                .handled(false)
                .createdAt(Instant.parse("2026-02-01T10:00:00Z"))
                .build();

        savedEntity = QuoteRequest.builder()
                .id(1L)
                .name(entityFromMapper.getName())
                .email(entityFromMapper.getEmail())
                .phone(entityFromMapper.getPhone())
                .message(entityFromMapper.getMessage())
                .handled(false)
                .createdAt(entityFromMapper.getCreatedAt())
                .build();

        responseDto = mock(QuoteRequestResponseDto.class);
    }

    @Test
    void create_shouldMapSaveAndReturnDto() {
        when(mapper.toEntity(createDto)).thenReturn(entityFromMapper);
        when(repository.save(entityFromMapper)).thenReturn(savedEntity);
        when(mapper.toDto(savedEntity)).thenReturn(responseDto);

        QuoteRequestResponseDto result = service.create(createDto);

        assertSame(responseDto, result);
        verify(mapper).toEntity(createDto);
        verify(repository).save(entityFromMapper);
        verify(mapper).toDto(savedEntity);
        verifyNoMoreInteractions(repository, mapper);
    }

    @Test
    void getAll_shouldSortByCreatedAtDesc_andMapToDtos() {
        QuoteRequest older = QuoteRequest.builder()
                .id(1L)
                .createdAt(Instant.parse("2026-02-01T10:00:00Z"))
                .handled(false)
                .name("Old").email("old@test.se").message("offert 1").build();

        QuoteRequest newer = QuoteRequest.builder()
                .id(2L)
                .createdAt(Instant.parse("2026-02-10T10:00:00Z"))
                .handled(false)
                .name("new").email("new@test.se").message("offert 2").build();

        QuoteRequestResponseDto olderDto = mock(QuoteRequestResponseDto.class);
        QuoteRequestResponseDto newerDto = mock(QuoteRequestResponseDto.class);

        when(repository.findAll()).thenReturn(List.of(older, newer));
        when(mapper.toDto(older)).thenReturn(olderDto);
        when(mapper.toDto(newer)).thenReturn(newerDto);

        List<QuoteRequestResponseDto> result = service.getAll();

        assertEquals(List.of(newerDto, olderDto), result);

        verify(repository).findAll();
        verify(mapper).toDto(newer);
        verify(mapper).toDto(older);
        verifyNoMoreInteractions(repository, mapper);
    }

    @Test
    void markHandled_shouldSetHandledTrue_saveAndReturnDto() {
        QuoteRequest existing = QuoteRequest.builder()
                .id(5L)
                .createdAt(Instant.parse("2026-02-01T10:00:00Z"))
                .handled(false)
                .name("Mitar").email("mitar@omegapoint.se").message("Hej jag behöver hjälp med badrummet!").build();

        QuoteRequestResponseDto dto = mock(QuoteRequestResponseDto.class);

        when(repository.findById(5L)).thenReturn(Optional.of(existing));
        when(repository.save(existing)).thenAnswer(inv -> inv.getArgument(0));
        when(mapper.toDto(existing)).thenReturn(dto);

        QuoteRequestResponseDto result = service.markHandled(5L);

        assertSame(dto, result);
        assertTrue(existing.isHandled(), "handled ska sättas till true");

        verify(repository).findById(5L);
        verify(repository).save(existing);
        verify(mapper).toDto(existing);
        verifyNoMoreInteractions(repository, mapper);
    }

    @Test
    void markHandled_shouldThrowIfNotFound() {
        when(repository.findById(6L)).thenReturn(Optional.empty());

        IllegalArgumentException ex = assertThrows(
                IllegalArgumentException.class,
                () -> service.markHandled(6L)
        );

        assertTrue(ex.getMessage().contains("6"));
        verify(repository).findById(6L);
        verifyNoMoreInteractions(repository, mapper);
    }

    @Test
    void deleteById_shouldDeleteWhenExists() {
        when(repository.existsById(7L)).thenReturn(true);

        service.deleteById(7L);

        verify(repository).existsById(7L);
        verify(repository).deleteById(7L);
        verifyNoMoreInteractions(repository, mapper);
    }

    @Test
    void deleteById_shouldThrowWhenNotExists() {
        when(repository.existsById(7L)).thenReturn(false);

        IllegalArgumentException ex = assertThrows(
                IllegalArgumentException.class,
                () -> service.deleteById(7L)
        );

        assertTrue(ex.getMessage().contains("7"));
        verify(repository).existsById(7L);
        verify(repository, never()).deleteById(anyLong());
        verifyNoMoreInteractions(repository, mapper);
    }
}