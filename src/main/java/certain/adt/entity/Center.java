package certain.adt.entity;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Objects;

@Entity
@Table(name = "certain_idp_center")
public class Center implements Serializable {
    
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Size(max = 255)
    @Column(name = "hospital_token", length = 255)
    private String hospitalToken;
    
    @Size(max = 50)
    @Column( length = 50)
    private String name;

    @Size(max = 50)
    @Column(length = 50)
    private String city;
    
    @Size(max = 50)
    @Column( length = 50)
    private String country;
    
    @OneToMany(mappedBy = "center")
    @JsonIgnore
    private Set<User> users = new HashSet<>();
    
    @OneToMany(mappedBy = "center")
    @JsonIgnore
    private Set<Admission> admissions = new HashSet<>();
    
    @OneToMany(mappedBy = "center")
    @JsonIgnore
    private Set<Round> roundings = new HashSet<>();
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHospitalToken() {
        return hospitalToken;
    }

    public Center hospitalToken(String hospitalToken) {
        this.hospitalToken = hospitalToken;
        return this;
    }

    public void setHospitalToken(String hospitalToken) {
        this.hospitalToken = hospitalToken;
    }

    public String getName() {
        return name;
    }

    public Center name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public Center city(String city) {
        this.city = city;
        return this;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public Center country(String country) {
        this.country = country;
        return this;
    }

    public void setCountry(String country) {
        this.country = country;
    }
    
    public Set<User> getUsers() {
        return users;
    }

    public Center Users(Set<User> users) {
        this.users = users;
        return this;
    }

    public Center addCUser(User user) {
        users.add(user);
        user.setCenter(this);
        return this;
    }
    
    public Set<Round> getRoundings() {
        return roundings;
    }

    public void setRoundings(Set<Round> rds) {
        this.roundings = rds;
    }
    
    
    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Center c = (Center) o;
        if(c.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, c.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
    
}
