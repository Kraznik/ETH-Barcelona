import React from "react";
import styled from "styled-components";
import DoinGud from "../../assets/DoinGud.svg";
import Floc from "../../assets/Floc.svg";
import Polis from "../../assets/Polis.svg";
import Eclectic from "../../assets/Eclectic.svg";
import BeInCrypto from "../../assets/beINcrypto.svg";
import DefiPrime from "../../assets/defiprime.svg";
import ShrineHouse from "../../assets/ShrineHouse.svg";
import GiantCookie from "../../assets/GiantCookie.svg";
import Zerion from "../../assets/Zerion.svg";
import Moralis from "../../assets/Moralis.svg";
import Distrikt from "../../assets/Dis.svg";
import Degate from "../../assets/Degate.svg";
import Aragon from "../../assets/Aragon.svg";
import MoonBeam from "../../assets/Moonbeam.svg";
import Apwine from "../../assets/Apwine.svg";
import Witnet from "../../assets/witnet.svg";
import Giveth from "../../assets/GIveth.svg";
import Pillar from "../../assets/Pillar.svg";
import Mochi from "../../assets/Mochi.svg";
import Certik from "../../assets/Certik.svg";
import Certora from "../../assets/Certora.svg";
import ETH from "../../assets/ETH.svg";
import M1 from "../../assets/M1.svg";
import SM1 from "../../assets/SM1.svg";
import SM2 from "../../assets/SM2.svg";
import SM3 from "../../assets/Sm3.svg";
import SM4 from "../../assets/SM4.svg";
import SM5 from "../../assets/SM5.svg";
import SM6 from "../../assets/M6.svg";
import SM7 from "../../assets/M7.svg";
import SM8 from "../../assets/M8.svg";
import SM9 from "../../assets/M9.svg";
import SM10 from "../../assets/SM10.svg";
import SM11 from "../../assets/M11.svg";
import SM12 from "../../assets/M12.svg";
import SM13 from "../../assets/Sm13.svg";
import SM14 from "../../assets/SM14.png";
import SM15 from "../../assets/SM15.svg";
import SM16 from "../../assets/SM16.svg";
import SM17 from "../../assets/SM17.svg";
import SM18 from "../../assets/SM18.svg";
import Cult from "../../assets/Cult.png";
import DAOist from "../../assets/Daoist.svg";
import CT from "../../assets/Cointelegraph.svg";
import Boba from "../../assets/boba.svg";
import Inch from "../../assets/1inch.svg";
import Lido from "../../assets/lido.svg";
import Hacken from "../../assets/Hacken.svg";
import Per from "../../assets/Per.svg";
import CryptoSlate from "../../assets/cryptoslate.svg";
import Cortex from "../../assets/Cortex.svg";
import ShapeShift from "../../assets/ShapeShift.svg";
import Tenderly from "../../assets/tenderly.svg";
import DoinGudGold from "../../assets/Doingud-Gold.svg";
import Neon from "../../assets/Neon.svg";
import SM19 from "../../assets/SM19.svg";
import SkillWallet from "../../assets/Skill.svg";
import Skill from "../../assets/SM20.svg";
import Ripio from "../../assets/Ripio.svg";
import Aurora from "../../assets/Aurora.png";
import S21 from "../../assets/S21.png";
import Bankless from "../../assets/Bankless.svg";
import CryptoPlaza from "../../assets/cryptoplaza.svg";
import Opolis from "../../assets/Opolis.svg";
import M17 from "../../assets/M17.svg";

const Container = styled.div`
  background: #f4f4f5;
  padding-top: 10%;
`;

const TitleBox = styled.div`
  border-bottom: 1px solid #bdbdbd;
  margin: 0 10% 0 10%;
  text-align: left;
  font-family: "Dahlia";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 64px;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: #424242;
  height: 140px;
`;
const Title1 = styled.div`
  @media (max-width: 600px) {
    font-size: 56px;
  }
`;

const DiamondSponserContainer = styled.div`
  border-bottom: 1px solid #bdbdbd;
  margin: 0 10% 0 10%;
  position: relative;

  @media (max-width: 700px) {
    border-bottom: 0px solid #bdbdbd;
  }
`;

const DiamondSponserTitle = styled.div`
  text-align: left;
  font-family: dahlia;
  font-style: normal;
  margin-top: 3.5%;
  height: 26px;
  font-weight: 700;
  font-size: 24px;
  position: relative;
  line-height: 24px;
  color: #828282;

  @media (max-width: 700px) {
    font-size: 24px;
    margin-top: 10%;
    margin-bottom: 5%;
  }
`;

const DiamondSponserLogoContainer = styled.div`
  display: flex;
  padding: 0 0 5% 0;

  @media (max-width: 600px) {
    border-radius: 4px;
    display: block;
    margin: 0 15px;
  }
`;
const DiamondSponserLogo = styled.div`
  display: inline-block;
  position: relative;
  margin: 1% 13.5% 1% 0;
`;

const GoldSponserContainer = styled.div`
  border-bottom: 1px solid #bdbdbd;
  margin: 0 10% 0 10%;
  padding-bottom: 5%;
  position: relative;

  @media (max-width: 700px) {
    border-bottom: 0px solid #bdbdbd;
    padding-bottom: 10px;
  }
`;

const GoldSponserTitle = styled.div`
  text-align: left;
  font-family: dahlia;
  font-style: normal;
  margin-top: 3.5%;
  height: 26px;
  font-weight: 700;
  font-size: 24px;
  position: relative;
  line-height: 24px;
  color: #828282;

  @media (max-width: 700px) {
    font-size: 24px;
    margin-top: 10%;
    margin-bottom: 5%;
  }
`;

const GoldSponserLogoContainer = styled.div`
  display: flex;
  padding: 0 0 0% 0;

  @media (max-width: 600px) {
    border-radius: 4px;
    display: block;
  }
`;
const GoldSponserLogo = styled.div`
  display: inline-block;
  position: relative;

  padding: 1% 1% 1% 0;
  position: relative;
  margin: 1% 3.4% 1% 0;
  height: 180px;
  @media (max-width: 700px) {
  }

  .a {
    text-decoration: none;
  }
`;

const SilverSponserContainer = styled.div`
  border-bottom: 1px solid #bdbdbd;
  margin: 0 8% 0 10%;

  padding-bottom: 2.5%;
  position: relative;

  @media (max-width: 800px) {
    border-bottom: 0px solid #bdbdbd;
  }
`;

const BronzeSponserContainer = styled.div`
  margin: 0 10% 0 10%;
  padding-bottom: 5%;
  position: relative;
`;

const SilverSponserLogoContainer = styled.div`
  display: flex;

  @media (max-width: 800px) {
    border-radius: 4px;
    display: inline-block;
    padding-bottom: 10px;
    margin-top: 35px;
  }
`;
const SilverSponserLogo = styled.div`
  display: inline-block;
  position: relative;
  padding: 0% 1% 1% 0;
  margin: 1% 3.4% 1% 0;
`;

const BronzeSponserLogo = styled.div`
  display: inline-block;
  padding: 1% 1% 1% 0;
  margin: 0 1.5% 0 0;

  @media (max-width: 800px) {
    padding: 0;
    float: left;
  }
`;
const Mobile = styled.div`

display:inline:block;
float:left;

@media (min-width: 800px) {

  display:none;
}
`;

const Desktop = styled.div`
  width: 100%;
  @media (max-width: 800px) {
    display: none;
  }
`;

const SilverSponserLogoM = styled.div`
  display: inline-block;
  margin-right: 5px;
  float: left;
  margin-top: 2px;
`;

const OrganizerLogo = styled.div`
  padding: 2% 2% 2% 0;
  margin-right: 1%;
`;

const Sponsers = () => {
  return (
    <>
      <Container>
        <TitleBox>
          <Title1> Sponsors</Title1>
        </TitleBox>

        <DiamondSponserContainer>
          <DiamondSponserTitle>Diamond</DiamondSponserTitle>
          <DiamondSponserLogoContainer>
            <DiamondSponserLogo>
              {" "}
              <a href="https://t.co/dDg5gXdEAe">
                <img src={Distrikt}></img>
              </a>
            </DiamondSponserLogo>
            <DiamondSponserLogo>
              {" "}
              <a href="https://cultdao.io/">
                <img src={Cult} width="270px" height="200px"></img>
              </a>
            </DiamondSponserLogo>
          </DiamondSponserLogoContainer>
        </DiamondSponserContainer>

        <GoldSponserContainer>
          <GoldSponserTitle>Gold</GoldSponserTitle>
          <GoldSponserLogoContainer>
            <GoldSponserLogo>
              <a href="https://doingud.com/">
                <img src={DoinGudGold}></img>
              </a>
            </GoldSponserLogo>
            <GoldSponserLogo>
              <a href="https://1inch.io/">
                <img src={Inch}></img>
              </a>
            </GoldSponserLogo>
            <GoldSponserLogo>
              <a href="https://tenderly.co/">
                <img src={Tenderly}></img>
              </a>
            </GoldSponserLogo>
            <GoldSponserLogo>
              <a href="https://www.ripio.com/">
                <img src={Ripio}></img>
              </a>
            </GoldSponserLogo>
          </GoldSponserLogoContainer>
        </GoldSponserContainer>

        <SilverSponserContainer>
          <GoldSponserTitle>Silver</GoldSponserTitle>
          <Desktop>
            <SilverSponserLogoContainer>
              <SilverSponserLogo>
                <a href="https://zerion.io/">
                  <img src={Zerion}></img>
                </a>{" "}
              </SilverSponserLogo>
              <SilverSponserLogo>
                <a href="https://moonbeam.network/">
                  <img src={MoonBeam}></img>
                </a>{" "}
              </SilverSponserLogo>
              <SilverSponserLogo>
                <a href="https://www.certik.com/">
                  <img src={Certik}></img>
                </a>{" "}
              </SilverSponserLogo>
              <SilverSponserLogo>
                <a href="https://www.pillar.fi/">
                  <img src={Pillar}></img>
                </a>{" "}
              </SilverSponserLogo>
              <SilverSponserLogo>
                <a href="https://giveth.io/">
                  <img src={Giveth}></img>
                </a>{" "}
              </SilverSponserLogo>
            </SilverSponserLogoContainer>
            <SilverSponserLogoContainer>
              <SilverSponserLogo>
                <a href="https://boba.network/">
                  <img src={Boba}></img>
                </a>{" "}
              </SilverSponserLogo>
              <SilverSponserLogo>
                <a href="https://lido.fi/">
                  <img src={Lido}></img>
                </a>{" "}
              </SilverSponserLogo>
              <SilverSponserLogo>
                <a href="https://skillwallet.id">
                  <img src={SkillWallet}></img>
                </a>{" "}
              </SilverSponserLogo>
            </SilverSponserLogoContainer>
          </Desktop>

          <Mobile>
            <SilverSponserLogoContainer>
              <SilverSponserLogoM>
                <a href="https://zerion.io/">
                  <img src={SM4} width="150px" height="118px"></img>
                </a>{" "}
              </SilverSponserLogoM>
              <SilverSponserLogoM>
                <a href="https://moonbeam.network/">
                  <img src={SM5} width="150px" height="118px"></img>
                </a>{" "}
              </SilverSponserLogoM>
              <SilverSponserLogoM>
                <a href="https://www.certik.com/">
                  <img src={SM1} width="150px" height="118px"></img>
                </a>{" "}
              </SilverSponserLogoM>
              <SilverSponserLogoM>
                <a href="https://www.pillar.fi/">
                  <img src={SM2} width="150px" height="118px"></img>
                </a>{" "}
              </SilverSponserLogoM>
              <SilverSponserLogoM>
                <a href="https://giveth.io/">
                  <img src={SM3} width="150px" height="118px"></img>
                </a>{" "}
              </SilverSponserLogoM>
              <SilverSponserLogoM>
                <a href="https://boba.network/">
                  <img src={SM13} width="150px" height="118px"></img>
                </a>{" "}
              </SilverSponserLogoM>
              <SilverSponserLogoM>
                <a href="https://lido.fi/">
                  <img src={SM14} width="150px" height="118px"></img>
                </a>{" "}
              </SilverSponserLogoM>
              <SilverSponserLogoM>
                <a href="https://skillwallet.id/">
                  <img src={Skill} width="150px" height="118px"></img>
                </a>{" "}
              </SilverSponserLogoM>
            </SilverSponserLogoContainer>
          </Mobile>
        </SilverSponserContainer>

        <BronzeSponserContainer>
          <GoldSponserTitle>Bronze</GoldSponserTitle>
          <Desktop>
            <SilverSponserLogoContainer>
              <BronzeSponserLogo>
                <a href="https://t.co/ekKJoVsf4s">
                  <img src={Neon}></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://moralis.io/">
                  <img src={Moralis}></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://aragon.org/">
                  <img src={Aragon}></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://witnet.io/">
                  <img src={Witnet}></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://www.apwine.fi/">
                  <img src={Apwine}></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://mochi.game/">
                  <img src={Mochi}></img>
                </a>
              </BronzeSponserLogo>
            </SilverSponserLogoContainer>
            <SilverSponserLogoContainer>
            <BronzeSponserLogo>
                <a href="https://www.degate.com/">
                  <img src={Degate}></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://www.certora.com/">
                  <img src={Certora}></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://hacken.io/">
                  <img src={Hacken}></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://perp.com/">
                  <img src={Per}></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://www.crtx.app/">
                  <img src={Cortex}></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://shapeshift.com/">
                  <img src={ShapeShift}></img>
                </a>
              </BronzeSponserLogo>
            </SilverSponserLogoContainer>
            <SilverSponserLogoContainer>
            <BronzeSponserLogo>
                <a href="">
                  <img src={Aurora}></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="">
                  <img src={Opolis}></img>
                </a>
              </BronzeSponserLogo>
            </SilverSponserLogoContainer>
          </Desktop>

          <SilverSponserLogoContainer>
            <Mobile>
            <BronzeSponserLogo>
                <a href="https://t.co/ekKJoVsf4s">
                  <img src={SM19} width="150px" height="118px"></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://witnet.io/">
                  <img src={SM6} width="150px" height="118px"></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://moralis.io/">
                  <img src={SM7} width="150px" height="118px"></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://www.degate.com/">
                  <img src={SM8} width="150px" height="118px"></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://aragon.org/">
                  <img src={SM9} width="150px" height="118px"></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://www.certora.com/">
                  <img src={SM10} width="150px" height="118px"></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://mochi.game/">
                  <img src={SM11} width="150px" height="118px"></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://www.apwine.fi/">
                  <img src={SM12} width="150px" height="118px"></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://www.crtx.app/">
                  <img src={SM15} width="150px" height="118px"></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://perp.com/">
                  <img src={SM16} width="150px" height="118px"></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://hacken.io/">
                  <img src={SM17} width="150px" height="118px"></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="https://shapeshift.com/">
                  <img src={SM18} width="150px" height="118px"></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="">
                  <img src={S21} width="150px" height="118px"></img>
                </a>
              </BronzeSponserLogo>
              <BronzeSponserLogo>
                <a href="">
                  <img src={M17} width="150px" height="118px"></img>
                </a>
              </BronzeSponserLogo>
            </Mobile>
          </SilverSponserLogoContainer>
        </BronzeSponserContainer>

        <TitleBox>
          <Title1> Partners</Title1>
        </TitleBox>

        <SilverSponserContainer>
          <GoldSponserTitle>Launch Partners</GoldSponserTitle>
          <SilverSponserLogoContainer>
            <OrganizerLogo>
              <a href="https://ethereum.org/en/foundation/">
                <img src={ETH} width="270px" height=" 200px"></img>
              </a>
            </OrganizerLogo>
            <OrganizerLogo>
              <a href="https://doingud.com/">
                <img src={DoinGud} width="270px" height=" 200px"></img>
              </a>
            </OrganizerLogo>
            <OrganizerLogo>
              <a href="https://wearefloc.com/">
                <img src={Floc} width="270px" height=" 200px"></img>
              </a>
            </OrganizerLogo>
            <OrganizerLogo>
              <a href="https://twitter.com/PolisParallela">
                <img src={Polis} width="270px" height=" 200px"></img>
              </a>
            </OrganizerLogo>
          </SilverSponserLogoContainer>
          <SilverSponserLogoContainer>
            <OrganizerLogo>
              <a href="">
                <img src={ShrineHouse} width="270px" height=" 200px"></img>
              </a>
            </OrganizerLogo>
            <OrganizerLogo>
              <a href="">
                <img src={GiantCookie} width="270px" height=" 200px"></img>
              </a>
            </OrganizerLogo>
            <OrganizerLogo>
              <a href="https://www.thedaoist.co/">
                <img src={DAOist} width="270px" height=" 200px"></img>
              </a>
            </OrganizerLogo>
            <OrganizerLogo>
              <a href="">
                <img src={CryptoPlaza} width="270px" height=" 200px"></img>
              </a>
            </OrganizerLogo>
          </SilverSponserLogoContainer>
        </SilverSponserContainer>

        <BronzeSponserContainer>
          <GoldSponserTitle>Media Partners</GoldSponserTitle>
          <GoldSponserLogoContainer>
            <GoldSponserLogo>
              <a href="https://es.beincrypto.com/">
                <img src={BeInCrypto}></img>
              </a>
            </GoldSponserLogo>
            <GoldSponserLogo>
              <a href="https://www.eclecticmethod.net/">
                <img src={Eclectic}></img>
              </a>
            </GoldSponserLogo>
            <GoldSponserLogo>
              <a href="https://defiprime.com/">
                <img src={DefiPrime}></img>
              </a>
            </GoldSponserLogo>
            <GoldSponserLogo>
              <a href="https://es.cointelegraph.com/">
                <img src={CT}></img>
              </a>
            </GoldSponserLogo>
          </GoldSponserLogoContainer>
          <GoldSponserLogoContainer>
            <GoldSponserLogo>
              <a href="https://cryptoslate.com/">
                <img src={CryptoSlate}></img>
              </a>
            </GoldSponserLogo>
            <GoldSponserLogo>
              <a href="https://banklesshq.com/">
                <img src={Bankless}></img>
              </a>
            </GoldSponserLogo>
          </GoldSponserLogoContainer>

        </BronzeSponserContainer>
      </Container>
    </>
  );
};

export default Sponsers;
