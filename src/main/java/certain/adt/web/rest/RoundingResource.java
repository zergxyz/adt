package certain.adt.web.rest;

import certain.adt.entity.Round;
import certain.adt.service.RoundingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

//import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

/**
 * REST controller for managing Admission.
 */
@RestController
@RequestMapping("/api")
public class RoundingResource {
    
    @Autowired
    private RoundingService RoundingService;
    
    /**
     * POST  /roundings : save or update a rounding.
     *
     * @param rd the rounding to create/update
     * @return the ResponseEntity with status 201 (Created) and with body the new rounding, 
     * or with status 400 (Bad Request) if the rounding has already an ID
     * 
     */
    @RequestMapping(value = "/roundings",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Round> persistRounding(@RequestBody Round r)  {
        String original = r.getCtnID();
        Round result = RoundingService.save(r);
        result.setCtnID(original);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    
    /**
     * GET  /roundings/check?ctnID=?&&date=? : check today's rounding.
     *
     * @param ctnID, date
     * @return today's rounding and rounding detail object
     * 
     */
    @RequestMapping(value = "/roundings/check",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Round> checkTodayRounding(@RequestParam(value = "ctnID")  String cid,
                                                    @RequestParam(value = "date")  String t,
                                                    @RequestParam(value = "id")  String id)
                                                    throws Exception {
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd" );
        Round res = RoundingService.checkRounding(cid, df.parse(t), Long.parseLong(id));
        res.setCtnID(cid);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}
