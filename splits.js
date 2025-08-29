const splitsSteps = {
  "4x4": {
    "Yau":   ["F2C", "F3E", "L4C", "LCE", "L8E", "3x3"],
    "Redux": ["F2C", "L4C", "F8E", "L4E", "Edges", "3x3"],
    "Hoya":  ["F4C", "F2C", "M2C", "F4E", "L2C", "L8E", "3x3"]
  },
  "5x5": {
    "Yau":   ["F2C", "F3E", "L4C", "L9E", "LCE", "L8E", "3x3"],
    "Redux": ["F2C", "L4C", "F8E", "L4E", "Edges", "3x3"],
    "Hoya":  ["F4C", "F2C", "M2C", "F4E", "L2C", "L8E", "3x3"]
  },
  "6x6": {
    "Yau":   ["F2C", "F3E", "L4C", "L9E", "LCE", "L8E", "3x3"],
    "Redux": ["F2C", "L4C", "F8E", "L4E", "Edges", "3x3"],
    "Hoya":  ["F4C", "F2C", "M2C", "F4E", "L2C", "L8E", "3x3"]
  },
  "7x7": {
    "Yau":   ["F2C", "F3E", "L4C", "L9E", "LCE", "L8E", "3x3"],
    "Redux": ["F2C", "L4C", "F8E", "L4E", "Edges", "3x3"],
    "Hoya":  ["F4C", "F2C", "M2C", "F4E", "L2C", "L8E", "3x3"]
  }
};

const splitsData = {
  "Yau": {
    "4x4": { "F2C": 0.1027, "F3E": 0.1357, "L4C": 0.1498, "LCE": 0.0758, "L8E": 0.2025, "3x3": 0.3335 },
    "5x5": { "F2C": 0.1486, "F3E": 0.1448, "L4C": 0.1962, "L9E": 0.3509, "LCE": 0.0606, "L8E": 0.2902, "3x3": 0.1596 },
    "6x6": { "F2C": 0.2055, "F3E": 0.1083, "L4C": 0.2602, "L9E": 0.2905, "3x3": 0.1354 },
    "7x7": { "F2C": 0.2335, "F3E": 0.1095, "L4C": 0.2867, "L9E": 0.2936, "3x3": 0.0768 }
  },
  "Redux": {
    "4x4": { "F2C": 0.0867, "L4C": 0.1370, "F8E": 0.3753, "L4E": 0.0959, "Edges": 0.4713, "3x3": 0.3051 },
    "5x5": { "F2C": 0.1354, "L4C": 0.1799, "F8E": 0.3475, "L4E": 0.135, "3x3": 0.2023 },
    "6x6": { "F2C": 0.1928, "L4C": 0.2454, "F8E": 0.3069, "L4E": 0.1129, "3x3": 0.142 },
    "7x7": { "F2C": 0.2295, "L4C": 0.2798, "F8E": 0.2851, "L4E": 0.1087, "3x3": 0.0968 }
  },
  "Hoya": {
    "4x4": { "F4C": 0.2238, "F2C": 0.1044, "M2C": 0.1193, "F4E": 0.1957, "L2C": 0.0593, "L8E": 0.1962, "3x3": 0.3251 },
    "5x5": { "F4C": 0.2802, "F4E": 0.184, "L2C": 0.0595, "L8E": 0.3105, "3x3": 0.1695 },
    "6x6": { "F4C": 0.3956, "F4E": 0.175, "L2C": 0.0627, "L8E": 0.2405, "3x3": 0.1262 },
    "7x7": { "F4C": 0.4234, "F4E": 0.1599, "L2C": 0.085, "L8E": 0.2558, "3x3": 0.0759 }
  }
};

const topSolversData = {
  "Yau": {
    "4x4": [
      {
        solver: "Sebastian Weyer",
        time: "20.27",
        splits: {
          "F2C": "2.3",
          "F3E": "3.07",
          "L4C": "2.73",
          "LCE": "1.07",
          "L8E": "4.7",
          "3x3": "6.4"
        },
        youtube: "https://youtu.be/c9HLAGxgA8Q",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=B2_F_D_L-_D-_F_L_F2_R2_D-_F2_U-_D_F2_R2_L_F-_D2_Rw2_F2_D_L-_Uw2_L_F2_B2_D_Fw2_L_U-_L_Fw-_R2_D_Fw_L_D_Rw_D2_Fw_B_D-_U2&alg=x2_%2F%2F_inspection%0AF_u_l_%2F%2F_white%0AU-_l-_U_l_u2_y_U-_U2_r_U-_U-_r-_%2F%2F_yellow%0Az_x-_D-_r-_D-_%2F%2F_WG%0Ax-_D-_R2-_x_U_r2-_3r-_F_%2F%2F_WR%0AR-_U_r_3r_U-_%2F%2F_WB%0AL_U_r-_U-_3r2_U2_r_U_r-_U-_r-_%2F%2F_green%0A3r_U-_r2-_U-_U-_r2_%2F%2F_orange%0A3r-_U-_3r_U_r-_U2_r_%2F%2F_red%2Fblue%0AU_l_U-_R_U_l-_U_z-_y-_D2-_%2F%2F_WO%0Au-_U_R_U-_R-_U_y-_R_U-_R-_y-_L-_U-_L_y-_U_R-_U-_R_U-_R_U-_R-_u_%2F%2F_RB%2FYR%2FOB%2FYB%0AU-_F-_U_F_u-_U_R_U-_R-_u2_%2F%2F_YO%2FRG%0AU-_L-_U_L_d-_U-_%2F%2F_OG%2FYG%0AR_U-_U-_R2-_U-_R2_%2F%2F_1st_pair%0AU-_R-_y_R-_U-_R_U-_R-_U_R_%2F%2F_2nd_pair%0Ay-_U_D_R_U2_R-_U-_R_U_R-_U-_D-_%2F%2F_3rd_pair%0Ay-_R-_U-_U-_R_U_R-_U-_R_%2F%2F_4th_pair%0AU_R-_U-_R_U-_R-_U_F-_U_F_R_%2F%2F_OLL%0AU-_U-_F_R_U-_R-_U-_R_U_R-_F-_R_U_R-_U-_R-_F_R_F-_U2_%2F%2F_PLL"
      },

      {
        solver: "Sebastian Weyer",
        time: "20.12",
        splits: {
          "F2C": "2.45",
          "F3E": "1.53",
          "L4C": "2.93",
          "LCE": "0.9",
          "L8E": "4.25",
          "3x3": "8.06"
        },
        youtube: "https://youtu.be/c9HLAGxgA8Q",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=D-_F2_D_L2_B2_L2_D-_R2_F_U2_B-_L2_D-_B2_L_F-_R_F2_D2_Uw2_F2_Rw2_R-_D_Fw2_L-_D2_Rw2_D2_L-_U_F2_Fw-_Rw2_Uw2_F-_R2_Fw_B-_L_Uw_Fw_Rw-_R_B_Rw2&alg=z-_y_%2F%2F_inspection%0AD_x-_U2_D_r_U-_r2-_%2F%2F_yellow%0AU2_L-_y_R-_u_r_U-_U-_r-_%2F%2F_white%2FWO%0Az-_x-_3r_U2-_r-_3r_U_%2F%2F_WG%0Ax-_R_U_l-_L3_x_U-_%2F%2F_WB%0Ax_3r2-_r_U-_3r_U_r2-_U-_3r_U_3r-_r_%2F%2F_green%0AU_3r_U2_r_U-_r2-_U-_U-_r_%2F%2F_orange%0AU-_r_U-_r2-_3r_U2_l_%2F%2F_red%2Fblue%0Ax-_z-_u-_R-_U-_R_u_R-_%2F%2F_WR%0Au-_U2_L-_U_L_y-_U_L-_U_L_y-_y-_U_u_%2F%2F_YR%2FYG%2FYO%0AU-_U_F-_U_F_u-_U-_R_U-_R-_u_%2F%2F_RG%2FOB%0AU-_R_U-_R-_u-_U_R_U-_R-_u_%2F%2F_RB%2FOG%2FYB%0AU_R_U-_R-_U_R_U_R-_%2F%2F_1st_pair%0AL-_U2_L_U-_U-_L-_U_L_%2F%2F_2nd_pair%0AR-_U2_R_U-_U-_R-_U_R_%2F%2F_3rd_pair%0Ay-_U-_L-_U_L_U_y-_R_U-_R-_%2F%2F_4th_pair%0AU_r_U2-_x_r_U2_r_U2-_r-_U2_l_U2_r-_U2-_r_U2_r-_U2-_r-_%2F%2F_OParity%0AU-_R-_F2_R_U2_R_U-_U-_R-_F2_U-_R_U-_R-_%2F%2F_COLL%0AU-_m2-_U-_m2-_U2-_m2-_U-_m2-_%2F%2F_EPLL"
      },

      {
        solver: "Sebastian Weyer",
        time: "20.47",
        splits: {
          "F2C": "2.43",
          "F3E": "2.5",
          "L4C": "2.32",
          "LCE": "1.97",
          "L8E": "3.58",
          "3x3": "7.67"
        },
        youtube: "https://youtu.be/c9HLAGxgA8Q",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=D_L_B_R_D-_B2_L_D_L2_F_L-_F2_B2_R_F2_R-_F2_B2_L-_D2_Fw2_Rw2_F-_U-_Rw2_F2_U-_F_Rw2_U2_F_Rw2_D2_Rw_D-_B2_Uw2_B2_R-_Fw-_Uw2_Rw-_Uw2_Rw-_Fw_U2&alg=U2_f_r_U-_F-_r_U_r_%2F%2F_white%0AF-_u-_U_l-_U2_l_%2F%2F_yellow%0Az_U_l_D-_%2F%2F_WG%0Ax-_D_L-_U-_r_L_U_%2F%2F_WO%0AL-_r-_L-_L_U-_%2F%2F_WB%0AL-_U_3r_U2_r_U-_3r_r_%2F%2F_green%0AU_3r-_r_U_3r_U-_U-_r-_%2F%2F_orange%0A3r_U_r-_U2_l_%2F%2F_red%2Fgreen%0Az-_y-_u_L-_U_L_u-_D-_F_D_%2F%2F_WR%0Au-_R_U-_R-_y-_y-_R-_U-_R_U_F-_U_F_u_%2F%2F_YB%2FRB%2FOG%2FOB%0AR_U-_R-_u-_U2_R_U-_R-_u_%2F%2F_RG%2FYR%0AU-_R_U-_R-_u-_R_U_R-_F_R-_F-_R_u_%2F%2F_YG%2FYO%0Ay_R_U_R-_L-_U_L_%2F%2F_1st_pair%0Ay_U-_R-_U_R_F_U_F-_%2F%2F_2nd_pair%0AU-_U-_R_U_R2-_U-_U-_R_%2F%2F_3rd_pair%0AU2_R_U_R-_U2_R_U-_R-_U_R_U-_R-_%2F%2F_4th_pair%0AU-_r_U2-_x_r_U2_r_U2-_r-_U2_l_U2_r-_U2-_r_U2_r-_U2-_r-_%2F%2F_OParity%0AU-_3r-_U-_3r_R-_U-_R_U_3r-_U_3r_%2F%2F_OLL(CP)%0AU-_U_R_U-_R_U_R_U_R_U-_R-_U-_R2_U-_%2F%2F_EPLL"
      },

      {
        solver: "Sebastian Weyer",
        time: "18.51",
        splits: {
          "F2C": "2.22",
          "F3E": "2.13",
          "L4C": "2.98",
          "LCE": "1.68",
          "L8E": "2.93",
          "3x3": "6.57"
        },
        youtube: "https://youtu.be/c9HLAGxgA8Q",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=F-_B_D-_B2_R2_U_R_U_D2_L2_D_R2_U_L2_D_B2_L_D2_B-_Rw2_D2_Fw2_L-_U_Rw2_U_R-_Uw2_Fw2_R_Fw-_R2_U_B_D2_Rw2_L_Uw_R2_Uw_F-_Rw-_F2&alg=x_y-_%2F%2F_inspection%0AD_r-_F_u-_D_r2_U2_r_%2F%2F_white%0Ay_F_U-_l-_U2_l_%2F%2F_yellow%0Az_U2_%2F%2F_WG%0Ax-_x-_r_3r_U-_%2F%2F_WB%0Ax-_R2_U_r_3r_U-_%2F%2F_WO%0Ax_x_r-_U_r_U-_r-_3r_U2_r2_%2F%2F_red%0A3r_U-_r-_U-_r_%2F%2F_green%0A3r_U-_3r-_r_U-_r-_U_3r_r-_U2_%2F%2F_orange%2Fblue%0Az-_u_d_R_U-_R-_d-_D2-_R-_D-_%2F%2F_WR%0Ay-_u-_R-_U_R_U-_R_U-_R-_y-_F-_U_F_u_%2F%2F_RB%2FRG%2FOB%2FYO%2FYR%2FYG%0AU-_R_U-_R-_u-_R_U_R-_F_R-_F-_R_u_%2F%2F_YB%2FOG%0AU2_R_U-_U-_R-_U_R_U-_R-_%2F%2F_1st_pair%0Ay-_U-_R_U-_R-_y-_U2_L-_U-_L_%2F%2F_2nd_pair%0AU-_R_U-_R-_U-_R-_U2_R_U-_R-_U_R_%2F%2F_3rd_pair%0AU_U_F-_L-_U-_L_U_L-_U-_L_3d_R_%2F%2F_OLL%0AU-_U_F_r_U-_r-_U_3r_U_r-_U-_3r-_r_U_l-_U-_L_U_r_U-_3r-_%2F%2F_PParity%0AU-_%2F%2F_AUF"
      },

      {
        solver: "Matty Hiroto Inaba",
        time: "17.71",
        splits: {
          "F2C": "1.87",
          "F3E": "2.17",
          "L4C": "2.68",
          "LCE": "1.07",
          "L8E": "4.38",
          "3x3": "5.54"
        },
        youtube: "https://youtu.be/SKJs75ceICM",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=z2&alg=U_l2-_U_l_D_r2_%2F%2F_yellow%0AR2-_y_l_U_l-_u2_l-_U2_l_%2F%2F_white%0Az-_F_%2F%2F_WR%0Ax_L-_L2_U2_%2F%2F_WB%0Ax-_U-_L_F_U_r_L-_U_%2F%2F_WO%0AL_U_3r_3r_U-_r-_U-_r_U-_r_%2F%2F_blue%0AU-_r_U2-_r-_3r-_U2-_3r_r2-_3r_U2-_3r2-_r2_%2F%2F_orange%0AU_3r_r-_U2-_r_%2F%2F_red%2Fgreen%0A3r_U-_r-_U_R-_U-_r_U-_3r-_U_%2F%2F_WG%0Az-_u_U_U-_R_U-_R-_y_y_U_F_U-_F-_y_U_U_F_U-_F-_d-_%2F%2F_YR%2FBO%2FYO%2FYB%0AR_U-_R-_u-_R_U-_R-_u2_%2F%2F_BR%2FGR%0AU-_L-_U_L_u-_%2F%2F_GO%2FYG%0AU-_U-_R_U-_R-_y_y-_U_R-_U2-_R2_%2F%2F_1st_pair%0AU_R-_y-_R_U_R-_%2F%2F_2nd_pair%0Ay-_L_U_L-_U_L_U-_L-_%2F%2F_3rd_pair%0Ay_U_L-_U_U_L_U-_L_F-_L-_F_%2F%2F_4th_pair%0AU_F_R-_F-_R_U_R_U-_R-_%2F%2F_OLL(CP)%0AU-_%2F%2F_AUF&type=alg"
      },

       {
        solver: "Twan Dullemond",
        time: "19.64",
        splits: {
          "F2C": "3.17",
          "F3E": "1.96",
          "L4C": "2.13",
          "LCE": "2.17",
          "L8E": "4.5",
          "3x3": "5.7"
        },
        youtube: "https://youtu.be/3REYtjb6t7Q",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=R-_F2_D-_F_L2_D2_B_U2_F-_L2_U2_F_L2_R_F-_D-_F_R2_B_U-_Uw2_L2_Fw2_B-_D2_L-_Fw2_Uw2_L_B2_F_R_D-_B_Uw_D_Rw2_F-_Fw-_Rw_U_Fw-_F-_Uw-_B-&alg=y_%2F%2F_inspection%0AU2-_r_U_L2-_U-_r_U-_r2-_%2F%2F_WO%2Fwhite%0Ay_U-_l-_U_l_L_u-_U_r_U2-_r-_%2F%2F_yellow%0Az_F_L-_U-_r2_3r-_U_%2F%2F_WR%0AL-_U_r2_3r-_U_%2F%2F_WG%0AL2_U-_U-_l-_L_U-_3r_r-_%2F%2F_green%0A3r_3r-_r2_U-_r2-_%2F%2F_orange%0A3r_U_r_U-_r-_%2F%2F_red%2Fblue%0Ax-_y-_x-_R_u-_R_U-_R-_u_D-_R-_F_R_u-_D_%2F%2F_WB%0AU_R_U-_R-_y-_R_U-_R-_y-_U-_R_U-_R-_u_%2F%2F_YR%2FGR%2FYO%0AR_U-_R-_u-_U2_R_U-_R-_u_%2F%2F_BR%2FYB%0AU-_y-_U_R_U-_R-_y_u-_F_R-_F-_R_u_%2F%2F_YG%2FGO%2FBO%0AU-_U-_F-_R-_U-_R_y-_U_R_%2F%2F_1st_pair%0AU-_U-_R-_U-_R2_%2F%2F_2nd_pair%0AU-_U-_R-_U_L-_U-_L_%2F%2F_3rd_pair%0AU_R-_F_R_F-_%2F%2F_4th_pair%0AU2_R_U_R-_U_R_U-_R-_U_R_U2-_R-_%2F%2F_OLL%0AU_R-_U-_R_U_D-_R2_U_R-_U_R_U-_R_U-_R2-_D_U-_U-_%2F%2F_PLL"
      },

       {
        solver: "Tymon Kolasiński",
        time: "19.95",
        splits: {
          "F2C": "1.66",
          "F3E": "2.28",
          "L4C": "2.06",
          "LCE": "1.26",
          "L8E": "5.54",
          "3x3": "7.15"
        },
        youtube: "https://youtu.be/kMN99lcS1QI",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=B2_D2_L2_F_R2_D2_R2_B-_D2_U-_F-_U-_L2_U_F2_U2_D2_Fw2_L-_F2_Rw2_Uw2_Fw2_U-_R-_D-_L-_D-_Fw2_L-_Fw-_F-_U_R_U-_Rw_F-_Uw-_Fw-_R-_Uw2_B_L&alg=z-_x_%2F%2F_inspection%0A3l_u-_l2-_%2F%2F_yellow%0AU2_l_y_r-_U_F2_r_%2F%2F_white%0Az-_L2-_U-_r-_F_%2F%2F_WG%0A3r-_U_r-_3r_L_F-_%2F%2F_WR%0AU_r-_3r-_B-_%2F%2F_WO%0A3r2_3r_U_3r-_r_U_r_%2F%2F_orange%0AU_3r_U_3r_U-_r2-_U-_r_U2-_r_%2F%2F_blue%2Fred%2Fgreen%0Az-_L_u_L-_U_L_u-_L_D2_%2F%2F_WB%0Au_R_U_R-_L-_U_L_R_U-_R-_u-_%2F%2F_YB%2FRG%0A3d-_L-_U_L_d_R_U-_R-_d-_%2F%2F_YO%2FYR%0AU_L-_U_L_R-_U_R_d_R_U-_R-_u-_%2F%2F_GO%2FBR%0AF_R-_F-_R_u_R-_F_R_F-_R_U-_R-_u-_%2F%2F_YG%2FOB%0AU_F-_U-_F_U_R_U-_R-_%2F%2F_1st_pair%0Ay-_U_R_U-_R-_U_R_U_R-_%2F%2F_2nd_pair%0AU-_L_U_L-_%2F%2F_3rd_pair%0AU_3d_R_U_R-_%2F%2F_4th_pair%0AU-_r_U2_l-_r2_U2-_r_U2-_r-_U2_l_U2_r-_U2-_r_U2_r-_U2-_r-_%2F%2F_OParity%0AU-_R_U_R2-_U-_R2_U-_R2-_U2-_R2_U-_R-_U_R_U2-_R-_%2F%2F_2GLL%0AU-_r2-_F2_U2-_r2_R2-_U2-_F2_r2_%2F%2F_PParity"
      },

      {
        solver: "Tymon Kolasiński",
        time: "21.21",
        splits: {
          "F2C": "2.2",
          "F3E": "3.24",
          "L4C": "2.6",
          "LCE": "1.27",
          "L8E": "2.5",
          "3x3": "8.33"
        },
        youtube: "https://youtu.be/ItkfoEDQQpc",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=U_L2_B2_L2_R2_B2_D2_U_F_L-_D_F_L_U_R2_F-_R2_B2_Rw2_B_Uw2_B_Rw2_L_U2_R2_Uw2_U2_Fw2_L-_F_U_Rw2_Uw_R2_Uw2_Fw_Uw2_B_U2_D_Fw2&alg=z2_%2F%2F_inspection%0AR-_u2-_R_3u-_D_r2-_%2F%2F_white%0AU-_r_F-_U_r_U2-_r-_%2F%2F_yellow%0Az_x-_D-_U-_r2-_F_%2F%2F_WB%0Ax-_r-_3r2_B_%2F%2F_WR%0A3r-_3r-_U_U_R_U-_r_3r-_F-_%2F%2F_WO%0A3r_U_3r-_r_U-_U-_3r-_U_r_U-_r2-_%2F%2F_green%0AU-_3r-_3r_U-_3r-_U2_r2_U-_r-_U-_r-_%2F%2F_red%0AU_r_U2-_r-_%2F%2F_orange%2Fblue%0Ax-_y-_x-_u-_U-_L-_U_L_d_D_U-_L_D2_%2F%2F_WG%0Au_L-_U_L_U-_R_U-_R-_y_U_R_U-_R-_u-_%2F%2F_YO%2FGO%2FOB%0AR_U-_R-_u_R_U-_R-_u-_%2F%2F_RG%2FYB%2FYR%0AU-_r-_U2_r-_D-_r_U2_r-_D_r2_%2F%2F_YG%2FBR%0AU2_L-_U_L_U-_L_U_L2-_%2F%2F_1st_pair%0AU-_L_U2-_L-_U_L_%2F%2F_2nd_pair%0Ay_U_L-_L_L-_L_L-_U_L_U_R_U2-_R-_%2F%2F_3rd_pair%0AU-_U-_L-_U_L_%2F%2F_4th_pair%0AU2-_r_U2-_x_r-_r2_U2-_r_U2-_r-_U2_l_U2_r-_U2-_r_U2_r-_U2-_r-_%2F%2F_OParity%0AU-_R_U_R-_F-_U-_F_U_R_U2-_R-_%2F%2F_OLL(CP)%0Ar2-_F2_U2-_r2_R2-_U2-_F2_r2_%2F%2F_PParity%0AR2-_U_R_U_R-_U-_R3_U-_R-_U_R-_%2F%2F_EPLL"
      },

       {
        solver: "Sebastian Weyer",
        time: "18.15",
        splits: {
          "F2C": "1.83",
          "F3E": "3.7",
          "L4C": "2.6",
          "LCE": "1.27",
          "L8E": "2.5",
          "3x3": "6.25"
        },
        youtube: "https://youtu.be/95k7QMXybq8",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=L_B2_U_R2_B2_F2_D-_R2_D_R2_U_B_R_B-_U-_F-_U2_D2_L_Rw2_Fw2_R_U-_D_Rw2_R2_D_R_B2_L2_D2_Fw_B-_U_L2_B-_Rw_Fw_Uw-_B_U2_F_D-_L&alg=x-_y2_%2F%2F_inspection%0AU_D_r_U-_r2-_%2F%2F_white%0AF_r_U2_r-_R-_U-_y_l-_U2_l_%2F%2F_yellow%0Az_x-_x-_L2-_U_r2-_F_%2F%2F_WB%0Ax-_U-_r2_L-_U-_%2F%2F_WO%0Ax-_x-_U-_r_U_%2F%2F_WR%0Ax_3r-_r-_U-_3r2_U-_r-_U-_%2F%2F_green%0A3r_U2_3r-_r_U_%2F%2F_orange%0A3r_U2_3r-_r_U-_r_U-_U-_r-_%2F%2F_blue%2Fred%0Ax-_z-_d_R_U_R-_u-_R_D2-_%2F%2F_WG%0AU_R_U-_R-_u-_U_R_U-_R-_U_y-_R_U-_R-_y-_u_%2F%2F_OG%2FYG%2FRB%2FYR%0AU-_R_U-_R-_u-_F_R-_F-_R_u_%2F%2F_YO%2FRG%2FYB%0Ay_R-_U-_R_U_R-_U_R_U2_R-_U_R2_%2F%2F_1st_pair%0AU_R-_U_L_U_L-_U_L_U-_L-_%2F%2F_2nd_pair%0Ay-_U_R_U_R-_3d-_L-_U_L_%2F%2F_3rd_pair%0AU-_R_U-_U-_R-_U_R_U-_R-_%2F%2F_4th_pair%0AU_R_U_R-_U_R_U-_R-_U-_R-_F_R_F-_%2F%2F_OLL(CP)%0AR2-_U_R_U_R-_U-_R3_U-_R-_U_R-_U_%2F%2F_EPLL"
      },

      {
        solver: "Đỗ Quang Hưng",
        time: "17.65",
        splits: {
          "F2C": "1.93",
          "F3E": "2.73",
          "L4C": "2.2",
          "LCE": "2.5",
          "L8E": "3.13",
          "3x3": "5.16"
        },
        youtube: "https://youtu.be/HrgroX7ak7M",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=F2_L2_B-_L_U2_D_R-_B-_U_L2_B2_U2_B2_R_B2_R2_F2_D2_R-_Fw2_Uw2_Fw2_U-_R-_D_Fw2_U_L-_Fw2_F2_Uw2_Fw-_B_U_L2_Fw-_F2_Uw_F2_Rw_U-_F_D2_Rw2&alg=y_z-_%2F%2F_inspection%0AB-_u-_U_D2_r_%2F%2F_white%0AR_u2-_y-_U2_l-_U2_l_%2F%2F_yellow%0Az_F_U_r-_D-_%2F%2F_WG%0Ax-_r_r-_3r_U-_r-_D-_%2F%2F_WR%0AF-_L-_U-_r2_U-_%2F%2F_WB%0AL_U_3r_r-_U_r_%2F%2F_green%0AU-_U2-_r2_U2-_r2-_%2F%2F_orange%0A3r_U-_U-_r_U_r-_%2F%2F_blue%2Fred%0Az-_U-_R-_F_R_R-_F-_R_u-_R-_F_R_F-_R_U-_R-_u_D_D_R-_D_%2F%2F_WO%0Au-_R-_U-_R_y-_U-_y-_U-_R-_U_R_R_U-_R-_u_%2F%2F_OG%2FYG%2FRB%2FYO%0AR_U-_R-_u-_F_R-_F-_R_u_%2F%2F_RG%2FOB%2FYR%0AR_U_R-_y_R-_U_R_%2F%2F_1st_pair%0Ay-_l-_l_L-_U_L_%2F%2F_2nd_pair%0AU-_D-_U-_R_U_R-_D_%2F%2F_3rd_pair%0AR-_F_R_F-_U-_U-_R_U_R-_3d_R-_U-_R_%2F%2F_4th_pair%2FZBLS%0AU-_U-_R_U2_R_D_R-_U2_R_D-_R2-_%2F%2F_ZBLL"
      },

       {
        solver: "Seung Hyuk Nahm (남승혁)",
        time: "18.39",
        splits: {
          "F2C": "1.7",
          "F3E": "2.43",
          "L4C": "3.27",
          "LCE": "1.1",
          "L8E": "4.9",
          "3x3": "4.99"
        },
        youtube: "https://youtu.be/iKY3A_FkAbw",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=F_U2_L2_B-_L2_F2_U2_L2_D2_L_F-_R-_B-_D2_L_D_U2_F2_U2_B-_Uw2_Rw2_Fw2_F2_U2_B-_Rw2_F_Rw2_L-_B-_L_Uw_L_F_U_Rw2_B_U-_Rw-_Fw_Uw2_L_U_Rw&alg=z-_y_%2F%2F_inspection%0AU_D-_x_u-_r-_%2F%2F_white%0AU_r_U-_r-_y-_U-_r_U2-_r-_%2F%2F_yellow%0Az_D-_U_r2-_F_%2F%2F_WB%0Ax-_F2_%2F%2F_WO%0AU_r-_U-_r_U_%2F%2F_WG%0AL_r_U-_r-_3r-_U_r_U-_r-_%2F%2F_green%0A3r2_3r_U-_r-_U-_r_%2F%2F_orange%0Ar_U-_r-_U_r-_3r_U2-_l_%2F%2F_red%2Fblue%0Az-_u_U_F_R-_F-_R_u-_F_%2F%2F_WR%0Au_R-_U_R2_U-_R-_y_U_U_R_U-_R-_y_U-_R_U-_R-_u-_%2F%2F_RG%2FOB%2FYR%2FYB%0AU_U-_R_U-_R-_u_U-_U-_R_U-_R-_u-_%2F%2F_YO%2FRB%0AR_U-_R-_u_R-_F_R_F-_R_U-_R-_u-_%2F%2F_YG%2FOG%0Ay_R_U-_R-_U_R_U_R-_%2F%2F_1st_pair%0AU_L_U_L-_%2F%2F_2nd_pair%0Ay-_R_U-_R-_L_U2_L-_%2F%2F_3rd_pair%0AR_U_R2-_F_R_F-_%2F%2F_4th_pair%0AU-_U-_3r_U_R-_U-_3r-_R_U_R_U-_R-_%2F%2F_ELL%0AU-_U_R2-_r2_U2-_R2-_r2_u2-_R2-_r2_u2-_U_%2F%2F_PParity"
      },

       {
        solver: "Kai-Wen Wang (王楷文)",
        time: "21.05",
        splits: {
          "F2C": "2.13",
          "F3E": "2.55",
          "L4C": "3",
          "LCE": "1.4",
          "L8E": "4.68",
          "3x3": "7.29"
        },
        youtube: "https://youtu.be/dgAXdi8DV0M",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=L_F-_D2_B2_D2_B_R2_F_R2_F-_L2_R2_B-_D_U_B_L-_R-_F-_U-_B-_Uw2_R2_F_R-_Fw2_Rw2_R-_F_R2_F-_U2_D-_Fw2_Uw-_L_Fw2_F_Rw-_Fw-_U-_B2_L_Uw-_R2&alg=z-_y_%2F%2F_inspection%0AU_3r_U2-_r_U_r_%2F%2F_white%0Ax_R_u_l-_U2_l_%2F%2F_yellow%0Az_U-_F-_%2F%2F_WB%0Ax-_x-_r_U_%2F%2F_WO%0Ax_U_r_3r-_U_%2F%2F_WR%0Ax_r-_U_U2_r2_%2F%2F_blue%0A3r_3r_U-_3r_r-_U-_3r2-_r2_U2_2L-_%2F%2F_red%0AU-_r_U_r-_%2F%2F_green%2Forange%0A3r2_U_r_x_L2_U-_L-_U_%2F%2F_WG%0Az-_u2-_y_U_y_U_L_U-_L-_u_u-_L-_U_L_U_R_U-_R-_u_%2F%2F_YR%2FRG%2FGO%2FBR%2FYG%0AU_U_L-_U_L_U-_R_U-_R-_u_3d_R_U-_R-_d-_%2F%2F_YB%2FYO%2FOB%0Ay-_R_U-_R-_U_R-_U-_R_%2F%2F_1st_pair%0AU2_R_U2-_R-_U2_R_U-_R-_%2F%2F_2nd_pair%0AL-_U-_L_3d_R_U-_R-_%2F%2F_3rd_pair%0Ay-_R_U-_R-_U_R_U-_R-_U_R_U-_R-_%2F%2F_4th_pair%0Ay_R-_U-_R_3d_R_B_3r-_U-_3r_R-_%2F%2F_OLL%0Ay_U_m2-_U2_m2-_%2F%2F_fix_bencross%0AU2_U-_R-_U2_R_U2-_R-_F_R_U_R-_U-_R-_F-_R2_U2-_%2F%2F_PLL"
      },

       {
        solver: "Kai-Wen Wang (王楷文)",
        time: "22.49",
        splits: {
          "F2C": "1.93",
          "F3E": "2.72",
          "L4C": "4.05",
          "LCE": "1.18",
          "L8E": "4.63",
          "3x3": "7.98"
        },
        youtube: "https://youtu.be/dgAXdi8DV0M",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=R-_L_F2_L2_D-_U-_R_B_L-_U_B2_U2_L2_D-_R2_F2_R2_B2_F-_Fw2_D-_L2_Fw2_F-_D_F-_Rw2_B-_D-_F_U-_Rw_F_B2_D2_Fw2_R2_Fw_Uw2_U_Rw_D_Rw2&alg=y2_%2F%2F_inspection%0AL_U2_r_U-_r2-_%2F%2F_yellow%2FYG%0Al-_U2_l_y_U_r_U-_r2-_F-_r_%2F%2F_white%0Az_x-_x-_3r-_U_r2-_x_L-_U_%2F%2F_YR%0Ax-_x-_R_U_r_L_U_%2F%2F_YO%0AL-_U-_3r_3r_3r_U_r-_U_2L-_%2F%2F_green%0A3r_U_r_U-_r2-_U2-_r_3r-_U2-_3r2_r2-_U2-_r_3r-_r_%2F%2F_red%0AU-_3r_r-_U_3r-_r2_U2-_r-_%2F%2F_blue%2Forange%0Ax_L_l-_L2_U_L-_U-_L-_%2F%2F_YB%0Az-_y_U_U_U-_L-_U_L_U-_3d-_U_F_U-_F-_F-_U_F_u_%2F%2F_WO%2FOG%2FWG%0AF_U-_F-_u-_U_R_U-_R-_u_%2F%2F_WR%2FWB%0AU-_U-_L-_U_L_u-_U_R_U-_R-_u_%2F%2F_GR%2FRB%2FBO%0AU-_L-_U_L_y-_U-_L-_U_L_%2F%2F_1st_pair%0Ay_y_R_U_R-_U_R_U-_R-_%2F%2F_2nd_pair%0AL-_U2_L_U_L-_U-_L_%2F%2F_3rd_pair%0Ay_R-_U-_R_%2F%2F_4th_pair%0AU-_r2_B2_r-_U2_r-_U2-_x-_U2_r-_U2-_r_U2_r-_U2-_r2_U2-_%2F%2F_OParity%0Ax_U_3r_U_3r-_R_U_R-_U-_3r_U-_3r-_%2F%2F_OLL%0AU_x-_R_U-_R-_D_R_U_R-_R_R-_D-_R_U_R-_D_R_U-_R-_D-_%2F%2F_PLL"
      },

       {
        solver: "Kai-Wen Wang (王楷文)",
        time: "20.37",
        splits: {
          "F2C": "1.65",
          "F3E": "2.2",
          "L4C": "3.32",
          "LCE": "2.15",
          "L8E": "4.68",
          "3x3": "6.37"
        },
        youtube: "https://youtu.be/dgAXdi8DV0M",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=B2_U-_B2_D_U_L_B-_L2_B2_D2_B2_F2_R2_F2_U-_R2_D2_R-_B_D-_Rw2_U-_L-_R-_D-_Fw2_Uw2_B2_L_U-_R_D-_B_R_Fw-_Uw2_D_Rw_Fw_Uw_R-_Fw-_Rw-_Uw2_R2&alg=x-_y-_%2F%2F_inspection%0AL_R_d_r_%2F%2F_white%0Ay_u-_r_U2-_r-_%2F%2F_yellow%0Az_U-_%2F%2F_WO%0Ax-_R2_U-_r2-_3r2_D-_%2F%2F_WB%0AR_U_r-_3r-_B-_%2F%2F_WG%0A3r2_U-_3r2-_r_U_r-_U-_r2_%2F%2F_green%0A3r_r2_U2-_r-_2L-_r_U_r-_U-_r-_U2-_r_%2F%2F_orange%0AU-_r_U2-_r-_%2F%2F_blue%2Fred%0Am-_U_l2-_L-_U_L-_U-_L-_%2F%2F_WO%0Az-_y_u_R-_U_R_L-_U_L_y_y-_R_U_R-_3d-_L-_U_L_R-_F_R_F-_R_U-_R-_u_%2F%2F_YO%2FYB%2FBR%0AU-_L-_U_L_u-_R_U-_R-_u2_U-_3d_3d-_L-_U_L_u-_%2F%2F_RG%2FYR%2FGO%2FYG%0AU2_L-_U_L_U_L_U_L2-_%2F%2F_1st_pair%0AU_L_U_L-_U_L_3d_L_U_L-_%2F%2F_2nd_pair%0AU_R-_U-_R2_U2-_R-_%2F%2F_3rd_pair%0A3d-_R_U2-_R-_U2_R_U-_R-_%2F%2F_4th_pair%0AU-_3r_R2-_U-_R_U-_R-_U2_R_U-_3r-_R_%2F%2F_OLL(CP)%0Am-_U2_m2-_U2_m-_U_m2-_U_m2-_U-_%2F%2F_EPLL"
      },

       {
        solver: "Kai-Wen Wang (王楷文)",
        time: "19.84",
        splits: {
          "F2C": "1.48",
          "F3E": "1.53",
          "L4C": "4.1",
          "LCE": "1.25",
          "L8E": "4.27",
          "3x3": "7.21"
        },
        youtube: "https://youtu.be/dgAXdi8DV0M",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=F2_U2_L2_F-_U2_B_R2_D2_L2_U_F-_R-_F_R-_B-_U_F-_B_L_Uw2_Rw2_R_Fw2_F_Rw2_B_F2_R_Uw2_L_F-_D_L2_Uw-_L2_Uw-_D2_Rw_D_Fw_R2_Fw-_Uw_R-&alg=R-_D-_u-_r-_%2F%2F_yellow%0Ay_U-_r_U-_r-_%2F%2F_white_%2F%2F_WB%0Az-_D_r-_L_F_%2F%2F_WO%0AU_R_U-_r-_U_%2F%2F_WG%0Ax-_3r2_U2_r_U-_r-_%2F%2F_blue%0A3r_3r_U-_3r_r-_U-_3r2-_r2_U2_r-_U2-_r2_U2-_2L-_U2-_r-_%2F%2F_red%0AU-_3r_r-_U-_r_%2F%2F_green%2Forange%0AR2_3r-_U-_r-_2L-_L_U_L-_U-_%2F%2F_WR%0Ax_L2_z-_u_L-_U_L_3d-_L_U-_L-_U_U_F_U-_F-_U2_F_R-_F-_R_u_%2F%2F_RG%2FOB%2FYG%0AU-_U-_L-_U_L_u-_R_U-_R-_u_%2F%2F_YB%2FYR%0AU_F_U-_F-_u-_U-_R_U-_R-_u_%2F%2F_YO%2FBR%2FGO%0Ay_R_D-_R-_D_R_%2F%2F_fix_cross%0AU-_y_L-_U_L_U-_L-_U_L_U-_L-_U_L_%2F%2F_1st_pair%0Ay_y_R_U-_R-_U2_R_U-_R-_%2F%2F_2nd_pair%0Ay-_U-_R_U_R-_L-_U_L_%2F%2F_3rd_pair%0Ay-_U_R-_U-_R_U-_R-_U_R_%2F%2F_4th_pair%0AF_R-_F-_R_U2_R_U-_R-_U_R_U2-_R-_%2F%2F_OLL(CP)%0Am-_U2_m2-_U2_m-_U_m2-_U_m2-_U-_%2F%2F_EPLL"
      },

       {
        solver: "Matty Hiroto Inaba",
        time: "17.1",
        splits: {
          "F2C": "1.93",
          "F3E": "2.3",
          "L4C": "3.2",
          "LCE": "0.25",
          "L8E": "4.43",
          "3x3": "4.99"
        },
        youtube: "https://youtu.be/1IBOYQWWIb0",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=D-_R2_B-_L2_B2_R-_B_L-_F-_B2_D-_B2_L2_F2_U_L2_U2_R2_U_R_Uw2_L_Fw2_D-_L_Fw2_D_L_Uw2_F2_L-_Fw_U_B2_F-_D2_Rw-_U-_Fw_U-_D_Rw-_U_D&alg=x_z2_%2F%2F_inspection%0AR-_D_U-_u-_l-_%2F%2F_yellow%0AF2_u_r_U2-_r-_%2F%2F_white%0Az-_z_z_U_%2F%2F_YB%0A3l-_x_U-_r-_U-_%2F%2F_YG%0AL_U-_3r-_U2-_r-_2L-_U_%2F%2F_YO%0Ax-_L_r_U_3r2-_U_r_U_r-_U-_r-_%2F%2F_blue%0A3r_U-_r-_3r-_r2_U2-_3r-_r-_r_U_r_U2-_r2-_%2F%2F_red%0AU-_r_U_r-_%2F%2F_orange%2Fgreen%0A3r2_U-_%2F%2F_YR%0Az-_u_R_U_R-_L-_U_L_y_R_U_R-_U_F_U-_F-_R_U-_R-_u-_%2F%2F_RB%2FWO%2FRG%2FOG%0AU-_L-_U_L_U_R_U-_R-_d-_L-_U_L_u_%2F%2F_OB%2FWG%2FWR%0Ay-_U-_R_U-_R-_U-_R-_U-_R_%2F%2F_1st_pair%0Ay-_D_U-_R_U-_R-_D-_%2F%2F_2nd_pair%0AU_R_U-_R-_U-_R_U-_R-_U_R_U-_R-_%2F%2F_3rd_pair%0A3d-_U-_R_U_R-_U-_R_U_R-_%2F%2F_4th_pair%0AU2-_3r_U2-_R-_U-_R_U-_3r-_%2F%2F_OLL%0AU-_R_U_R-_F-_R_U2-_R-_U2-_R-_F_R_U_R_U2-_R-_U_%2F%2F_PLL"
      },

       {
        solver: "Patrick Ponce",
        time: "18.06",
        splits: {
          "F2C": "1.47",
          "F3E": "3.53",
          "L4C": "3",
          "LCE": "1.9",
          "L8E": "3.23",
          "3x3": "4.93"
        },
        youtube: "https://youtu.be/FP7j166LYLs",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=B-_D_L2_D-_L_D-_R_D-_R-_U2_R_D2_R_B2_L_F2_D-_F-_Fw2_Uw2_L2_U_Rw2_L_Uw2_L-_D-_U2_B2_Uw2_F_D2_Fw_F-_L-_U2_Uw-_Rw-_Fw_Uw-_B-_Uw2_L&alg=x2_%2F%2F_inspection%0AD2_r_D-_r_%2F%2F_blue%0Ay-_u-_U_l-_U2_l_%2F%2F_green%0Ax-_y-_x-_U_r-_U2-_r2_x-_U_%2F%2F_BY%0Al_r-_3r-_r_D_%2F%2F_BR%0AU-_r_x-_r2_U_r-_3r_U_%2F%2F_BW%0AL-_U-_3r2-_U2-_r2_U_r-_2L-_%2F%2F_white%0AU-_U-_3r-_U-_U-_3r-_r_U-_r_U2-_r2-_%2F%2F_red%0AU-_r_U2-_r-_%2F%2F_orange%2Fyellow%0Az-_R_U-_R-_u_U-_U-_F_R-_F-_R_u-_D_F_%2F%2F_BO%0Au-_U_D-_R_U-_R-_3d_U_R_U-_R-_y-_F_R-_F-_R_u_U2-_F_R-_F-_R_u-_U-_R_U-_R-_u_%2F%2F_edges%0AU_R_U-_R-_U-_L_U_L2-_%2F%2F_1st_pair%0AU2_L_U-_L-_U_L_%2F%2F_2nd_pair%0AU-_U_R_U2-_R2-_%2F%2F_3rd_pair%0AU_R_%2F%2F_4th_pair%0A3r_U_R-_U-_R_3r-_U_R_U-_R-_%2F%2F_EO%0AU_R_U_R-_U-_R_U_R2-_D-_R_U-_R-_D_R_U2_R_U-_R-_%2F%2F_ZBLL"
      },

       {
        solver: "Max Park",
        time: "18.49",
        splits: {
          "F2C": "1.58",
          "F3E": "3.54",
          "L4C": "2.5",
          "LCE": "1.75",
          "L8E": "2.67",
          "3x3": "6.45"
        },
        youtube: "https://youtu.be/rty9ihnM6x4",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=B_L-_F_R2_F2_U2_R2_B2_R-_U2_R-_D2_B-_R2_D_R-_F-_D2_R2_Fw2_Rw2_D2_L-_D2_Fw2_F2_U-_R-_D2_U-_F-_D_Fw_Uw2_Rw2_B-_Rw-_F_D_U_Fw-_R_Uw-_F&alg=y_%2F%2F_inspection%0AL_3r_x_u-_r-_%2F%2F_white%0Ay_r_U-_r-_%2F%2F_WR%0Ax-_r_U_r-_U-_r_U-_U-_r-_%2F%2F_yellow%0Ax-_z-_x-_D-_x-_3r_r2_x_L_U_%2F%2F_WB%0Ax-_L_U-_r-_L-_U_L_L-_U_x-_U-_U-_r2-_3r_U_%2F%2F_WG%0AL-_U-_3r-_r-_U-_U-_3r-_r_U-_U_r_U-_U-_r_U-_r_%2F%2F_green%0Ar2_U_r2-_%2F%2F_red%0Ar_U-_r-_U_r_U-_z-_L-_%2F%2F_blue%2Forange%0Ay_3d_U_F_U-_F-_u-_D_D_R-_D_u_D_%2F%2F_WO%2FYG%0Ay_3d_R_U-_R-_y_U_U_R_U-_R-_y_U_R_U-_R-_u-_%2F%2F_YO%2FBO%2FYB%0AU_y_L-_U_L_u_U-_L-_U_L_u-_%2F%2F_YR%2FGR%2FBR%0AU_R_U_R-_L_U_%2F%2F_1st_pair%0AL-_U_L-_U_L_R-_U_R_%2F%2F_2nd_pair%0AU-_U-_R_U_R-_U-_R_U_R-_%2F%2F_3rd_pair%0AU_L-_U_L_3d_R_U_R-_%2F%2F_4th_pair%0AU-_U-_3r_U_R-_U-_3r-_R_U_R_U-_R-_%2F%2F_OLL_%0AU-_U_2R2_U_U_2R2_u_u_2R2_u_u_%2F%2F_PParity%0AU_R_U_R-_F-_R_U_R-_U-_R-_F_R2_U-_R-_U2_%2F%2F_PLL"
      },
       {
        solver: "Max Park",
        time: "23.8",
        splits: {
          "F2C": "2.04",
          "F3E": "2.83",
          "L4C": "2.33",
          "LCE": "1.25",
          "L8E": "5.33",
          "3x3": "10.02"
        },
        youtube: "https://youtu.be/rty9ihnM6x4",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=F-_U_B_L-_U2_L-_D2_R-_F2_R-_F2_U2_L-_D-_R-_D_R2_B-_L_U2_Fw2_D_L_R2_Fw2_L-_Fw2_B2_U_D-_F2_D2_Rw2_Fw_L2_U_L2_D2_Uw_R-_Uw_Rw_Fw2_D-_Rw_R-&alg=x2_%2F%2F_inspection%0AU-_U-_r-_F-_l_U_U_r_%2F%2F_blue%0Az_x-_U_l_z-_D_r_U-_U-_r-_%2F%2F_green%0Az-_x-_r_U_r-_F_%2F%2F_GR%0AL_x_U-_3r-_x-_x_x-_R2_U-_r2_B_%2F%2F_YG%0AU-_U-_l-_L_U_L-_U-_%2F%2F_GO%0Ar_%2F%2F_yellow%0A3r-_U_3r2-_r2_U-_U-_r2_3r_r-_U_r_U-_r-_U_U_r_%2F%2F_orange%0AU_l-_L_U-_%2F%2F_red%2Fwhite%0Az-_U_R_U-_R-_d_D_R-_D_D_%2F%2F_WG%0Au_U_y_R_U_R-_U_y-_R_U-_R-_y_y_R_U_R-_L-_U_L_U_R_U-_R-_u-_%2F%2F_BO%2FWR%2FYO%0AU_R_U-_R-_u_U-_3d-_U_U-_L-_U_L_d-_%2F%2F_WB%2FYR%0AR_U-_R-_u-_U_R_U-_R-_u_%2F%2F_WO%2FBR%2FYB%0Ay-_y-_R_U-_R-_U_R_U-_R-_U-_L_U-_L-_%2F%2F_1st_pair%0Ay-_R_U-_R2-_U-_R2_U_R-_U_U_R_U-_R-_U_R_U-_R-_%2F%2F_2nd_pair%0Ay_R-_U_R_U-_R-_U_R_U-_r_U-_U-_r_x_U_U-_x-_r-_U-_U-_r-_R_U_R-_D-_R_U-_R-_D_%2F%2F_3rd_pair%0AU_R-_D-_R_U-_R-_D_R_%2F%2F_4th_pair%0Ar_U-_U-_r_x_U_U_r_U-_U-_r-_U_U_l_U-_U-_r-_U_U_r_U-_U-_r-_U_U_l-_%2F%2F_OParity%0AL_U_R-_U-_3r-_F_R_F-_%2F%2F_OLL%0AR_R-_x_R-_U_R-_D_D_R_U-_R-_D_D_R2_B-_%2F%2F_PLL"
      },

       {
        solver: "Ruihang Xu (许瑞航)",
        time: "18.79",
        splits: {
          "F2C": "1.43",
          "F3E": "3.3",
          "L4C": "3.07",
          "LCE": "1.7",
          "L8E": "3.83",
          "3x3": "5.46"
        },
        youtube: "https://youtu.be/LgsKbRjkRAc",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=L_D2_R2_D-_R2_L2_U_L2_B2_U-_F2_D_L-_F_D2_R_U-_D-_R-_D-_Fw2_L_F2_Uw2_L-_U_Rw2_D_R_Fw2_F2_U2_B-_L-_Fw-_D_F2_Uw-_F2_Uw_Fw_Uw_R_D2_F&alg=y2_%2F%2F_inspection%0AU_r_U_r-_U-_r-_%2F%2F_yellow%0Ay_x_3l_u_U2-_l-_U2_l_%2F%2F_white%0Az-_U-_3l_U-_r2_U-_%2F%2F_WR%0Ax-_U-_x_x-_L-_R2_x-_U_2L-_U_%2F%2F_WB%0A3l_U_L-_R_3l_U-_r2_B_%2F%2F_WG%0AU_r_r-_3r_r-_U-_3r_U-_r-_U-_3r_U2-_r2-_%2F%2F_blue%0A3r_r-_U-_r-_U2-_r2_%2F%2F_red%0A3r-_U_r_U-_r-_3r_r-_U2_r_%2F%2F_green%2Forange%0Az-_u_U-_F_U-_F-_u-_D2_R-_U-_D2-_%2F%2F_WO%0Au_y-_U_R_U-_R-_y_R_U-_R-_y_y_L-_U_L_d-_%2F%2F_YO%2FBR%2FGO%2FGR%2FBO%0AU_U-_U_R_U-_R-_y_R_U-_R-_u_y-_R_U-_R-_u-_%2F%2F_YG%2FYR%2FYB%0AU-_R_U-_R-_U-_R_U-_R2-_F_R_3d-_L-_%2F%2F_1st%2F2nd_pairs%0AU_R_U-_R2-_U-_R_%2F%2F_3rd_pair%0Ay_L-_U_L_U_L-_U_L_U-_L-_U_L_%2F%2F_4th_pair%0AU2-_3r-_U2-_R_U_R-_U_3r_%2F%2F_OLL%0AU-_R2-_U-_R_U-_R_U_R-_U_R2_U_D-_R_U-_R-_D_U-_U-_%2F%2F_PLL"
      },

       {
        solver: "Luke Garrett",
        time: "20.36",
        splits: {
          "F2C": "1.18",
          "F3E": "3.73",
          "L4C": "3.47",
          "LCE": "1.18",
          "L8E": "4.43",
          "3x3": "6.37"
        },
        youtube: "https://youtu.be/3vcbRBhnSj4",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=F_U2_B2_L2_F2_B2_L-_F2_R_B2_U_F_L-_B2_D-_F-_R_F2_L-_Rw2_Fw2_R-_B_D2_Rw2_F_Rw2_L-_U2_B-_Uw2_L_Uw-_F2_D2_Rw2_R-_Fw_R-_D_Fw2_F-_Rw&alg=z-_x2_%2F%2F_inspection%0AF-_u-_r-_%2F%2F_yellow%0AB-_u-_r-_U2-_r_%2F%2F_white%0Az-_l-_F-_%2F%2F_WB%0Ax-_U-_x-_F_U-_r_3r-_F_%2F%2F_WG%0Ax-_x-_R2_U_r-_L2-_D-_%2F%2F_WO%0Ar_U_r2_U_r2-_%2F%2F_orange%0A3r_U_r_U-_r-_U-_r-_3r_U-_3r-_r_r2_U_r2-_%2F%2F_blue%0A3r_U-_r_U2-_r-_%2F%2F_red%2Fgreen%0Az-_y-_u-_y-_R_U-_R-_u_R-_%2F%2F_WR%0Au-_d_u-_3d_R_U-_R-_U-_U_y-_R_U-_R-_u_R_U-_R-_u-_y_L-_U_L_d_F_R-_F-_R_u-_R_U-_R-_u_%2F%2F_edges%0AU-_R_U-_U-_R-_y-_U_R-_U-_R_%2F%2F_1st_pair%0Ay-_U_R_U2-_R-_U-_R_U_R-_%2F%2F_2nd_pair%0AU-_U_U-_L-_U_L_U-_L-_U-_L_%2F%2F_3rd_pair%0Ay_R_U-_R-_U_R_U-_R-_%2F%2F_4th_pair%0AU_R_U_R-_U-_R_U-_R-_F-_U-_F_R_U_R-_%2F%2F_OLL%0AU_R-_U-_F-_R_U_R-_U-_R-_F_R2_U-_R-_U-_R_U_R-_U_R_U_%2F%2F_PLL"
      },

       {
        solver: "Seung Hyuk Nahm (남승혁)",
        time: "19.36",
        splits: {
          "F2C": "1.58",
          "F3E": "2.02",
          "L4C": "3.45",
          "LCE": "1.4",
          "L8E": "3.75",
          "3x3": "7.16"
        },
        youtube: "https://youtu.be/k4a3O5zoPaI",
        recon: "https://alg.cubing.net/?puzzle=4x4x4&setup=U_B_L-_U2_R2_B2_D2_B2_D2_B2_R2_D_R2_U-_B-_U_L-_D-_F_L2_D-_Rw2_U2_Fw2_D_Fw2_R_U_D2_Fw2_L_F2_L-_D-_Fw_Rw2_L_Fw2_B2_D-_B-_Rw_U-_Fw_Rw_U_F-&alg=u_r-_%2F%2F_white%0Ay_r_U2-_r-_u_U_r-_U2-_r_%2F%2F_yellow%0Az_x-_F_%2F%2F_WO%0Ax-_F_R_U-_r2-_3r2_B_%2F%2F_WB%0Ax_L_U_%2F%2F_WR%0Ax_U-_r2_U_r_%2F%2F_green%0AU-_r_U_r-_3r2_U_r2-_U2-_r2_%2F%2F_orange%0A3r-_U-_2L-_U_3r-_r2_U2-_r-_%2F%2F_blue%2Fred%0Ax-_z-_u_y-_R_U_R-_u-_R2_D2_%2F%2F_WG%0Au_%2F%2F_RG%2FBR%0AL-_U_L_R-_U_R_R_U-_R-_3d-_U-_F_R-_R_R-_F-_R_u-_%2F%2F_YB%2FGO%2FBO%0AU_R_U-_R-_u_R-_F_R_F-_R_U-_R-_u-_%2F%2F_GY%2FRY%0AR_U-_U-_R-_U_R_U-_R-_%2F%2F_1st_pair%0A3d-_U-_R_U2-_R-_U_R_U-_R-_%2F%2F_2nd_pair%0AU2_R-_U-_R_%2F%2F_3rd_pair%0Ay_U_R-_U-_R_%2F%2F_4th_pair%0AU_3f_R_U_R-_U-_3f-_U-_F_R_U_R-_U-_F-_%2F%2F_OLL%0AR_U_R-_U_R_U_R-_F-_R_U_R-_U-_R-_F_R2_U-_R-_U2_R_U-_R-_U2_%2F%2F_PLL"
      },


      
    ],

    "5x5": [
      {
        solver: "Tymon Kolasiński",
        time: "36.46",
        splits: {
          "F2C": "5.63",
          "F3E": "3.87",
          "L4C": "7.87",
          "L9E": "13.61",
          "LCE": "2.5",
          "L8E": "11.11",
          "3x3": "5.48"
        },
        youtube: "https://youtu.be/AWwKt63olZo",
        recon: "https://alg.cubing.net/?puzzle=5x5x5&setup=D2_L2_Uw-_Rw_U2_F-_B2_Fw-_Lw2_D2_Rw_D_R-_Fw_Bw2_D2_U2_Rw_U2_Rw-_U2_B2_Rw-_F2_Uw_U-_Dw2_Rw2_Bw2_F-_B2_Lw_B2_Rw2_F-_Fw-_Lw2_Rw-_B2_D_Dw2_Lw_Uw-_Dw-_Bw_Dw-_Bw-_Dw_B-_R2_Rw-_F_Lw2_B2_F_Dw_L-_U-_Lw_Dw&alg=z2_%2F%2F_inspection%0A3r2_U_r-_y_U_r-_U_r2_U-_3r_r-_U-_r_x-_l_%2F%2F_yellow%0Ay-_U_r_U_r-_y-_y-_3r_U-_3r-_R_u_d-_U2_l-_U2_l_%2F%2F_white%0Az-_U_x-_U-_U-_3r2-_D-_%2F%2F_WO%0AU_F_r-_4r_U-_3r2-_U_F-_3r2-_4r2_U-_%2F%2F_WR%0Ax-_U-_U-_r-_4r2_U-_%2F%2F_WB%0Ax-_x-_U_4r_U-_r-_4r_4r-_4r2_U_4r2-_U-_r2_U-_4r2-_4r-_U_r_4r2_U-_3r2-_U-_3r2_4r2-_r_%2F%2F_red%0AU-_U-_4r_U_4r-_r_U-_r-_4r2_r-_U_r_U_r-_U-_r-_U2-_r2_%2F%2F_green%0A4r-_4r_U-_r-_U-_r_U2-_4r-_U_r_U_r-_U-_r_U2-_r-_%2F%2F_orange%2Fblue%0Ax-_y-_x-_3u2_U_R_U-_R-_2%26%2345%3B3d_R_U_R_U-_R2-_%2F%2F_WG%0AU_y_L-_U_L_u-_U_L-_U_L_u_y-_U_L-_U_L_u_3u-_%2F%2F_YG%0AU-_L-_U_L_y-_R-_U_R_d-_R-_F_R_F-_R_U-_R-_3u-_u_%2F%2F_BO%0AU-_R_U-_R-_u_R_U-_R-_u-_%2F%2F_BR%0AU_R_U-_R-_u-_%2F%2F_YO%0AR_U-_R-_u2-_3u_R_U-_R2-_U-_R_y-_U-_U_4d_R_U-_R-_u_U_d-_%2F%2F_GO%0AR_U-_R-_u-_3u_%2F%2F_YR%0AU-_R_U-_R-_d_R-_F_R_F-_R_U-_R-_3u-_%2F%2F_GR%2FYB%0AU-_R_U2-_R2-_U-_R_%2F%2F_1st_pair%0AU-_R_U_R-_4d-_L_U_L-_%2F%2F_2nd_pair%0AF_U-_F-_R-_U-_R_%2F%2F_3rd_pair%0AU2_F-_U-_L-_U_L2_F_L2-_U-_L_%2F%2F_4th_pair%2FZBLS%0AU_U2-_R_U_R-_U_R-_U2-_R2_U_R2-_U_R2_U-_R-_U_%2F%2F_ZBLL"
      },
      {
        solver: "Seung Hyuk Nahm (남승혁)",
        time: "38.12",
        splits: {
          "F2C": "6.17",
          "F3E": "5.83",
          "L4C": "6.79",
          "L9E": "11.5",
          "LCE": "2.4",
          "L8E": "9.1",
          "3x3": "6.77"
        },
        youtube: "https://youtu.be/CPY2danDRTE",
        recon: ""
      },
      {
        solver: "Ciarán Beahan",
        time: "40.48",
        splits: {
          "F2C": "6.76",
          "F3E": "5.5",
          "L4C": "7.7",
          "L9E": "15.69",
          "LCE": "2.93",
          "L8E": "12.76",
          "3x3": "5.72"
        },
        youtube: "https://youtu.be/a29xkdmovH8?si=sB_1rAD4ve8ld0oR&t=242",
        recon: ""
      },
      {
        solver: "Inigo Miguel B. Palisoc",
        time: "44.32",
        splits: {
          "F2C": "7.76",
          "F3E": "7.96",
          "L4C": "6.27",
          "L9E": "15.11",
          "LCE": "3.35",
          "L8E": "11.76",
          "3x3": "7.22"
        },
        youtube: "https://youtu.be/xFBpr1BViy8",
        recon: ""
      },
      {
        solver: "Inigo Miguel B. Palisoc",
        time: "41.53",
        splits: {
          "F2C": "5.32",
          "F3E": "6.29",
          "L4C": "9.28",
          "L9E": "14.83",
          "LCE": "2.95",
          "L8E": "11.88",
          "3x3": "5.81"
        },
        youtube: "https://youtu.be/xFBpr1BViy8",
        recon: ""
      },
      {
        solver: "Inigo Miguel B. Palisoc",
        time: "42.76",
        splits: {
          "F2C": "5.85",
          "F3E": "5.02",
          "L4C": "9.88",
          "L9E": "14.93",
          "LCE": "2.3",
          "L8E": "12.63",
          "3x3": "7.08"
        },
        youtube: "https://youtu.be/xFBpr1BViy8",
        recon: ""
      },
      {
        solver: "Inigo Miguel B. Palisoc",
        time: "40.09",
        splits: {
          "F2C": "6.99",
          "F3E": "8.12",
          "L4C": "6.19",
          "L9E": "13.07",
          "LCE": "1.8",
          "L8E": "11.27",
          "3x3": "5.72"
        },
        youtube: "https://youtu.be/xFBpr1BViy8",
        recon: ""
      },
      {
        solver: "Inigo Miguel B. Palisoc",
        time: "44.33",
        splits: {
          "F2C": "5.13",
          "F3E": "7.34",
          "L4C": "10.71",
          "L9E": "13.82",
          "LCE": "1.76",
          "L8E": "12.06",
          "3x3": "7.33"
        },
        youtube: "https://youtu.be/xFBpr1BViy8&t=278",
        recon: ""
      },
    ],

    "6x6": [
      {
        solver: "Maxr Park",
        time: "39.28",
        splits: {
          "F2C": "7.43",
          "F3E": "12.30",
          "L4C": "18.90",
          "L9E": "28.10",
          "3x3": "37.28"
        },
        youtube: "https://www.youtube.com/watch?v=example1",
        recon: "https://example.com/recon1"
      },
    ],
    "7x7": [
      {
        solver: "Maxs Park",
        time: "40.28",
        splits: {
          "F2C": "7.43",
          "F3E": "12.30",
          "L4C": "18.90",
          "L9E": "28.10",
          "3x3": "37.28"
        },
        youtube: "https://www.youtube.com/watch?v=example1",
        recon: "https://example.com/recon1"
      },
    ]
  },

  // TO-DO: Actually gather data for this
  "Redux": {
    "4x4": [
      {
        solver: "Caio Hideaki Sato",
        time: "24.98",
        splits: {
          "F2C": "1.66",
          "L4C": "3.23",
          "F8E": "8.16",
          "L4E": "3.46",
          "Edges": "11.62",
          "3x3": "8.47"
        },
        youtube: "https://youtu.be/-GTmaqPTZeQ",
        recon: ""
      },

      {
        solver: "Caio Hideaki Sato",
        time: "29.80",
        splits: {
          "F2C": "2.5",
          "L4C": "4.16",
          "F8E": "9.1",
          "L4E": "2.66",
          "Edges": "11.76",
          "3x3": "11.38"
        },
        youtube: "https://youtu.be/-GTmaqPTZeQ",
        recon: ""
      },

      {
        solver: "Caio Hideaki Sato",
        time: "24.43",
        splits: {
          "F2C": "1.96",
          "L4C": "3.06",
          "F8E": "11.36",
          "L4E": "2.63",
          "Edges": "13.99",
          "3x3": "5.42"
        },
        youtube: "https://youtu.be/-GTmaqPTZeQ",
        recon: ""
      },

      {
        solver: "Caio Hideaki Sato",
        time: "25.28",
        splits: {
          "F2C": "1.76",
          "L4C": "3.3",
          "F8E": "11.6",
          "L4E": "2.3",
          "Edges": "13.9",
          "3x3": "6.32"
        },
        youtube: "https://youtu.be/-GTmaqPTZeQ",
        recon: ""
      },

      {
        solver: "Caio Hideaki Sato",
        time: "28.48",
        splits: {
          "F2C": "1.53",
          "L4C": "3.96",
          "F8E": "11.23",
          "L4E": "2.8",
          "Edges": "14.03",
          "3x3": "8.96"
        },
        youtube: "https://youtu.be/-GTmaqPTZeQ",
        recon: ""
      },

      {
        solver: "Caio Hideaki Sato",
        time: "24.03",
        splits: {
          "F2C": "1.9",
          "L4C": "4.03",
          "F8E": "8.56",
          "L4E": "3.2",
          "Edges": "11.76",
          "3x3": "6.34"
        },
        youtube: "https://youtu.be/jM--pkXw9XM",
        recon: ""
      },

      {
        solver: "Caio Hideaki Sato",
        time: "23.85",
        splits: {
          "F2C": "2.96",
          "L4C": "3.13",
          "F8E": "8",
          "L4E": "2.16",
          "Edges": "10.16",
          "3x3": "7.6"
        },
        youtube: "https://youtu.be/jM--pkXw9XM",
        recon: ""
      },

      {
        solver: "Caio Hideaki Sato",
        time: "25.03",
        splits: {
          "F2C": "3.3",
          "L4C": "4",
          "F8E": "8.46",
          "L4E": "2.33",
          "Edges": "10.79",
          "3x3": "6.94"
        },
        youtube: "https://youtu.be/jM--pkXw9XM",
        recon: ""
      },

      {
        solver: "Caio Hideaki Sato",
        time: "27.06",
        splits: {
          "F2C": "3.33",
          "L4C": "3.46",
          "F8E": "9.36",
          "L4E": "1.63",
          "Edges": "10.99",
          "3x3": "9.28"
        },
        youtube: "https://youtu.be/jM--pkXw9XM",
        recon: ""
      },

      {
        solver: "Caio Hideaki Sato",
        time: "24.32",
        splits: {
          "F2C": "1.33",
          "L4C": "2.9",
          "F8E": "10.4",
          "L4E": "1.4",
          "Edges": "11.8",
          "3x3": "8.29"
        },
        youtube: "https://youtu.be/jM--pkXw9XM",
        recon: ""
      },
      
      
    ],
    "5x5": [
      {
        solver: "",
        time: "",
        splits: {
          "F2C": "",
          "L4C": "",
          "F8E": "",
          "L4E": "",
          "3x3": ""
        },
        youtube: "https://www.youtube.com/watch?v=example3",
        recon: "https://example.com/recon3"
      }
    ]
  },

  // TO-DO: Actually gather data
  "Hoya": {
    "4x4": [
      {
        solver: "Ray Bai",
        time: "22.14",
        splits: {
          "F2C": "3.46",
          "M2C": "3.63",
          "F4C": "7.09",
          "F4E": "4.13",
          "L2C": "1.43",
          "L8E": "3.86",
          "3x3": "5.63"
        },
        youtube: "https://youtu.be/tIMZS4tZxCY",
        recon: ""
      },

      {
        solver: "Ray Bai",
        time: "22.97",
        splits: {
          "F2C": "2.63",
          "M2C": "4.43",
          "F4C": "7.06",
          "F4E": "3.73",
          "L2C": "1.46",
          "L8E": "4.63",
          "3x3": "6.09"
        },
        youtube: "https://youtu.be/tIMZS4tZxCYt=90",
        recon: ""
      },

      {
        solver: "Ray Bai",
        time: "21.97",
        splits: {
          "F2C": "3.1",
          "M2C": "1.73",
          "F4C": "4.83",
          "F4E": "3.73",
          "L2C": "1.9",
          "L8E": "5.7",
          "3x3": "5.81"
        },
        youtube: "https://youtu.be/tIMZS4tZxCY&t=114",
        recon: ""
      },

      {
        solver: "Ray Bai",
        time: "22.47",
        splits: {
          "F2C": "2.6",
          "M2C": "2.53",
          "F4C": "4.03",
          "F4E": "3.86",
          "L2C": "2.06",
          "L8E": "4.73",
          "3x3": "7.66"
        },
        youtube: "https://youtu.be/tIMZS4tZxCY&t=114",
        recon: ""
      },

      {
        solver: "Ray Bai",
        time: "23.50",
        splits: {
          "F2C": "3.26",
          "M2C": "2.9",
          "F4C": "6.16",
          "F4E": "4.33",
          "L2C": "1.06",
          "L8E": "4.6",
          "3x3": "7.35"
        },
        youtube: "https://youtu.be/tIMZS4tZxCY&t=114",
        recon: ""
      },

      {
        solver: "Ray Bai",
        time: "24.67",
        splits: {
          "F2C": "3.8",
          "M2C": "2.93",
          "F4C": "6.73",
          "F4E": "5.03",
          "L2C": "2.12",
          "L8E": "2.4",
          "3x3": "8.39"
        },
        youtube: "https://youtu.be/tIMZS4tZxCY&t=114",
        recon: ""
      },

      {
        solver: "Ray Bai",
        time: "23.08",
        splits: {
          "F2C": "3.86",
          "M2C": "3.8",
          "F4C": "7.66",
          "F4E": "4.73",
          "L2C": "1.93",
          "L8E": "4.56",
          "3x3": "4.2"
        },
        youtube: "https://youtu.be/tIMZS4tZxCY&t=114",
        recon: ""
      },

      {
        solver: "Ray Bai",
        time: "22.34",
        splits: {
          "F2C": "1.50",
          "M2C": "2.53",
          "F4C": "4.03",
          "F4E": "3.86",
          "L2C": "2.06",
          "L8E": "4.73",
          "3x3": "7.66"
        },
        youtube: "https://youtu.be/tIMZS4tZxCY&t=114",
        recon: ""
      },

      {
        solver: "Alwin Rölz",
        time: "25.55",
        splits: {
          "F2C": "2.26",
          "M2C": "2.43",
          "F4C": "4.69",
          "F4E": "5.70",
          "L2C": "1.06",
          "L8E": "5.4",
          "3x3": "8.7"
        },
        youtube: "https://youtu.be/GVle49w9W4o",
        recon: ""
      },

      {
        solver: "Alwin Rölz",
        time: "27.97",
        splits: {
          "F2C": "2.3",
          "M2C": "5.66",
          "F4C": "7.96",
          "F4E": "5.2",
          "L2C": "1.46",
          "L8E": "5.43",
          "3x3": "7.92"
        },
        youtube: "https://youtu.be/GVle49w9W4o",
        recon: ""
      },

      {
        solver: "Alwin Rölz",
        time: "26.83",
        splits: {
          "F2C": "2.33",
          "M2C": "2.8",
          "F4C": "5.13",
          "F4E": "4.26",
          "L2C": "1.3",
          "L8E": "7.23",
          "3x3": "8.91"
        },
        youtube: "https://youtu.be/GVle49w9W4o",
        recon: ""
      },

      {
        solver: "Luke Tycksen",
        time: "28.86",
        splits: {
          "F2C": "3.13",
          "M2C": "2.83",
          "F4C": "5.96",
          "F4E": "4.47",
          "L2C": "2.03",
          "L8E": "5.57",
          "3x3": "10.83"
        },
        youtube: "https://youtu.be/-6zRSChBFUM",
        recon: ""
      },

      {
        solver: "Luke Tycksen",
        time: "26.89",
        splits: {
          "F2C": "3.27",
          "M2C": "2.76",
          "F4C": "6.03",
          "F4E": "5.67",
          "L2C": "2.16",
          "L8E": "4.1",
          "3x3": "8.93"
        },
        youtube: "https://youtu.be/-6zRSChBFUM",
        recon: ""
      },

      {
        solver: "Luke Tycksen",
        time: "26.21",
        splits: {
          "F2C": "2.06",
          "M2C": "2.40",
          "F4C": "4.46",
          "F4E": "6.70",
          "L2C": "1.80",
          "L8E": "3.63",
          "3x3": "9.62"
        },
        youtube: "https://youtu.be/-6zRSChBFUM",
        recon: ""
      },

    ],
    "5x5": [
      {
        solver: "",
        time: "",
        splits: {
          "F2C": "",
          "M2C": "",
          "F4C": "",
          "F4E": "",
          "L2C": "",
          "L8E": "",
          "3x3": ""
        },
        youtube: "",
        recon: ""
      }
    ],
    "6x6": [
      {
        solver: "",
        time: "",
        splits: {
          "F2C": "",
          "M2C": "",
          "F4C": "",
          "F4E": "",
          "L2C": "",
          "L8E": "",
          "3x3": ""
        },
        youtube: "",
        recon: ""
      }
    ],
    "7x7": [
      {
        solver: "",
        time: "",
        splits: {
          "F2C": "",
          "M2C": "",
          "F4C": "",
          "F4E": "",
          "L2C": "",
          "L8E": "",
          "3x3": ""
        },
        youtube: "",
        recon: ""
      }
    ]
  }
};

const puzzleSelect = document.getElementById("puzzle-select");
const methodSelect = document.getElementById("method-select");
const avgInput = document.getElementById("global-average");
const tableHead = document.querySelector("#splits-table thead");
const tableBody = document.querySelector("#splits-table tbody");

const customSplitsTableHead = document.querySelector("#custom-splits-table thead");
const customSplitsTableBody = document.querySelector("#custom-splits-table tbody");
const estimatedSplitsTableHead = document.querySelector("#estimated-splits-table thead");
const estimatedSplitsTableBody = document.querySelector("#estimated-splits-table tbody");
const variationTableHead = document.querySelector("#variation-table thead");
const variationTableBody = document.querySelector("#variation-table tbody");

const l9eToggleDiv = document.getElementById("l9e-toggle-button");
const l9eToggle = document.getElementById("toggle-l9e");
const f4cToggleDiv = document.getElementById("f4c-toggle-button");
const f4cToggle = document.getElementById("toggle-f4c");
const edgesToggleDiv = document.getElementById("edges-toggle-button");
const edgesToggle = document.getElementById("toggle-edges");
const whatIfToggleDiv = document.getElementById("whatif-toggle-button");
const whatIfToggle = document.getElementById("toggle-whatif");
const darkModeToggle = document.getElementById("dark-mode-toggle");

let customSplits = {}; // e.g. { "L4C": 12.34 }
let whatIfSplits = {}; 
let userSplits = {}; 
let whatIfMode = false;

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "☀️"; 
    localStorage.setItem("theme", "dark");
  } else {
    darkModeToggle.textContent = "🌙"; 
    localStorage.setItem("theme", "");
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️"; 
  } else {
    darkModeToggle.textContent = "🌙";
  }
});

function getStepsWithToggles(puzzle, method) {

  // .slice() returns selected elements in a new array (in case I want to add more splits)
  let steps = splitsSteps[puzzle][method].slice();

  // For Yau on 5x5/6x6/7x7, toggle between L9E and (LCE, L8E)
  if (method === "Yau" && ["5x5", "6x6", "7x7"].includes(puzzle)) {
    l9eToggleDiv.classList.remove("hidden");
    if (l9eToggle.checked) {
      // Show LCE and L8E, hide L9E
      steps = steps.filter(step => step !== "L9E");
    } else {
      // Show L9E, hide LCE and L8E
      steps = steps.filter(step => step !== "LCE" && step !== "L8E");
    }
  } else {
    l9eToggleDiv.classList.add("hidden");
  }

  // For Hoya on 4x4/5x5/6x6/7x7, toggle between F4C and (F2C, M2C) 
  if (method === "Hoya") {
    f4cToggleDiv.classList.remove("hidden");
    if (f4cToggle.checked) {
      // Show F2C and M2C, hide F4C
      steps = steps.filter(step => step !== "F4C");
    } else {
      // Show F4C, hide F2C and M2C
      steps = steps.filter(step => step !== "F2C" && step !== "M2C");
    }
  } else {
    f4cToggleDiv.classList.add("hidden");
  }

  // For Redux on 4x4/5x5/6x6/7x7, toggle between Edges and (F8E, L4E)
  if (method === "Redux") {
    edgesToggleDiv.classList.remove("hidden");
    if (edgesToggle.checked) {
      // Show Edges, hide F8E and L4E
      steps = steps.filter(step => step !== "F8E" && step !== "L4E");
    } else {
      // Show F8E and L4E, hide Edges
      steps = steps.filter(step => step !== "Edges");
    }
  } else {
    edgesToggleDiv.classList.add("hidden");
  }
  return steps;
}

function buildTableArray(puzzle, method, avgSeconds) {
  // Get the steps we need to show (taking into account the toggle)
  const steps = getStepsWithToggles(puzzle, method);

  // Start building the table (first row will always be the steps themselves)
  const tableArray = [];
  tableArray.push(steps);

  // Only continue if we have an average solve time AND data for this method + puzzle
  if (avgSeconds && splitsData[method] && splitsData[method][puzzle]) {
    const proportions = splitsData[method][puzzle];

    // Figure out how much time the user has already "reserved" with custom values,
    // and how much time is left for the steps that use proportions.
    let totalCustom = 0;   // total of all user-entered times
    let totalProp = 0;     // total weight of proportion-based steps
    let propSteps = [];    // list of steps that will use proportions

    steps.forEach(step => {
      if (customSplits[step] !== undefined && customSplits[step] !== "") {
        // If the user typed a time, add it to the "custom total"
        totalCustom += parseFloat(customSplits[step]);
      } else if (proportions[step]) {
        // Otherwise, this step will share the leftover time proportionally
        totalProp += proportions[step];
        propSteps.push(step);
      }
    });
    // Now build the "suggested times" row for the table
    const suggestedRow = steps.map(step => {
      if (customSplits[step] !== undefined && customSplits[step] !== "") {
        // Use the exact time the user typed in
        return customSplits[step];
      }
      const prop = proportions[step];
      if (prop && totalProp > 0) {
        // Give this step a share of the leftover time based on its proportion
        return (((avgSeconds - totalCustom) * prop) / totalProp).toFixed(2);
      }
      // If we don’t know what to do, just put a dash
      return "-";
    });
    // Add that row under the steps
    tableArray.push(suggestedRow);
  }
  // Return the full table
  return tableArray;
}

function updateTable() {
  const puzzle = puzzleSelect.value;
  const method = methodSelect.value;
  const avgSeconds = parseFloat(avgInput.value);

  const steps = getStepsWithToggles(puzzle, method);
  const proportions = splitsData[method]?.[puzzle] || {};

  // This will calculate custom and/or proportional splits
  let totalCustom = 0;
  let totalProp = 0;
  let propSteps = [];
  steps.forEach(step => {
    if (customSplits[step] !== undefined && customSplits[step] !== "") {
      totalCustom += parseFloat(customSplits[step]);
    } else if (proportions[step]) {
      totalProp += proportions[step];
      propSteps.push(step);
    }
  });

  // This will compute the split values for display
  const splitValues = steps.map(step => {
    if (customSplits[step] !== undefined && customSplits[step] !== "") {
      return customSplits[step];
    }
    const prop = proportions[step];
    if (prop && totalProp > 0 && avgSeconds) {
      return (((avgSeconds - totalCustom) * prop) / totalProp).toFixed(2);
    }
    return "";
  });

  // This will render the table
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";

  const headerRow = document.createElement("tr");
  steps.forEach(stepName => {
    const th = document.createElement("th");
    th.textContent = stepName;
    headerRow.appendChild(th);
  });
  tableHead.appendChild(headerRow);

  const inputRow = document.createElement("tr");
  steps.forEach((stepName, idx) => {
    const td = document.createElement("td");
    td.textContent = splitValues[idx];

    td.style.cursor = "pointer";
    td.addEventListener("click", function handleClick() {
      // The user can replace the cell with input field to type a custom value
      const input = document.createElement("input");
      input.type = "number";
      input.step = "0.01";
      input.min = "0";
      input.value = splitValues[idx];
      input.style.width = "60px";
      td.textContent = "";
      td.appendChild(input);
      input.focus();

      function save() {
        customSplits[stepName] = input.value;
        updateTable();
      }
      input.addEventListener("blur", save);
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          input.blur();
        }
      });

      td.removeEventListener("click", handleClick);
    });

    inputRow.appendChild(td);
  });
  tableBody.appendChild(inputRow);
}

function updateTables() {
  const puzzle = puzzleSelect.value;
  const method = methodSelect.value;
  const avgSeconds = parseFloat(avgInput.value);

  const steps = getStepsWithToggles(puzzle, method);
  const proportions = splitsData[method]?.[puzzle] || {};

  customSplitsTableHead.innerHTML = "";
  customSplitsTableBody.innerHTML = "";

  const customHeaderRow = document.createElement("tr");
  steps.forEach(step => {
    const th = document.createElement("th");
    th.textContent = step;
    customHeaderRow.appendChild(th);
  });
  customHeaderRow.appendChild(document.createElement("th")).textContent = "Average";
  customSplitsTableHead.appendChild(customHeaderRow);

  const customInputRow = document.createElement("tr");
  let userSum = 0;
  
  steps.forEach(step => {
    const td = document.createElement("td");
    td.style.background = "#fffbe6";
    td.style.cursor = "pointer";
    td.textContent = customSplits[step] !== undefined ? customSplits[step] : "";

    td.addEventListener("click", function handleClick() {
      const input = document.createElement("input");
      input.type = "number";
      input.step = "0.01";
      input.min = "0";
      input.value = customSplits[step] !== undefined ? customSplits[step] : "";
      input.style.width = "60px";
      td.textContent = "";
      td.appendChild(input);
      input.focus();

      function save() {
        customSplits[step] = input.value;
        updateTables();
      }
      input.addEventListener("blur", save);
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") input.blur();
      });

      td.removeEventListener("click", handleClick);
    });

    if (customSplits[step] && !isNaN(parseFloat(customSplits[step]))) {
      userSum += parseFloat(customSplits[step]);
    }
    customInputRow.appendChild(td);
  });

  const avgTd = document.createElement("td");
  avgTd.textContent = userSum ? userSum.toFixed(2) : "";
  avgTd.style.fontWeight = "bold";
  customInputRow.appendChild(avgTd);

  customSplitsTableBody.appendChild(customInputRow);

  estimatedSplitsTableHead.innerHTML = "";
  estimatedSplitsTableBody.innerHTML = "";

  const estHeaderRow = document.createElement("tr");
  steps.forEach(step => {
    const th = document.createElement("th");
    th.textContent = step;
    estHeaderRow.appendChild(th);
  });
  estHeaderRow.appendChild(document.createElement("th")).textContent = "Average";
  estimatedSplitsTableHead.appendChild(estHeaderRow);

  // This will store the steps that have been manually set in what-if mode
  const lockedSteps = Object.keys(whatIfSplits);
  let totalLockedTime = 0;
  lockedSteps.forEach(step => {
      if (whatIfSplits[step] !== "") {
        totalLockedTime += parseFloat(whatIfSplits[step]);
      }
  });

  const remainingTime = (avgSeconds || 0) - totalLockedTime;
  let totalPropWeightForUnlocked = 0;

  // This will find the total proportional weight of all steps that are NOT locked
  steps.forEach(step => {
      if (!lockedSteps.includes(step)) {
          totalPropWeightForUnlocked += (proportions[step] || 0);
      }
  });

  const estRow = document.createElement("tr");
  let estSum = 0;

  steps.forEach(step => {
    const td = document.createElement("td");
    let value = "";

    if (whatIfMode) {
      if (whatIfSplits[step] !== undefined && whatIfSplits[step] !== "") {
          // If the step is locked, use the user-defined value
          value = parseFloat(whatIfSplits[step]).toFixed(2);
      } else {
          // If the step is NOT locked, calculate its proportional value
          const prop = proportions[step];
          if (prop && totalPropWeightForUnlocked > 0 && avgSeconds) {
              const share = (prop / totalPropWeightForUnlocked);
              value = (remainingTime * share).toFixed(2);
          }
      }

      td.textContent = value;
      td.style.cursor = "pointer";
      td.style.background = "#fffbe6";

      td.addEventListener("click", function handleClick() {
        const input = document.createElement("input");
        input.type = "number";
        input.step = "0.01";
        input.min = "0";
        input.style.width = "70px";
        input.value = value || "";

        td.textContent = "";
        td.appendChild(input);
        input.focus();

        function save() {
          if (input.value === "") {
            delete whatIfSplits[step];
          } else {
            const lockedValue = parseFloat(input.value);
            if (!isNaN(lockedValue)) {
              // This is the key change:
              // Reset whatIfSplits and then re-calculate all splits
              whatIfSplits = {};
              whatIfSplits[step] = lockedValue;

              const newLockedTime = lockedValue;
              const newRemainingTime = (avgSeconds || 0) - newLockedTime;
              let newTotalPropWeight = 0;
              steps.forEach(s => {
                  if (s !== step) newTotalPropWeight += (proportions[s] || 0);
              });

              steps.forEach(s => {
                  if (s !== step) {
                      const share = (proportions[s] || 0) / (newTotalPropWeight || 1);
                      whatIfSplits[s] = parseFloat((newRemainingTime * share).toFixed(2));
                  }
              });
            }
          }
          updateTables();
        }

        input.addEventListener("blur", save);
        input.addEventListener("keydown", e => { if (e.key === "Enter") input.blur(); });
        td.removeEventListener("click", handleClick);
      });
    } else {
      const w = proportions[step];
      if (w && avgSeconds) value = (avgSeconds * w).toFixed(2);
      td.textContent = value;
    }

    if (value) estSum += parseFloat(value);
    estRow.appendChild(td);
  });

  const estAvgTd = document.createElement("td");
  estAvgTd.textContent = estSum ? estSum.toFixed(2) : "";
  estAvgTd.style.fontWeight = "bold";
  estRow.appendChild(estAvgTd);

  estimatedSplitsTableBody.appendChild(estRow);

  variationTableHead.innerHTML = "";
  variationTableBody.innerHTML = "";

  const varHeaderRow = document.createElement("tr");
  steps.forEach(step => {
    const th = document.createElement("th");
    th.textContent = step;
    varHeaderRow.appendChild(th);
  });
  variationTableHead.appendChild(varHeaderRow);

  const varRow = document.createElement("tr");
  steps.forEach(step => {
    let percent = "";
    let percentValue = null;

    const user = customSplits[step] !== undefined && customSplits[step] !== "" ? parseFloat(customSplits[step]) : null;

    let baseline = null;
    if (whatIfMode && whatIfSplits[step] !== undefined && whatIfSplits[step] !== "") {
      baseline = parseFloat(whatIfSplits[step]);
    } else if (!whatIfMode && proportions[step] && avgSeconds) {
      baseline = (avgSeconds * proportions[step]);
    }

    if (user !== null && baseline !== null && baseline > 0) {
      percentValue = ((user - baseline) / baseline) * 100;
      percent = percentValue.toFixed(1) + "%";
    }
    const td = document.createElement("td");
    td.textContent = percent;

    if (percentValue !== null) {
      if (percentValue > 20) {
        td.style.color = "#e57373";
        td.style.fontWeight = "bold";
      } else if (percentValue < -20) {
        td.style.color = "#388e3c";
        td.style.fontWeight = "bold";
      }
    }
    varRow.appendChild(td);
  });
  variationTableBody.appendChild(varRow);

  const tipsList = document.getElementById("specific-tips");
  tipsList.innerHTML = "";

  steps.forEach(step => {
    if (proportions[step] && avgSeconds && customSplits[step] !== undefined && customSplits[step] !== "") {
      const ideal = proportions[step] * avgSeconds;
      const user = parseFloat(customSplits[step]);
      const percent = ((user - ideal) / ideal) * 100;
      if (percent > 20) {
        const li = document.createElement("li");
        li.textContent = `Your '${step}' split is ${percent.toFixed(1)}% higher than the suggested split – this stage is something to focus on in your practice.`;
        tipsList.appendChild(li);
      }
    }
  });

  if (!tipsList.hasChildNodes()) {
    const li = document.createElement("li");
    li.textContent = "No splits are more than 20% above the suggested splits. Keep it up!";
    tipsList.appendChild(li);
  }
}


function updateTopSolversTable() {
  const puzzle = puzzleSelect.value;
  const method = methodSelect.value;
  const steps = getStepsWithToggles(puzzle, method);

  const table = document.getElementById("top-solvers-table");
  const thead = table.querySelector("thead");
  const tbody = table.querySelector("tbody");
  thead.innerHTML = "";
  tbody.innerHTML = "";

  const headerRow = document.createElement("tr");
  ["Solver", "Time", ...steps, "YouTube", "Recon"].forEach(label => {
    const th = document.createElement("th");
    th.textContent = label;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  const solves = (topSolversData[method] && topSolversData[method][puzzle]) || [];
  solves.forEach(solve => {
    const tr = document.createElement("tr");

    const solverTd = document.createElement("td");
    solverTd.textContent = solve.solver;
    tr.appendChild(solverTd);

    const timeTd = document.createElement("td");
    timeTd.textContent = solve.time;
    tr.appendChild(timeTd);

    steps.forEach((step) => {
  const td = document.createElement("td");
  const actual = parseFloat(solve.splits[step]);

  if (!isNaN(actual)) {
    td.textContent = actual.toFixed(2);

    const fractions = splitsData[method]?.[puzzle];
    if (fractions) {
      const total = parseFloat(solve.time);
      const stepFraction = fractions[step];

      if (stepFraction) {
        const ideal = total * stepFraction;   // ideal per-step time
        const deviation = ((actual - ideal) / ideal) * 100;

        if (deviation >= 20) {
          td.style.color = "red";   // much slower than ideal
        } else if (deviation <= -20) {
          td.style.color = "green"; // much faster than ideal
        } else {
          td.style.color = "black"; // close to ideal
        }
      }
    }
  } else {
    td.textContent = "-";
  }

  tr.appendChild(td);
});

    const ytTd = document.createElement("td");
    if (solve.youtube) {
      const a = document.createElement("a");
      a.href = solve.youtube;
      a.target = "_blank";
      a.textContent = "Watch";
      ytTd.appendChild(a);
    }
    tr.appendChild(ytTd);

    const reconTd = document.createElement("td");
    if (solve.recon) {
      const a = document.createElement("a");
      a.href = solve.recon;
      a.target = "_blank";
      a.textContent = "Recon";
      reconTd.appendChild(a);
    }
    tr.appendChild(reconTd);

    tbody.appendChild(tr);
  });

  if (solves.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = steps.length + 4;
    td.textContent = "No solves available for this method and puzzle.";
    td.style.textAlign = "center";
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
}

function resetSplitsAndUpdate() {
  customSplits = {};
  updateTables();
}

puzzleSelect.addEventListener("change", () => {
  resetSplitsAndUpdate();
  updateTopSolversTable();
});
methodSelect.addEventListener("change", () => {
  resetSplitsAndUpdate();
  updateTopSolversTable();
});

whatIfToggle.addEventListener("change", () => {
  whatIfMode = whatIfToggle.checked;
  updateTables();
});

puzzleSelect.addEventListener("change", resetSplitsAndUpdate);
methodSelect.addEventListener("change", resetSplitsAndUpdate);
l9eToggle.addEventListener("change", updateTables);
f4cToggle.addEventListener("change", updateTables);
edgesToggle.addEventListener("change", updateTables);
avgInput.addEventListener("input", updateTables);
document.getElementById("reset-splits-btn").addEventListener("click", resetSplitsAndUpdate);
l9eToggle.addEventListener("change", updateTopSolversTable);
f4cToggle.addEventListener("change", updateTopSolversTable);
edgesToggle.addEventListener("change", updateTopSolversTable);

updateTopSolversTable();
updateTables();


