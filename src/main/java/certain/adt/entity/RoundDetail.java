package certain.adt.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "certain_adt_rd_detail")
public class RoundDetail implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long              id;

    @Column
    private String            cns_sb_y1;
    @Column
    private String            cns_sb_y2;
    @Column
    private String            cns_sb_y3;
    @Column
    private String            cns_sb_n1;
    @Column
    private String            cns_sb_n2;
    @Column
    private String            cns_sb_n3;
    @Column
    private String            cns_sb_n4;
    @Column
    private String            cns_sb_n5;
    @Column
    private String            cns_sb_n6;
    @Column
    private String            cns_sb_n7;
    @Column
    private String            cns_d_y1;
    @Column
    private String            cns_d_y2;
    @Column
    private String            cns_d_y3;
    @Column
    private String            cns_d_y4;
    @Column
    private String            cns_d_y5;
    @Column
    private String            cns_d_y6;
    @Column
    private String            cns_d_n1;
    @Column
    private String            cns_d_n2;
    @Column
    private String            cns_d_n3;
    @Column
    private String            cns_p_y1;
    @Column
    private String            cns_p_y2;
    @Column
    private String            cns_p_y3;
    @Column
    private String            cns_p_y4;
    @Column
    private String            cns_p_n1;
    @Column
    private String            cns_p_n2;
    @Column
    private String            cns_p_n3;
    @Column
    private String            cns_p_n4;
    @Column
    private String            cvs_m_y1;
    @Column
    private String            cvs_m_y2;
    @Column
    private String            cvs_m_y3;
    @Column
    private String            cvs_m_y4;
    @Column
    private String            cvs_m_n1;
    @Column
    private String            cvs_m_n2;
    @Column
    private String            cvs_m_n3;
    @Column
    private String            cvs_m_n4;
    @Column
    private String            cvs_m_n5;
    @Column
    private String            resp_l_y1;
    @Column
    private String            resp_l_y2;
    @Column
    private String            resp_l_y3;
    @Column
    private String            resp_l_n1;
    @Column
    private String            resp_l_n2;
    @Column
    private String            resp_s_y1;
    @Column
    private String            resp_s_y2;
    @Column
    private String            resp_s_n1;
    @Column
    private String            resp_s_n2;
    @Column
    private String            resp_s_n3;
    @Column
    private String            resp_s_n4;
    @Column
    private String            resp_s_n5;
    @Column
    private String            resp_h_y1;
    @Column
    private String            resp_h_y2;
    @Column
    private String            resp_h_n1;
    @Column
    private String            resp_h_n2;
    @Column
    private String            resp_h_n3;
    @Column
    private String            kidney_f_y1;
    @Column
    private String            kidney_f_y2;
    @Column
    private String            kidney_f_y3;
    @Column
    private String            kidney_f_y4;
    @Column
    private String            kidney_f_n1;
    @Column
    private String            kidney_f_n2;
    @Column
    private String            kidney_e_y1;
    @Column
    private String            kidney_e_y2;
    @Column
    private String            kidney_e_y3;
    @Column
    private String            kidney_e_y4;
    @Column
    private String            kidney_e_n1;
    @Column
    private String            gi_g_y1;
    @Column
    private String            gi_g_y2;
    @Column
    private String            gi_g_y3;
    @Column
    private String            gi_g_y4;
    @Column
    private String            gi_g_n1;
    @Column
    private String            gi_s_y1;
    @Column
    private String            gi_s_y2;
    @Column
    private String            gi_s_y3;
    @Column
    private String            gi_s_y4;
    @Column
    private String            gi_s_y5;
    @Column
    private String            gi_s_n1;
    @Column
    private String            gi_s_n2;
    @Column
    private String            gi_n_y1;
    @Column
    private String            gi_n_y2;
    @Column
    private String            gi_n_y3;
    @Column
    private String            gi_n_n1;
    @Column
    private String            gi_n_n2;
    @Column
    private String            gi_n_n3;
    @Column
    private String            gi_n_n4;
    @Column
    private String            hem_dvt_y1;
    @Column
    private String            hem_dvt_y2;
    @Column
    private String            hem_dvt_y3;
    @Column
    private String            hem_dvt_y4;
    @Column
    private String            hem_dvt_n1;
    @Column
    private String            hem_dvt_n2;
    @Column
    private String            hem_dvt_n3;
    @Column
    private String            id_a_y1;
    @Column
    private String            id_a_y2;
    @Column
    private String            id_a_y3;
    @Column
    private String            id_a_y4;
    @Column
    private String            id_a_y5;
    @Column
    private String            id_a_y6;
    @Column
    private String            id_a_n1;
    @Column
    private String            id_a_n2;
    @Column
    private String            skin_s_y1;
    @Column
    private String            skin_s_y2;
    @Column
    private String            skin_s_y3;
    @Column
    private String            skin_s_n1;
    @Column
    private String            med_m_y1;
    @Column
    private String            med_m_y2;
    @Column
    private String            med_m_n1;
    @Column
    private String            dev_d_y1;
    @Column
    private String            dev_d_y2;
    @Column
    private String            dev_d_y3;
    @Column
    private String            dev_d_y4;
    @Column
    private String            dev_d_y5;
    @Column
    private String            dev_d_y6;
    @Column
    private String            dev_d_y7;
    @Column
    private String            dev_d_y8;
    @Column
    private String            dev_d_n1;
    @Column
    private String            pt_p_y1;
    @Column
    private String            pt_p_y2;
    @Column
    private String            pt_p_y3;
    @Column
    private String            pt_p_n1;
    @Column
    private String            pt_p_n2;
    @Column
    private String            goal_s_y1;
    @Column
    private String            goal_s_y2;
    @Column
    private String            goal_s_y3;
    @Column
    private String            goal_s_y4;
    @Column
    private String            goal_s_y5;
    @Column
    private String            goal_s_y6;
    @Column
    private String            goal_s_y7;
    @Column
    private String            goal_s_y8;
    @Column
    private String            goal_s_n1;
    @Column
    private String            dis_i_y1;
    @Column
    private String            dis_i_y2;
    @Column
    private String            dis_i_y3;
    @Column
    private String            dis_i_n1;
    @Column
    private String            dis_i_n2;
    
    @OneToOne(mappedBy = "rdetail")
    private Round             rd;
    
    
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
    public String getCns_sb_y1() {
        return cns_sb_y1;
    }

    public void setCns_sb_y1(String cns_sb_y1) {
        this.cns_sb_y1 = cns_sb_y1;
    }

    public String getCns_sb_y2() {
        return cns_sb_y2;
    }

    public void setCns_sb_y2(String cns_sb_y2) {
        this.cns_sb_y2 = cns_sb_y2;
    }

    public String getCns_sb_y3() {
        return cns_sb_y3;
    }

    public void setCns_sb_y3(String cns_sb_y3) {
        this.cns_sb_y3 = cns_sb_y3;
    }

    public String getCns_sb_n1() {
        return cns_sb_n1;
    }

    public void setCns_sb_n1(String cns_sb_n1) {
        this.cns_sb_n1 = cns_sb_n1;
    }

    public String getCns_sb_n2() {
        return cns_sb_n2;
    }

    public void setCns_sb_n2(String cns_sb_n2) {
        this.cns_sb_n2 = cns_sb_n2;
    }

    public String getCns_sb_n3() {
        return cns_sb_n3;
    }

    public void setCns_sb_n3(String cns_sb_n3) {
        this.cns_sb_n3 = cns_sb_n3;
    }

    public String getCns_sb_n4() {
        return cns_sb_n4;
    }

    public void setCns_sb_n4(String cns_sb_n4) {
        this.cns_sb_n4 = cns_sb_n4;
    }

    public String getCns_sb_n5() {
        return cns_sb_n5;
    }

    public void setCns_sb_n5(String cns_sb_n5) {
        this.cns_sb_n5 = cns_sb_n5;
    }

    public String getCns_sb_n6() {
        return cns_sb_n6;
    }

    public void setCns_sb_n6(String cns_sb_n6) {
        this.cns_sb_n6 = cns_sb_n6;
    }

    public String getCns_sb_n7() {
        return cns_sb_n7;
    }

    public void setCns_sb_n7(String cns_sb_n7) {
        this.cns_sb_n7 = cns_sb_n7;
    }

    public String getCns_d_y1() {
        return cns_d_y1;
    }

    public void setCns_d_y1(String cns_d_y1) {
        this.cns_d_y1 = cns_d_y1;
    }

    public String getCns_d_y2() {
        return cns_d_y2;
    }

    public void setCns_d_y2(String cns_d_y2) {
        this.cns_d_y2 = cns_d_y2;
    }

    public String getCns_d_y3() {
        return cns_d_y3;
    }

    public void setCns_d_y3(String cns_d_y3) {
        this.cns_d_y3 = cns_d_y3;
    }

    public String getCns_d_y4() {
        return cns_d_y4;
    }

    public void setCns_d_y4(String cns_d_y4) {
        this.cns_d_y4 = cns_d_y4;
    }

    public String getCns_d_y5() {
        return cns_d_y5;
    }

    public void setCns_d_y5(String cns_d_y5) {
        this.cns_d_y5 = cns_d_y5;
    }

    public String getCns_d_y6() {
        return cns_d_y6;
    }

    public void setCns_d_y6(String cns_d_y6) {
        this.cns_d_y6 = cns_d_y6;
    }

    public String getCns_d_n1() {
        return cns_d_n1;
    }

    public void setCns_d_n1(String cns_d_n1) {
        this.cns_d_n1 = cns_d_n1;
    }

    public String getCns_d_n2() {
        return cns_d_n2;
    }

    public void setCns_d_n2(String cns_d_n2) {
        this.cns_d_n2 = cns_d_n2;
    }

    public String getCns_d_n3() {
        return cns_d_n3;
    }

    public void setCns_d_n3(String cns_d_n3) {
        this.cns_d_n3 = cns_d_n3;
    }

    public String getCns_p_y1() {
        return cns_p_y1;
    }

    public void setCns_p_y1(String cns_p_y1) {
        this.cns_p_y1 = cns_p_y1;
    }

    public String getCns_p_y2() {
        return cns_p_y2;
    }

    public void setCns_p_y2(String cns_p_y2) {
        this.cns_p_y2 = cns_p_y2;
    }

    public String getCns_p_y3() {
        return cns_p_y3;
    }

    public void setCns_p_y3(String cns_p_y3) {
        this.cns_p_y3 = cns_p_y3;
    }

    public String getCns_p_y4() {
        return cns_p_y4;
    }

    public void setCns_p_y4(String cns_p_y4) {
        this.cns_p_y4 = cns_p_y4;
    }

    public String getCns_p_n1() {
        return cns_p_n1;
    }

    public void setCns_p_n1(String cns_p_n1) {
        this.cns_p_n1 = cns_p_n1;
    }

    public String getCns_p_n2() {
        return cns_p_n2;
    }

    public void setCns_p_n2(String cns_p_n2) {
        this.cns_p_n2 = cns_p_n2;
    }

    public String getCns_p_n3() {
        return cns_p_n3;
    }

    public void setCns_p_n3(String cns_p_n3) {
        this.cns_p_n3 = cns_p_n3;
    }

    public String getCns_p_n4() {
        return cns_p_n4;
    }

    public void setCns_p_n4(String cns_p_n4) {
        this.cns_p_n4 = cns_p_n4;
    }

    public String getCvs_m_y1() {
        return cvs_m_y1;
    }

    public void setCvs_m_y1(String cvs_m_y1) {
        this.cvs_m_y1 = cvs_m_y1;
    }

    public String getCvs_m_y2() {
        return cvs_m_y2;
    }

    public void setCvs_m_y2(String cvs_m_y2) {
        this.cvs_m_y2 = cvs_m_y2;
    }

    public String getCvs_m_y3() {
        return cvs_m_y3;
    }

    public void setCvs_m_y3(String cvs_m_y3) {
        this.cvs_m_y3 = cvs_m_y3;
    }

    public String getCvs_m_y4() {
        return cvs_m_y4;
    }

    public void setCvs_m_y4(String cvs_m_y4) {
        this.cvs_m_y4 = cvs_m_y4;
    }

    public String getCvs_m_n1() {
        return cvs_m_n1;
    }

    public void setCvs_m_n1(String cvs_m_n1) {
        this.cvs_m_n1 = cvs_m_n1;
    }

    public String getCvs_m_n2() {
        return cvs_m_n2;
    }

    public void setCvs_m_n2(String cvs_m_n2) {
        this.cvs_m_n2 = cvs_m_n2;
    }

    public String getCvs_m_n3() {
        return cvs_m_n3;
    }

    public void setCvs_m_n3(String cvs_m_n3) {
        this.cvs_m_n3 = cvs_m_n3;
    }

    public String getCvs_m_n4() {
        return cvs_m_n4;
    }

    public void setCvs_m_n4(String cvs_m_n4) {
        this.cvs_m_n4 = cvs_m_n4;
    }

    public String getCvs_m_n5() {
        return cvs_m_n5;
    }

    public void setCvs_m_n5(String cvs_m_n5) {
        this.cvs_m_n5 = cvs_m_n5;
    }

    public String getResp_l_y1() {
        return resp_l_y1;
    }

    public void setResp_l_y1(String resp_l_y1) {
        this.resp_l_y1 = resp_l_y1;
    }

    public String getResp_l_y2() {
        return resp_l_y2;
    }

    public void setResp_l_y2(String resp_l_y2) {
        this.resp_l_y2 = resp_l_y2;
    }

    public String getResp_l_y3() {
        return resp_l_y3;
    }

    public void setResp_l_y3(String resp_l_y3) {
        this.resp_l_y3 = resp_l_y3;
    }

    public String getResp_l_n1() {
        return resp_l_n1;
    }

    public void setResp_l_n1(String resp_l_n1) {
        this.resp_l_n1 = resp_l_n1;
    }

    public String getResp_l_n2() {
        return resp_l_n2;
    }

    public void setResp_l_n2(String resp_l_n2) {
        this.resp_l_n2 = resp_l_n2;
    }

    public String getResp_s_y1() {
        return resp_s_y1;
    }

    public void setResp_s_y1(String resp_s_y1) {
        this.resp_s_y1 = resp_s_y1;
    }

    public String getResp_s_y2() {
        return resp_s_y2;
    }

    public void setResp_s_y2(String resp_s_y2) {
        this.resp_s_y2 = resp_s_y2;
    }

    public String getResp_s_n1() {
        return resp_s_n1;
    }

    public void setResp_s_n1(String resp_s_n1) {
        this.resp_s_n1 = resp_s_n1;
    }

    public String getResp_s_n2() {
        return resp_s_n2;
    }

    public void setResp_s_n2(String resp_s_n2) {
        this.resp_s_n2 = resp_s_n2;
    }

    public String getResp_s_n3() {
        return resp_s_n3;
    }

    public void setResp_s_n3(String resp_s_n3) {
        this.resp_s_n3 = resp_s_n3;
    }

    public String getResp_s_n4() {
        return resp_s_n4;
    }

    public void setResp_s_n4(String resp_s_n4) {
        this.resp_s_n4 = resp_s_n4;
    }

    public String getResp_s_n5() {
        return resp_s_n5;
    }

    public void setResp_s_n5(String resp_s_n5) {
        this.resp_s_n5 = resp_s_n5;
    }

    public String getResp_h_y1() {
        return resp_h_y1;
    }

    public void setResp_h_y1(String resp_h_y1) {
        this.resp_h_y1 = resp_h_y1;
    }

    public String getResp_h_y2() {
        return resp_h_y2;
    }

    public void setResp_h_y2(String resp_h_y2) {
        this.resp_h_y2 = resp_h_y2;
    }

    public String getResp_h_n1() {
        return resp_h_n1;
    }

    public void setResp_h_n1(String resp_h_n1) {
        this.resp_h_n1 = resp_h_n1;
    }

    public String getResp_h_n2() {
        return resp_h_n2;
    }

    public void setResp_h_n2(String resp_h_n2) {
        this.resp_h_n2 = resp_h_n2;
    }

    public String getResp_h_n3() {
        return resp_h_n3;
    }

    public void setResp_h_n3(String resp_h_n3) {
        this.resp_h_n3 = resp_h_n3;
    }

    public String getKidney_f_y1() {
        return kidney_f_y1;
    }

    public void setKidney_f_y1(String kidney_f_y1) {
        this.kidney_f_y1 = kidney_f_y1;
    }

    public String getKidney_f_y2() {
        return kidney_f_y2;
    }

    public void setKidney_f_y2(String kidney_f_y2) {
        this.kidney_f_y2 = kidney_f_y2;
    }

    public String getKidney_f_y3() {
        return kidney_f_y3;
    }

    public void setKidney_f_y3(String kidney_f_y3) {
        this.kidney_f_y3 = kidney_f_y3;
    }

    public String getKidney_f_y4() {
        return kidney_f_y4;
    }

    public void setKidney_f_y4(String kidney_f_y4) {
        this.kidney_f_y4 = kidney_f_y4;
    }

    public String getKidney_f_n1() {
        return kidney_f_n1;
    }

    public void setKidney_f_n1(String kidney_f_n1) {
        this.kidney_f_n1 = kidney_f_n1;
    }

    public String getKidney_f_n2() {
        return kidney_f_n2;
    }

    public void setKidney_f_n2(String kidney_f_n2) {
        this.kidney_f_n2 = kidney_f_n2;
    }

    public String getKidney_e_y1() {
        return kidney_e_y1;
    }

    public void setKidney_e_y1(String kidney_e_y1) {
        this.kidney_e_y1 = kidney_e_y1;
    }

    public String getKidney_e_y2() {
        return kidney_e_y2;
    }

    public void setKidney_e_y2(String kidney_e_y2) {
        this.kidney_e_y2 = kidney_e_y2;
    }

    public String getKidney_e_y3() {
        return kidney_e_y3;
    }

    public void setKidney_e_y3(String kidney_e_y3) {
        this.kidney_e_y3 = kidney_e_y3;
    }

    public String getKidney_e_y4() {
        return kidney_e_y4;
    }

    public void setKidney_e_y4(String kidney_e_y4) {
        this.kidney_e_y4 = kidney_e_y4;
    }

    public String getKidney_e_n1() {
        return kidney_e_n1;
    }

    public void setKidney_e_n1(String kidney_e_n1) {
        this.kidney_e_n1 = kidney_e_n1;
    }

    public String getGi_g_y1() {
        return gi_g_y1;
    }

    public void setGi_g_y1(String gi_g_y1) {
        this.gi_g_y1 = gi_g_y1;
    }

    public String getGi_g_y2() {
        return gi_g_y2;
    }

    public void setGi_g_y2(String gi_g_y2) {
        this.gi_g_y2 = gi_g_y2;
    }

    public String getGi_g_y3() {
        return gi_g_y3;
    }

    public void setGi_g_y3(String gi_g_y3) {
        this.gi_g_y3 = gi_g_y3;
    }

    public String getGi_g_y4() {
        return gi_g_y4;
    }

    public void setGi_g_y4(String gi_g_y4) {
        this.gi_g_y4 = gi_g_y4;
    }

    public String getGi_g_n1() {
        return gi_g_n1;
    }

    public void setGi_g_n1(String gi_g_n1) {
        this.gi_g_n1 = gi_g_n1;
    }

    public String getGi_s_y1() {
        return gi_s_y1;
    }

    public void setGi_s_y1(String gi_s_y1) {
        this.gi_s_y1 = gi_s_y1;
    }

    public String getGi_s_y2() {
        return gi_s_y2;
    }

    public void setGi_s_y2(String gi_s_y2) {
        this.gi_s_y2 = gi_s_y2;
    }

    public String getGi_s_y3() {
        return gi_s_y3;
    }

    public void setGi_s_y3(String gi_s_y3) {
        this.gi_s_y3 = gi_s_y3;
    }

    public String getGi_s_y4() {
        return gi_s_y4;
    }

    public void setGi_s_y4(String gi_s_y4) {
        this.gi_s_y4 = gi_s_y4;
    }

    public String getGi_s_y5() {
        return gi_s_y5;
    }

    public void setGi_s_y5(String gi_s_y5) {
        this.gi_s_y5 = gi_s_y5;
    }

    public String getGi_s_n1() {
        return gi_s_n1;
    }

    public void setGi_s_n1(String gi_s_n1) {
        this.gi_s_n1 = gi_s_n1;
    }

    public String getGi_s_n2() {
        return gi_s_n2;
    }

    public void setGi_s_n2(String gi_s_n2) {
        this.gi_s_n2 = gi_s_n2;
    }

    public String getGi_n_y1() {
        return gi_n_y1;
    }

    public void setGi_n_y1(String gi_n_y1) {
        this.gi_n_y1 = gi_n_y1;
    }

    public String getGi_n_y2() {
        return gi_n_y2;
    }

    public void setGi_n_y2(String gi_n_y2) {
        this.gi_n_y2 = gi_n_y2;
    }

    public String getGi_n_y3() {
        return gi_n_y3;
    }

    public void setGi_n_y3(String gi_n_y3) {
        this.gi_n_y3 = gi_n_y3;
    }

    public String getGi_n_n1() {
        return gi_n_n1;
    }

    public void setGi_n_n1(String gi_n_n1) {
        this.gi_n_n1 = gi_n_n1;
    }

    public String getGi_n_n2() {
        return gi_n_n2;
    }

    public void setGi_n_n2(String gi_n_n2) {
        this.gi_n_n2 = gi_n_n2;
    }

    public String getGi_n_n3() {
        return gi_n_n3;
    }

    public void setGi_n_n3(String gi_n_n3) {
        this.gi_n_n3 = gi_n_n3;
    }

    public String getGi_n_n4() {
        return gi_n_n4;
    }

    public void setGi_n_n4(String gi_n_n4) {
        this.gi_n_n4 = gi_n_n4;
    }

    public String getHem_dvt_y1() {
        return hem_dvt_y1;
    }

    public void setHem_dvt_y1(String hem_dvt_y1) {
        this.hem_dvt_y1 = hem_dvt_y1;
    }

    public String getHem_dvt_y2() {
        return hem_dvt_y2;
    }

    public void setHem_dvt_y2(String hem_dvt_y2) {
        this.hem_dvt_y2 = hem_dvt_y2;
    }

    public String getHem_dvt_y3() {
        return hem_dvt_y3;
    }

    public void setHem_dvt_y3(String hem_dvt_y3) {
        this.hem_dvt_y3 = hem_dvt_y3;
    }

    public String getHem_dvt_y4() {
        return hem_dvt_y4;
    }

    public void setHem_dvt_y4(String hem_dvt_y4) {
        this.hem_dvt_y4 = hem_dvt_y4;
    }

    public String getHem_dvt_n1() {
        return hem_dvt_n1;
    }

    public void setHem_dvt_n1(String hem_dvt_n1) {
        this.hem_dvt_n1 = hem_dvt_n1;
    }

    public String getHem_dvt_n2() {
        return hem_dvt_n2;
    }

    public void setHem_dvt_n2(String hem_dvt_n2) {
        this.hem_dvt_n2 = hem_dvt_n2;
    }

    public String getHem_dvt_n3() {
        return hem_dvt_n3;
    }

    public void setHem_dvt_n3(String hem_dvt_n3) {
        this.hem_dvt_n3 = hem_dvt_n3;
    }

    public String getId_a_y1() {
        return id_a_y1;
    }

    public void setId_a_y1(String id_a_y1) {
        this.id_a_y1 = id_a_y1;
    }

    public String getId_a_y2() {
        return id_a_y2;
    }

    public void setId_a_y2(String id_a_y2) {
        this.id_a_y2 = id_a_y2;
    }

    public String getId_a_y3() {
        return id_a_y3;
    }

    public void setId_a_y3(String id_a_y3) {
        this.id_a_y3 = id_a_y3;
    }

    public String getId_a_y4() {
        return id_a_y4;
    }

    public void setId_a_y4(String id_a_y4) {
        this.id_a_y4 = id_a_y4;
    }

    public String getId_a_y5() {
        return id_a_y5;
    }

    public void setId_a_y5(String id_a_y5) {
        this.id_a_y5 = id_a_y5;
    }

    public String getId_a_y6() {
        return id_a_y6;
    }

    public void setId_a_y6(String id_a_y6) {
        this.id_a_y6 = id_a_y6;
    }

    public String getId_a_n1() {
        return id_a_n1;
    }

    public void setId_a_n1(String id_a_n1) {
        this.id_a_n1 = id_a_n1;
    }

    public String getId_a_n2() {
        return id_a_n2;
    }

    public void setId_a_n2(String id_a_n2) {
        this.id_a_n2 = id_a_n2;
    }

    public String getSkin_s_y1() {
        return skin_s_y1;
    }

    public void setSkin_s_y1(String skin_s_y1) {
        this.skin_s_y1 = skin_s_y1;
    }

    public String getSkin_s_y2() {
        return skin_s_y2;
    }

    public void setSkin_s_y2(String skin_s_y2) {
        this.skin_s_y2 = skin_s_y2;
    }

    public String getSkin_s_y3() {
        return skin_s_y3;
    }

    public void setSkin_s_y3(String skin_s_y3) {
        this.skin_s_y3 = skin_s_y3;
    }

    public String getSkin_s_n1() {
        return skin_s_n1;
    }

    public void setSkin_s_n1(String skin_s_n1) {
        this.skin_s_n1 = skin_s_n1;
    }

    public String getMed_m_y1() {
        return med_m_y1;
    }

    public void setMed_m_y1(String med_m_y1) {
        this.med_m_y1 = med_m_y1;
    }

    public String getMed_m_y2() {
        return med_m_y2;
    }

    public void setMed_m_y2(String med_m_y2) {
        this.med_m_y2 = med_m_y2;
    }

    public String getMed_m_n1() {
        return med_m_n1;
    }

    public void setMed_m_n1(String med_m_n1) {
        this.med_m_n1 = med_m_n1;
    }

    public String getDev_d_y1() {
        return dev_d_y1;
    }

    public void setDev_d_y1(String dev_d_y1) {
        this.dev_d_y1 = dev_d_y1;
    }

    public String getDev_d_y2() {
        return dev_d_y2;
    }

    public void setDev_d_y2(String dev_d_y2) {
        this.dev_d_y2 = dev_d_y2;
    }

    public String getDev_d_y3() {
        return dev_d_y3;
    }

    public void setDev_d_y3(String dev_d_y3) {
        this.dev_d_y3 = dev_d_y3;
    }

    public String getDev_d_y4() {
        return dev_d_y4;
    }

    public void setDev_d_y4(String dev_d_y4) {
        this.dev_d_y4 = dev_d_y4;
    }

    public String getDev_d_y5() {
        return dev_d_y5;
    }

    public void setDev_d_y5(String dev_d_y5) {
        this.dev_d_y5 = dev_d_y5;
    }

    public String getDev_d_y6() {
        return dev_d_y6;
    }

    public void setDev_d_y6(String dev_d_y6) {
        this.dev_d_y6 = dev_d_y6;
    }

    public String getDev_d_y7() {
        return dev_d_y7;
    }

    public void setDev_d_y7(String dev_d_y7) {
        this.dev_d_y7 = dev_d_y7;
    }

    public String getDev_d_y8() {
        return dev_d_y8;
    }

    public void setDev_d_y8(String dev_d_y8) {
        this.dev_d_y8 = dev_d_y8;
    }

    public String getDev_d_n1() {
        return dev_d_n1;
    }

    public void setDev_d_n1(String dev_d_n1) {
        this.dev_d_n1 = dev_d_n1;
    }

    public String getPt_p_y1() {
        return pt_p_y1;
    }

    public void setPt_p_y1(String pt_p_y1) {
        this.pt_p_y1 = pt_p_y1;
    }

    public String getPt_p_y2() {
        return pt_p_y2;
    }

    public void setPt_p_y2(String pt_p_y2) {
        this.pt_p_y2 = pt_p_y2;
    }

    public String getPt_p_y3() {
        return pt_p_y3;
    }

    public void setPt_p_y3(String pt_p_y3) {
        this.pt_p_y3 = pt_p_y3;
    }

    public String getPt_p_n1() {
        return pt_p_n1;
    }

    public void setPt_p_n1(String pt_p_n1) {
        this.pt_p_n1 = pt_p_n1;
    }

    public String getPt_p_n2() {
        return pt_p_n2;
    }

    public void setPt_p_n2(String pt_p_n2) {
        this.pt_p_n2 = pt_p_n2;
    }

    public String getGoal_s_y1() {
        return goal_s_y1;
    }

    public void setGoal_s_y1(String goal_s_y1) {
        this.goal_s_y1 = goal_s_y1;
    }

    public String getGoal_s_y2() {
        return goal_s_y2;
    }

    public void setGoal_s_y2(String goal_s_y2) {
        this.goal_s_y2 = goal_s_y2;
    }

    public String getGoal_s_y3() {
        return goal_s_y3;
    }

    public void setGoal_s_y3(String goal_s_y3) {
        this.goal_s_y3 = goal_s_y3;
    }

    public String getGoal_s_y4() {
        return goal_s_y4;
    }

    public void setGoal_s_y4(String goal_s_y4) {
        this.goal_s_y4 = goal_s_y4;
    }

    public String getGoal_s_y5() {
        return goal_s_y5;
    }

    public void setGoal_s_y5(String goal_s_y5) {
        this.goal_s_y5 = goal_s_y5;
    }

    public String getGoal_s_y6() {
        return goal_s_y6;
    }

    public void setGoal_s_y6(String goal_s_y6) {
        this.goal_s_y6 = goal_s_y6;
    }

    public String getGoal_s_y7() {
        return goal_s_y7;
    }

    public void setGoal_s_y7(String goal_s_y7) {
        this.goal_s_y7 = goal_s_y7;
    }

    public String getGoal_s_y8() {
        return goal_s_y8;
    }

    public void setGoal_s_y8(String goal_s_y8) {
        this.goal_s_y8 = goal_s_y8;
    }

    public String getGoal_s_n1() {
        return goal_s_n1;
    }

    public void setGoal_s_n1(String goal_s_n1) {
        this.goal_s_n1 = goal_s_n1;
    }

    public String getDis_i_y1() {
        return dis_i_y1;
    }

    public void setDis_i_y1(String dis_i_y1) {
        this.dis_i_y1 = dis_i_y1;
    }

    public String getDis_i_y2() {
        return dis_i_y2;
    }

    public void setDis_i_y2(String dis_i_y2) {
        this.dis_i_y2 = dis_i_y2;
    }

    public String getDis_i_y3() {
        return dis_i_y3;
    }

    public void setDis_i_y3(String dis_i_y3) {
        this.dis_i_y3 = dis_i_y3;
    }

    public String getDis_i_n1() {
        return dis_i_n1;
    }

    public void setDis_i_n1(String dis_i_n1) {
        this.dis_i_n1 = dis_i_n1;
    }

    public String getDis_i_n2() {
        return dis_i_n2;
    }

    public void setDis_i_n2(String dis_i_n2) {
        this.dis_i_n2 = dis_i_n2;
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        RoundDetail r = (RoundDetail) o;
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
