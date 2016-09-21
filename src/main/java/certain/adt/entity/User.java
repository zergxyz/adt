package certain.adt.entity;

import certain.adt.config.CustomDateDeserializer;
import certain.adt.config.CustomDateSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
//import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Objects;
import java.util.Date;



@Entity
@Table(name = "certain_idp_user")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @NotNull
    @Column(name = "username", length = 50, unique = true, nullable = false)
    private String username;
    
    @NotNull
    @Size( max = 255)
    @Column(name = "password_hash",length = 255)
    private String password;
    
    @Column(name = "first_name")
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "job_title")
    private String jobTitle;

    @Column(name = "joined_date")
    @Temporal(TemporalType.DATE)
    @JsonDeserialize(using = CustomDateDeserializer.class)
    @JsonSerialize(using = CustomDateSerializer.class)
    private Date joinedDate;

    @ManyToOne
    @JoinColumn(name = "center")
    private Center center;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
    public String getUsername() {
        return username;
    }

    public User username(String username) {
        this.username = username;
        return this;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getPassword() {
        return password;
    }

    public User password(String password) {
        this.password = password;
        return this;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getFirstName() {
        return firstName;
    }

    public User firstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public User middleName(String middleName) {
        this.middleName = middleName;
        return this;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public User lastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public User email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public User jobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public Date getJoinedDate() {
        return joinedDate;
    }

    public User joinedDate(Date joinedDate) {
        this.joinedDate = joinedDate;
        return this;
    }

    public void setJoinedDate(Date joinedDate) {
        this.joinedDate = joinedDate;
    }

    public Center getCenter() {
        return center;
    }

    public User Center(Center center) {
        this.center = center;
        return this;
    }

    public void setCenter(Center center) {
        this.center = center;
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        User User = (User) o;
        if(User.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, User.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

//    @Override
//    public String toString() {
//        return "User{" +
//            "id=" + id +
//            ", username='" + username + "'" +
//            ", password='" + password + "'" +
//            ", firstName='" + firstName + "'" +
//            ", middleName='" + middleName + "'" +
//            ", lastName='" + lastName + "'" +
//            ", email='" + email + "'" +
//            ", jobTitle='" + jobTitle + "'" +
//            ", joinedDate='" + joinedDate + "'" +
//            '}';
//    }
    
}
