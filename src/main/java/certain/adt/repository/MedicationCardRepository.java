package certain.adt.repository;

import certain.adt.entity.MedicationCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicationCardRepository extends JpaRepository<MedicationCard, Long> {
}
