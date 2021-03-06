//模块化  导出

const string = `
@keyframes respiration {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03);
    }
    100% {
      transform: scale(1);
    }
  }
  .wrap {
    padding: 50px 200px 0;
    animation: respiration 10s ease-in-out infinite;
    display: inline-block;
  }
  .wrap .face {
    width: 300px;
    height: 280px;
    background: #f1b698;
    position: relative;
    border-radius: 120px 135px 0 80px;
  }
  .wrap .face .cheek {
    width: 140px;
    height: 180px;
    background: #f1b698;
    position: absolute;
    bottom: 1px;
    right: -87px;
    border-radius: 0 50% 50% 45%;
    transform: skew(-2deg, -6deg);
  }
  .wrap .face .hair {
    position: absolute;
    border-radius: 50% 50% 0 0;
    left: 72px;
    top: -20px;
    width: 150px;
    height: 50px;
    background: #090909;
    z-index: -1;
  }
  .wrap .face .hair:before {
    content: '';
    width: 200px;
    height: 200px;
    background: #090909;
    position: absolute;
    top: 20PX;
    left: -100px;
    display: inline-block;
    border-radius: 50%;
    transform: skew(-20deg);
  }
  .wrap .face .l_eyeblow {
    position: absolute;
    top: -18px;
    width: 110px;
    height: 60px;
    left: 10px;
  }
  .wrap .face .l_eyeblow:before {
    content: '';
    width: 95px;
    height: 38px;
    background: #090909;
    transform: rotate(-40deg);
    display: inline-block;
    border-radius: 50px;
    position: absolute;
    top: 10px;
    left: -5px;
  }
  .wrap .face .l_eyeblow:after {
    content: '';
    width: 85px;
    height: 38px;
    background: #090909;
    transform: rotate(45deg);
    display: inline-block;
    border-radius: 80px 50px 50px 0;
    position: absolute;
    right: -18px;
    top: 3px;
  }
  .wrap .face .l_eyelids {
    position: absolute;
    width: 150px;
    height: 50px;
    overflow: hidden;
    left: 3px;
    top: 45px;
  }
  .wrap .face .l_eyelids:after {
    content: '';
    height: 400px;
    border-radius: 50%;
    width: 150px;
    border-top: solid 3px #090909;
    border-right: solid 3px #f1b698;
    border-left: solid 3px #f1b698;
    display: block;
    transform: skew(-8deg) rotate(-10deg);
  }
  .wrap .face .l_eye {
    position: absolute;
    top: 80px;
    left: 25px;
    width: 110px;
    height: 100px;
    background: #090909;
    border-radius: 50%;
    transform: rotate(-5deg);
  }
  .wrap .face .l_eye:before {
    content: '';
    width: 48px;
    height: 46px;
    background: #fff;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    top: 27px;
    left: 32px;
  }
  .wrap .face .r_eyeblow {
    position: absolute;
    top: -20px;
    width: 110px;
    height: 60px;
    right: 30px;
  }
  .wrap .face .r_eyeblow:before {
    content: '';
    width: 75px;
    height: 38px;
    background: #090909;
    transform: rotate(-38deg);
    display: inline-block;
    border-radius: 50px;
    position: absolute;
    top: 10px;
    left: 5px;
  }
  .wrap .face .r_eyeblow:after {
    content: '';
    width: 85px;
    height: 38px;
    background: #090909;
    transform: rotate(48deg);
    display: inline-block;
    border-radius: 80px 50px 50px 0;
    position: absolute;
    right: -17px;
    top: 7px;
  }
  .wrap .face .r_eyelids {
    position: absolute;
    width: 150px;
    height: 50px;
    overflow: hidden;
    right: -11px;
    top: 42px;
  }
  .wrap .face .r_eyelids:after {
    content: '';
    height: 400px;
    border-radius: 50%;
    width: 150px;
    border-top: solid 3px #090909;
    border-right: solid 3px #f1b698;
    border-left: solid 3px #f1b698;
    display: block;
    transform: skew(7deg) rotate(2deg);
  }
  .wrap .face .r_eye {
    position: absolute;
    top: 78px;
    right: 28px;
    width: 100px;
    height: 95px;
    background: #090909;
    border-radius: 50%;
    transform: rotate(5deg);
  }
  .wrap .face .r_eye:before {
    content: '';
    width: 42px;
    height: 42px;
    background: #fff;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    top: 27px;
    left: 28px;
  }
  .wrap .face .ear {
    width: 80px;
    height: 100px;
    background: #f1b698;
    position: absolute;
    left: -50px;
    bottom: 50px;
    border-radius: 180px 0 200px 200px;
    z-index: -1;
    transform: skew(-3deg) rotate(5deg);
  }
  .wrap .face .mouth {
    width: 50px;
    height: 70px;
    background: #7d3a43;
    position: absolute;
    bottom: -15px;
    right: 24px;
    border-radius: 50%;
    transform: rotate(-30deg);
  }
  .wrap .body .shirt {
    position: absolute;
    width: 320px;
    height: 240px;
    background: #ea4043;
    z-index: -2;
    top: 320px;
    left: 210px;
    border-radius: 60px 0 0 0;
  }
  .wrap .body .arm {
    position: absolute;
  }
  .wrap .body .arm .l_arm {
    width: 70px;
    height: 210px;
    background: #ea4043;
    position: absolute;
    left: -15px;
    top: -40px;
    border-radius: 60px 0 0 0;
    transform: rotate(20deg);
    z-index: -1;
  }
  .wrap .body .arm .r_arm {
    width: 50px;
    height: 190px;
    background: #ea4043;
    position: absolute;
    left: 293px;
    top: -15px;
    transform: rotate(-5deg);
    border-radius: 0 20px 0 0;
    z-index: -1;
  }
  .wrap .body .hand .l_hand {
    width: 55px;
    height: 60px;
    background: #f1b698;
    border-radius: 50%;
    z-index: -2;
    position: absolute;
    top: 495px;
    left: 160px;
  }
  .wrap .body .hand .r_hand {
    width: 50px;
    height: 55px;
    background: #f1b698;
    border-radius: 50%;
    z-index: -3;
    position: absolute;
    top: 500px;
    left: 510px;
  }
  

`;
export default string;
