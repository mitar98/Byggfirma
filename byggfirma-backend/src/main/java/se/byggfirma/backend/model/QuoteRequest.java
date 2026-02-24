package se.byggfirma.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;

@Entity
@Table(name = "quote_requests")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuoteRequest {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, length = 80)
  private String name;

  @Column(nullable = false, length = 120)
  private String email;

  @Column(length = 30)
  private String phone;

  @Column(nullable = false, length = 2000)
  private String message;

  @Column(nullable = false)
  private Instant createdAt;

  @Column(nullable = false)
  private boolean handled;
}
