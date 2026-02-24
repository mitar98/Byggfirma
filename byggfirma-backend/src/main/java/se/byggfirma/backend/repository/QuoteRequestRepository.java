package se.byggfirma.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import se.byggfirma.backend.model.QuoteRequest;

public interface QuoteRequestRepository extends JpaRepository<QuoteRequest, Long> {
}
