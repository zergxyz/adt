package certain.adt.repository;

import certain.adt.entity.Round;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface RoundRepository extends JpaRepository<Round,Long>  {
    
    public Optional<Round> findByCtnIDAndRdDateAndCenter_Id(String ctnID, 
                                                            Date rdDate,
                                                            Long centerID);
}
