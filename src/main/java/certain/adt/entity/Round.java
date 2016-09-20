package certain.adt.entity;

import certain.adt.config.CustomDateDeserializer;
import certain.adt.config.CustomDateSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.*;
//import javax.validation.constraints.Size;
import java.io.Serializable;
//import java.util.HashSet;
//import java.util.Set;
//import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Objects;
import java.util.Date;

@Entity
@Table(name = "certain_adt_rd_report")
public class Round implements Serializable {
    
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Column(name = "ctn_id")
    private String ctnID;
    
    @Column(name = "rd_dt")
    @Temporal(TemporalType.DATE)
	@JsonDeserialize(using = CustomDateDeserializer.class)
	@JsonSerialize(using = CustomDateSerializer.class)
    private Date rdDate;
    
    @Column(name = "sedation_break")
    private String sedationBreak;
    
    @Column(name = "delirium")
    private String delirium;
    
    @Column(name = "pain")
    private String pain;
    
    @Column(name = "cvMeds")
    private String cvMeds;
    
    @Column(name = "lpv")
    private String lpv;
    
    @Column(name = "spb")
    private String spb;
    
    @Column(name = "hob")
    private String hob;
    
    @Column(name = "fluid")
    private String fluid;
    
    @Column(name = "electrolyte")
    private String electrolyte;
    
    @Column(name = "glucose")
    private String glucose;
    
    @Column(name = "sup")
    private String sup;
    
    @Column(name = "nutrition")
    private String nutrition;
    
    @Column(name = "dvt")
    private String dvt;
    
    @Column(name = "antibio")
    private String antibio;
    
    @Column(name = "skin")
    private String skin;
    
    @Column(name = "meds")
    private String meds;
    
    @Column(name = "devices")
    private String devices;
    
    @Column(name = "pt")
    private String pt;
    
    @Column(name = "goal")
    private String goal;
    
    @Column(name = "icuDischarge")
    private String icuDischarge;
    
    @OneToOne
    @JoinColumn(name = "roundDetail")
    private RoundDetail rdetail;
    
    @ManyToOne
    @JoinColumn(name = "center")
    private Center center;
    
    
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCtnID() {
		return ctnID;
	}

	public void setCtnID(String ctnID) {
		this.ctnID = ctnID;
	}

	public Date getRdDate() {
		return rdDate;
	}

	public void setRdDate(Date rdDate) {
		this.rdDate = rdDate;
	}

	public String getSedationBreak() {
		return sedationBreak;
	}

	public void setSedationBreak(String sedationBreak) {
		this.sedationBreak = sedationBreak;
	}

	public String getDelirium() {
		return delirium;
	}

	public void setDelirium(String delirium) {
		this.delirium = delirium;
	}

	public String getPain() {
		return pain;
	}

	public void setPain(String pain) {
		this.pain = pain;
	}

	public String getCvMeds() {
		return cvMeds;
	}

	public void setCvMeds(String cvMeds) {
		this.cvMeds = cvMeds;
	}

	public String getLpv() {
		return lpv;
	}

	public void setLpv(String lpv) {
		this.lpv = lpv;
	}

	public String getSpb() {
		return spb;
	}

	public void setSpb(String spb) {
		this.spb = spb;
	}

	public String getHob() {
		return hob;
	}

	public void setHob(String hob) {
		this.hob = hob;
	}

	public String getFluid() {
		return fluid;
	}

	public void setFluid(String fluid) {
		this.fluid = fluid;
	}

	public String getElectrolyte() {
		return electrolyte;
	}

	public void setElectrolyte(String electrolyte) {
		this.electrolyte = electrolyte;
	}

	public String getGlucose() {
		return glucose;
	}

	public void setGlucose(String glucose) {
		this.glucose = glucose;
	}

	public String getSup() {
		return sup;
	}

	public void setSup(String sup) {
		this.sup = sup;
	}

	public String getNutrition() {
		return nutrition;
	}

	public void setNutrition(String nutrition) {
		this.nutrition = nutrition;
	}

	public String getDvt() {
		return dvt;
	}

	public void setDvt(String dvt) {
		this.dvt = dvt;
	}

	public String getAntibio() {
		return antibio;
	}

	public void setAntibio(String antibio) {
		this.antibio = antibio;
	}

	public String getSkin() {
		return skin;
	}

	public void setSkin(String skin) {
		this.skin = skin;
	}

	public String getMeds() {
		return meds;
	}

	public void setMeds(String meds) {
		this.meds = meds;
	}

	public String getDevices() {
		return devices;
	}

	public void setDevices(String devices) {
		this.devices = devices;
	}

	public String getPt() {
		return pt;
	}

	public void setPt(String pt) {
		this.pt = pt;
	}

	public String getGoal() {
		return goal;
	}

	public void setGoal(String goal) {
		this.goal = goal;
	}

	public String getIcuDischarge() {
		return icuDischarge;
	}

	public void setIcuDischarge(String icuDischarge) {
		this.icuDischarge = icuDischarge;
	}
	
	public RoundDetail getRdetail() {
		return rdetail;
	}

	public void setRdetail(RoundDetail rdetail) {
		this.rdetail = rdetail;
	}
	
	public Center getCenter() {
        return center;
    }

    public void setCenter(Center c) {
        this.center = c;
    }
	
	@Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Round r = (Round) o;
        if(r.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, r.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }


}
