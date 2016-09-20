package certain.adt.repository;

import certain.adt.entity.Center;
import java.util.Optional;
/**
 * Spring Data JPA repository for the Center entity.
 */
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CenterRepository extends JpaRepository<Center,Long>  {
    
    public Optional<Center> findByHospitalToken(String hospToken);
}
