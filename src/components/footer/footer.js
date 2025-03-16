import React from "react";
import { FooterStyle, DividingLine, UnderDividingLine, 
        FooterTextContent, FooterLogo, SocialIcons, SocialIconWrapperTW, SocialIconWrapperFB, SocialIconWrapperLI, SocialIconWrapperGP, BottomDividingLine, Conclusion } from "./footer.styled";
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
                        <a href='/'><FireOutlined/></a>
                    </FooterLogo>
                </div>
                <SocialIcons>

                    <SocialIconWrapperFB href="https://www.facebook.com">
                        <FacebookOutlined/>
                    </SocialIconWrapperFB>

                    <SocialIconWrapperTW href="https://twitter.com">
                        <TwitterOutlined/>
                    </SocialIconWrapperTW>
                        
                    <SocialIconWrapperLI href="https://www.linkedin.com/">
                        <LinkedinOutlined/>
                    </SocialIconWrapperLI>
                        
                    <SocialIconWrapperGP href="https://www.google.com">
                        <GooglePlusOutlined/>
                    </SocialIconWrapperGP>
    
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