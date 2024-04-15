import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "@ui/wrapper";
import Anchor from "@ui/anchor";
import Image from "@ui/image";
import ImageTeam from "@data/images/team/team-60x60.jpg";
import Button from "@ui/button";
import { HeadingType, TextType, ButtonType } from "@utils/types";
import {
  ConatactWrapper,
  ContactInfoBox,
  StyledHeading,
  StyledText,
  StyledInfoTitle,
  StyledBG,
} from "./style";

const JoinUsArea = ({ data }) => {
  return (
    <ConatactWrapper>
      <StyledBG>
        <StaticImage
          src='../../../assets/images/bg/contact-bg.jpg'
          alt='Contact BG'
        />
      </StyledBG>
      <Container>
        <Row>
          <Col lg={8}>
            {data?.headings?.[0] && (
              <StyledHeading
                as={data.headings[0].level}
                dangerouslySetInnerHTML={{
                  __html: data.headings[0].content,
                }}
              />
            )}
            {data?.texts?.[0] && (
              <StyledText
                dangerouslySetInnerHTML={{
                  __html: data.texts[0].content,
                }}
              />
            )}
            <ContactInfoBox>
              {/* <i className="icon fal fa-phone"></i> */}
              {data?.headings?.[1] && (
                <StyledInfoTitle as={data.headings[1]?.level}>
                  {data.headings[1].content}
                </StyledInfoTitle>
              )}

              {data?.headings?.[2] && (
                <h2>
                  <Anchor
                    path='/'
                    color='#002fa6'
                    hover={{ layout: 2, color: "#002fa6" }}
                  >
                    {data.headings[2].content}
                  </Anchor>
                </h2>
              )}
              {/* {data?.buttons?.map(({ id, content, path, ...rest }) => (
                <Button
                  key={id}
                  path={path}
                  mt='20px'
                  minWidth='230px'
                  {...rest}
                >
                  {content}
                </Button>
              ))} */}
            </ContactInfoBox>
          </Col>
          <Col lg={4}>
            <Image className="team-image" src={ImageTeam} alt="Team" />
          </Col>
        </Row>
      </Container>
    </ConatactWrapper>
  );
};

JoinUsArea.propTypes = {
  data: PropTypes.shape({
    headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
    texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
    buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
  }),
};

export default JoinUsArea;
