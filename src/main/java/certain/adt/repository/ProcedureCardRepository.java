package certain.adt.repository;

import certain.adt.entity.ProcedureCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProcedureCardRepository extends JpaRepository<ProcedureCard, Long>{
}
