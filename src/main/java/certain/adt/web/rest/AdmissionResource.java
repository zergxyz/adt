package certain.adt.web.rest;


import certain.adt.entity.Admission;
import certain.adt.service.AdmissionService;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

//import java.net.URI;
//import java.net.URISyntaxException;
import java.util.List;
//import java.util.Optional;

/**
 * REST controller for managing Admission.
 */
@RestController
@RequestMapping("/api")
public class AdmissionResource {

    @Autowired
    private AdmissionService admissionService;

    /**
     * POST  /admissions : save a new admission.
     *
     * @param admission the admission to create
     * @return the ResponseEntity with status 201 (Created) and with body the new admission, or with status 400 (Bad Request) if the admission has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/admissions",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Admission> createAdmission(@RequestBody Admission admission)  {
        Admission result = admissionService.saveAdmission(admission);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    
    /**
     * POST  /admissions/readmit : readmit the patient.
     *
     * @param admission the admission to save
     * @return the ResponseEntity with status 201 (Created) and with body the new admission, or with status 400 (Bad Request) if the admission has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/admissions/readmit",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Admission> reAdmission(@RequestBody Admission admission)  {
        Admission result = admissionService.reAdmit(admission);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    
    /**
     * GET  /admissions/:id : get center admissions based on center id.
     *
     * @param id of the center
     * @return the ResponseEntity with status 200 (OK) and with body the admissions, or with status 404 (Not Found)
     */
    @RequestMapping(value = "/admissions/{id}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAdmission(@PathVariable Long id) {
        List<Admission> adms = admissionService.findCenterAdmissions(id);
        return new ResponseEntity<>(adms, HttpStatus.OK);
    }

    /**
     * PUT  /admissions : discharge an existing admission.
     *
     * @param the admission to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated admission,
     * or with status 400 (Bad Request) if the admission is not valid,
     */
    @RequestMapping(value = "/admissions",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Admission> updateAdmission(@RequestBody Admission admission) {
        
        if (admission.getId() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        Admission result = admissionService.dischargeAdmission(admission);
        return ResponseEntity.ok()
            .body(result);
    }


//    /**
//     * GET  /admissions : get all the admissions.
//     *
//     * @return the ResponseEntity with status 200 (OK) and the list of admissions in body
//     */
//    @RequestMapping(value = "/admissions",
//        method = RequestMethod.GET,
//        produces = MediaType.APPLICATION_JSON_VALUE)
//    public List<Admission> getAllAdmissions() {
//        log.debug("REST request to get all Admissions");
//        return admissionService.findAll();
//    }


//    /**
//     * DELETE  /admissions/:id : delete the "id" admission.
//     *
//     * @param id the id of the admission to delete
//     * @return the ResponseEntity with status 200 (OK)
//     */
//    @RequestMapping(value = "/admissions/{id}",
//        method = RequestMethod.DELETE,
//        produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<Void> deleteAdmission(@PathVariable Long id) {
//        log.debug("REST request to delete Admission : {}", id);
//        admissionService.delete(id);
//        return ResponseEntity.ok().build();
//    }

}
