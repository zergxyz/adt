package certain.adt.web.rest;

import certain.adt.entity.MedicationCard;
import certain.adt.entity.ProcedureCard;
import certain.adt.entity.SyndromeCard;
import certain.adt.repository.MedicationCardRepository;
import certain.adt.repository.ProcedureCardRepository;
import certain.adt.repository.SyndromeCardRepository;

import org.apache.tomcat.jni.Proc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cms")
public class CMSResource {

    @Autowired
    private SyndromeCardRepository synCardRepo;

    @Autowired
    private MedicationCardRepository medCardRepo;

    @Autowired
    private ProcedureCardRepository proCardRepo;

    /**
     * POST  /syndromes : save/update a syndrome card.
     *
     * @param syndrome card to be created
     * @return the ResponseEntity with status 201 (Created) and with body the new admission,
     * or with status 400 (Bad Request) if the admission has already an ID
     */
    @RequestMapping(value = "/syndromes",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SyndromeCard> newSynCard(@RequestBody SyndromeCard sync) {
        SyndromeCard result = synCardRepo.save(sync);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    /**
     * GET  /syndromes : get syndrome list.
     *
     * @return the ResponseEntity with status 200 (OK) and with body the syndromes
     */
    @RequestMapping(value = "/syndromes",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getSynCardList() {
        List<SyndromeCard> syncList = synCardRepo.findAll();
        return new ResponseEntity<>(syncList, HttpStatus.OK);
    }

    /**
     * GET  /syndromes/id : get syndrome card by id.
     *
     * @return the ResponseEntity with status 200 (OK) and with body the syndrome
     */
    @RequestMapping(value = "/syndromes/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getSynCard(@PathVariable Long id) {
        SyndromeCard sync = synCardRepo.findOne(id);
        return new ResponseEntity<>(sync, HttpStatus.OK);
    }

    /**
     * POST  /medications : save/update a medication card.
     *
     * @param meds card to be created
     * @return the ResponseEntity with status 201 (Created) and with body the new card,
     * or with status 400 (Bad Request) if the admission has already an ID
     */
    @RequestMapping(value = "/medications",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<MedicationCard> saveMedCard(@RequestBody MedicationCard medc) {
        MedicationCard result = medCardRepo.save(medc);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    /**
     * GET  /medications : get medication list.
     *
     * @return the ResponseEntity with status 200 (OK) and with body the meds
     */
    @RequestMapping(value = "/medications",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getMedCardList() {
        List<MedicationCard> medscList = medCardRepo.findAll();
        return new ResponseEntity<>(medscList, HttpStatus.OK);
    }

    /**
     * GET  /medications/id : get medication card by id.
     *
     * @return the ResponseEntity with status 200 (OK) and with body the medication
     */
    @RequestMapping(value = "/medications/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getMedCard(@PathVariable Long id) {
        MedicationCard medc = medCardRepo.findOne(id);
        return new ResponseEntity<>(medc, HttpStatus.OK);
    }

    /**
     * POST  /procedures : save/update a procedure card.
     *
     * @param meds card to be created
     * @return the ResponseEntity with status 201 (Created) and with body the new card,
     * or with status 400 (Bad Request) if the admission has already an ID
     */
    @RequestMapping(value = "/procedures",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProcedureCard> saveProCard(@RequestBody ProcedureCard proc) {
        ProcedureCard result = proCardRepo.save(proc);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    /**
     * GET  /procedures : get procedure list.
     *
     * @return the ResponseEntity with status 200 (OK) and with body the procedures
     */
    @RequestMapping(value = "/procedures",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getProList() {
        List<ProcedureCard> procList = proCardRepo.findAll();
        return new ResponseEntity<>(procList, HttpStatus.OK);
    }

    /**
     * GET  /medications/id : get procedure card by id.
     *
     * @return the ResponseEntity with status 200 (OK) and with body the procedure
     */
    @RequestMapping(value = "/procedures/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getProCard(@PathVariable Long id) {
        ProcedureCard proc = proCardRepo.findOne(id);
        return new ResponseEntity<>(proc, HttpStatus.OK);
    }


}
