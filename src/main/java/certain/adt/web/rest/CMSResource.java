package certain.adt.web.rest;

import certain.adt.entity.SyndromeCard;
import certain.adt.repository.SyndromeCardRepository;

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

    /**
     * POST  /syndromes : save a new syndrome card.
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
    public ResponseEntity<?> getSynCardList(@PathVariable Long id) {
        SyndromeCard sync = synCardRepo.findOne(id);
        return new ResponseEntity<>(sync, HttpStatus.OK);
    }


}
