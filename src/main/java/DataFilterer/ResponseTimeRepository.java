package DataFilterer;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


@RepositoryRestResource(
        collectionResourceRel = "responsetimes", path = "responsetimes")
public interface ResponseTimeRepository
        extends PagingAndSortingRepository<ResponseTimeDataObject, Long>{

    List<ResponseTimeDataObject> findById(@Param("id") long id);

    //List<ResponseTimeDataObject> findByRequestTimestamp(@Param("timestamp") int timestamp);
}
