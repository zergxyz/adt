package certain.adt.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "certain_cms_procedure")
public class ProcedureCard implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String name;

    @Column(name = "indication", columnDefinition = "TEXT")
    private String idi;

    @Column(name = "procedure", columnDefinition = "TEXT")
    private String pcd;

    @Column(name = "caution", columnDefinition = "TEXT")
    private String cau;

    @Column(name = "reference", columnDefinition = "TEXT")
    private String ref;

    @Column
    private String lan;

    @Column
    private String isAdt;

    @Column
    private String isPeds;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIdi() {
        return idi;
    }

    public void setIdi(String idi) {
        this.idi = idi;
    }

    public String getPcd() {
        return pcd;
    }

    public void setPcd(String pcd) {
        this.pcd = pcd;
    }

    public String getCau() {
        return cau;
    }

    public void setCau(String cau) {
        this.cau = cau;
    }

    public String getRef() {
        return ref;
    }

    public void setRef(String ref) {
        this.ref = ref;
    }

    public String getLan() {
        return lan;
    }

    public void setLan(String lan) {
        this.lan = lan;
    }

    public String getIsAdt() {
        return isAdt;
    }

    public void setIsAdt(String isAdt) {
        this.isAdt = isAdt;
    }

    public String getIsPeds() {
        return isPeds;
    }

    public void setIsPeds(String isPeds) {
        this.isPeds = isPeds;
    }
}
