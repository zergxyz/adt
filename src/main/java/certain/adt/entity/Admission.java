package certain.adt.entity;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;
import java.util.Date;
import certain.adt.config.CustomDateDeserializer;
import certain.adt.config.CustomDateSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

/**
 * A Admission.
 */
@Entity
@Table(name = "certain_adt_adm_demo")
public class Admission implements Serializable {
    
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "ctn_id")
    private String ctnID;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "age")
    private Integer age;

    @Column(name = "gender")
    private String gender;

    @Column(name = "blood_type")
    private String bloodType;

    @Column(name = "height")
    private String height;

    @Column(name = "weight")
    private String weight;

    @Column(name = "user_admit")
    private String userAdmit;

    @Column(name = "icu_adm_dt")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonDeserialize(using = CustomDateDeserializer.class)
    @JsonSerialize(using = CustomDateSerializer.class)
    private Date icuAdmDT;

    @Column(name = "icu_dis_dt")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonDeserialize(using = CustomDateDeserializer.class)
    @JsonSerialize(using = CustomDateSerializer.class)
    private Date icuDisDT;

    @Column(name = "user_discharge")
    private String userDischarge;

    @Column(name = "code_status")
    private String codeStatus;

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

    public Admission ctnID(String ctnID) {
        this.ctnID = ctnID;
        return this;
    }

    public void setCtnID(String ctnID) {
        this.ctnID = ctnID;
    }

    public String getFirstName() {
        return firstName;
    }

    public Admission firstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public Admission middleName(String middleName) {
        this.middleName = middleName;
        return this;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public Admission lastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getAge() {
        return age;
    }

    public Admission age(Integer age) {
        this.age = age;
        return this;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public Admission gender(String gender) {
        this.gender = gender;
        return this;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBloodType() {
        return bloodType;
    }

    public Admission bloodType(String bloodType) {
        this.bloodType = bloodType;
        return this;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public String getHeight() {
        return height;
    }

    public Admission height(String height) {
        this.height = height;
        return this;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getWeight() {
        return weight;
    }

    public Admission weight(String weight) {
        this.weight = weight;
        return this;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getUserAdmit() {
        return userAdmit;
    }

    public Admission userAdmit(String userAdmit) {
        this.userAdmit = userAdmit;
        return this;
    }

    public void setUserAdmit(String userAdmit) {
        this.userAdmit = userAdmit;
    }

    public Date getIcuAdmDT() {
        return icuAdmDT;
    }

    public Admission icuAdmDT(Date icuAdmDT) {
        this.icuAdmDT = icuAdmDT;
        return this;
    }

    public void setIcuAdmDT(Date icuAdmDT) {
        this.icuAdmDT = icuAdmDT;
    }

    public Date getIcuDisDT() {
        return icuDisDT;
    }

    public Admission icuDisDT(Date icuDisDT) {
        this.icuDisDT = icuDisDT;
        return this;
    }

    public void setIcuDisDT(Date icuDisDT) {
        this.icuDisDT = icuDisDT;
    }

    public String getUserDischarge() {
        return userDischarge;
    }

    public Admission userDischarge(String userDischarge) {
        this.userDischarge = userDischarge;
        return this;
    }

    public void setUserDischarge(String userDischarge) {
        this.userDischarge = userDischarge;
    }

    public String getCodeStatus() {
        return codeStatus;
    }

    public Admission codeStatus(String codeStatus) {
        this.codeStatus = codeStatus;
        return this;
    }

    public void setCodeStatus(String codeStatus) {
        this.codeStatus = codeStatus;
    }

    public Center getCenter() {
        return center;
    }

    public Admission Center(Center c) {
        this.center = c;
        return this;
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
        Admission admission = (Admission) o;
        if(admission.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, admission.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

//    @Override
//    public String toString() {
//        return "Admission{" +
//            "id=" + id +
//            ", ctnID='" + ctnID + "'" +
//            ", firstName='" + firstName + "'" +
//            ", middleName='" + middleName + "'" +
//            ", lastName='" + lastName + "'" +
//            ", age='" + age + "'" +
//            ", gender='" + gender + "'" +
//            ", bloodType='" + bloodType + "'" +
//            ", height='" + height + "'" +
//            ", weight='" + weight + "'" +
//            ", userAdmit='" + userAdmit + "'" +
//            ", icuAdmDT='" + icuAdmDT + "'" +
//            ", icuDisDT='" + icuDisDT + "'" +
//            ", userDischarge='" + userDischarge + "'" +
//            ", codeStatus='" + codeStatus + "'" +
//            '}';
//    }
}

