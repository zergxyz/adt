package certain.adt.service;

import certain.adt.entity.Round;
import certain.adt.entity.RoundDetail;
import certain.adt.entity.Center;
import certain.adt.repository.RoundRepository;
import certain.adt.repository.RoundDetailRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

//import java.util.List;
import java.util.Optional;
import java.util.Date;

/**
 * Service Implementation for managing Rounding.
 */
@Service
@Transactional
public class RoundingService {
    
    @Autowired
    private RoundRepository rdRepository;
    
    @Autowired
    private RoundDetailRepository detailRepository;
    
    /**
     * Save or update the rounding report and detail.
     *
     * @param round/detail entity to save
     * @return the persisted entity
     */
    public Round save(Round r) {
        final String strPssword = "fantasticlei";
        EncryptionService.setKey(strPssword);
        EncryptionService.encrypt(r.getCtnID());
        String encID = EncryptionService.getEncryptedString();
        r.setCtnID(encID);
        detailRepository.save(r.getRdetail());
        rdRepository.save(r);
        return r;
    }
    
    /**
     * check today's rounding.
     *
     * @param ctnID and today's date
     * @return the persisted entity
     */
    public Round checkRounding(String ctnID, Date today, Long id) {
        final String strPssword = "fantasticlei";
        EncryptionService.setKey(strPssword);
        EncryptionService.encrypt(ctnID);
        String encID = EncryptionService.getEncryptedString();
        Optional<Round> rrd = rdRepository.findByCtnIDAndRdDateAndCenter_Id(encID, today, id);
        if(rrd.isPresent()){
            Round rd = rrd.get();
            return rd;
        }
        else  {
            RoundDetail detail = new RoundDetail();
            Round rnd = new Round();
            rnd.setCtnID(ctnID);
            rnd.setRdDate(today);
            rnd.setRdetail(detail);
            Center c = new Center();
            c.setId(id);
            rnd.setCenter(c);
            return this.save(rnd);
        }
    }
    
}
