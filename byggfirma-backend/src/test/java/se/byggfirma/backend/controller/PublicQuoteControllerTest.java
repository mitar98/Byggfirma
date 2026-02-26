package se.byggfirma.backend.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class PublicQuoteControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    void shouldCreateQuoteRequest() throws Exception {
        String body = """
            {
              "name": "Test Kund",
              "email": "kund@test.se",
              "phone": "0701234567",
              "message": "Jag vill ha offert på renovering."
            }
            """;

        mockMvc.perform(post("/api/quotes")
                        .contentType(APPLICATION_JSON)
                        .content(body))
                .andExpect(status().isCreated());
    }
}