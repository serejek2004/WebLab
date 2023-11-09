import React from "react";
import { FooterStyle, DividingLine, UnderDividingLine, 
        FooterTextContent, FooterLogo, SocialIcons, SocialIconWrapper, BottomDividingLine, Conclusion } from "./footer.styled";
import { FireOutlined } from '@ant-design/icons';
import { FacebookOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { LinkedinOutlined } from "@ant-design/icons";
import { GooglePlusOutlined } from "@ant-design/icons";

const Footer = () => {
    return (
        <FooterStyle>
            <DividingLine />
            <UnderDividingLine>
                <FooterTextContent>
                    <h4>
                        These drones will kill many russians
                    </h4>
                    <p>
                        You can contact us through any of the links.
                    </p>
                </FooterTextContent>
                <div className="logotype">
                    <FooterLogo>
                        <FireOutlined style={{ color: '#242424' }} />
                    </FooterLogo>
                </div>
                <SocialIcons>

                    <SocialIconWrapper href="#">
                        <FacebookOutlined style={{color: "5890FF"}}/>
                    </SocialIconWrapper>

                    <SocialIconWrapper href="#">
                        <TwitterOutlined style={{color: "#00acee"}}/>
                    </SocialIconWrapper>
                        
                    <SocialIconWrapper href="#">
                        <LinkedinOutlined style={{color: "#0e76a8"}}/>
                    </SocialIconWrapper>
                        
                    <SocialIconWrapper href="#">
                        <GooglePlusOutlined style={{color: "#e33e2b"}}/>
                    </SocialIconWrapper>
    
                </SocialIcons>
            </UnderDividingLine>
            <BottomDividingLine/>
            <Conclusion>
                2023 IoT © Copyright all rights reserved.
            </Conclusion>
        </FooterStyle>
    );
}

export default Footer