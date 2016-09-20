package certain.adt.service;

import certain.adt.entity.Admission;
import certain.adt.repository.AdmissionRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing Admission.
 */
@Service
@Transactional
public class AdmissionService {

    
    @Autowired
    private AdmissionRepository admissionRepository;

    /**
     * Save a  new admission.
     *
     * @param admission the entity to save
     * @return the persisted entity
     */
    public Admission saveAdmission(Admission admission) {
        Long centerID = admission.getCenter().getId();
        final String strPssword = "fantasticlei";
        EncryptionService.setKey(strPssword);
        EncryptionService.encrypt(admission.getCtnID());
        String encID = EncryptionService.getEncryptedString();
        admission.setCtnID(encID);
        //check active admission duplicate
        Optional<Admission> adme =admissionRepository.findActiveAdmission(encID, centerID);
        if(adme.isPresent()){          
            admission.setCtnID("current in admission");
            return admission;
        }
        else {
            //readmit this patient
            List<Admission> adms= admissionRepository.findExistedAdmissions(encID, centerID);
            if(adms.size()>0) {
                return adms.get(0);
            }
            else {
                admissionRepository.save(admission);
                return admission;
            }
        }
    }
    
    /**
     * re-admit the patient.
     *
     * @param admission the entity to save
     * @return the persisted entity
     */
    public Admission reAdmit(Admission admission) {
        final String strPssword = "fantasticlei";
        EncryptionService.setKey(strPssword);
        EncryptionService.encrypt(admission.getCtnID());
        String encID = EncryptionService.getEncryptedString();
        admission.setCtnID(encID);
        admissionRepository.save(admission);
        return admission;
    }
    

    /**
     *  Get all the admissions based on center id.
     *  
     *  @return the list of entities
     */
    @Transactional(readOnly = true) 
    public List<Admission> findCenterAdmissions(Long id) {
        List<Admission> result = admissionRepository.findCurrentAdmissions(id);
        result
            .stream()
            .forEach(adm->{
                        final String strPssword = "fantasticlei";
                        EncryptionService.setKey(strPssword);
                        EncryptionService.decrypt(adm.getCtnID());
                        adm.setCtnID(EncryptionService.getDecryptedString());
                    });
        return result;
    }
    
    /**
     *  discharge admission by adm id.
     *  
     *  @return the discharged entity
     */
    public Admission dischargeAdmission(Admission adm) {
        
        final String strPssword = "fantasticlei";
        EncryptionService.setKey(strPssword);
        EncryptionService.encrypt(adm.getCtnID());
        String encID = EncryptionService.getEncryptedString();
        adm.setCtnID(encID);
        Admission result = admissionRepository.save(adm);
        return result;
    }

//    /**
//     *  Get one admission by id.
//     *
//     *  @param id the id of the entity
//     *  @return the entity
//     */
//    @Transactional(readOnly = true) 
//    public Admission findOne(Long id) {
//        Admission admission = admissionRepository.findOne(id);
//        return admission;
//    }
//
//    /**
//     *  Delete the  admission by id.
//     *
//     *  @param id the id of the entity
//     */
//    public void delete(Long id) {
//        admissionRepository.delete(id);
//    }
}

