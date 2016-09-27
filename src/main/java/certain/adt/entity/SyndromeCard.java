package certain.adt.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "certain_cms_syndrome")
public class SyndromeCard implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String name;

    @Column(name = "immediate_consideration", columnDefinition = "TEXT")
    private String ic;

    @Column(name = "management_after_stabilization", columnDefinition = "TEXT")
    private String mas;

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


    public String getIc() {
        return ic;
    }

    public void setIc(String ic) {
        this.ic = ic;
    }

    public String getMas() {
        return mas;
    }

    public void setMas(String mas) {
        this.mas = mas;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        SyndromeCard syn = (SyndromeCard) o;
        if (syn.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, syn.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
