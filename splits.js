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
    "6x6": { "F2C": 0.2144, "F3E": 0.0985, "L4C": 0.2470, "L9E": 0.3117, "LCE": 0.0509, "L8E": 0.2608, "3x3": 0.1283 },
    "7x7": { "F2C": 0.2309, "F3E": 0.1104, "L4C": 0.2996, "L9E": 0.2824, "LCE": 0.0447, "L8E": 0.2377, "3x3": 0.0767 }
  },
  "Redux": {
    "4x4": { "F2C": 0.0867, "L4C": 0.1370, "F8E": 0.3753, "L4E": 0.0959, "Edges": 0.4713, "3x3": 0.3051 },
    "5x5": { "F2C": 0.1383, "L4C": 0.1955, "F8E": 0.2998, "L4E": 0.1355, "Edges": 0.4353, "3x3": 0.2309 },
    "6x6": { "F2C": 0.1961, "L4C": 0.2299, "F8E": 0.3088, "L4E": 0.1024, "Edges": 0.4198, "3x3": 0.1629 },
    "7x7": { "F2C": 0.2388, "L4C": 0.2864, "F8E": 0.2784, "L4E": 0.1055, "Edges": 0.3839, "3x3": 0.0909 }
  },
  "Hoya": {
    "4x4": { "F4C": 0.2238, "F2C": 0.1044, "M2C": 0.1193, "F4E": 0.1957, "L2C": 0.0593, "L8E": 0.1962, "3x3": 0.3251 },
    "5x5": { "F4C": 0.2864, "F2C": 0.1414, "M2C": 0.1840, "F4E": 0.1879, "L2C": 0.0507, "L8E": 0.3049, "3x3": 0.1701 },
    "6x6": { "F4C": 0.3802, "F2C": 0.2044, "M2C": 0.1758, "F4E": 0.1755, "L2C": 0.0655, "L8E": 0.2669, "3x3": 0.1119 },
    "7x7": { "F4C": 0.4437, "F2C": 0.2375, "M2C": 0.2062, "F4E": 0.1626, "L2C": 0.0844, "L8E": 0.2306, "3x3": 0.0787  }
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
        solver: "Tymon Kolasiński",
        time: "33.11",
        splits: {
          "F2C": "5.37",
          "F3E": "3.9",
          "L4C": "6.5",
          "L9E": "12.3",
          "LCE": "1.67",
          "L8E": "10.63",
          "3x3": "5.04"
        },
        youtube: "https://youtu.be/AWwKt63olZo?si=8vH3Ejx846XQy6uq&t=129",
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
        solver: "Tymon Kolasiński",
        time: "30.45",
        splits: {
          "F2C": "6.26",
          "F3E": "5.62",
          "L4C": "4.46",
          "L9E": "9.18",
          "LCE": "2.12",
          "L8E": "7.06",
          "3x3": "4.93"
        },
        youtube: "https://youtu.be/9cA2A8OJUFY?si=mhyrQdtlqd0U3uBq",
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
        solver: "Tymon Kolasiński",
        time: "62.87",
        splits: {
          "F2C": "14.00",
          "F3E": "6.44",
          "L4C": "13.04",
          "L9E": "22.36",
          "LCE": "4.36",
          "L8E": "18.00",
          "3x3": "7.03"
        },
        youtube: "https://youtu.be/7OvIv3eZbzM",
        recon: "https://alg.cubing.net/?puzzle=6x6x6&setup=z2&alg=3r-_U-_r_x_U_3r_U-_3r-_x-_u_U-_3r-_x-_x_3r-_r_U-_3r_r-_U_x-_R-_u_l_%2F%2F_white%0Ax_y_r-_z-_4r_3r-_U2-_4r-_3r_x_y_U-_U-_3r_r-_U2-_r_x_z-_U_r-_U2-_r_z_U_r_4r-_z-_U-_3r_3r-_U-_3r_r-_U2-_r_3r-_z_x_U-_r-_U2-_x_4l_3l2-_U-_r_U-_r-_x-_z-_U-_U-_r_U-_U-_r-_%2F%2F_yellow%0AR-_x_y_4l-_5r_U-_4r2-_U_%2F%2F_WR%0AL_U-_R_U_3l_x-_r_U_r-_4r2_5r-_x-_D-_%2F%2F_WO%0Ax-_R_U-_r2_U-_R_U_3r_r-_U-_%2F%2F_WB%0AL2-_U-_5r_U-_r-_U_2L-_5r_3r_U-_3r-_U_3r_U-_3r2-_5r_3r2_U_3r2-_5r2_r-_U_r_%2F%2F_blue%0AU-_U-_U-_r_U_r-_U_4r_r_U-_r-_U_l-_L_U-_U-_5r_r-_U-_r_3r2-_U-_U-_3r_U_3r_5r-_U-_r_U_r-_5r_4r-_U-_4r_r2-_U2-_r_%2F%2F_red%0AU_U_r_U-_r-_U-_r_U_5r-_U-_3r_U_3r-_U-_r_U2-_r-_U_r_U-_3r_r-_U_r-_U-_r_3r-_%2F%2F_orange%2Fgreen%0Az-_y_U_R_R-_u-_R-_F_R_F-_R_U-_R-_3u_4u-_R-_U_R_u_D-_R_U_R_U-_R2-_D_%2F%2F_WG%0Au-_U_U_R_U-_R-_3d-_R_U-_R-_4u-_%2F%2F_YR%0AU-_R_U-_R-_3d-_R_U-_R-_u_U_R_U-_R-_3u-_d_%2F%2F_YO%0AU_R_U-_R-_d-_U-_L-_U_L_u-_%2F%2F_YB%0AU-_5d-_L-_U_L_U_R_U-_R-_3u-_4u-_R-_F_R_F-_R_U-_R-_d_d_%2F%2F_OB%0AU_R_U-_R-_u_3u-_4u_R_U-_R2-_U-_R_y-_5d_R_R-_R_U-_R-_4u_U-_R_U-_R-_d-_R-_F_R_F-_R_U-_R-_3d-_L-_U_L_3d_U-_4d_%2F%2F_RB%0AR_U-_R-_4d-_R_U-_R-_u_%2F%2F_RG%0AU_L-_U_L_u-_u-_R-_F_R_F-_R_U-_R-_u_%2F%2F_YG%2FOG%0Ay-_R-_U-_R_U_R-_U2-_R_%2F%2F_1st_pair%0AU_5d_R-_U-_R_U_R-_U2-_R_%2F%2F_2nd_pair%0AU_R_U_R-_F_U_F-_%2F%2F_3rd_pair%0AF_R-_F-_R2_U_R-_U_R_U-_R-_%2F%2F_4th_pair%0AU-_U_R_U-_U-_R-_U-_U-_R-_F_R2_U-_R-_U2_R_U-_U-_R-_U-_F-_U2_%2F%2F_ZBLL&type=alg"
      },

      {
        solver: "Seung Hyuk Nahm (남승혁)",
        time: "62.67",
        splits: {
          "F2C": "12.93",
          "F3E": "7.13",
          "L4C": "16.20",
          "L9E": "18.23",
          "LCE": "2.93",
          "L8E": "15.30",
          "3x3": "8.18"
        },
        youtube: "https://youtu.be/pI1sgmJfrU4",
        recon: "https://alg.cubing.net/?puzzle=6x6x6&setup=Uw_D_B-_3Rw-_Lw2_3Uw-_B-_Lw-_R-_F-_3Uw_B_3Uw_3Rw2_Lw2_B-_F_Lw_Rw-_3Uw-_Fw_Lw_Bw2_F-_B_3Rw_U_D2_3Rw-_Uw_L-_Bw_Dw2_Lw-_Rw2_3Rw2_L_R2_Dw_3Uw-_Bw-_F-_Rw-_Fw2_D2_F2_3Fw-_L2_U2_Rw_Uw-_B-_Uw2_3Uw2_3Rw_L_Lw_Fw_F-_D-_F2_3Uw_L2_Bw2_Dw_F-_R-_Uw2_L_3Uw2_3Fw_Bw-_3Uw_F-_B2_U_Dw_Bw_Lw2_Fw&alg=x_y-_%2F%2F_inspection%0Al-_U-_l_F_u-_3d_d-_U-_U-_3r_x-_y-_x-_D-_4l2-_y-_B_U-_r-_U_r_U-_r-_U-_r_z-_U_4r_U-_4r-_x-_z-_U_x-_3r_U-_4r_x-_z-_D_r-_%2F%2F_white%0A3r_U-_3r-_r_U_r-_U_r_U-_r-_z_F-_U-_3r-_R_3u-_R2-_3u_U-_x-_D_U-_U-_4r_x-_r_z-_r_U2-_r-_z_U_x-_x_3r-_r_U2-_r-_3r_x-_z-_U-_r_U2-_r-_%2F%2F_yellow%0Az_F-_U-_3r2-_L_L_U_r2-_D-_%2F%2F_WG%0AF-_4r_5r-_U_3r-_r_x-_5r2_U_%2F%2F_WO%0AL-_5r-_L-_U_3r2-_U-_U-_r-_5r_x-_U-_U-_U-_3r_4r-_5r_F-_%2F%2F_WR%0AU_5r-_5r_r_U2-_r-_U_r_U-_U-_5r_U-_U_r_U-_r-_4r2-_5r2_U-_4r2-_5r2_3r_3r-_r_U_5r2_U-_5r2-_U-_3r2_U-_3r2-_U-_r2_U-_3r_r_%2F%2F_red%0AU-_r_U_r-_U-_U-_5r_U_5r-_r_U_r-_5r_U-_U-_5r_U-_5r-_r_U_r-_r-_U2-_r_5r-_U-_U-_5r_U_5r_U-_r-_U_r_3r2-_U2-_3r2_5r-_U_r_U_r-_U-_r-_U2-_r_%2F%2F_green%0A5r_U-_U-_5r-_4r_U_r-_U-_r_4r-_U_3r_U-_3r-_r_U-_r-_U_U_r_U-_r-_3r_U2-_3r-_U_r_U-_r-_U-_r_U-_r-_%2F%2F_orange%2Fblue%0Az-_y-_F-_d-_U_R_U-_R-_u_R_U-_R-_u-_3d_D_R_U_R_U-_R2-_%2F%2F_WB%0AR_U-_R-_3u-_R_U_R-_F_R-_F-_R_u_5d-_R_U-_R-_4u-_%2F%2F_OB%0AU_F_R-_F-_R_4u_U-_R-_U-_R_u-_3u_%2F%2F_RB%0AR-_U_R2_U-_R-_3u_y-_r_r-_R_U_R-_F_R-_F-_R_u_3u-_%2F%2F_YR%0AU-_R_U-_R-_4d_u_3u-_R_U_R-_F_R-_F-_R_u-_3u_%2F%2F_YG%0AU-_R_U-_R-_u-_u-_3u-_4u_y_R-_U_R_3u-_R_U_R-_F_R-_F-_R_3u_y-_R_U-_R-_u-_%2F%2F_OG%0Ay_R_U_R-_u_L_U-_L-_3d_%2F%2F_YB%0AR_U-_R-_3u-_y_3u-_d_R_U_R-_F_R-_F-_R_3u_4u-_%2F%2F_YO%2FRG%0AU_R_U-_R-_5d_R-_U-_R_%2F%2F_1st_pair%0AU_L-_U_L_y-_U-_L-_U_L_%2F%2F_2nd_pair%0AU-_R_U_R-_%2F%2F_3rd_pair%0AU_R-_U_R_U-_R-_U_R_%2F%2F_4th_pair%0AU_R-_U-_F_U_R_U-_R-_F-_R_%2F%2F_OLL%0AU_R-_U_R_U-_R-_F-_U-_F_R_U_R-_F_R-_F-_R_U-_R_%2F%2F_PLL"
      },

      {
        solver: "Lim Hung (林弘)",
        time: "63.94",
        splits: {
          "F2C": "15.50",
          "F3E": "7.33",
          "L4C": "16.79",
          "L9E": "13.74",
          "LCE": "2.58",
          "L8E": "11.16",
          "3x3": "10.58"
        },
        youtube: "https://www.youtube.com/watch?v=_JRdDDALx2Q",
        recon: ""
      },

      {
        solver: "Henry Lichner",
        time: "68.20",
        splits: {
          "F2C": "12.88",
          "F3E": "9.07",
          "L4C": "16.68",
          "L9E": "21.34",
          "LCE": "3.23",
          "L8E": "18.11",
          "3x3": "8.46"
        },
        youtube: "https://youtu.be/ugbRDSj3XEQ",
        recon: ""
      },

      {
        solver: "Henry Lichner",
        time: "68.69",
        splits: {
          "F2C": "14.34",
          "F3E": "6.07",
          "L4C": "16.68",
          "L9E": "23.08",
          "LCE": "4.20",
          "L8E": "18.88",
          "3x3": "8.52"
        },
        youtube: "https://youtu.be/ugbRDSj3XEQ",
        recon: ""
      },

    ],
    "7x7": [
      {
        solver: "Tymon Kolasiński",
        time: "96.84",
        splits: {
          "F2C": "24.84",
          "F3E": "7.04",
          "L4C": "27.9",
          "L9E": "29.48",
          "LCE": "4.04",
          "L8E": "25.44",
          "3x3": "7.58"
        },
        youtube: "https://youtu.be/Aw9oulTvCsI",
        recon: "https://alg.cubing.net/?puzzle=6x6x6&setup=Bw2_Rw_Lw_3Uw_Uw-_3Rw2_3Uw_Dw_Lw-_B2_Lw-_U2_L2_Dw_Bw_L_3Fw_Lw-_3Rw_L2_3Fw-_B-_Fw_Uw_R_3Rw2_3Fw-_Lw2_Dw-_Bw-_U-_Rw2_3Rw-_3Uw2_F2_B-_3Fw2_U2_B_3Uw-_Lw-_Dw-_3Rw-_Rw_U2_Uw-_Fw2_F2_D-_Uw_B_D2_3Uw-_Lw2_3Uw_L2_3Uw-_L-_B2_3Uw-_3Rw_3Uw_Bw2_Fw_3Fw_D-_B2_3Uw_R2_F-_R-_D2_Bw_U-_Dw_3Fw_3Uw2_D_3Fw_D&alg=x2_z-_%2F%2F_inspection%0AU-_F2_r2_F_U_l_x-_y_D_3r_r-_F_u_F-_F-_3r-_r_F_r_U-_4l-_z-_y_U2_3r_r-_U-_U-_3r-_4r_u-_%2F%2F_white%0AU-_x-_3r-_r_z-_3r_U_3r-_U_3r_U_3r-_U-_r_U-_r-_l-_U2_l_x_y_x_U_r-_x_U-_3r-_D_4r-_l-_z-_3r_U-_U-_3r-_z_x-_x-_D_F-_U-_r-_3r2_4r2-_x_z-_U-_U-_r_U-_U-_r-_%2F%2F_yellow%0Az_U-_D-_r2_5r2-_U-_l_U-_r_3r-_F_%2F%2F_WR%0AR2_U-_B_r-_x-_3r2_r2-_U-_U-_r2_4r2-_5r2_B_%2F%2F_WG%0Ax_U-_x-_R_U_3r_r_5r-_U_r-_F_%2F%2F_WB%0AU_r-_U-_r_U_5r_U_4r-_3r_5r_U_5r-_r_U-_4r_U_5r_5r_U-_U-_r2-_5r-_3r_U-_3r-_U_3r-_U_U-_r-_U_r_U_r_r_%2F%2F_orange%0A5r-_U_5r_3r-_U_3r_U-_U-_5r_r-_U-_U-_r_5r2-_U_U_4r_U-_U-_4r-_5r_U-_3r_U-_U-_3r-_5r-_U_3r_U-_3r-_5r_U-_U-_5r-_r_U-_U-_r-_U-_r2_U-_U-_r2-_%2F%2F_green%0AU-_r_U-_r-_U-_U-_4r_3r-_U2-_4r-_3r_U-_U-_3r_U_3r-_U_U_r_U_r-_U-_3r_U2-_3r-_U-_r_U_r-_%2F%2F_blue%2Fred%0Az_x-_x-_R-_4d-_R_U-_R-_u-_d_R_U_R_U-_R2-_U-_D-_%2F%2F_WO%0Ay-_5d-_5d_R_U-_R-_5d_U_L-_U_L_u_3u_%2F%2F_YO%0Ay-_y_L-_U_L_3u2-_4u2_%2F%2F_YB%0AU_L-_U_L_y_y_u2_y-_y-_4u_3u_3u_u-_d_R-_F_R_F-_R_U-_R-_4u-_u_%2F%2F_BO%0A5d-_L-_U_L_3u-_%2F%2F_YR%0AU2_L-_U_L_u-_d_R-_F_R_F-_R_U-_R-_d-_%2F%2F_YG%0Ay_R-_U_R_3d_R_U-_R-_3d-_u-_R-_F_R_F-_R_U-_R-_u_%2F%2F_GR%2FGO%0AU-_r_U2_x_r_U2-_r_U2-_r-_U2_l_U2_4r-_U2_r_U2-_r-_U2_r-_%2F%2F_OParity(BR)%0AR_U-_R-_U_R_U-_R-_U_R_U-_R-_%2F%2F_1st_pair%0AU_D-_L_U_L-_U_L_U-_L-_y_5u_%2F%2F_2nd_pair%0AL-_U_L_U-_R_U_R-_%2F%2F_3rd_pair%0A5d_R_U-_U-_R-_U_R_U-_R-_%2F%2F_4th_pair%0AU_3r2_B2_3r-_U2_3r-_U2-_x-_U2_3r-_U2-_3r_U2_3r-_U2-_3r2_U2-_%2F%2F_OParity%0Ax_U-_R-_U-_U-_R_U_R-_U_R_U_R-_U-_R_U-_R-_U2_R_U-_%2F%2F_2GLL"
      },

      {
        solver: "Seung Hyuk Nahm (남승혁)",
        time: "99.06",
        splits: {
          "F2C": "23.02",
          "F3E": "11.42",
          "L4C": "31.2",
          "L9E": "27.02",
          "LCE": "5.3",
          "L8E": "21.72",
          "3x3": "6.40"
        },
        youtube: "https://youtu.be/11SzkDDlL6I",
        recon: "https://alg.cubing.net/?puzzle=7x7x7&setup=3d-_3b-_r_B_u2_l-_r-_3f_b-_d2_b-_l_D_F2_3r2_3d-_3r-_l_b-_L_u2_L_b2_R-_3d_u2_b2_3u-_r_f2_3f2_3r2_D-_F-_u-_f_3u2_b2_D_3d-_3u-_3l2_D-_3u_F-_3d-_3u2_3l-_F_R_d-_r-_D-_L-_3l_D_l_D-_l_R2_3u2_3f-_u-_r-_u-_l_R_3d2_b2_B2_U2_u-_D_3d_l2_R_d-_D-_f_D-_3d_l_3l-_B_d_F_3b-_u-_b2_R-_L2_B-_3u-_3b-_b_3l-_D-_3r-_L_f&alg=x_z2_%2F%2F_inspection%0AU-_5r-_3r_x-_U-_5r-_4r_x_6d_F-_r_U-_r-_y_U_x_U_r-_r-_3r_U_4r-_5r_x_U-_U-_3r-_4r_U-_4r-_3r_3r2_x-_F_l-_U_l_y-_x-_U-_U_U-_r_U-_4r-_5r_U-_5r-_4r_6r_u-_F_5r_F_4r_D-_x-_r2_z-_D-_r-_%2F%2F_white%0AF-_3r_U-_3r-_y-_U-_3r_U_3r-_y-_U_U_3r_U-_3r-_R-_y-_z_4l_x-_F-_4r-_R-_3u-_R2_3u_U_F-_3r_x-_z-_r_U-_r-_z_x_U_4r-_5r_U-_5r-_4r_U-_U-_4r-_F_z-_F_r_U-_r-_z_x-_4r-_5r_U-_5r-_4r_x-_z-_U-_U-_r_U-_r-_z_x_r_U2-_x-_r-_U-_5r-_3r_z-_U-_U-_r_U-_U-_r-_%2F%2F_yellow%0Az_D-_3r-_4r_x-_U-_U-_r2-_L_U_4r2_5r2-_U-_D-_%2F%2F_WB%0Ax-_U_3r-_U-_r2-_U-_5r-_4r_U-_U-_3r2_4r2-_6r2_U-_%2F%2F_WR%0Ax-_L_U_U-_r-_4r_3r_4r-_3r_4r2-_6r_4r-_5r_x-_U_3r-_r_F_%2F%2F_WO%0AL_L-_U-_U_r_U-_r-_U-_U-_6r_U-_6r-_r_U-_6r_3r-_U-_U-_3r2_r_U2-_r-_U_U_r_U_4r-_5r_6r_U_U-_6r-_5r_r_U_5r2-_6r2_U_3r-_4r_U-_4r-_3r_U-_r_U-_U-_6r-_U_r-_6r_U_3r2_6r_U_6r2-_4r2_U_4r2-_U-_r2_U-_U-_6r_U_6r-_r_U_r_%2F%2F_orange%0AU-_U-_r_U-_r-_U_U_6r_U-_6r_r2-_U_6r2-_r2_U-_6r_6r_U_6r-_4r_U_4r-_r-_U2-_r_6r_4r-_4r_r-_U_r_4r-_3r_U_3r-_4r_r2-_3r2_U2-_r2-_3r2_6r2-_U-_U-_6r2_U-_6r-_r-_U_r-_6r_U-_6r-_r2_U-_5r-_6r_U_5r_6r-_U-_6r_U_6r-_3r-_4r_U-_4r-_3r_3r-_r_U2-_r-_3r_%2F%2F_blue%0AU-_6r_U-_3r-_U_U_3r_r-_U-_U-_r_U_6r-_U-_3r_U-_3r-_U-_r_5r-_6r_U_5r_6r-_r-_U_U-_3r_U_3r-_r_U_r-_U_r_U-_r-_3r_U2-_3r-_U-_3r-_4r_U2-_4r-_3r_r_U_r-_U-_r_U-_r-_U_U_r_U-_4r-_5r_U_r-_U-_5r-_4r_%2F%2F_red%2Fgreen%0AU-_z-_3u-_R_U_R-_F_R-_F-_R_5u_D_F-_F_D_F_R_F-_R-_F_R-_F-_R_3u-_3d_D2_R-_F-_R_F_D_%2F%2F_WG%0Ay_U-_R_U-_R-_u_U_R_U-_R-_d-_y-_R-_U_R_u-_3u_%2F%2F_RG%0AR_U-_R-_4u-_r_r-_R_U_R-_F_R-_F-_R_3u-_3d_u-_R_U_R-_F_R-_F-_R_u_%2F%2F_YO%0AU_R_U-_R-_y-_R_U_U-_R-_4u2_5u2-_R_U_R-_F_R-_F-_R_d_%2F%2F_RB%0AR_U-_R-_d-_R_U-_R-_4u-_d_u-_%2F%2F_YG%0AR_U-_R-_u_3u2-_4u2_d_z-_r-_5r_U2-_5r-_3r_3r-_r_U2-_z_R-_U_R2_U-_R-_5u-_%2F%2F_YB%0AU-_R_U-_R-_5u_y-_R-_U_R_R_U-_R-_4u_5u-_R_U_R-_F_R-_F-_R_4u-_5u_%2F%2F_OG%0AU_R_U-_R-_R_U_R-_F_R-_F-_R_4u_5u-_R_U_R-_F_R-_F-_R_4u-_5u_R_U_R-_F_R-_F-_R_5u-_R_U_R-_F_R-_F-_R_d_%2F%2F_YR%2FOB%0Ay-_R-_U-_R_U_R-_U2-_R2_%2F%2F_1st_pair%0AU2-_R-_L_U-_L-_%2F%2F_2nd_pair%0AU_R_U_R-_L-_U_L_%2F%2F_3rd_pair%0AU_6r_U-_6r-_U_U_6r_U_6r-_U-_R_U-_R-_%2F%2F_4th_pair%2FZBLS%0AR_U_R-_U_R_U2-_R-_%2F%2F_OLL(CP)%0AR_U-_R_U_R_U_R_U-_R-_U-_R2_U_%2F%2F_EPLL"
      },


      {
        solver: "Zhangshuai Zhou (周章率)",
        time: "99.77",
        splits: {
          "F2C": "21.23",
          "F3E": "12.73",
          "L4C": "28.23",
          "L9E": "26.66",
          "LCE": "4.5",
          "L8E": "22.16",
          "3x3": "10.92"
        },
        youtube: "https://www.bilibili.com/video/BV1F4N9eXEnG/",
        recon: ""
      },


      {
        solver: "Emmanuel Kao",
        time: "98.39",
        splits: {
          "F2C": "26",
          "F3E": "11.23",
          "L4C": "28.23",
          "L9E": "26.66",
          "LCE": "4",
          "L8E": "23.2",
          "3x3": "6.73"
        },
        youtube: "https://youtu.be/-k7vBhw5hZE",
        recon: ""
      },


      {
        solver: "Lim Hung (林弘)",
        time: "95.28",
        splits: {
          "F2C": "20.95",
          "F3E": "10.7",
          "L4C": "29.37",
          "L9E": "25.7",
          "LCE": "4.41",
          "L8E": "21.29",
          "3x3": "8.56"
        },
        youtube: "https://youtu.be/C_1CiV_MMy8?si=pAbM6ND99fNrPo1E",
        recon: ""
      },

    ]
  },

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
        solver: "Max Park",
        time: "32.23",
        splits: {
          "F2C": "5.63",
          "L4C": "5.30",
          "F8E": "9.56",
          "L4E": "5.21",
          "Edges": "14.77",
          "3x3": "6.53"
        },
        youtube: "https://youtu.be/jbgZ_c3E7OA",
        recon: "https://alg.cubing.net/?puzzle=5x5x5&setup=R-_F_Bw2_Uw_Bw-_R_Fw_R2_D_Fw-_F2_Lw-_L-_D-_Bw-_R_F-_L2_Uw_R2_B2_Fw_Uw-_L_Bw2_Fw_B_D_Fw2_L2_Bw-_Dw_L_Dw-_Fw-_U_Uw_R-_Uw-_Bw2_L_Fw-_Uw2_F-_Bw2_Uw_R2_L-_Uw-_L_Dw2_L-_U-_Dw2_Rw_L2_D2_R_U2_Lw&alg=z2_%2F%2F_inspection%0AU-_U-_r_R-_F_3r_U-_3r-_3d-_u-_x-_3r-_%2F%2F_yellow%0Ar_U-_r-_y_y_U_r_U-_r-_r-_3r_U_3r-_F_r_x-_y-_D_3l-_l2_R_u-_R2-_3u_x-_x_3u-_u_%2F%2F_white%0Ax-_x-_3l-_U-_r2_U_l_U_x-_x-_r_U-_r-_r_U-_r-_3r_U_3r-_r-_%2F%2F_red%0AU_3r_r-_U_x-_3r-_r_U-_D_U-_r2_U-_U-_r2-_%2F%2F_green%0Ar_U_r-_F_F_U-_r_U_r-_U_r_U_r-_%2F%2F_blue%2Forange%0Az-_L-_U_L_u-_z-_z-_R_U-_R-_d-_R_U-_R-_3d_%2F%2F_WR%0AR_U-_R-_x-_y-_x-_r_z_R_U_R-_4d-_L-_U_L_d_L-_U_L_U-_y-_R_U-_R-_d_d_%2F%2F_WO%2FWB%0AR_U-_R-_4d_4d_U_R_U-_R-_4d_R_U-_R-_x-_y_z-_u-_u-_%2F%2F_YO%0AU_R_U-_R-_u_d-_R_U-_R-_3u-_%2F%2F_WG%0AR_U-_R-_L-_U_L_u-_U-_d_%2F%2F_YB%0AR_U-_R-_u-_x-_y_z-_u_%2F%2F_YR%0AU_R_U-_R-_u_u_y-_d-_R_U_R-_4d-_L-_U_L_d-_%2F%2F_YG%2FOG%0Ay_U_3d_R_U-_R-_3d-_%2F%2F_RG%0AU_R-_x_R-_U_F-_r_U_U_r_U-_U-_x_U_U_r_U-_U-_3r-_U_U_l_U-_U-_r2-_%2F%2F_RB%2FOB%0Ay-_x-_4d_U_R-_U_R-_F_%2F%2F_cross%0AU_R-_U-_R_U-_R_U-_R-_%2F%2F_1st_pair%0Ay_R_U-_R-_y_R_U_R-_%2F%2F_2nd_pair%0AU-_R-_U_R_4d-_U_D_D_R_U-_R-_D_D_%2F%2F_3rd_pair%0AR_U-_R-_%2F%2F_4th_pair%0AU-_F_R_U_R-_U-_R_U_R-_U-_F-_%2F%2F_OLL%0AU_R_U-_R-_U-_R_U_R_D_R-_U-_R_D-_R-_U-_U-_R-_U-_%2F%2F_PLL"
      },

            {
        solver: "Mark Zimmermann",
        time: "31.84",
        splits: {
          "F2C": "4.33",
          "L4C": "7.03",
          "F8E": "6.30",
          "L4E": "5.66",
          "Edges": "11.96",
          "3x3": "8.52"
        },
        youtube: "https://youtu.be/9yCmOZ0xMzU",
        recon: "https://alg.cubing.net/?puzzle=5x5x5&setup=Rw-_F_D2_Uw2_Lw-_F2_Fw-_Rw2_R2_L2_D-_Lw2_U2_R-_Dw_B_Lw_Bw2_Fw-_Uw_L_Lw_U2_Fw-_Lw2_Bw-_Uw2_L2_Fw_R-_Dw_Fw2_B_F-_Lw2_R_Bw_F2_Lw-_Rw_Uw_R2_Uw-_B_D-_B_Lw_B2_Uw-_D_L_F_Fw2_R_Fw-_Lw-_Fw_Rw_U_Uw-&alg=x_z-_%2F%2F_inspection%0AU_Fw_U_Lw-_U-_Rw_U-_Rw-_3Rw-_%2F%2F_red%0Ax-_x-_F_x_Lw_U-_Lw-_U_Rw_Rw-_3Rw_Rw-_U-_3Rw-_Rw2_U-_Rw-_R_Uw2-_y_U_Rw_U2-_Rw-_%2F%2F_orange%0Ax_y_U-_x_Rw-_U-_Rw_U-_x_U2_3Lw-_U_3Rw-_U-_3Rw_U-_Rw-_U2-_F2_Rw_U-_Rw_%2F%2F_green%0AU_3Rw2_Rw2-_U-_3Rw2_3Rw-_U_U-_3Rw_Rw-_U_Rw-_U_Rw_U-_Rw_U2-_Rw2-_%2F%2F_red%0A3Rw_U-_3Rw-_F-_Rw_U_Rw-_%2F%2F_blue%2Fwhite%0Ay_x_R_U-_R-_U-_3Uw_%2F%2F_BR%0AL-_U_L_U-_Uw_3Uw-_%2F%2F_GR%0AL-_U_L_Uw-_3Uw_%2F%2F_OG%0AL-_U_L_Uw-_3Uw_%2F%2F_BW%0AL-_U_L_z2_U-_U-_R-_U-_R_U-_R_U-_R-_Uw_%2F%2F_RW%0AU_R_U-_R-_Uw_%2F%2F_OW%0Ay-_R-_U-_R_3Uw_%2F%2F_GW%0AR_U-_R-_Uw2_R-_F_R_F-_R_U-_R-_U-_Uw_%2F%2F_OY%0Ay-_R-_U-_F_R_F-_R_U-_R-_Uw_%2F%2F_OB%0AR-_Uw-_%2F%2F_BY%0Az_z-_U_U_y-_U_R_U-_R-_z_x_U2_3Rw_U2_3Rw-_F2_Rw2_U2-_Rw_U2_Rw-_U2-_F2_Rw2_%2F%2F_GY%2FRY%0Ay_4Rw-_U_4Rw_L_F-_U-_R-_y-_R2_%2F%2F_cross%0AU-_R-_U_R_U-_R-_%2F%2F_1st_pair%0Ay-_U-_F_U_R_U-_R-_F-_R_U-_R-_%2F%2F_2nd_pair%0AL-_U_L_y-_U-_R_U-_R-_%2F%2F_3rd_pair%0AU_U-U-_L-_U_L_U-_U_U-_L-_U-_L_%2F%2F_4th_pair%0AF_R_U_R-_U-_R_U_R-_U-_F-_%2F%2F_OLL%0AU_R_U_R-_U-_R-_F_R2_U-_R-_U-_R_U_R-_F-_%2F%2F_PLL"
      },

            {
        solver: "Mark Zimmermann",
        time: "32.76",
        splits: {
          "F2C": "2.87",
          "L4C": "5.13",
          "F8E": "9.4",
          "L4E": "4.83",
          "Edges": "14.23",
          "3x3": "10.53"
        },
        youtube: "https://youtu.be/iZBeKtvE8Fg",
        recon: "https://alg.cubing.net/?puzzle=5x5x5&setup=U_Fw_R2_Lw2_Rw_Bw_B2_Dw-_R-_Uw_Fw_Uw2_Rw2_D2_Dw-_Lw2_D_Bw2_F_L-_Dw-_B-_F_Uw-_U2_B-_Fw_R-_D-_Lw2_Dw-_Rw_Uw-_Fw-_Bw_Lw-_Rw_Bw-_R_Dw-_Lw_Rw2_Fw_Lw_Rw_R-_Dw2_Lw-_Rw2_U-_B-_Bw_Rw-_B_U2_Dw-_Fw_L-_F2_U-&alg=x-_z_%2F%2F_inspection%0AU_F-_D-_r-_l2-_U_l2_z-_r-_L2_z-_r-_%2F%2F_orange%0AF_U-_r_U-_r-_y-_U_F-_3l-_U-_3l_z_x-_F_U-_3l_U_U_l_R-_u-_R2_u_%2F%2F_red%0Ax_U_l-_r-_F_U_l_3l-_U-_U-_3r-_r_U_3l-_%2F%2F_yellow%0Ax_x_x-_U-_r_U-_r-_U_3r2_U-_3r2-_U_x_3r_U-_3r-_3l-_U_3l_U-_l-_U-_l_U_U_r-_U-_U-_r_%2F%2F_blue%0Ar_U_r-_F-_r_U_r-_x_U_U_r-_U-_U-_r_U_r-_U-_U-_r-_r2_%2F%2F_green%2Fwhite%0AU-_U-_R-_y-_d-_%2F%2F_OB%0AU-_R_U-_R2-_U-_R_u_U-_%2F%2F_YO%0AR_U-_R-_u-_U-_y-_R-_U_R_U-_d-_%2F%2F_RG%0AR_U-_R-_z-_y_x_U-_U-_y-_R-_U_R_u_%2F%2F_BR%0AR_U-_R-_u-_%2F%2F_WG%0AR_U-_R-_d-_y-_R_U_R-_F_R-_F-_R_d_%2F%2F_WO%0AU-_R_U-_R-_z-_y_x_u-_U-_U-_y-_R_R-_u_3u-_u_3u-_%2F%2F_YR%0AU-_R_U-_R-_u_%2F%2F_WB%0Az2-_U-_R_U-_R-_z-_r_R_x-_3l_r-_U-_R_U_4l-_U_R-_U-_r_%2F%2F_YB%0A3r_U-_R-_U_4l-_U_R_U-_3r-_%2F%2F_YG%0AU_U_x-_3r2_U-_R-_U_4l-_U_R_U-_l2-_%2F%2F_WR%2FGO%0Ax_z-_x_L_y_D-_y-_R2-_F_R_L_D2_%2F%2F_cross%0AU-_y_U-_R-_U_U-_U-_R_y-_U_R_U_R-_%2F%2F_1st_pair%0A4d-_U-_L_L-_L_U_L-_%2F%2F_2nd_pair%0AU_R-_U-_R_%2F%2F_3rd_pair%0AU-_U-_R_U_R-_U-_R_U_R-_%2F%2F_4th_pair%0AU_F_U_R_U-_R-_U_R_U-_R-_F-_%2F%2F_OLL%0AF_R_U-_R-_U-_R_U_R-_f-_2F_R_U_R-_U-_x_R-_U_R_U-_x-_U_%2F%2F_PLL"
      },

            {
        solver: "DongSoo Park (박동수)",
        time: "38.99",
        splits: {
          "F2C": "6.75",
          "L4C": "9.17",
          "F8E": "10.96",
          "L4E": "4.17",
          "Edges": "15.13",
          "3x3": "7.94"
        },
        youtube: "https://youtu.be/tC0wi2em6pI",
        recon: "https://alg.cubing.net/?puzzle=5x5x5&setup=D_Fw2_B2_Bw2_R2_U2_Bw-_Fw2_Uw2_R_L2_Uw_B_Fw-_Rw_Fw-_B_U_Bw2_L_R_Fw_Rw2_U-_D-_Fw_U2_B_Bw-_D_R_U_R2_Rw_Dw-_Uw_R_Fw_Bw_Rw-_Bw_D2_F2_Uw_L-_Bw2_Uw-_F-_B-_R2_Uw-_Lw_Rw2_Uw_Bw_R_Uw-_R_Fw_U-&alg=y_z_%2F%2F_inspection%0AU_l-_U_3r_U-_r_x_U-_r-_U_3l_y-_x-_l_L2-_u_%2F%2F_green%0Az-_F-_r_U_r-_y-_U_U_l-_U_U_l_y-_U_l-_U_l_z_x-_U-_l2_x_z-_U-_U-_r_U-_U-_3l-_%2F%2F_blue%0Ay_x-_x_U_r-_U-_x_x_U-_l_U_r_U-_r-_U-_r2_x-_l_U_l-_l-_U-_r_U_r-_U-_l-_%2F%2F_orange%0AF-_U_r_U-_r-_D_U-_r2_U_r2-_x_r-_U-_r_3r_U-_3r-_r-_U-_U-_r2_%2F%2F_white%0AU-_r-_U-_F-_U-_r_U_r-_x_r-_U-_r_U_r-_U-_3l_%2F%2F_red%2Fyellow%0AU-_U-_U-_y-_R-_U_R_y_u-_%2F%2F_WO%0AU_R_U-_R-_u-_%2F%2F_WB%0AU_R_U-_R-_z2-_u_U_y-_R-_U_R_u-_3u_%2F%2F_WR%0AR_U-_R-_d_d_y-_R_U_R-_y-_u_%2F%2F_WG%0AU-_R_U-_R-_x_z-_x-_d_%2F%2F_GO%0Ay_y-_U-_y_L-_U_L_d_%2F%2F_OB%0AU_R_U-_r-_r_R-_u_x-_x-_u2_%2F%2F_BR%0Ay-_U-_y_L-_U_L_u-_U_R_U-_R-_u-_3u_%2F%2F_YB%0Ay-_U-_R_U-_R-_u_z-_r_x-_3r2_x-_U-_R-_U_4l-_U_R_U-_3r2-_%2F%2F_RG%0Ax-_r_U-_R-_U_4l-_U_R_U-_x-_r-_%2F%2F_YO%0AU2_x_x_U-_U-_r2-_U-_R_U_4l-_U_R-_U-_r2_%2F%2F_YG%2FYR%0Az-_z-_L_D_R-_L_D-_R-_L-_U-_L2_U_L-_D2-_%2F%2F_xcross%0AU_U-_U-_L-_U_L_R-_U_R_%2F%2F_2nd_pair%0AU_R_U-_R-_U-_y-_R_U-_R-_%2F%2F_3rd_pair%0AU_R-_U_R_%2F%2F_4th_pair%0AU_F_R_U-_R-_U-_R_U_R-_F-_%2F%2F_OLL%0AU-_R2-_F2_R_U2_R_U-_U-_R-_F_R_U_R-_U-_R-_F_R2_U_%2F%2F_PLL"
      },

            {
        solver: "Max Park",
        time: "33.39",
        splits: {
          "F2C": "4.83",
          "L4C": "6.07",
          "F8E": "10.21",
          "L4E": "5.53",
          "Edges": "15.74",
          "3x3": "6.75"
        },
        youtube: "https://youtu.be/v2ZFLO467UQ?&t=142",
        recon: "https://alg.cubing.net/?puzzle=5x5x5&setup=Uw_D_B_Fw2_F-_Lw-_Bw2_B2_Lw2_Rw_L-_D_B2_Lw_R2_L2_Fw_Rw_F_Rw-_Lw_U-_Dw_Lw_Bw_Uw2_Rw-_B2_Bw2_D2_B-_L-_R_Fw-_Uw2_D_Fw_Bw_Dw-_Lw-_D2_B2_Lw2_U-_R_Bw-_D-_Rw2_U2_Uw-_L_B_Bw2_F2_R_F2_L2_Uw2_Dw2_D2&alg=x_z2_%2F%2F_inspection%0Au-_3r_U-_r2-_z_x-_U-_x-_3r-_U-_U-_r2-_x_L2_x-_f_%2F%2F_white%0Ax-_z-_u_U-_r_U-_U-_r-_z-_x-_x-_F_F_r_l-_U_l_z_r_U-_U-_r-_%2F%2F_yellow%0Az-_U_3l-_U_r_x_l_x-_F-_r_U_r-_U_x_U-_r_U_r-_l-_U_l_r_%2F%2F_blue%0AU_x_x_U_r-_U_x-_r2_B_x-_3l-_F-_3r_U_3r-_r-_U-_U-_F_r_%2F%2F_orange%0AU-_r_U-_r-_U_r_U-_U-_r-_%2F%2F_red%2Fgreen%0AR2_u-_u-_y_R_U_R-_4d-_L-_U_L_u-_%2F%2F_WO%2FWB%0AL-_U_L_4d-_L-_U_L_z-_x_z-_u-_d_U-__L-_U_L_z-_x-_z-_u_%2F%2F_WG%0AU-_F_R-_F-_R_u-_U_R_U-_R-_u_R_U_R-_4d-_L-_U_L_u-_%2F%2F_YR%0A4d_U_R_U-_R-_z2-_U-_U-_R_U-_R-_y_u-_U_d_%2F%2F_YR%0AL-_U_L_d_L-_U_L_3u-_%2F%2F_GO%0AU_R_U-_R-_u_U-_L-_U_L_u-_d_%2F%2F_GR%0AR_U-_R-_u-_%2F%2F_YB%0AU_R_U-_R-_u-_R-_U_R_z_z-_u-_U_d_F_R-_F-_R_3u-_u_%2F%2F_YO%0Au_L-_U_L_u-_R_U_R-_F_R-_F-_R_u-_%2F%2F_BR%0AU-_F_R-_F-_R_u-_u-_z_x_U_U_r_U-_U-_F_x_U_r_U-_U-_3r-_U_U_l_U-_U-_r2-_%2F%2F_WG%2FBO%0Ax_L_R-_R-_F-_D_U-_L_D-_L_%2F%2F_cross%0Ay-_R_U-_U-_R-_L_U-_L-_%2F%2F_1st_pair%0Ay-_R-_U-_R2_U_R-_%2F%2F_2nd_pair%0A4d-_U-_R-_U-_U-_R_y_U-_R_U_R-_%2F%2F_3rd_pair%0AU-_y-_R_U-_R-_4d_U_R-_U-_R_%2F%2F_4th_pair%0AU-_U-_F_F-_4l-_U-_4r-_R_U-_L_U_R-_F_R_U_%2F%2F_1LLL"
      },
    ],
    "6x6": [
      {
        solver: "Max Park",
        time: "57.69",
        splits: {
          "F2C": "10.47",
          "L4C": "13.63",
          "F8E": "18.66",
          "L4E": "6.79",
          "Edges": "25.45",
          "3x3": "8.14"
        },
        youtube: "https://youtu.be/Sfou_L85Z_Q",
        recon: "https://alg.cubing.net/?puzzle=6x6x6&setup=x-&alg=U-_4r-_U_r_U-_r-_U_x-_3r-_r_U_3r_r-_U-_4r-_D_3r2_x-_z-_F_U_l_u-_3r_U-_x-_U_r-_4r-_3r_z-_U-_3r_r-_%2F%2F_blue%0Az_U_U_4l_3l-_U_3l_z_3r_U-_U-_3r-_y_U-_x_U-_r-_U-_r_U-_r-_U-_r_x-_z_x-_x-_D_4l-_l2_u-_R2-_u_U_x-_U-_r-_U_3r-_r_z-_x_U_4r-_3r_U_4r_3r-_%2F%2F_green%0A5d-_U-_3r_U-_B_3r-_U_x_r_U_U-_l-_U_l_3r_r-_U-_4r_3r-_r_U_r-_U-_r_U-_r-_U-_3r_U-_r-_%2F%2F_orange%0AU-_r_U-_r-_U-_x_U_U_l_U_l-_r_U-_r-_4r_3r-_U-_4r-_3r_U_3r-_r_U_3r_r-_U-_3r-_r_U-_3r_r-_U-_r_U-_r-_U-_F_3r_U_3r-_U-_r-_U_U-_U-_r_%2F%2F_yellow%0AU_3r_r-_U_3r-_r_U_4r_3r-_U_l-_U-_3r_r-_r_U_r-_U-_r_3r-_U_U_3r_U_r-_U-_r_U_r-_U_U_4l_%2F%2F_red%2Fwhite%0AU_U-_R_U-_R-_3u-_R_U_R-_F_R-_F-_R_U-_d_R_U-_R-_3u_R_U-_R-_L-_U_L_y-_L-_U_L_u_z-_z-_u_U-_R_U-_R-_d-_U-_R_U-_R-_d-_d-_3d-_%2F%2F_WR%0AU_5d_R_U-_R-_u_U-_d-_U-_L-_U_L_u-_z-_x-_z-_R_U_R-_F_R-_F-_R_u_U-_d_F_U-_F-_3u-_u_%2F%2F_WO%0AU-_U-_R_U-_R-_3u_u-_%2F%2F_WB%0AU_5d_R_U-_R-_u_U-_d_d_%2F%2F_WG%0AR_U-_R-_u_z_x-_4r2-_3r2_%2F%2F_OB%0Az-_R_U-_R-_d_z-_x-_r_z-_R_U_U-_R-_u_R_U_R-_F_R-_F-_R_3u-_3u-_%2F%2F_YB%0A5d-_L-_U_L_4u_L-_U_L_u-_3u_u-_%2F%2F_YO%0AU-_5d_R_U-_R-_4u-_U_R_U-_R-_y_3u-_u_%2F%2F_YR%0AU_R_U-_R-_3u_u-_z_x-_x-_U_R-_U-_z-_4u-_3u_R_U_R-_F_R-_F-_R_U-_d_%2F%2F_OG%0AR_U-_R-_3d-_R-_U_R_d_%2F%2F_RG%0AF_R-_F-_R_z-_r-_4r-_3r_z-_R_U_R-_F_R-_F-_R_3d-_d_d_R_U_R-_F_R-_F-_R_z_4r-_%2F%2F_YG%2FRB%0Az_U_x-_L_D-_L-_%2F%2F_cross%0AR_U_R-_U_R_U_R-_U_R-_U_R_%2F%2F_1st_pair%0Ay-_y_R_U_R-_5d_L-_U_L_%2F%2F_2nd_pair%0AD-_R_U-_R-_5u_%2F%2F_3rd_pair%0AU_R_U_R-_5d-_L-_U_L_%2F%2F_4th_pair%0AR_U_R-_U_R_U-_U-_R-_F_R_U_R-_U-_F-_%2F%2F_OLL%0AR_U_R-_F-_R_U_R-_U-_R-_F_R2_U-_R-_U-_%2F%2F_PLL&type=alg"
      },

      {
        solver: "Max Park",
        time: "58.03",
        splits: {
          "F2C": "11.17",
          "L4C": "13.73",
          "F8E": "17.93",
          "L4E": "7.34",
          "Edges": "25.27",
          "3x3": "7.86"
        },
        youtube: "https://youtu.be/ElOxe2x-YZw",
        recon: "https://alg.cubing.net/?puzzle=6x6x6&setup=3Fw-_Lw_3Rw_U-_Rw_B2_U_R-_B2_Fw-_3Fw_Dw2_B_F-_L_R2_B_Bw2_Uw-_3Fw_U-_B2_Bw_Rw2_U-_F_L-_Bw_3Fw-_R_Uw-_3Fw_R_L-_3Fw2_B-_Fw_U_F2_L2_R_3Uw2_Lw_B_Bw-_Lw2_U-_Fw_Dw_U_Uw_L_R_3Rw_B-_L_B_Uw-_Lw_Rw2_F_D_F_Lw_Dw-_Lw2_F-_Fw_L-_B2_U-_F_B_Dw_Lw_D2_B_F_Rw2_B-&alg=x-_z-_%2F%2F_inspection%0AU-_4r_U_3r-_r_4r2-_3r2_F_4r_x-_4l-_y_U_U-_4r-_3r_r-_U-_4r-_3r_U-_r_4l-_L-_U_3r_r-_U-_x-_3r-_r_3u_x-_U_U_3r_U-_U-__r-_x-_3d-_d_%2F%2F_blue%0AU_l_U_r-_z-_3l-_U_U_3l_4r_U-_4r-_z-_U_3r-_3r_z_3d-_d_3r_U-_U-_3r-_y_F_U-_r_U-_r-_z-_x-_x_z_r_U-_r-_z-_x-_x-_D-_4r2_U-_U-_4r-_3l_D-_l-_z_U-_U-_l-_U_U_l_%2F%2F_green%0Az-_x_U_U_l_U_x-_3r_r-_U_3r-_r_U-_U-_D-_3r2_U_3r-_x-_U-_x-_3r_U-_3r-_U_r-_F_r2_r_U-_4l-_U-_4r-_U_l-_%2F%2F_red%0Ax_3l-_U_U_3l__U_r_U_r-U_r_U-_r-_U_r_U_r-_3r-_3r_4r-_3r_U-_4r_3r-_U-_3r_r-_U_x-_F_3r-_r_U_3r_U_3r-_U_r_l-_U_4l-_U_U_l_x-_%2F%2F_yellow%0AU-_3l-_U_U_3l_x_r-_U-_r_x-_F_l-_r_U_U_r-_U_r_U-_r-_l_U_3r_3r-_3r__r-_U_3r-_r_U-_3r_r-_U-_3r-_r_U-_r_U_r-_U-_r_U-_r-__U_4l-_U-_3l-_4l_U_r_U-_%2F%2F_red_%2F_white_%0Ax-_z_3d-_U_R_U-_R-_3u_y-_U_R_U-_R-_U_U_d_d_5d_R_U-_R-_u-_d2_z-_x-_z-_R_U_R-_F_R-_F-_R_d_3d-_%2F%2F_WG%0AL-_U_L_3d_d-_L-_U_L_u-_R_U_R-_F_R-_F-_R_u-_%2F%2F_WR%0AU-_R_U-_R-_z-_z-_U_R_U-_R-_3u_u-_5d_U_R_U-_R-_3u-_u_%2F%2F_WO%0AU-_U-_R_U-_R-_z_4r2-_3r2_%2F%2F_WB%0Az-_R_U-_R-_4d_z_x-_x_z-_3u_5d_R_U-_R-_3d-_4u-_4u_3u-_d-_U_R_U-_R-_u_4u-_R_U_R-_5d-_L-_U_L_z2-_u_%2F%2F_YO%0AU-__U-_R_U-_R-_u_R_U_R-_F_R-_F-_R_3u-_U_d_%2F%2F_YB%0AU_R_U-_R-_u-_x2-_R_U_R-_F_R-_F-_R_y_3u-_3d-_d_%2F%2F_YG%0AU_R_U-_R-_d_d_%2F%2F_YR%0AU_R_U-_R-_z-_3r-_r_l2-_x_x-_U_R-_U-_z-_3u-_R_U_R-_F_R-_F-_R_3u_R-_U_R_3u-_u_U-_U-_F_R-_F-_R__3u_u-_R_U_R-_F_R-_F-_R_U_d_%2F%2F_BR%0AR_U-_R-_d-_u__4u-_%2F%2F_GO%0AF_R-_F-_R_u-_d_z-_x-_U-_U-_3r2-_r2__z-_R_U_R-_F_R-_F-_R_z-_4r2-_3r2_%2F%2F_GR_%2F_BO%0Ax-_F_x-_F_z-_L_U_D_R2_U_D_F-_D_D_%2F%2F_cross%0AU_L_U-_L-_%2F%2F_1st_pair%0AR-_U-_U-_R_y_U-_R_U_R-_%2F%2F_2nd_pair%0A5d_R_U_R-_L-_U_L_%2F%2F_3rd_pair%0AU-_R_U-_U-_R-_U_R_U-_R-_%2F%2F_4th_pair%0AR_U_R-_U-_R_U-_R-_F-_U-_F_R_U_R-_%2F%2F_OLL%0AU-_x_R-_U_R-_D_D_R_U-_R-_D_D_R2_x-_u-_u_U-_%2F%2F_PLL"
      },

      {
        solver: "Max Park",
        time: "59.74",
        splits: {
          "F2C": "12.6",
          "L4C": "13.23",
          "F8E": "17.23",
          "L4E": "6.7",
          "Edges": "23.93",
          "3x3": "9.98"
        },
        youtube: "https://youtu.be/VwS-9GWJ_w8",
        recon: "https://alg.cubing.net/?puzzle=6x6x6&setup=R_B-_Dw-_F2_3Uw_Uw2_3Fw-_3Rw-_3Fw2_F_Rw-_R2_Bw-_F2_Fw_R_3Uw2_B_3Uw2_L2_3Rw-_Lw-_Bw_D2_U-_Uw_B-_F_U2_Bw_D_3Fw_R_Uw-_Bw_Rw-_Bw_D2_R2_Dw_R_U-_D_L-_U-_Rw_Fw2_Dw_F2_D-_U-_Rw_U2_D2_Rw_U_L2_B2_Rw-_D2_Dw_F_Uw_3Fw2_L2_Lw_3Fw_Fw_3Rw_D2_Fw_3Fw-_Dw-_Uw-_Lw-_3Uw_F2_Lw2_Rw2_Fw&alg=z_y2_%2F%2F_inspection%0A3r-_U-_r_U-_4r2_x-_z_F-_U-_U-_r-_z-_x-_U-_F_3r_U_3r-_z-_U_r-_R_3u-_F_U_4r-_3r_x-_U-_r2-_y_x_U-_U-_x-_4r-_%2F%2F_blue%0AU-_3r_U_3r-_5d-_U-_3r_U_3r-_x-_3r_U_3r-_5d_x-_3r-_r_z-_3r_U-_U-_3r-_z-_F_3r_r-_F_4r-_r_z_r_U-_U-_r-_z_x-_x-_4r-_3r_R2_u-_R2-_u_%2F%2F_green%0AU_D_x_U_r-_F-_U-_r_l_U-_l_U_U_x-_r-_x-_r2-_3r2_D_3l-_4r-_3r-_U-_3r_U_r_U-_U-_r2-_U-_r2_%2F%2F_yellow%0Ax-_U_4l-_U-_r-_F-_r2_U-_x-_U-_r_U_r_U-_U-_r2-_l-_U-_l_3r_r-_U_3r_r-_U2_3r2-_r2_%2F%2F_orange%0Ax_3r-_U-_3r_U_x-_U-_l-_U_l_U-_l-_U-_l_r_U-_r-_3r_r-_U-_3r-_r_U_3r_U-_U-_3r-_U_U_r_U-_U-_r-_U-_4l-_U-_3r-_r_U_r_U-_%2F%2F_red%2Fwhite%0Ax-_z-_U-_U_R_U-_R-_3u_u-_U_R_U-_R-_3u-_R_U_R-_F_R-_F-_R_3u_u-_d_5d-_L-_U_L_z-_4r2-_3r2_z-_F_R-_F-_R_3d-_y_L-_U_L_4u-_R_U_R-_F_R-_F-_R_u_%2F%2F_WR%0AU-_U-_R_U-_R-_y-_z2_d-_F_R-_F-_R_4u-_%2F%2F_WO%0A5d-_L-_U_L_u-_%2F%2F_WG%0A5d_r_r-_R_U-_R-_y_3u-_u_d-_d-_%2F%2F_WB%0A5d-_L-_U_L_u-_u-_d_z-_z-_3u-_u_R_U-_R-_3u_u-_%2F%2F_YG%0AU_U_L-_U_L_d_%2F%2F_YB%0AL-_U_L_u-_z-_x-_z-_R_U_R-_F_R-_F-_R_u_d_3d-_%2F%2F_YR%2FBO%0A5d_U_R_U-_R-_z_x-_5r_5r-_z_u_u-_U_R_U-_R-_z-_4r_3r_x2-_U_R-_U-_z-_u-_U_R_U-_R-_u_R-_U_R_3u-_u_R_U-_R-_3u_u-_%2F%2F_YO%0Au-_u_d_u-_U_U_R_U-_R-_u_d-_%2F%2F_GR%2FGO%2FBR%0AR-_x_z-_z-_U_x-_D_L_D_L-_%2F%2F_cross%0AU-_R_U_R-_5d_R-_U-_R_%2F%2F_1st_pair%0AU-_L-_U_U_L_U-_L-_U_L_%2F%2F_2nd_pair%0AR_U-_R-_5d-_L-_U_L_%2F%2F_3rd_pair%0AU_R-_U_R_U-_U-_R-_U_U_R_%2F%2F_4th_pair%0AU-_R_U_R-_U-_R-_5r_U_R_U-_5r-_%2F%2F_OLL%0AU-_U-_U-_R_U_R-_F-_R_U_R-_U-_R-_F_R2_U-_R-_%2F%2F_PLL%0AU_U_2%26%2345%3B3Rw2_U_U_2%26%2345%3B3Rw2_3u_3u_2%26%2345%3B3Rw2_3u_3u_%2F%2F_PParity"
      },

      {
        solver: "Mark Zimmermann",
        time: "73.06",
        splits: {
          "F2C": "11.66",
          "L4C": "15.43",
          "F8E": "22.66",
          "L4E": "3.2",
          "Edges": "25.86",
          "3x3": "10.11"
        },
        youtube: "https://youtu.be/agtC8A0HbqU",
        recon: ""
      },

      {
        solver: "DongSoo Park (박동수)",
        time: "72.77",
        splits: {
          "F2C": "14.94",
          "L4C": "14.24",
          "F8E": "21.08",
          "L4E": "9.00",
          "Edges": "30.08",
          "3x3": "13.51"
        },
        youtube: "https://youtu.be/2zlJNwJw7J4",
        recon: ""
      }
    ],

    "7x7": [
      {
        solver: "DongSoo Park (박동수)",
        time: "96.79",
        splits: {
          "F2C": "21.45",
          "L4C": "28.8",
          "F8E": "25.02",
          "L4E": "11.85",
          "Edges": "36.87",
          "3x3": "9.67"
        },
        youtube: "https://youtu.be/8cv3Z9ZoRbA",
        recon: "https://alg.cubing.net/?puzzle=7x7x7&setup=Bw-_Dw_F_3Rw2_3Bw2_F2_3Lw-_3Fw-_R2_3Fw2_Rw2_3Lw-_D_3Bw2_Dw-_3Dw_R_3Uw2_F_U2_3Bw2_3Fw_B-_L2_F2_3Bw_Dw_Lw_Fw2_Uw2_Bw_3Lw-_B2_Fw-_U-_3Rw-_R-_Bw2_Uw_3Rw2_Dw-_U2_3Bw_3Fw2_D_U_Uw_R_3Lw_U2_3Lw-_Rw_R2_Dw2_Lw2_D2_Fw-_R2_Dw_3Uw_3Rw2_3Lw_Bw_3Lw_Bw-_3Bw2_3Dw-_3Fw_3Uw-_D2_3Fw2_R_Rw_3Rw2_3Fw-_F-_L-_Dw_F-_3Rw2_3Fw-_D_Fw2_3Rw_U_3Dw2_Fw_3Uw_3Lw_3Uw2_Rw-_3Uw_L2_Uw_3Bw_3Lw-_3Uw_F-_L2_Dw&alg=x-_%2F%2F_inspection%0A3r-_U-_x_r-_U-_x_U_3r_U-_3r-_F-_3l-_U_3l_l2-_y-_U_r_U-_r-_4r_3r-_x_u_3u-_3r_U_3r-_U-_3r_U-_x-_U_l_x-_U-_x_3r2-_r2_L2_3d-_U_x_U-_5r-_D_5r2_4r2-_U-_U-_5r2_4r2-_x-_U_l_L_u_%2F%2F_white%0Az-_F-_3r_U-_3r-_r_U_r-_y-_U-_F_3r_U-_3r-_U_r_U-_r-_x_U-_3r-_U_3r_U-_y_U-_x-_U_4r_U-_3r-_F_U-_r-_z-_U_3r_U-_U-_3r-_x_y_U_x-_U_3r-_U_l_z-_U-_r_U-_U-_r-_z_U-_U-_5r-_x-_U-_U-_4r2-_x_R-_u_3u-_R2_u-_3u_x-_r_x-_x_4r-_3r_x-_U-_x_3r2-_r2_R2-_u-_R2_u_%2F%2F_yellow%0AU_3r2-_x_l_U-_l-_3l_x_U-_x_U-_U_3r-_F-_3r_3l-_U_3l_U_x_U-_U-_x-_r_U-_3r_U-_4r_U-_4r-_3r_U_3r-_U_3r_r-_U_3r-_r2_U-_U-_r_U-_r-_x_x_U-_U-_3r2-_U-_U-_3r2_U-_3r-_U_3r_U-_x-_3l_U_U-_3r-_F-_3r_5r_4r-_U_5r-_4r_U_x-_U-_4r_U_4r-_r_U_r-_U-_r_U_r-_U-_l-_%2F%2F_orange%0AF-_U_U_3r_U-_3r-_x_U-_U-_r_U-_r-_U_r_U_r-_U_3r-_U-_U-_3r_3r-_F-_3r_U-_r_U_x-_r_U-_U-_r2-_x_3r-_U_3r_4r_3r-_U_4r-_3r_U-_l-_U-_l_U_r-_U_r_3r-_U-_U-_3r_U-_3r_U-_3r-_5r_U_5r-_4r_U-_4r-_r-_U-_U-_r_%2F%2F_blue%0AU_F_3r_U-_3r-_U-_l-_U-_l_U_U_x_3r-_U-_3r_U-_3r-_U_3r_U-_3r-_U_3r_r-_U-_r_U-_x-_x_U-_l_U_l-_U-_l_U-_l-_U-_3r-_U_3r_U_3r-_r_U_3r_r-_U-_r-_U_r_U-_4r-_3r_U_U_4r_3r-_U-_r-_U-_r_U_r-_U-_r_U-_U-_x-_r_U_3r_r-_U-_r-_U_3r-_r_%2F%2F_red%2Fgreen%0AU-_U-_R-_3u-_U-_R-_U_R_d-_y_u-_U_R_U-_R-_4u-_5u_%2F%2F_WR%0Ay-_y_L-_U_L_3u-_L-_U_L_y_u-_y-_R_U_R-_F_R-_F-_R_z2-_3d_U-_U-_y-_U-_R-_U_R_U-_d-_%2F%2F_WO%0AU_R_U-_R-_d_U-_R_U-_R-_z2-_u-_u_3u-_4u_U-_R_U-_R-_y-_4u-_5u_%2F%2F_WG%0AU_R_U-_R-_3u-_R-_U_R_3u-_4u_%2F%2F_WB%0AU-_R_U-_R-_y_3u_4u-_R_U-_R-_u-_u-_R-_U-_R_y_u-_U_d_%2F%2F_GO%0AU_R_U-_R-_y_x_x_u_u_U-_y_U-_L-_U_L_u-_d_y-_r-_r_R-_U_R_y_u-_3u_R_U-_R-_3u-_4u_%2F%2F_YG%0AL-_U_L_3d-_U-_R_R-_U-_U_R_U-_R-_3u_3u-_u_d-_y-_u_3u-_%2F%2F_BO%0AU-_R_U-_R-_U-_U_R_U-_R-_y-_u-_3u_R_U_R-_F_R-_F-_R_u_u_3u_%2F%2F_YR%0AU-_R_U-_R-_u-_z-_3r-_r_x-_U_U-_x_3r2-_r2_U-_R-_U_x_R-_U_R_U-_3r2-_r2_U-_U-_x_r-_U-_R_U_R-_x_U_R-_U-_r_%2F%2F_YB%0Ax-_3r_3r-_U_U_x-_3r2_r2-_U-_R_U_R-_x_U_R-_U-_3r2-_x-_U-_R_U_R-_x_U_R-_U-_x_r2_%2F%2F_BR%0Ax_3r2-_F2_U-_U-_3r2-_U-_U-_F2_3r2_x-_r_U-_R-_U_6l-_U_R_U-_r-_r-_U-_R_U_R-_x_U_R-_U-_r_%2F%2F_GR%2FYO%0Ax-_U_x-_y-_D_y-_R-_%2F%2F_cross%0AU_y-_U_y-_R_U-_R-_y-_U_L_U-_L-_%2F%2F_1st_pair%0AU_U_L-_U_U_L_U_L-_U-_L_%2F%2F_2nd_pair%0A6d_R-_U_R_U-_R-_U_R_%2F%2F_3rd_pair%0A6d-_U-_R_U-_U-_R2-_U-_R2_y_R_U-_R-_F-_%2F%2F_4th_pair%0AU_U-_R-_U-_R_U-_R-_U2_R_F_R_U_R-_U-_F-_%2F%2F_OLL%0AU_x_R-_U_R-_D2_R_U-_R-_D2_R2_%2F%2F_PLL"
      },

      {
        solver: "Max Park",
        time: "95.68",
        splits: {
          "F2C": "20.12",
          "L4C": "29.7",
          "F8E": "26.73",
          "L4E": "10.29",
          "Edges": "37.02",
          "3x3": "8.84"
        },
        youtube: "https://youtu.be/E8YtfeLSwwI",
        recon: "https://alg.cubing.net/?puzzle=7x7x7&setup=L-_D-_3Lw_3Fw-_Lw2_Rw_3Dw_B-_3Bw-_Fw_Lw_3Bw2_Rw-_3Lw2_3Rw-_R_D_U2_L-_Lw2_3Fw-_F_3Uw_3Lw2_Dw-_B-_Lw-_Dw-_3Lw-_B2_R_3Fw-_L-_R2_Rw_3Rw-_3Dw-_3Fw2_3Dw_U-_3Bw_3Lw2_3Dw2_Uw_3Uw-_3Rw_Fw-_Bw_R-_D_R_L_3Dw-_Rw-_Lw_3Rw2_U2_L_F2_3Uw_3Bw_F2_B_3Lw2_Uw2_3Fw_Fw_R-_F_Fw_D_Dw2_3Bw2_3Dw-_3Uw-_Rw2_3Bw2_Bw2_Uw2_Rw_Fw2_3Fw2_U_L_Rw_F_Uw2_3Fw-_R2_B2_U2_3Lw_B_Rw-_3Uw2_Dw_F-_L-_D_3Bw&alg=x2_%2F%2F_inspection%0AU-_5l-_U-_4r_3r2-_r2_U_3l-_U_3l-_U_l_3l-_U-_l-_3l_U-_x-_3l_l-_x_U_r-_U-_r_U_r-_U_r_U-_3r-_r_6d-_x-_U-_U-_l-_3l_U-_3l-_4l_z-_5r_U-_l-_U-_3r_r-_U-_F-_3r_U_3r-_y_F_3r_x-_D_l-_r2-_R_u-_%2F%2F_blue%0AU_x-_r2_z_F_3l-_U_3l_r_U-_r-_F-_r_U-_r-_z-_x-_F_r_U-_U_3r-_r_z_U_l_3l-_U2_l-_3l_z-_F_x-_F-_4r_U-_3r-_r_z_U_l_3l-_U2_l-_3l_z-_3r_l-_3l_3r-_U-_U-_3l-_3r_r-_U_r-_U_r_z_y_r_U-_U-_r-_%2F%2F_green%0Ax_y_l-_U-_l_4r-_U_r_U-_r-_U-_U-_l_3l-_3l2-_4l2_3l_4l-_U_3l2-_4l2_l-_U-_5r_U-_x-_4r_3r-_U_3l-_4l_U-_r2_U-_3r2-_x_U-_4r-_U-_4r_U-_l-_U_U_r_U-_r-_3r-_U_3r_U-_x-_U_U_l_x-_3l-_4l_5l2-_U_r-_4r_3r-_%2F%2F_yellow%0Ax-_5l-_U_U_r_U-_x-_4r_U_4r-_F-_4l-_U-_4l_F_F-_U-_U-_5r_U_r-_U-_r_U_l-_D-_3r2-_r2_l_U-_5r-_3r2-_r2_x-_r2_U-_r2-_U-_U_3r_U-_3r-_F_r_U_r-_3r2-_r2_U2_3r2-_r2_U_4r_U-_4r-_r2_U_r-_U-_r_U-_r2-_%2F%2F_orange%0AU-_U-_U_4l-_U-_3r_5r-_U_3r_r-_U-_3r-_r_l_U_4r_U-_3r-_r_U_3r_r-_4r-_3r_U-_U-_3r-_U_r_U-_r-_U-_U-_U-_r_U_r-_U_3r_U-_U-_3r-_U_4r_3r-_U2_4r-_3r_U_r_U-_r-_U_r_U-_U-_r-_U_U_5l-_U-_3r-_r_U_r_U-_%2F%2F_red%2Fwhite%0Az-_U-_F_R-_F-_R_3u_U-_R_U-_R-_3u-_u_R_U_R-_F_R-_F-_R_z-_4r_3r-_z_6d-_L-_U_L_4u_R_U-_R-_U_L-_U_L_u-_3d_%2F%2F_WO%0AU_U_R_U-_R-_U_3d_R_U-_R-_z-_x-_z-_u_U_U_R_U-_R-_3u_5u-_R_U_R-_F_R-_F-_R_3u-_d_L-_U_L_3d-_U-_d_R_U-_R-_u-_R_U_R-_F_R-_F-_R_5u-_u_U-_R_U-_R-_u_R_U_R-_F_R-_F-_R_u-_d_%2F%2F_WB%0AR_U-_R-_d-_U-_R_U-_R-_z_x-_3r_r-_z_u-_U_3d_L-_U_L_3u_4u-_%2F%2F_YO%0AR_U-_R-_y-_R_U-_R-_3u_%2F%2F_YR%0AR_U-_R-_4d-_3u-_U_U_R_U-_R-_z_x-_z_U_U_F_R-_F-_R_3u-_u_%2F%2F_WG%0AU-_U-_F_R-_F-_R_3u-_u_%2F%2F_WR%0AR_U-_R-_L-_U_L_3u-_z2-_U-_R_U-_R-_u_y-_R_U_R-_F_R-_F-_R_y_u_u_%2F%2F_BR%0AU-_U-_L-_U_L_u-_z-_x-_z-_u-_u-_%2F%2F_YG%0AU_U_6d-_L-_U_L_z-_r-_3r_r-_U_R-_U-_z-_3u-_U_R_U-_R-_3u_U_F_R-_F-_R_U_d_%2F%2F_BO%0AF_R-_F-_R_d-_R-_U_R_u_4u-_R_U-_R-_u-_3d_y_U-_y-_R_U-_R-_U-_d-_%2F%2F_YB%0AU-_R_U-_R-_z-_r_U_U_r_U-_U-_r_U-_U-_F_x_U_r_U-_U-_5r-_U_U_l_U_U_x-_r2_4r-_3r_z-_R_U_R-_F_R-_F-_R_z-_4r-_3r_%2F%2F_GR%2FGO%0Az_L_R-_F_R_D-_F_R2_U-_R_U-_R-_D-_%2F%2F_cross%0Ay_R_U-_R-_%2F%2F_1st_pair%0AU_R-_U-_R_L-_U_L_%2F%2F_2nd_pair%0Ay_R_U-_R-_U_U-_U_D-_R_U-_R-_D_%2F%2F_3rd_pair%0AU_R_U-_R-_%2F%2F_4th_pair%0AU-_U_U-_U-_R2_D_6r-_U-_U-_6r_D-_R-_U-_U-_R-_U-_%2F%2F_ZBLL"
      },


      {
        solver: "Kevin Hays",
        time: "117.76",
        splits: {
          "F2C": "30.34",
          "L4C": "30.06",
          "F8E": "31.39",
          "L4E": "14.89",
          "Edges": "46.28",
          "3x3": "11.08"
        },
        youtube: "https://youtu.be/QtsaBSaFCOo",
        recon: ""
      },


      {
        solver: "Mark Zimmermann",
        time: "101.81",
        splits: {
          "F2C": "20.4",
          "L4C": "30.66",
          "F8E": "29.3",
          "L4E": "11.73",
          "Edges": "41.03",
          "3x3": "9.72"
        },
        youtube: "https://youtu.be/qKbObubgyMs?si=gZdb8hz9D4-c8cXe",
        recon: ""
      },


      {
        solver: "Chun-Pao Ni (倪君寶)",
        time: "109.67",
        splits: {
          "F2C": "27.9",
          "L4C": "30.1",
          "F8E": "32",
          "L4E": "8.36",
          "Edges": "40.36",
          "3x3": "11.31"
        },
        youtube: "https://youtu.be/NXJ69gpd7QI?si=jQVszw9T_4FdNx-y",
        recon: ""
      },

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
        solver: "Ray Bai",
        time: "40.76",
        splits: {
          "F2C": "7.94",
          "M2C": "5.33",
          "F4C": "13.27",
          "F4E": "6.17",
          "L2C": "2.20",
          "L8E": "12.07",
          "3x3": "7.05"
        },
        youtube: "https://www.youtube.com/watch?v=yabmi4LId_U",
        recon: ""
      },

        {
        solver: "Dale Palmares",
        time: "47.21",
        splits: {
          "F2C": "7.74",
          "M2C": "7.27",
          "F4C": "15.01",
          "F4E": "9.3",
          "L2C": "1.6",
          "L8E": "14.14",
          "3x3": "7.16"
        },
        youtube: "https://youtu.be/i1yOQfim5sk?si=g4xythTpdxv4aKYR",
        recon: ""
      },

        {
        solver: "Luke Tycksen",
        time: "38.32",
        splits: {
          "F2C": "4.76",
          "M2C": "6.26",
          "F4C": "11.02",
          "F4E": "7.06",
          "L2C": "1.43",
          "L8E": "11.76",
          "3x3": "7.05"
        },
        youtube: "https://youtu.be/EHqx12bO_4U?si=vSXk5f8UHUy8IJAd",
        recon: ""
      },

        {
        solver: "Ray Bai",
        time: "44.26",
        splits: {
          "F2C": "5.2",
          "M2C": "6.74",
          "F4C": "11.94",
          "F4E": "7.27",
          "L2C": "1.66",
          "L8E": "17.21",
          "3x3": "6.18"
        },
        youtube: "https://youtu.be/QcHkqf0KLOQ?si=qU7g3bP9S5CyOvsm&t=56",
        recon: ""
      },

        {
        solver: "Ray Bai",
        time: "45.08",
        splits: {
          "F2C": "6.20",
          "M2C": "6.57",
          "F4C": "12.77",
          "F4E": "7.70",
          "L2C": "1.70",
          "L8E": "14.68",
          "3x3": "8.23"
        },
        youtube: "https://youtu.be/QcHkqf0KLOQ?si=qU7g3bP9S5CyOvsm&t=56",
        recon: ""
      },

    ],
    "6x6": [
      {
        solver: "Alwin Rölz",
        time: "86.36",
        splits: {
          "F2C": "18.36",
          "M2C": "15.66",
          "F4C": "34.02",
          "F4E": "12.46",
          "L2C": "7.90",
          "L8E": "22.76",
          "3x3": "9.22"
        },
        youtube: "https://youtu.be/noAoWA2L8mk?si=h1JJWoYxRkP8VmjQ",
        recon: ""
      },

        {
        solver: "Dale Palmares",
        time: "89.43",
        splits: {
          "F2C": "19.04",
          "M2C": "14.64",
          "F4C": "33.68",
          "F4E": "12.96",
          "L2C": "5.84",
          "L8E": "23.64",
          "3x3": "13.31"
        },
        youtube: "https://youtu.be/HZNTNxYOUwM",
        recon: ""
      },

        {
        solver: "Dale Palmares",
        time: "89.24",
        splits: {
          "F2C": "20.2",
          "M2C": "11.72",
          "F4C": "31.92",
          "F4E": "20.52",
          "L2C": "7.64",
          "L8E": "20.68",
          "3x3": "8.48"
        },
        youtube: "https://youtu.be/HZNTNxYOUwM",
        recon: ""
      },

        {
        solver: "Dale Palmares",
        time: "84.53",
        splits: {
          "F2C": "17.04",
          "M2C": "14.84",
          "F4C": "31.88",
          "F4E": "13.84",
          "L2C": "4.88",
          "L8E": "24.60",
          "3x3": "9.33"
        },
        youtube: "https://youtu.be/eeqiH26DhWU",
        recon: ""
      },

        {
        solver: "Christian Naguio",
        time: "91.35",
        splits: {
          "F2C": "16.83",
          "M2C": "18.00",
          "F4C": "34.83",
          "F4E": "17.16",
          "L2C": "3.63",
          "L8E": "25.13",
          "3x3": "10.60"
        },
        youtube: "https://www.youtube.com/watch?v=eeqiH26DhWU",
        recon: ""
      },
    ],
    
    "7x7": [
      {
        solver: "Alwin Rölz",
        time: "125.7",
        splits: {
          "F2C": "29.46",
          "M2C": "23.06",
          "F4C": "52.52",
          "F4E": "23.9",
          "L2C": "13.4",
          "L8E": "27.33",
          "3x3": "8.55"
        },
        youtube: "https://youtu.be/DQxAIfejXSw",
        recon: ""
      },

      {
        solver: "Alwin Rölz",
        time: "132.92",
        splits: {
          "F2C": "31.23",
          "M2C": "25.56",
          "F4C": "56.79",
          "F4E": "22.03",
          "L2C": "11.43",
          "L8E": "31.66",
          "3x3": "11.01"
        },
        youtube: "https://youtu.be/AFTQyGQpfF0",
        recon: ""
      },

      {
        solver: "Dale Palmares",
        time: "126.98",
        splits: {
          "F2C": "30.52",
          "M2C": "27.12",
          "F4C": "57.64",
          "F4E": "19.48",
          "L2C": "8.32",
          "L8E": "27.44",
          "3x3": "14.1"
        },
        youtube: "https://youtu.be/YcJrfv7wnCI",
        recon: ""
      },

      {
        solver: "Christian Naguio",
        time: "129.62",
        splits: {
          "F2C": "31.48",
          "M2C": "27.23",
          "F4C": "58.71",
          "F4E": "21.62",
          "L2C": "9.72",
          "L8E": "32.78",
          "3x3": "6.79"
        },
        youtube: "https://youtube.com/shorts/o088bn2h_I0?si=eo6_nkEro1D-uQ8A",
        recon: ""
      },

      {
        solver: "Dale Palmares",
        time: "124.79",
        splits: {
          "F2C": "30.32",
          "M2C": "23.96",
          "F4C": "54.28",
          "F4E": "20.96",
          "L2C": "10.72",
          "L8E": "28.56",
          "3x3": "10.27"
        },
        youtube: "https://youtu.be/YcJrfv7wnCI",
        recon: ""
      },
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
          const lockedValue = parseFloat(input.value);

          if (input.value === "" || isNaN(lockedValue) || lockedValue < 0) {
            // If the input is empty, invalid, or negative, delete the key from the object.
            delete whatIfSplits[step];
          } else {
            // If the input is a valid number, simply update the value for the specific step.
            whatIfSplits[step] = lockedValue;
          }
          updateTables();
        }

        input.addEventListener("blur", save);
        input.addEventListener("keydown", e => { 
          if (e.key === "Enter") {
            input.blur();
          }
        });

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
    if (customSplits[step] !== undefined && customSplits[step] !== "") {
      let baseline = null;
      const user = parseFloat(customSplits[step]);

      if (whatIfMode && whatIfSplits[step] !== undefined && whatIfSplits[step] !== "") {
        // Use the 'whatIfSplits' as the baseline if in What If mode
        baseline = parseFloat(whatIfSplits[step]);
      } else if (!whatIfMode && proportions[step] && avgSeconds) {
        // Use the default proportional splits if not in What If mode
        baseline = (avgSeconds * proportions[step]);
      }
      
      // Only proceed with the comparison if a valid baseline exists
      if (baseline !== null && baseline > 0) {
        const percent = ((user - baseline) / baseline) * 100;
        if (percent > 20) {
          const li = document.createElement("li");
          li.textContent = `Your '${step}' split is ${percent.toFixed(1)}% higher than the suggested split – this stage is something to focus on in your practice.`;
          tipsList.appendChild(li);
        }
      }
    }
  });

  if (!tipsList.hasChildNodes()) {
    const li = document.createElement("li");
    li.textContent = "No splits are more than 20% above the suggested splits. Keep it up!";
    tipsList.appendChild(li);
  }
}


// Helper function to format seconds into "minutes:seconds.milliseconds"
function formatTime(totalSeconds) {
  if (isNaN(totalSeconds) || totalSeconds === null) {
    return "-";
  }
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = (totalSeconds % 60).toFixed(2);
  return `${minutes}:${seconds.padStart(5, '0')}`;
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
    // Display the formatted total time
    timeTd.textContent = formatTime(parseFloat(solve.time));
    tr.appendChild(timeTd);

    steps.forEach((step) => {
      const td = document.createElement("td");
      const actual = parseFloat(solve.splits[step]);

      if (!isNaN(actual)) {
        // Display the formatted split time
        td.textContent = formatTime(actual);

        const fractions = splitsData[method]?.[puzzle];
        if (fractions) {
          const total = parseFloat(solve.time);
          const stepFraction = fractions[step];

          if (stepFraction) {
            // The key is that the deviation calculation uses the raw numerical values
            // in seconds, which is correct regardless of the total time.
            const ideal = total * stepFraction;
            const deviation = ((actual - ideal) / ideal) * 100;

            if (deviation >= 20) {
              td.style.color = "red";
            } else if (deviation <= -20) {
              td.style.color = "green";
            } else {
              td.style.color = "black";
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

function formatTime(totalSeconds) {
    if (isNaN(totalSeconds) || totalSeconds === null) {
        return "-";
    }

    // Check if the time is 60 seconds or more
    if (totalSeconds >= 60) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = (totalSeconds % 60).toFixed(2);
        return `${minutes}:${seconds.padStart(5, '0')}`;
    } else {
        // If less than 60 seconds, just return the seconds with two decimal places
        return totalSeconds.toFixed(2);
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
        // Format the total time using the new helper function
        timeTd.textContent = formatTime(parseFloat(solve.time));
        tr.appendChild(timeTd);

        steps.forEach((step) => {
            const td = document.createElement("td");
            const actual = parseFloat(solve.splits[step]);

            if (!isNaN(actual)) {
                // Format the split time using the new helper function
                td.textContent = formatTime(actual);

                const fractions = splitsData[method]?.[puzzle];
                if (fractions) {
                    const total = parseFloat(solve.time);
                    const stepFraction = fractions[step];

                    if (stepFraction) {
                        const ideal = total * stepFraction;
                        const deviation = ((actual - ideal) / ideal) * 100;

                        if (deviation >= 20) {
                            td.style.color = "red";
                        } else if (deviation <= -20) {
                            td.style.color = "green";
                        } else {
                            td.style.color = "black";
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


