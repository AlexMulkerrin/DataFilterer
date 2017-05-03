package DataFilterer.persistence;

import DataFilterer.model.LogEntry;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(exported = false)
public interface LogEntryRepository extends PagingAndSortingRepository<LogEntry, Long> {

    List<LogEntry> findById(@Param("id") long id);

    List<LogEntry> findByCountryCode(@Param("country") String country);

    List<LogEntry> findByResponseTimeGreaterThan(@Param("time") int time);


    //@Query("select u from User u where u.emailAddress = ?1")
   // User findByEmailAddress(String emailAddress);

    @Query("select log from LogEntry log where responseTime > (select avg(log.responseTime)  from LogEntry log )")
    List<LogEntry> findAboveAverageResponseTime();

}
