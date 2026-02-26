package se.byggfirma.backend.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import se.byggfirma.backend.model.QuoteRequest;
import se.byggfirma.backend.repository.QuoteRequestRepository;
import java.time.Instant;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.httpBasic;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class AdminQuoteControllerTest {

    @Autowired MockMvc mockMvc;
    @Autowired QuoteRequestRepository repo;

    private Long savedId;

    @BeforeEach
    void setup() {
        repo.deleteAll();

        QuoteRequest q = new QuoteRequest();
        q.setName("Admin Test");
        q.setEmail("admin@test.se");
        q.setPhone("0700000000");
        q.setMessage("Testar adminflödet");
        q.setHandled(false);
        q.setCreatedAt(Instant.now());

        savedId = repo.save(q).getId();
    }

    @Test
    void shouldRequireAuthForAdminList() throws Exception {
        mockMvc.perform(get("/api/admin/quotes"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void shouldListQuotesWithBasicAuth() throws Exception {
        mockMvc.perform(get("/api/admin/quotes")
                        .with(httpBasic("admin", "admin123")))
                .andExpect(status().isOk());
    }

    @Test
    void shouldMarkQuoteAsHandled() throws Exception {
        mockMvc.perform(patch("/api/admin/quotes/{id}/handled", savedId)
                        .with(httpBasic("admin", "admin123")))
                .andExpect(status().isOk());
    }

    @Test
    void shouldDeleteQuote() throws Exception {
        mockMvc.perform(delete("/api/admin/quotes/{id}", savedId)
                        .with(httpBasic("admin", "admin123")))
                .andExpect(status().isNoContent());
    }
}