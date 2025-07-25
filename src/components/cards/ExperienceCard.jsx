import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Top = styled.div`
  width: 100%;
  ${'' /* display: flex;
  max-width: 100%; */}
  gap: 12px;
`;
const Image = styled.img`
  height: 250px;
  width: auto;
  border-radius: 10px;
  margin-top: 4px;
  display:flex;
  justify-centent: center;
  align-item: center;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Hack_name = styled.div`
  font-size: 18px;
  font-weight: 600px;
  ${'' /* color: ${({ theme }) => theme.text_primary + 99}; */}

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Place = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 16px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text_secondary + 90};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;
const Skills = styled.div`
  width: 100%;
  display: flex;
  ${'' /* gap: 12px; */}
  ${'' /* margin-top: -10px; */}
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience.img}
        />
      }
      contentStyle={{
        // display: "flex",
        // flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        // backdropFilter: "blur(3px) saturate(106%)",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={experience.date}
    >
      <Top>
        <Image src={experience.img} />
        <Body>
          <Hack_name>🧑🏻‍💻{experience.hack_name}</Hack_name>
          <Place>@{experience.place}</Place>
          <Date>{experience.date}</Date>
          {experience?.level &&
            <Skill><strong>Level:</strong> {experience.level}</Skill>
          }
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience?.desc}</Span>}
        {experience?.skills && (
          <>

            <b>Level :</b>
          </>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
