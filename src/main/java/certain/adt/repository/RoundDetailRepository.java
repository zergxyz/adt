package certain.adt.repository;

import certain.adt.entity.RoundDetail;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface RoundDetailRepository extends JpaRepository<RoundDetail,Long> {
    
}
