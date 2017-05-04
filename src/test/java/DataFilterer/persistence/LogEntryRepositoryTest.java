package DataFilterer.persistence;

import DataFilterer.model.LogEntry;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.*;
import org.springframework.test.context.junit4.SpringRunner;



import static org.junit.Assert.*;
import static org.assertj.core.api.Assertions.*;

@RunWith(SpringRunner.class)
@DataJpaTest
public class LogEntryRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private LogEntryRepository repository;

    @Test
    public void exampleTest() throws Exception {
        LogEntry testEntry = new LogEntry();
        testEntry.setCountryCode("GB");
        testEntry.setRequestTimestamp(10000000);
        testEntry.setResponseTime(99);

        entityManager.persist(testEntry);
        LogEntry returnedEntry = repository.findOne(1L);
        assertThat(returnedEntry.getCountryCode()).isEqualTo("GB");
        assertThat(returnedEntry.getRequestTimestamp()).isEqualTo(10000000);
        assertThat(returnedEntry.getResponseTime()).isEqualTo(99);
    }

    @Test
    public void findById() throws Exception {
    }

    @Test
    public void findByCountryCode() throws Exception {
    }

    @Test
    public void findByResponseTimeGreaterThan() throws Exception {
    }

    @Test
    public void findAboveAverageResponseTime() throws Exception {
    }

}