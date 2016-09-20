(function() {
  'use strict';

  angular
    .module('ctnv2')
    .factory('RDService', RDService);

  /** @ngInject */
  function RDService($http) {
    
    var checkRounding = function(ctnID, today, centerID) {
      alert("call api with "+ctnID+" "+today+" "+centerID);
      return $http.get('http://localhost:8080/adt/api/roundings/check?'
                      +'ctnID='+ctnID+'&&date='+today+'&&id='+centerID)
                .then(function (response) {
                    return response;
                });
    };
    
    var saveRounding = function(rounding) {
      return $http.post('http://localhost:8080/adt/api/roundings', 
                rounding)
                .then(function (response) {
                    return response;
                });
    };
    
    var rdData = {
      sedationBreak: '',
      delirium:'',
      pain:'',
      cvMeds:'',
      lpv:'',
      spb:'',
      hob:'',
      fluid:'',
      electrolyte:'',
      glucose:'',
      sup:'',
      nutrition:'',
      dvt:'',
      antibio:'',
      skin:'',
      meds:'',
      devices:'',
      pt:'',
      goal:'',
      icuDischarge:'',
      printFlag: false
    };
    
    var detail = {
        cns_sb_y1: '',
        cns_sb_y2: '',
        cns_sb_y3: '',
        cns_sb_n1: '',
        cns_sb_n2: '',
        cns_sb_n3: '',
        cns_sb_n4: '',
        cns_sb_n5: '',
        cns_sb_n6: '',
        cns_sb_n7: '',
        
        cns_d_y1:  '',
        cns_d_y2:  '',
        cns_d_y3:  '',
        cns_d_y4:  '',
        cns_d_y5:  '',
        cns_d_y6:  '',
        cns_d_n1:  '',
        cns_d_n2:  '',
        cns_d_n3:  '',
        
        cns_p_y1:  '',
        cns_p_y2:  '',
        cns_p_y3:  '',
        cns_p_y4:  '',
        cns_p_n1:  '',
        cns_p_n2:  '',
        cns_p_n3:  '',
        cns_p_n4:  '',
        
        
        cvs_m_y1: '',
        cvs_m_y2: '',
        cvs_m_y3: '',
        cvs_m_y4: '',
        cvs_m_n1: '',
        cvs_m_n2: '',
        cvs_m_n3: '',
        cvs_m_n4: '',
        cvs_m_n5: '',
        
        
        resp_l_y1: '',
        resp_l_y2: '',
        resp_l_y3: '',
        resp_l_n1: '',
        resp_l_n2: '',
        
        resp_s_y1: '',
        resp_s_y2: '',
        resp_s_n1: '',
        resp_s_n2: '',
        resp_s_n3: '',
        resp_s_n4: '',
        resp_s_n5: '',
        
        resp_h_y1: '',
        resp_h_y2: '',
        resp_h_n1: '',
        resp_h_n2: '',
        resp_h_n3: '',
        
        
        kidney_f_y1: '',
        kidney_f_y2: '',
        kidney_f_y3: '',
        kidney_f_y4: '',
        kidney_f_n1: '',
        kidney_f_n2: '',
        
        kidney_e_y1: '',
        kidney_e_y2: '',
        kidney_e_y3: '',
        kidney_e_y4: '',
        kidney_e_n1: '',
        
        
        gi_g_y1: '',
        gi_g_y2: '',
        gi_g_y3: '',
        gi_g_y4: '',
        gi_g_n1: '',
        
        gi_s_y1: '',
        gi_s_y2: '',
        gi_s_y3: '',
        gi_s_y4: '',
        gi_s_y5: '',
        gi_s_n1: '',
        gi_s_n2: '',
        
        gi_n_y1: '',
        gi_n_y2: '',
        gi_n_y3: '',
        gi_n_n1: '',
        gi_n_n2: '',
        gi_n_n3: '',
        gi_n_n4: '',

        
        hem_dvt_y1: '',
        hem_dvt_y2: '',
        hem_dvt_y3: '',
        hem_dvt_y4: '',
        hem_dvt_n1: '',
        hem_dvt_n2: '',
        hem_dvt_n3: '',

        
        id_a_y1: '',
        id_a_y2: '',
        id_a_y3: '',
        id_a_y4: '',
        id_a_y6: '',
        id_a_y5: '',
        id_a_n1: '',
        id_a_n2: '',

        
        skin_s_y1: '',
        skin_s_y2: '',
        skin_s_y3: '',
        skin_s_n1: '',

        
        med_m_y1: '',
        med_m_y2: '',
        med_m_n1: '',

        
        dev_d_y1: '',
        dev_d_y2: '',
        dev_d_y3: '',
        dev_d_y4: '',
        dev_d_y5: '',
        dev_d_y6: '',
        dev_d_y7: '',
        dev_d_y8: '',
        dev_d_n1: '',
        
        
        pt_p_y1: '',
        pt_p_y2: '',
        pt_p_y3: '',
        pt_p_n1: '',
        pt_p_n2: '',

        
        goal_s_y1: '',
        goal_s_y2: '',
        goal_s_y3: '',
        goal_s_y4: '',
        goal_s_y5: '',
        goal_s_y6: '',
        goal_s_y7: '',
        goal_s_y8: '',
        goal_s_n1: '',

        
        dis_i_y1: '',
        dis_i_y2: '',
        dis_i_y3: '',
        dis_i_n1: '',
        dis_i_n2: '',

        
        roundDT: '',
        clinicNo: ''
    }
    
     var clearRound= function() {
       
        
        detail.cns_sb_y1='';
        detail.cns_sb_y2= '';
        detail.cns_sb_y3= '';
        detail.cns_sb_n1= '';
        detail.cns_sb_n2= '';
        detail.cns_sb_n3= '';
        detail.cns_sb_n4= '';
        detail.cns_sb_n5= '';
        detail.cns_sb_n6= '';
        detail.cns_sb_n7= '';
        rdData.sedationBreak='';
        
        detail.cns_d_y1= '';
        detail.cns_d_y2=  '';
        detail.cns_d_y3=  '';
        detail.cns_d_y4=  '';
        detail.cns_d_y5=  '';
        detail.cns_d_y6=  '';
        detail.cns_d_n1=  '';
        detail.cns_d_n2=  '';
        detail.cns_d_n3=  '';
        rdData.delirium=  '';
        
        detail.cns_p_y1=  '';
        detail.cns_p_y2=  '';
        detail.cns_p_y3=  '';
        detail.cns_p_y4=  '';
        detail.cns_p_n1=  '';
        detail.cns_p_n2=  '';
        detail.cns_p_n3=  '';
        detail.cns_p_n4=  '';
        rdData.pain = '';
        
        detail.cvs_m_y1= '';
        detail.cvs_m_y2= '';
        detail.cvs_m_y3= '';
        detail.cvs_m_y4= '';
        detail.cvs_m_n1='';
        detail.cvs_m_n2= '';
        detail.cvs_m_n3= '';
        detail.cvs_m_n4= '';
        detail.cvs_m_n5= '';
        rdData.cvMeds = '';
        
        detail.resp_l_y1='';
        detail.resp_l_y2= '';
        detail.resp_l_y3= '';
        detail.resp_l_n1= '';
        detail.resp_l_n2= '';
        rdData.lpv = '';
        
        detail.resp_s_y1= '';
        detail.resp_s_y2= '';
        detail.resp_s_n1= '';
        detail.resp_s_n2= '';
        detail.resp_s_n3= '';
        detail.resp_s_n4= '';
        detail.resp_s_n5= '';
        rdData.spb = '';
        
        detail.resp_h_y1= '';
        detail.resp_h_y2= '';
        detail.resp_h_n1= '';
        detail.resp_h_n2= '';
        detail.resp_h_n3= '';
        rdData.hob = '';
        
        detail.kidney_f_y1= '';
        detail.kidney_f_y2= '';
        detail.kidney_f_y3= '';
        detail.kidney_f_y4= '';
        detail.kidney_f_n1= '';
        detail.kidney_f_n2= '';
        rdData.fluid = '';
        
        detail.kidney_e_y1= '';
        detail.kidney_e_y2= '';
        detail.kidney_e_y3= '';
        detail.kidney_e_y4= '';
        detail.kidney_e_n1= '';
        rdData.electrolyte = '';
        
        detail.gi_g_y1= '';
        detail.gi_g_y2= '';
        detail.gi_g_y3= '';
        detail.gi_g_y4= '';
        detail.gi_g_n1= '';
        rdData.glucose = '';
        
        detail.gi_s_y1= '';
        detail.gi_s_y2= '';
        detail.gi_s_y3= '';
        detail.gi_s_y4= '';
        detail.gi_s_y5= '';
        detail.gi_s_n1= '';
        detail.gi_s_n2= '';
        rdData.sup = '';
        
        detail.gi_n_y1= '';
        detail.gi_n_y2= '';
        detail.gi_n_y3= '';
        detail.gi_n_n1= '';
        detail.gi_n_n2= '';
        detail.gi_n_n3= '';
        detail.gi_n_n4= '';
        rdData.nutrition = '';
        
        detail.hem_dvt_y1= '';
        detail.hem_dvt_y2= '';
        detail.hem_dvt_y3= '';
        detail.hem_dvt_y4= '';
        detail.hem_dvt_n1= '';
        detail.hem_dvt_n2= '';
        detail.hem_dvt_n3= '';
        rdData.dvt = '';
        
        detail.id_a_y1= '';
        detail.id_a_y2= '';
        detail.id_a_y3= '';
        detail.id_a_y4= '';
        detail.id_a_y6= '';
        detail.id_a_y5= '';
        detail.id_a_n1= '';
        detail.id_a_n2= '';
        rdData.antibio = '';
        
        detail.skin_s_y1='';
        detail.skin_s_y2= '';
        detail.skin_s_y3= '';
        detail.skin_s_n1= '';
        rdData.skin = '';
        
        detail.med_m_y1= '';
        detail.med_m_y2= '';
        detail.med_m_n1= '';
        rdData.meds = '';
        
        detail.dev_d_y1= '';
        detail.dev_d_y2= '';
        detail.dev_d_y3= '';
        detail.dev_d_y4= '';
        detail.dev_d_y5= '';
        detail.dev_d_y6= '';
        detail.dev_d_y7= '';
        detail.dev_d_y8= '';
        detail.dev_d_n1= '';
        rdData.devices = '';
        
        detail.pt_p_y1= '';
        detail.pt_p_y2= '';
        detail.pt_p_y3= '';
        detail.pt_p_n1= '';
        detail.pt_p_n2= '';
        rdData.pt = '';
        
        detail.goal_s_y1= '';
        detail.goal_s_y2= '';
        detail.goal_s_y3= '';
        detail.goal_s_y4= '';
        detail.goal_s_y5= '';
        detail.goal_s_y6= '';
        detail.goal_s_y7= '';
        detail.goal_s_y8= '';
        detail.goal_s_n1= '';
        rdData.goal = '';
        
        detail.dis_i_y1= '';
        detail.dis_i_y2= '';
        detail.dis_i_y3= '';
        detail.dis_i_n1= '';
        detail.dis_i_n2= '';
        rdData.icuDischarge='';
        
        detail.roundDT = '';
        detail.clinicNo= '';
        rdData.printFlag = false;
        
    };
    

    
    return   {
      rdData:rdData,
      detail:detail,
      clearRound:clearRound,
      checkRounding:checkRounding,
      saveRounding:saveRounding
    }
    
  }
})();