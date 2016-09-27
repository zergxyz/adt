package certain.adt.repository;

import certain.adt.entity.SyndromeCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SyndromeCardRepository extends JpaRepository<SyndromeCard,Long> {
}
