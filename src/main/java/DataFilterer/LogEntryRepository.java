package DataFilterer;

import DataFilterer.model.LogEntry;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


@RepositoryRestResource( collectionResourceRel = "responsetimes", path = "responsetimes")
public interface LogEntryRepository extends PagingAndSortingRepository<LogEntry, Long> {

    List<LogEntry> findById(@Param("id") long id);

    //List<LogEntry> findByRequestTimestamp(@Param("timestamp") int timestamp);

    List<LogEntry> findByCountryCode(@Param("country") String country);
}
